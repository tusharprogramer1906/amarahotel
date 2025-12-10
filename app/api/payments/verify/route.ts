import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { updateBookingPayment, incrementPromoCodeUsage, getBookingByReference } from '@/lib/db/queries';
import { sendBookingConfirmationEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingId } = body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !bookingId) {
      return NextResponse.json(
        { error: 'Missing payment verification data' },
        { status: 400 }
      );
    }

    // Verify signature
    const text = `${razorpay_order_id}|${razorpay_payment_id}`;
    const generatedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(text)
      .digest('hex');

    if (generatedSignature !== razorpay_signature) {
      return NextResponse.json(
        { error: 'Invalid payment signature', verified: false },
        { status: 400 }
      );
    }

    // Update booking
    const booking = await updateBookingPayment(bookingId, {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    // Increment promo code usage if applicable
    if (booking.promo_code_id) {
      await incrementPromoCodeUsage(booking.promo_code_id);
    }

    // Send confirmation email
    try {
      const bookingDetails = await getBookingByReference(booking.booking_reference);
      await sendBookingConfirmationEmail(bookingDetails);
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json({
      verified: true,
      booking: booking.booking_reference,
      message: 'Payment verified and booking confirmed',
    });
  } catch (error: any) {
    console.error('Payment verification error:', error);
    return NextResponse.json(
      { error: 'Failed to verify payment', message: error.message },
      { status: 500 }
    );
  }
}

