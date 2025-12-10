// Email service for booking confirmations
// Supports SendGrid and nodemailer fallback

interface BookingDetails {
  booking_reference: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  check_in: string;
  check_out: string;
  number_of_rooms: number;
  adults: number;
  children_under_5: number;
  children_5_12: number;
  meal_plan: string;
  base_price: number;
  discount_amount: number;
  tax_amount: number;
  total_amount: number;
  room_name?: string;
  special_requests?: string;
}

export async function sendBookingConfirmationEmail(booking: BookingDetails) {
  const emailContent = generateEmailTemplate(booking);

  // Try SendGrid first
  if (process.env.SENDGRID_API_KEY) {
    try {
      const sgMail = await import('@sendgrid/mail');
      sgMail.default.setApiKey(process.env.SENDGRID_API_KEY);

      await sgMail.default.send({
        to: booking.email,
        from: process.env.SENDGRID_FROM_EMAIL || 'noreply@amarahotel.com',
        subject: `Booking Confirmation - ${booking.booking_reference}`,
        html: emailContent,
      });

      console.log('Confirmation email sent via SendGrid');
      return;
    } catch (error) {
      console.error('SendGrid error:', error);
      // Fall through to nodemailer
    }
  }

  // Fallback to nodemailer
  if (process.env.SMTP_HOST) {
    try {
      const nodemailer = await import('nodemailer');

      const transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || 'noreply@amarahotel.com',
        to: booking.email,
        subject: `Booking Confirmation - ${booking.booking_reference}`,
        html: emailContent,
      });

      console.log('Confirmation email sent via nodemailer');
      return;
    } catch (error) {
      console.error('Nodemailer error:', error);
      throw error;
    }
  }

  // If no email service configured, just log
  console.warn('No email service configured. Email would have been sent to:', booking.email);
}

function generateEmailTemplate(booking: BookingDetails): string {
  const checkIn = new Date(booking.check_in).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const checkOut = new Date(booking.check_out).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const nights = Math.ceil(
    (new Date(booking.check_out).getTime() - new Date(booking.check_in).getTime()) /
      (1000 * 60 * 60 * 24)
  );

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #c9a961; color: white; padding: 20px; text-align: center; }
    .content { background: #f5f1ed; padding: 30px; }
    .booking-details { background: white; padding: 20px; margin: 20px 0; border-radius: 5px; }
    .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e0d9d1; }
    .detail-row:last-child { border-bottom: none; }
    .total { font-size: 18px; font-weight: bold; color: #c9a961; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>AMARA HOTEL</h1>
      <p>Booking Confirmation</p>
    </div>
    <div class="content">
      <p>Dear ${booking.first_name} ${booking.last_name},</p>
      <p>Thank you for choosing Amara Hotel. Your booking has been confirmed!</p>
      
      <div class="booking-details">
        <h2>Booking Details</h2>
        <div class="detail-row">
          <span><strong>Booking Reference:</strong></span>
          <span>${booking.booking_reference}</span>
        </div>
        <div class="detail-row">
          <span><strong>Room Type:</strong></span>
          <span>${booking.room_name || 'Deluxe Room'}</span>
        </div>
        <div class="detail-row">
          <span><strong>Check-in:</strong></span>
          <span>${checkIn}</span>
        </div>
        <div class="detail-row">
          <span><strong>Check-out:</strong></span>
          <span>${checkOut}</span>
        </div>
        <div class="detail-row">
          <span><strong>Duration:</strong></span>
          <span>${nights} ${nights === 1 ? 'night' : 'nights'}</span>
        </div>
        <div class="detail-row">
          <span><strong>Number of Rooms:</strong></span>
          <span>${booking.number_of_rooms}</span>
        </div>
        <div class="detail-row">
          <span><strong>Guests:</strong></span>
          <span>${booking.adults} Adult${booking.adults > 1 ? 's' : ''}${
    booking.children_under_5 > 0 || booking.children_5_12 > 0
      ? `, ${booking.children_under_5 + booking.children_5_12} Child${
          booking.children_under_5 + booking.children_5_12 > 1 ? 'ren' : ''
        }`
      : ''
  }</span>
        </div>
        <div class="detail-row">
          <span><strong>Meal Plan:</strong></span>
          <span>${booking.meal_plan}</span>
        </div>
        ${booking.special_requests ? `
        <div class="detail-row">
          <span><strong>Special Requests:</strong></span>
          <span>${booking.special_requests}</span>
        </div>
        ` : ''}
      </div>

      <div class="booking-details">
        <h2>Payment Summary</h2>
        <div class="detail-row">
          <span>Room Charges:</span>
          <span>₹${booking.base_price.toLocaleString('en-IN')}</span>
        </div>
        ${booking.discount_amount > 0 ? `
        <div class="detail-row">
          <span>Discount:</span>
          <span>-₹${booking.discount_amount.toLocaleString('en-IN')}</span>
        </div>
        ` : ''}
        <div class="detail-row">
          <span>Taxes:</span>
          <span>₹${booking.tax_amount.toLocaleString('en-IN')}</span>
        </div>
        <div class="detail-row total">
          <span>Total Amount:</span>
          <span>₹${booking.total_amount.toLocaleString('en-IN')}</span>
        </div>
      </div>

      <p><strong>Contact Information:</strong></p>
      <p>
        Amara Hotel<br>
        C-30, Hansraj Gupta Rd, Greater Kailash-1, C Block, G K, New Delhi, Delhi 110048<br>
        Phone: +91 9268140219, +91 9971124279<br>
        Email: reservation.amara@heaven-hotels.com
      </p>

      <p>We look forward to welcoming you!</p>
      <p>Best regards,<br>The Amara Hotel Team</p>
    </div>
    <div class="footer">
      <p>This is an automated confirmation email. Please do not reply.</p>
      <p>To manage your booking, visit our website and use your booking reference: ${booking.booking_reference}</p>
    </div>
  </div>
</body>
</html>
  `;
}

