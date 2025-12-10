import { NextRequest, NextResponse } from 'next/server';
import { getBookingByReference } from '@/lib/db/queries';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const reference = searchParams.get('reference');
    const email = searchParams.get('email');

    if (!reference && !email) {
      return NextResponse.json(
        { error: 'Booking reference or email is required' },
        { status: 400 }
      );
    }

    if (reference) {
      const booking = await getBookingByReference(reference);
      if (!booking) {
        return NextResponse.json(
          { error: 'Booking not found' },
          { status: 404 }
        );
      }
      return NextResponse.json({ booking });
    }

    // If email is provided, search by email (you may want to add this to queries.ts)
    // For now, return error
    return NextResponse.json(
      { error: 'Email lookup not implemented. Please use booking reference.' },
      { status: 400 }
    );
  } catch (error: any) {
    console.error('Booking lookup error:', error);
    return NextResponse.json(
      { error: 'Failed to lookup booking', message: error.message },
      { status: 500 }
    );
  }
}

