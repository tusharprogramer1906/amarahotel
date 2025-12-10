import { NextRequest, NextResponse } from 'next/server';
import { checkAvailability, getRooms } from '@/lib/db/queries';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const checkIn = searchParams.get('checkIn');
    const checkOut = searchParams.get('checkOut');
    const roomId = searchParams.get('roomId');

    // If no dates provided, just return all rooms
    if (!checkIn || !checkOut) {
      const rooms = await getRooms();
      return NextResponse.json({ rooms });
    }

    // Validate dates
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkInDate < today) {
      return NextResponse.json(
        { error: 'Check-in date cannot be in the past' },
        { status: 400 }
      );
    }

    if (checkOutDate <= checkInDate) {
      return NextResponse.json(
        { error: 'Check-out date must be after check-in date' },
        { status: 400 }
      );
    }

    if (roomId) {
      // Check availability for specific room
      const available = await checkAvailability(
        parseInt(roomId),
        checkIn,
        checkOut
      );
      return NextResponse.json({ available, roomId: parseInt(roomId) });
    } else {
      // Check availability for all rooms
      const rooms = await getRooms();
      const availability = await Promise.all(
        rooms.map(async (room) => {
          const available = await checkAvailability(room.id, checkIn, checkOut);
          return {
            roomId: room.id,
            available,
            name: room.name,
            slug: room.slug,
            description: room.description,
            base_price: room.base_price,
            max_guests: room.max_guests,
            total_inventory: room.total_inventory,
            image_url: room.image_url,
            amenities: room.amenities,
          };
        })
      );

      return NextResponse.json({ rooms: availability });
    }
  } catch (error: any) {
    console.error('Availability check error:', error);
    return NextResponse.json(
      { error: 'Failed to check availability', message: error.message },
      { status: 500 }
    );
  }
}
