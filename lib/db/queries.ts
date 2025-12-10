// Database query helpers
import { getSupabaseClient, getPostgresClient } from './client';

export interface Room {
  id: number;
  name: string;
  slug: string;
  description: string;
  base_price: number;
  max_guests: number;
  total_inventory: number;
  image_url: string;
  amenities: string[];
}

export interface AvailabilityCheck {
  roomId: number;
  date: string;
  availableCount: number;
  price: number;
}

// Check room availability for date range
export async function checkAvailability(
  roomId: number,
  checkIn: string,
  checkOut: string
): Promise<number> {
  try {
    const client = await getSupabaseClient();
    
    if (client && typeof client.from === 'function') {
      // Supabase
      const { data: room, error: roomError } = await client
        .from('rooms')
        .select('total_inventory')
        .eq('id', roomId)
        .single();

      if (roomError || !room) return 0;

      const { data: bookings, error: bookingsError } = await client
        .from('bookings')
        .select('number_of_rooms')
        .eq('room_id', roomId)
        .eq('status', 'confirmed')
        .lte('check_in', checkOut)
        .gte('check_out', checkIn);

      if (bookingsError) {
        console.error('Error fetching bookings:', bookingsError);
        return 0;
      }

      const bookedRooms = bookings?.reduce((sum: number, b: any) => sum + (b.number_of_rooms || 0), 0) || 0;
      return Math.max(0, room.total_inventory - bookedRooms);
    }
  } catch (error) {
    console.error('Supabase error, trying Postgres:', error);
  }

  try {
    const client = await getPostgresClient();
    // Postgres
    const result = await client.query(
      `SELECT 
        r.total_inventory,
        COALESCE(SUM(b.number_of_rooms), 0) as booked_rooms
      FROM rooms r
      LEFT JOIN bookings b ON b.room_id = r.id 
        AND b.status = 'confirmed'
        AND (b.check_in <= $2 AND b.check_out >= $1)
      WHERE r.id = $3
      GROUP BY r.total_inventory`,
      [checkIn, checkOut, roomId]
    );

    if (result.rows.length === 0) return 0;
    const { total_inventory, booked_rooms } = result.rows[0];
    return Math.max(0, total_inventory - parseInt(booked_rooms));
  } catch (error) {
    console.error('Postgres error:', error);
    return 0;
  }
}

// Get all rooms
export async function getRooms(): Promise<Room[]> {
  const client = await getSupabaseClient().catch(() => getPostgresClient());
  
  if (client && typeof client.from === 'function') {
    const { data } = await client.from('rooms').select('*').order('id');
    return data || [];
  } else {
    const result = await client.query('SELECT * FROM rooms ORDER BY id');
    return result.rows;
  }
}

// Get room by ID
export async function getRoomById(id: number): Promise<Room | null> {
  const client = await getSupabaseClient().catch(() => getPostgresClient());
  
  if (client && typeof client.from === 'function') {
    const { data } = await client.from('rooms').select('*').eq('id', id).single();
    return data;
  } else {
    const result = await client.query('SELECT * FROM rooms WHERE id = $1', [id]);
    return result.rows[0] || null;
  }
}

// Validate promo code
export async function validatePromoCode(
  code: string,
  amount: number
): Promise<{ valid: boolean; discount: number; error?: string }> {
  const client = await getSupabaseClient().catch(() => getPostgresClient());
  
  if (client && typeof client.from === 'function') {
    const { data: promo } = await client
      .from('promo_codes')
      .select('*')
      .eq('code', code.toUpperCase())
      .eq('is_active', true)
      .single();

    if (!promo) {
      return { valid: false, discount: 0, error: 'Invalid promo code' };
    }

    const now = new Date();
    const validFrom = new Date(promo.valid_from);
    const validUntil = new Date(promo.valid_until);

    if (now < validFrom || now > validUntil) {
      return { valid: false, discount: 0, error: 'Promo code has expired' };
    }

    if (amount < promo.min_amount) {
      return {
        valid: false,
        discount: 0,
        error: `Minimum order amount is ₹${promo.min_amount}`,
      };
    }

    if (promo.usage_limit && promo.used_count >= promo.usage_limit) {
      return { valid: false, discount: 0, error: 'Promo code usage limit reached' };
    }

    let discount = 0;
    if (promo.discount_type === 'percentage') {
      discount = (amount * promo.discount_value) / 100;
      if (promo.max_discount) {
        discount = Math.min(discount, promo.max_discount);
      }
    } else {
      discount = promo.discount_value;
    }

    return { valid: true, discount: Math.round(discount * 100) / 100 };
  } else {
    const result = await client.query(
      `SELECT * FROM promo_codes 
       WHERE code = $1 AND is_active = true`,
      [code.toUpperCase()]
    );

    if (result.rows.length === 0) {
      return { valid: false, discount: 0, error: 'Invalid promo code' };
    }

    const promo = result.rows[0];
    const now = new Date();
    const validFrom = new Date(promo.valid_from);
    const validUntil = new Date(promo.valid_until);

    if (now < validFrom || now > validUntil) {
      return { valid: false, discount: 0, error: 'Promo code has expired' };
    }

    if (amount < promo.min_amount) {
      return {
        valid: false,
        discount: 0,
        error: `Minimum order amount is ₹${promo.min_amount}`,
      };
    }

    if (promo.usage_limit && promo.used_count >= promo.usage_limit) {
      return { valid: false, discount: 0, error: 'Promo code usage limit reached' };
    }

    let discount = 0;
    if (promo.discount_type === 'percentage') {
      discount = (amount * promo.discount_value) / 100;
      if (promo.max_discount) {
        discount = Math.min(discount, promo.max_discount);
      }
    } else {
      discount = promo.discount_value;
    }

    return { valid: true, discount: Math.round(discount * 100) / 100 };
  }
}

// Create booking
export async function createBooking(bookingData: any) {
  const client = await getSupabaseClient().catch(() => getPostgresClient());
  
  // Generate booking reference
  const bookingRef = `AMR${Date.now().toString().slice(-10)}${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;

  if (client && typeof client.from === 'function') {
    const { data, error } = await client
      .from('bookings')
      .insert({
        ...bookingData,
        booking_reference: bookingRef,
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  } else {
    const result = await client.query(
      `INSERT INTO bookings (
        booking_reference, room_id, check_in, check_out, number_of_rooms,
        adults, children_under_5, children_5_12, meal_plan,
        first_name, last_name, email, phone, city, country, special_requests,
        base_price, discount_amount, tax_amount, total_amount,
        promo_code_id, promo_code, payment_status, status
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24)
      RETURNING *`,
      [
        bookingRef,
        bookingData.room_id,
        bookingData.check_in,
        bookingData.check_out,
        bookingData.number_of_rooms,
        bookingData.adults,
        bookingData.children_under_5 || 0,
        bookingData.children_5_12 || 0,
        bookingData.meal_plan || 'Room Only',
        bookingData.first_name,
        bookingData.last_name,
        bookingData.email,
        bookingData.phone,
        bookingData.city,
        bookingData.country || 'India',
        bookingData.special_requests,
        bookingData.base_price,
        bookingData.discount_amount || 0,
        bookingData.tax_amount || 0,
        bookingData.total_amount,
        bookingData.promo_code_id || null,
        bookingData.promo_code || null,
        'pending',
        'pending',
      ]
    );

    return result.rows[0];
  }
}

// Get booking by reference
export async function getBookingByReference(ref: string) {
  const client = await getSupabaseClient().catch(() => getPostgresClient());
  
  if (client && typeof client.from === 'function') {
    const { data } = await client
      .from('bookings')
      .select('*, rooms(*)')
      .eq('booking_reference', ref)
      .single();
    return data;
  } else {
    const result = await client.query(
      `SELECT b.*, r.name as room_name, r.slug as room_slug, r.image_url
       FROM bookings b
       JOIN rooms r ON r.id = b.room_id
       WHERE b.booking_reference = $1`,
      [ref]
    );
    return result.rows[0] || null;
  }
}

// Update booking payment status
export async function updateBookingPayment(
  bookingId: number,
  paymentData: {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
  }
) {
  const client = await getSupabaseClient().catch(() => getPostgresClient());
  
  if (client && typeof client.from === 'function') {
    const { data, error } = await client
      .from('bookings')
      .update({
        ...paymentData,
        payment_status: 'paid',
        status: 'confirmed',
        confirmed_at: new Date().toISOString(),
      })
      .eq('id', bookingId)
      .select()
      .single();

    if (error) throw error;
    return data;
  } else {
    const result = await client.query(
      `UPDATE bookings 
       SET razorpay_order_id = $1, razorpay_payment_id = $2, razorpay_signature = $3,
           payment_status = 'paid', status = 'confirmed', confirmed_at = NOW()
       WHERE id = $4
       RETURNING *`,
      [paymentData.razorpay_order_id, paymentData.razorpay_payment_id, paymentData.razorpay_signature, bookingId]
    );
    return result.rows[0];
  }
}

// Increment promo code usage
export async function incrementPromoCodeUsage(codeId: number) {
  const client = await getSupabaseClient().catch(() => getPostgresClient());
  
  if (client && typeof client.from === 'function') {
    await client
      .from('promo_codes')
      .update({ used_count: client.rpc('increment', { x: 1 }) })
      .eq('id', codeId);
  } else {
    await client.query(
      'UPDATE promo_codes SET used_count = used_count + 1 WHERE id = $1',
      [codeId]
    );
  }
}

