/**
 * Site Configuration
 * 
 * Configure your site URL here or via environment variable NEXT_PUBLIC_SITE_URL
 * 
 * Priority:
 * 1. NEXT_PUBLIC_SITE_URL environment variable (best for Vercel)
 * 2. Hardcoded default below
 */

export const siteConfig = {
  // This will use the environment variable if set, otherwise fallback to the default
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://amarahotel.vercel.app",
  name: "Amara Hotel Greater Kailash",
  description: "Luxury Boutique Hotel in Greater Kailash, New Delhi",
  defaultOgImage: "/bedroom.JPG",
}
