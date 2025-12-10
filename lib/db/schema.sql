-- Database Schema for Amara Hotel Booking System
-- Run this in your Supabase SQL Editor or Postgres database

-- Rooms table
CREATE TABLE IF NOT EXISTS rooms (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  base_price DECIMAL(10, 2) NOT NULL,
  max_guests INTEGER NOT NULL DEFAULT 2,
  total_inventory INTEGER NOT NULL DEFAULT 1,
  image_url VARCHAR(500),
  amenities JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Room availability (tracks daily availability)
CREATE TABLE IF NOT EXISTS room_availability (
  id SERIAL PRIMARY KEY,
  room_id INTEGER NOT NULL REFERENCES rooms(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  available_count INTEGER NOT NULL DEFAULT 0,
  price_override DECIMAL(10, 2), -- Optional price override for specific dates
  UNIQUE(room_id, date)
);

-- Promo codes
CREATE TABLE IF NOT EXISTS promo_codes (
  id SERIAL PRIMARY KEY,
  code VARCHAR(50) UNIQUE NOT NULL,
  discount_type VARCHAR(20) NOT NULL CHECK (discount_type IN ('percentage', 'fixed')),
  discount_value DECIMAL(10, 2) NOT NULL,
  min_amount DECIMAL(10, 2) DEFAULT 0,
  max_discount DECIMAL(10, 2), -- For percentage discounts
  valid_from DATE NOT NULL,
  valid_until DATE NOT NULL,
  usage_limit INTEGER, -- NULL means unlimited
  used_count INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Bookings
CREATE TABLE IF NOT EXISTS bookings (
  id SERIAL PRIMARY KEY,
  booking_reference VARCHAR(20) UNIQUE NOT NULL,
  room_id INTEGER NOT NULL REFERENCES rooms(id),
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  number_of_rooms INTEGER NOT NULL DEFAULT 1,
  adults INTEGER NOT NULL DEFAULT 1,
  children_under_5 INTEGER DEFAULT 0,
  children_5_12 INTEGER DEFAULT 0,
  meal_plan VARCHAR(50) DEFAULT 'Room Only',
  
  -- Guest information
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  city VARCHAR(255),
  country VARCHAR(255) DEFAULT 'India',
  special_requests TEXT,
  
  -- Pricing
  base_price DECIMAL(10, 2) NOT NULL,
  discount_amount DECIMAL(10, 2) DEFAULT 0,
  tax_amount DECIMAL(10, 2) DEFAULT 0,
  total_amount DECIMAL(10, 2) NOT NULL,
  promo_code_id INTEGER REFERENCES promo_codes(id),
  promo_code VARCHAR(50),
  
  -- Payment
  payment_status VARCHAR(20) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded')),
  razorpay_order_id VARCHAR(255),
  razorpay_payment_id VARCHAR(255),
  razorpay_signature VARCHAR(255),
  
  -- Status
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  cancellation_reason TEXT,
  cancelled_at TIMESTAMP,
  
  -- Metadata
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  confirmed_at TIMESTAMP
);

-- Booking rooms (for multi-room bookings)
CREATE TABLE IF NOT EXISTS booking_rooms (
  id SERIAL PRIMARY KEY,
  booking_id INTEGER NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
  room_id INTEGER NOT NULL REFERENCES rooms(id),
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  adults INTEGER NOT NULL,
  children_under_5 INTEGER DEFAULT 0,
  children_5_12 INTEGER DEFAULT 0,
  price DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_room_availability_date ON room_availability(date);
CREATE INDEX IF NOT EXISTS idx_room_availability_room_date ON room_availability(room_id, date);
CREATE INDEX IF NOT EXISTS idx_bookings_check_in ON bookings(check_in);
CREATE INDEX IF NOT EXISTS idx_bookings_check_out ON bookings(check_out);
CREATE INDEX IF NOT EXISTS idx_bookings_email ON bookings(email);
CREATE INDEX IF NOT EXISTS idx_bookings_reference ON bookings(booking_reference);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_promo_codes_code ON promo_codes(code);

-- Function to generate booking reference
CREATE OR REPLACE FUNCTION generate_booking_reference() RETURNS TEXT AS $$
DECLARE
  ref TEXT;
BEGIN
  ref := 'AMR' || TO_CHAR(NOW(), 'YYYYMMDD') || LPAD(NEXTVAL('bookings_id_seq')::TEXT, 6, '0');
  RETURN ref;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_rooms_updated_at BEFORE UPDATE ON rooms
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample rooms
INSERT INTO rooms (id, name, slug, description, base_price, max_guests, total_inventory, image_url, amenities) VALUES
(1, 'Deluxe Room', 'deluxe-room', 'Spacious and elegantly appointed rooms with modern amenities', 3999.00, 2, 5, '/bedroom.JPG', '["1 Bed", "2 People", "Breakfast", "Wi-Fi"]'::jsonb),
(2, 'Super Deluxe Room', 'super-deluxe-room', 'Enhanced deluxe rooms with additional living space and premium views', 4999.00, 2, 3, '/superdeluxe.JPG', '["1 Bed", "2 People", "Breakfast", "Wi-Fi"]'::jsonb)
ON CONFLICT DO NOTHING;

-- Insert sample promo code
INSERT INTO promo_codes (code, discount_type, discount_value, min_amount, valid_from, valid_until, usage_limit, is_active) VALUES
('WELCOME10', 'percentage', 10, 5000, CURRENT_DATE, CURRENT_DATE + INTERVAL '1 year', 100, true),
('SAVE500', 'fixed', 500, 3000, CURRENT_DATE, CURRENT_DATE + INTERVAL '6 months', 50, true)
ON CONFLICT DO NOTHING;

