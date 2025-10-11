# Rewardive Website

A modern, responsive static website for Rewardive - your ultimate platform for discovering and maximizing credit card, debit card, and bank offers.

## Features

- **Responsive Design**: Mobile-first approach with optimized layouts for all screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **SEO Optimized**: Comprehensive meta tags, structured data, and semantic HTML
- **Performance Focused**: Optimized CSS, lazy loading, and browser caching
- **Accessibility**: WCAG compliant with keyboard navigation and ARIA labels
- **Cross-browser Compatible**: Works seamlessly across modern browsers

## Pages

1. **Home (`index.html`)** - Main landing page with hero section, features, and CTA
2. **About (`about.html`)** - Company information, mission, and values
3. **Privacy Policy (`privacy.html`)** - Comprehensive privacy and data protection policy

## Project Structure

```
rewardive.app/
├── index.html              # Home page
├── about.html              # About page
├── privacy.html            # Privacy policy page
├── css/
│   └── styles.css          # Main stylesheet with responsive design
├── js/
│   └── main.js             # JavaScript for interactivity
├── assets/
│   └── images/             # Image assets (add your images here)
├── robots.txt              # Search engine crawling rules
├── sitemap.xml             # XML sitemap for SEO
├── .htaccess               # Apache configuration (optional)
└── README.md               # This file
```

## Technology Stack

- **HTML5**: Semantic markup with proper structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript**: No dependencies, pure JavaScript for best performance
- **Google Fonts**: Inter font family for typography

## Getting Started

### Local Development

1. Clone or download this repository
2. Open the project folder
3. Simply open `index.html` in your browser, or use a local server:

**Using Python:**

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (http-server):**

```bash
npx http-server -p 8000
```

**Using PHP:**

```bash
php -S localhost:8000
```

4. Visit `http://localhost:8000` in your browser

### Deployment

#### Option 1: Traditional Web Hosting (Apache/Nginx)

1. Upload all files to your web server's public directory
2. Ensure `.htaccess` is uploaded (if using Apache)
3. Configure SSL certificate for HTTPS
4. Update the domain in `sitemap.xml` and meta tags

#### Option 2: GitHub Pages

1. Create a GitHub repository
2. Push all files to the repository
3. Go to Settings > Pages
4. Select the main branch as source
5. Your site will be live at `https://username.github.io/repository-name`

#### Option 3: Netlify

1. Create a free Netlify account
2. Connect your repository or drag and drop the folder
3. Configure custom domain (optional)
4. Automatic HTTPS and CDN enabled

#### Option 4: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

#### Option 5: Cloudflare Pages

1. Sign up for Cloudflare Pages
2. Connect your Git repository
3. Configure build settings (not needed for static sites)
4. Deploy with automatic CDN and HTTPS

## Customization

### Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #10b981;
    --accent-color: #f59e0b;
    /* ... other colors */
}
```

### Content

- Update text content directly in HTML files
- Modify images in the `assets/images/` directory
- Update company information in footer across all pages

### Adding Images

1. Add your images to `assets/images/`
2. Update image paths in HTML files
3. Use descriptive alt text for accessibility
4. Consider using WebP format for better compression

### SEO Configuration

Update the following in each HTML file's `<head>`:

- `<title>` tags
- Meta description
- Open Graph tags (og:title, og:description, og:image)
- Twitter Card tags
- Canonical URLs

Update `sitemap.xml` with your actual domain and dates.

## Performance Optimization

### Already Implemented

- ✅ Minified CSS (recommended for production)
- ✅ Optimized images (use WebP when possible)
- ✅ Lazy loading for images
- ✅ Browser caching via `.htaccess`
- ✅ GZIP compression enabled
- ✅ CSS animations with hardware acceleration
- ✅ Debounced/throttled scroll events

### Additional Recommendations

1. **Minify CSS and JavaScript** for production:

   ```bash
   # Using online tools or build tools
   npm install -g clean-css-cli uglify-js
   cleancss -o css/styles.min.css css/styles.css
   uglifyjs js/main.js -o js/main.min.js
   ```

2. **Optimize Images**:
   - Use WebP format
   - Compress images with tools like TinyPNG
   - Use appropriate image sizes

3. **Enable CDN**: Consider using Cloudflare or similar CDN

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast ratios meet WCAG AA standards
- Focus indicators for interactive elements
- Screen reader friendly

## Security Features

- Content Security Policy headers
- XSS protection
- Clickjacking protection (X-Frame-Options)
- MIME type sniffing prevention
- HTTPS enforcement (when enabled)

## Analytics Integration

To add analytics, include your tracking code in the `<head>` section of each HTML file:

**Google Analytics 4:**

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## License

Copyright © 2025 Rewardive. All rights reserved.

## Support

For questions or support, contact:

- Email: <support@rewardive.app>
- Website: <https://rewardive.app>

## Credits

- Design & Development: Rewardive Team
- Font: Inter by Rasmus Andersson
- Icons: Unicode Emoji

---

**Built with ❤️ for smart spenders**
