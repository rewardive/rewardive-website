# Rewardive Deployment Guide

Quick reference for deploying your Rewardive website.

## Pre-Deployment Checklist

- [ ] Update all domain references from `rewardive.app` to your actual domain
- [ ] Add your actual logo/favicon to `assets/images/favicon.png`
- [ ] Test all pages locally
- [ ] Verify all links work correctly
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Add Google Analytics tracking code (optional)
- [ ] Review and update privacy policy with actual contact information
- [ ] Minify CSS and JS for production (optional but recommended)

## Quick Deploy Commands

### Using Python (for local testing)

```bash
python -m http.server 8000
# Visit: http://localhost:8000
```

### Using Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Using Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Using GitHub Pages

```bash
# Initialize git (if not already)
git init
git add .
git commit -m "Initial commit: Rewardive website"

# Add remote and push
git remote add origin https://github.com/yourusername/rewardive.app.git
git branch -M main
git push -u origin main

# Enable GitHub Pages in repository settings
```

## Files to Update Before Deployment

### 1. HTML Files (all pages)

- Update domain in Open Graph meta tags
- Add Google Analytics code
- Update email addresses
- Add actual social media links

### 2. sitemap.xml

- Replace `https://rewardive.app` with your domain
- Update `<lastmod>` dates

### 3. robots.txt

- Update sitemap URL with your domain

### 4. .htaccess (if using Apache)

- Uncomment HTTPS redirect when SSL is configured
- Adjust CSP headers based on your needs

## Domain Configuration

### For Custom Domain

1. **Point your domain to hosting**:
   - A Record: Point to hosting IP
   - CNAME Record: Point www to main domain

2. **Configure SSL/HTTPS**:
   - Use Let's Encrypt (free)
   - Or use hosting provider's SSL
   - Enable HTTPS redirect in .htaccess

3. **Update DNS Settings**:

   ```
   Type    Name    Value               TTL
   A       @       YOUR_SERVER_IP      3600
   CNAME   www     rewardive.app       3600
   ```

## Performance Tips

1. **Enable Compression**:
   - GZIP already configured in .htaccess
   - Verify with: <https://checkgzipcompression.com/>

2. **Image Optimization**:

   ```bash
   # Convert images to WebP
   cwebp image.jpg -q 80 -o image.webp
   ```

3. **Minify Files** (for production):

   ```bash
   # CSS
   npx clean-css-cli -o css/styles.min.css css/styles.css

   # JavaScript
   npx terser js/main.js -o js/main.min.js

   # Update HTML to use .min files
   ```

4. **CDN Setup**:
   - Cloudflare (recommended and free)
   - AWS CloudFront
   - Fastly

## Testing After Deployment

- [ ] Test homepage loads correctly
- [ ] Navigate to About page
- [ ] Navigate to Privacy Policy page
- [ ] Test mobile menu on phone/tablet
- [ ] Click all buttons and links
- [ ] Test on mobile devices
- [ ] Check page load speed (Google PageSpeed Insights)
- [ ] Verify SEO tags (use Meta Tags validator)
- [ ] Test forms if added
- [ ] Check HTTPS works properly
- [ ] Verify no console errors

## SEO Submission

After deployment, submit your site to search engines:

1. **Google Search Console**:
   - <https://search.google.com/search-console>
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

2. **Bing Webmaster Tools**:
   - <https://www.bing.com/webmasters>
   - Submit sitemap

3. **Google Analytics** (optional):
   - <https://analytics.google.com>
   - Create property and add tracking code

## Monitoring

1. **Uptime Monitoring**:
   - UptimeRobot (free)
   - Pingdom

2. **Performance Monitoring**:
   - Google PageSpeed Insights
   - GTmetrix
   - WebPageTest

3. **Analytics**:
   - Google Analytics
   - Plausible (privacy-focused)
   - Fathom

## Troubleshooting

### CSS not loading

- Check file paths are correct
- Clear browser cache
- Verify file uploaded to server

### Mobile menu not working

- Ensure main.js is loaded
- Check console for JavaScript errors
- Verify correct file paths

### Images not displaying

- Check image paths
- Verify images uploaded to assets/images/
- Check file permissions (755 for directories, 644 for files)

### HTTPS redirect loop

- Check .htaccess configuration
- Verify server SSL settings
- Disable .htaccess HTTPS redirect if using Cloudflare

## Maintenance

- Update copyright year annually
- Review and update privacy policy as needed
- Check for broken links quarterly
- Update offers/features section regularly
- Monitor site performance monthly

## Support Resources

- HTML/CSS Help: <https://developer.mozilla.org>
- Deployment Issues: Check hosting provider docs
- Performance: <https://web.dev>
- SEO: <https://developers.google.com/search>

---

**Ready to Deploy?** Run through the checklist and you're good to go! 🚀
