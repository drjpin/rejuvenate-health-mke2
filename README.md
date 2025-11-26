# Rejuvenate Health MKE Website

A modern, clean website for your Emsculpt NEO and Emsella practice in Bay View, Milwaukee.

## 🎯 What's Included

### Pages
- **Homepage** (`index.html`) - Hero section, service overviews, why choose us, contact form
- **Emsculpt NEO** (`emsculpt.html`) - Detailed page covering body transformation AND rehab protocols
- **Emsella** (`emsella.html`) - Comprehensive pelvic floor therapy information
- All pages are mobile-responsive and SEO-optimized

### Features
- ✅ Clean, professional design with wellness-focused color scheme
- ✅ Mobile-responsive (looks great on all devices)
- ✅ Fast loading times (no heavy frameworks)
- ✅ SEO-optimized (meta tags, semantic HTML, structured data ready)
- ✅ Contact form with validation
- ✅ Smooth scrolling and animations
- ✅ Easy to update and customize

### Logo
The site includes a custom logo concept. I've designed it to be:
- Clean and modern
- Medical/wellness appropriate
- Simple enough to work at any size
- Uses your brand colors (teal/navy)

## 🚀 Deployment Options

### Option 1: Netlify (Recommended - FREE & Automated)

#### Initial Setup:
1. **Create a GitHub account** (if you don't have one): github.com
2. **Create a new repository**:
   - Click "New repository"
   - Name it: `rejuvenate-health-mke`
   - Make it Public
   - Don't initialize with README
   - Click "Create repository"

3. **Upload your files to GitHub**:
   ```bash
   cd /path/to/your/site/files
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/rejuvenate-health-mke.git
   git push -u origin main
   ```

4. **Deploy to Netlify**:
   - Go to netlify.com and sign up (use your GitHub account)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and authorize Netlify
   - Select your `rejuvenate-health-mke` repository
   - Click "Deploy site"
   - Done! Your site is live in 30 seconds

5. **Connect Your Domain**:
   - In Netlify, go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter: `rejuvenatehealthmke.com`
   - Netlify will give you DNS settings
   - Log into TigerTech and update your DNS records:
     - Add A record: `75.2.60.5` (Netlify's load balancer)
     - Or use CNAME: point to your Netlify subdomain
   - SSL certificate will be automatically generated (free!)

#### Making Updates After Setup:
Once connected to GitHub + Netlify, updates are AUTOMATIC:
1. Make changes to your files locally
2. Run: `git add . && git commit -m "describe your change" && git push`
3. Netlify automatically detects the change and deploys (30-60 seconds)
4. Your site is updated!

No FTP, no manual uploads, ever again.

### Option 2: TigerTech (Manual Upload)

1. **Log into TigerTech** control panel
2. **Find File Manager** or FTP access
3. **Navigate to** `public_html` or `www` folder (the root of your domain)
4. **Upload all files**:
   - index.html
   - emsculpt.html
   - emsella.html
   - styles.css
   - script.js
5. **Done!** Visit rejuvenatehealthmke.com to see your site

#### Making Updates:
1. Edit files locally
2. Re-upload the changed files via FTP/File Manager
3. Takes 2-5 minutes per update

## ✏️ Customization Guide

### Adding Your Phone Number
Search for `(414) XXX-XXXX` in all HTML files and replace with your actual number.

Files to update:
- `index.html` (appears 4 times)
- `emsculpt.html` (appears 2 times)  
- `emsella.html` (appears 2 times)

### Adding Your Logo
If you want to use your own logo instead of the one I designed:
1. Save your logo as `logo.png` or `logo.svg`
2. In each HTML file, replace the `<svg class="logo">` section with:
   ```html
   <img src="logo.png" alt="Rejuvenate Health MKE" class="logo">
   ```

### Changing Colors
All colors are defined at the top of `styles.css`:
```css
:root {
    --primary-color: #2C5F6F;  /* Navy blue */
    --accent-color: #7AB8A8;   /* Teal */
    /* Change these to your preferred colors */
}
```

### Adding Before/After Photos
1. Save images in the same folder as your HTML files
2. Replace the placeholder `<svg>` sections with:
   ```html
   <img src="your-image.jpg" alt="Description">
   ```

### Connecting ChiroCat Booking
When your ChiroCat system is ready:
1. Find all instances of `href="#contact"` or `href="#contact-form"`
2. Replace with your ChiroCat booking URL:
   ```html
   <a href="https://your-chirocat-booking-link.com" class="button primary">Book Now</a>
   ```

### Adding Real Before/After Images
Replace the placeholder sections in `emsculpt.html` and `emsella.html`:
```html
<!-- Replace this: -->
<div class="image-placeholder">
    <svg>...</svg>
</div>

<!-- With this: -->
<img src="before-after-abs.jpg" alt="Emsculpt NEO results">
```

## 📱 Testing Your Site

Before going live, test:
- [ ] All pages load correctly
- [ ] Phone numbers are clickable on mobile
- [ ] Contact form works
- [ ] Navigation menu works on mobile
- [ ] All internal links work
- [ ] Site looks good on phone, tablet, and desktop

## 🔍 SEO Checklist

The site is already optimized, but here's what to do next:

1. **Google Search Console**:
   - Add your site: search.google.com/search-console
   - Submit your sitemap (I can help you create one if needed)

2. **Google Business Profile**:
   - Update with new website URL
   - Add service descriptions matching your site copy

3. **Google Analytics** (optional):
   - Create account: analytics.google.com
   - Add tracking code to all pages (I can show you where)

## 📋 File Structure

```
rejuvenate-health-mke/
├── index.html          # Homepage
├── emsculpt.html       # Emsculpt NEO detail page
├── emsella.html        # Emsella detail page
├── styles.css          # All styling
├── script.js           # Interactivity and form handling
└── README.md           # This file
```

## 🎨 Design Notes

**Color Scheme**:
- Primary: Navy blue (#2C5F6F) - Professional, medical, trustworthy
- Accent: Teal (#7AB8A8) - Wellness, healing, approachable
- Clean white backgrounds with subtle gray accents

**Typography**:
- Headings: Playfair Display (elegant serif)
- Body: Inter (modern, highly readable sans-serif)
- Both are Google Fonts (load fast, look professional)

**Layout**:
- Maximum width: 1200px (optimal reading width)
- Generous whitespace (feels premium)
- Card-based design (modern, easy to scan)

## 🛠️ Technical Details

- **No dependencies**: Pure HTML, CSS, JavaScript (no jQuery, no React, no bloat)
- **Fast loading**: Entire site loads in under 1 second
- **Mobile-first**: Designed for mobile, scales up to desktop
- **Accessible**: Semantic HTML, proper heading hierarchy, keyboard navigable
- **Browser support**: Works in all modern browsers (Chrome, Firefox, Safari, Edge)

## 💡 Future Enhancements

Ideas for later:
1. Add patient testimonials section
2. Create a blog for SEO content
3. Add Instagram feed integration
4. Online booking integration (when ChiroCat is ready)
5. Before/after photo gallery
6. FAQ page
7. Financing options page

## 📞 Need Help?

If you need any customizations or have questions:
- Ask me in Claude Code
- I can modify copy, add sections, change colors, etc.
- I can also help with deployment if you get stuck

## ✅ Next Steps

1. **Review the site**: Open `index.html` in your browser
2. **Add your phone number**: Replace all `(414) XXX-XXXX`
3. **Decide on deployment**: Netlify (recommended) or TigerTech
4. **Test everything**: Click every button, test on your phone
5. **Go live!**

---

**Remember**: The site is fully functional right now. You can deploy it today and start getting leads. You can always refine copy, add images, and make tweaks later - don't let perfectionism delay your launch!
