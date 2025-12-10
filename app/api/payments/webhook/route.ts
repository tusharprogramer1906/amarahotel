import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { updateBookingPayment, incrementPromoCodeUsage, getBookingByReference } from '@/lib/db/queries';
import { sendBookingConfirmationEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-razorpay-signature');

    if (!signature) {
      return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
    }

    // Verify webhook signature
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET!;
    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(body)
      .digest('hex');

    if (expectedSignature !== signature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    const event = JSON.parse(body);
    const { event: eventType, payload } = event;

    // Handle payment success
    if (eventType === 'payment.captured') {
      const payment = payload.payment.entity;
      const orderId = payment.order_id;
      const paymentId = payment.id;

      // Extract booking ID from order notes
      const order = payload.order?.entity;
      const bookingId = order?.notes?.bookingId;

      if (!bookingId) {
        console.error('Booking ID not found in order notes');
        return NextResponse.json({ received: true });
      }

      // Update booking
      const booking = await updateBookingPayment(parseInt(bookingId), {
        razorpay_order_id: orderId,
        razorpay_payment_id: paymentId,
        razorpay_signature: signature,
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
      }
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed', message: error.message },
      { status: 500 }
    );
  }
}

