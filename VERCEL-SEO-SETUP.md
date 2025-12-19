# Vercel SEO Setup Guide for amara.heaven-hotels.com

## Changes Made to Code

✅ **Updated site-config.ts** - Domain changed to `https://amara.heaven-hotels.com`
✅ **Updated sitemap.ts** - Now includes all blog posts dynamically
✅ **Robots.txt** - Already configured correctly

## Required Vercel Configuration Steps

### 1. Set Environment Variable in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new environment variable:
   - **Name**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: `https://amara.heaven-hotels.com`
   - **Environment**: Production, Preview, Development (select all)
4. Click **Save**
5. **Redeploy** your project (this is important!)

### 2. Verify Custom Domain Configuration

1. Go to **Settings** → **Domains**
2. Ensure `amara.heaven-hotels.com` is listed and shows "Valid Configuration"
3. If not configured, add it:
   - Click **Add Domain**
   - Enter `amara.heaven-hotels.com`
   - Follow DNS configuration instructions

### 3. Enable HTTPS (Automatic on Vercel)

Vercel automatically provides SSL certificates. Ensure your domain shows the padlock icon.

### 4. Submit Sitemap to Search Engines

#### Google Search Console:
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://amara.heaven-hotels.com`
3. Verify ownership (Vercel provides verification methods)
4. Go to **Sitemaps** section
5. Submit: `https://amara.heaven-hotels.com/sitemap.xml`

#### Bing Webmaster Tools:
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add site: `https://amara.heaven-hotels.com`
3. Verify ownership
4. Submit sitemap: `https://amara.heaven-hotels.com/sitemap.xml`

## Additional SEO Recommendations

### 5. Performance Optimization (Already Configured)
- ✅ Static export enabled (`output: 'export'`)
- ✅ Images unoptimized (works for static sites)
- ✅ All pages pre-rendered

### 6. Mobile Optimization
- ✅ Responsive design already implemented
- Test mobile-friendliness: [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### 7. Page Speed
- Test your site: [PageSpeed Insights](https://pagespeed.web.dev/)
- Vercel's CDN automatically optimizes delivery

### 8. Local Business SEO (Already Configured)
- ✅ Structured data (JSON-LD) for Hotel schema
- ✅ Geo-location metadata
- ✅ Address and contact information

### 9. Content Optimization Checklist

- ✅ Unique meta descriptions on all pages
- ✅ H1 tags on all pages
- ✅ Alt text on images (verify all images have alt attributes)
- ✅ Internal linking structure
- ✅ Blog posts with FAQs (great for SEO)

### 10. Build and Deploy

After making changes, ensure you:
1. Commit all changes to Git
2. Push to your repository
3. Vercel will auto-deploy
4. OR manually trigger a new deployment in Vercel dashboard

## Verify After Deployment

1. Check sitemap: `https://amara.heaven-hotels.com/sitemap.xml`
2. Check robots.txt: `https://amara.heaven-hotels.com/robots.txt`
3. Verify canonical URLs are correct
4. Check meta tags in page source
5. Validate structured data: [Google Rich Results Test](https://search.google.com/test/rich-results)

## Important Notes

- **Rebuild Required**: After setting environment variable, trigger a new build
- **DNS Propagation**: Domain changes may take 24-48 hours to propagate
- **Indexing Time**: Google typically indexes new sites within 1-2 weeks
- **Continuous Improvement**: SEO is ongoing - regularly add new blog content, update meta descriptions, and monitor Search Console

## Next Steps for Better Rankings

1. **Create More Content**: Regularly add blog posts about hotel services, local attractions, events
2. **Get Backlinks**: Reach out to travel websites, local directories, review sites
3. **Google Business Profile**: Claim and optimize your Google Business Profile
4. **Social Media**: Share blog posts and updates on social platforms
5. **Monitor Analytics**: Set up Google Analytics to track performance
