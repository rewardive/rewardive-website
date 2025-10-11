# GitHub Pages Deployment Guide for Rewardive

This guide will help you deploy the Rewardive website to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your computer
- Domain name (rewardive.app) or use GitHub's free subdomain

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository: `rewardive.app` (or any name you prefer)
4. Make it **Public** (required for free GitHub Pages)
5. Do NOT initialize with README (since we already have files)
6. Click "Create repository"

## Step 2: Initialize Git and Push Code

Open your terminal in the project directory and run these commands:

```bash
# Initialize git repository (if not already initialized)
git init

# Add all files to git
git add .

# Create first commit
git commit -m "Initial commit: Rewardive website"

# Add your GitHub repository as remote
# Replace USERNAME with your GitHub username
git remote add origin https://github.com/USERNAME/rewardive.app.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top right)
3. Scroll down to **Pages** section (left sidebar)
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait a few moments for deployment

Your site will be live at: `https://USERNAME.github.io/rewardive.app/`

## Step 4: Configure Custom Domain (Optional)

If you own `rewardive.app` domain:

### A. Configure DNS Settings

Go to your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.) and add these DNS records:

```
Type    Name    Value                   TTL
A       @       185.199.108.153         3600
A       @       185.199.109.153         3600
A       @       185.199.110.153         3600
A       @       185.199.111.153         3600
CNAME   www     USERNAME.github.io      3600
```

**Note:** Replace `USERNAME` with your GitHub username.

### B. Add CNAME File (Already Done)

The `CNAME` file is already in the repository with `rewardive.app` as content.

### C. Configure GitHub Pages Custom Domain

1. Go to repository **Settings** → **Pages**
2. Under "Custom domain", enter: `rewardive.app`
3. Wait for DNS check to complete (can take up to 48 hours, usually minutes)
4. Check "Enforce HTTPS" once DNS is verified

## Step 5: Verify Deployment

1. Visit your GitHub Pages URL
2. Check all pages load correctly:
   - Home page (`/` or `/index.html`)
   - About page (`/about.html`)
   - Privacy page (`/privacy.html`)
3. Test mobile responsiveness
4. Verify all links work

## Updating Your Website

Whenever you make changes:

```bash
# Make your changes to files
# Then commit and push

git add .
git commit -m "Description of changes"
git push origin main
```

GitHub Pages will automatically rebuild and deploy your site within 1-2 minutes.

## Common Issues and Solutions

### Issue: 404 Error on GitHub Pages

**Solution:**
- Ensure your repository is public
- Verify GitHub Pages is enabled in settings
- Wait a few minutes after enabling
- Check the branch and folder are correct

### Issue: Custom Domain Not Working

**Solution:**
- Verify DNS records are correct
- Wait up to 48 hours for DNS propagation
- Use [DNS Checker](https://dnschecker.org) to verify
- Ensure CNAME file contains only your domain name

### Issue: HTTPS Not Available

**Solution:**
- Wait for DNS verification to complete
- Make sure "Enforce HTTPS" is checked in settings
- Can take up to 24 hours to provision certificate

### Issue: CSS/JS Not Loading

**Solution:**
- Ensure file paths are relative (not absolute)
- Check file names match exactly (case-sensitive)
- Clear browser cache
- Check browser console for errors

## GitHub Pages Limitations

- **Free tier limits:**
  - 1 GB repository size
  - 100 GB bandwidth/month
  - 10 builds per hour

- **Files:**
  - No server-side code (PHP, Node.js, etc.)
  - Static files only (HTML, CSS, JS)
  - No databases

## Alternative: Use GitHub Actions (Advanced)

For more control, create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

## Testing Locally Before Deploying

```bash
# Using Python
python -m http.server 8000

# Or using npx
npx http-server -p 8000

# Visit: http://localhost:8000
```

## Performance Optimization for GitHub Pages

1. **Enable Cloudflare** (optional but recommended):
   - Sign up for free Cloudflare account
   - Add your domain to Cloudflare
   - Update nameservers at your domain registrar
   - Enable automatic HTTPS, caching, and minification

2. **Image Optimization**:
   - Compress images before uploading
   - Use WebP format
   - Add images to `assets/images/`

3. **Minimize Files**:
   ```bash
   # CSS minification
   npx clean-css-cli -o css/styles.min.css css/styles.css

   # JS minification
   npx terser js/main.js -o js/main.min.js

   # Update HTML files to use .min versions
   ```

## Monitoring Your Site

1. **Google Search Console**:
   - https://search.google.com/search-console
   - Verify ownership
   - Submit sitemap: `https://rewardive.app/sitemap.xml`

2. **GitHub Insights**:
   - Go to repository → Insights → Traffic
   - View visitor statistics

## Security Best Practices

✅ **Already implemented in your site:**
- HTTPS enforced (when custom domain configured)
- No sensitive data stored
- Security headers in .htaccess
- No external tracking

## Support

If you encounter issues:

1. Check [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Visit [GitHub Community](https://github.community)
3. Check your repository's Actions/Environments tabs for deployment status

---

## Quick Reference Commands

```bash
# Clone repository (to another machine)
git clone https://github.com/USERNAME/rewardive.app.git

# Check status
git status

# Pull latest changes
git pull origin main

# Push changes
git add .
git commit -m "Your message"
git push origin main

# View commit history
git log --oneline

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main
```

---

**Your site will be live at:**
- GitHub URL: `https://USERNAME.github.io/rewardive.app/`
- Custom domain: `https://rewardive.app` (after DNS configuration)

🎉 **Congratulations!** Your Rewardive website is now live on GitHub Pages!
