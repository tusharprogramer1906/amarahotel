import { NextRequest, NextResponse } from 'next/server';
import { createBooking, checkAvailability } from '@/lib/db/queries';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      roomId,
      checkIn,
      checkOut,
      numberOfRooms,
      adults,
      childrenUnder5,
      children5to12,
      mealPlan,
      guestInfo,
      basePrice,
      discountAmount,
      taxAmount,
      totalAmount,
      promoCodeId,
      promoCode,
    } = body;

    // Validate required fields
    if (!roomId || !checkIn || !checkOut || !guestInfo || !totalAmount) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check availability before creating booking
    const available = await checkAvailability(roomId, checkIn, checkOut);
    if (available < (numberOfRooms || 1)) {
      return NextResponse.json(
        { error: 'Not enough rooms available for selected dates' },
        { status: 400 }
      );
    }

    // Create booking
    const booking = await createBooking({
      room_id: roomId,
      check_in: checkIn,
      check_out: checkOut,
      number_of_rooms: numberOfRooms || 1,
      adults: adults || 1,
      children_under_5: childrenUnder5 || 0,
      children_5_12: children5to12 || 0,
      meal_plan: mealPlan || 'Room Only',
      first_name: guestInfo.firstName,
      last_name: guestInfo.lastName,
      email: guestInfo.email,
      phone: guestInfo.phone,
      city: guestInfo.city,
      country: guestInfo.country || 'India',
      special_requests: guestInfo.specialRequests,
      base_price: basePrice,
      discount_amount: discountAmount || 0,
      tax_amount: taxAmount || 0,
      total_amount: totalAmount,
      promo_code_id: promoCodeId || null,
      promo_code: promoCode || null,
    });

    return NextResponse.json({ booking }, { status: 201 });
  } catch (error: any) {
    console.error('Booking creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create booking', message: error.message },
      { status: 500 }
    );
  }
}

