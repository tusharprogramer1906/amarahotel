# Booking System Setup Guide

This guide will help you set up the complete booking system with Razorpay payment integration, database, and email services.

## Prerequisites

- Node.js 18+ installed
- A Supabase account (recommended) OR PostgreSQL database
- Razorpay account
- SendGrid account (optional, for emails) OR SMTP server

## Step 1: Install Dependencies

Run the following command to install all required packages:

```bash
npm install razorpay @supabase/supabase-js pg @sendgrid/mail nodemailer react-day-picker
npm install -D @types/pg
```

## Step 2: Database Setup

### Option A: Using Supabase (Recommended)

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to SQL Editor and run the SQL from `lib/db/schema.sql`
3. Copy your project URL and anon key from Settings > API

### Option B: Using PostgreSQL

1. Set up a PostgreSQL database (local or cloud)
2. Run the SQL from `lib/db/schema.sql` in your database
3. Note your database connection string

## Step 3: Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database (Choose one option)

# Option A: Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
# OR use anon key for client-side (less secure)
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Option B: PostgreSQL
DATABASE_URL=postgresql://user:password@host:port/database

# Razorpay
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_WEBHOOK_SECRET=your_razorpay_webhook_secret

# Email (Choose one option)

# Option A: SendGrid
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM_EMAIL=noreply@amarahotel.com

# Option B: SMTP (Nodemailer)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM=noreply@amarahotel.com
```

## Step 4: Razorpay Setup

1. Sign up at [razorpay.com](https://razorpay.com)
2. Go to Settings > API Keys
3. Generate test keys for development
4. Copy Key ID and Key Secret to `.env.local`
5. For production, use live keys
6. Set up webhook:
   - Go to Settings > Webhooks
   - Add webhook URL: `https://yourdomain.com/api/payments/webhook`
   - Select events: `payment.captured`
   - Copy webhook secret to `.env.local`

## Step 5: Email Setup  

### Option A: SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create an API key with Mail Send permissions
3. Verify your sender email
4. Add credentials to `.env.local`


## Step 6: Run Database Migrations

If using Supabase, the schema is already applied. For PostgreSQL, run:

```bash
psql -d your_database -f lib/db/schema.sql
```

## Step 7: Test the System

1. Start the development server:
```bash
npm run dev
```

2. Navigate to `http://localhost:3000/booking`
3. Test the booking flow:
   - Select dates
   - Choose a room
   - Fill guest information
   - Apply a promo code (try "WELCOME10")
   - Complete payment with Razorpay test cards

## Step 8: Production Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Import project in Vercel
3. Add all environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production

Make sure to set all environment variables in your hosting platform:
- Vercel: Project Settings > Environment Variables
- Update Razorpay webhook URL to production domain
- Use production Razorpay keys

## API Routes

The booking system includes the following API routes:

- `GET /api/availability` - Check room availability
- `POST /api/promo-code` - Validate promo codes
- `POST /api/bookings/create` - Create a booking
- `POST /api/payments/create-order` - Create Razorpay order
- `POST /api/payments/verify` - Verify payment
- `POST /api/payments/webhook` - Razorpay webhook handler
- `GET /api/bookings/lookup` - Look up booking by reference or email

## Database Schema

Key tables:
- `rooms` - Room types and pricing
- `room_availability` - Daily availability tracking
- `bookings` - Booking records
- `promo_codes` - Promotional codes

## Testing Promo Codes

Sample promo codes are included in the schema:
- `WELCOME10` - 10% discount (min ₹5000)
- `SAVE500` - ₹500 off (min ₹3000)

## Troubleshooting

### Database Connection Issues
- Verify environment variables are set correctly
- Check database credentials and network access
- For Supabase, ensure service role key is used (not anon key)

### Razorpay Payment Issues
- Verify Razorpay keys are correct
- Check webhook URL is accessible
- Test with Razorpay test mode first

### Email Not Sending
- Check SendGrid API key or SMTP credentials
- Verify sender email is verified (SendGrid)
- Check spam folder for test emails

## Support

For issues or questions, check:
- Razorpay documentation: https://razorpay.com/docs
- Supabase documentation: https://supabase.com/docs
- SendGrid documentation: https://docs.sendgrid.com

