# 🚀 Quick Start: Get Your Site Live in 10 Minutes

## Option A: Super Simple (TigerTech Upload)

**Time: 5 minutes**

1. **Download all files** from this folder
2. **Log into TigerTech** control panel
3. **Open File Manager**
4. **Navigate to** `public_html` (or wherever rejuvenatehealthmke.com points)
5. **Upload all files**:
   - index.html
   - emsculpt.html
   - emsella.html
   - styles.css
   - script.js
6. **Visit** rejuvenatehealthmke.com
7. **Done!** ✅

---

## Option B: Pro Setup (Netlify - Automated Forever)

**Time: 10 minutes (but worth it for future ease)**

### Step 1: GitHub (3 minutes)
1. Go to **github.com** → Sign up (free)
2. Click **"New repository"**
   - Name: `rejuvenate-health-mke`
   - Public
   - Don't add README
3. **Don't close this page** - you'll need it in a second

### Step 2: Upload Your Files (2 minutes)
**On Mac:**
1. Open **Terminal**
2. Navigate to where you downloaded the files:
   ```bash
   cd ~/Downloads/rejuvenate-health-mke
   ```
3. Run these commands (copy/paste one at a time):
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   ```
4. Back on GitHub page, copy the line that looks like:
   ```
   git remote add origin https://github.com/YOUR-USERNAME/rejuvenate-health-mke.git
   ```
5. Paste and run that command
6. Run:
   ```bash
   git push -u origin main
   ```
7. Refresh GitHub page - your files are there!

### Step 3: Deploy to Netlify (3 minutes)
1. Go to **netlify.com** → Sign up with GitHub
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub**
4. Select **rejuvenate-health-mke** repository
5. Click **"Deploy site"** (use all default settings)
6. **Wait 30 seconds** - your site is live!
7. Netlify gives you a URL like: `random-name-12345.netlify.app`

### Step 4: Connect Your Domain (2 minutes)
1. In Netlify, click **"Domain settings"**
2. Click **"Add custom domain"**
3. Type: `rejuvenatehealthmke.com`
4. Netlify gives you instructions - it'll look like:
   - **Add A record**: `75.2.60.5`
   - OR **Add CNAME**: points to your Netlify URL
5. Log into **TigerTech**
6. Find **DNS Settings** for rejuvenatehealthmke.com
7. Update the A record or CNAME as Netlify instructed
8. **Wait 5-10 minutes** for DNS to update
9. **Done!** Your site is live and SSL is automatic

### Future Updates (30 seconds each)
1. Edit files locally
2. Run:
   ```bash
   git add .
   git commit -m "updated phone number"
   git push
   ```
3. Netlify auto-deploys in 30 seconds
4. **No manual uploads ever again!**

---

## What to Do First

**Before going live:**
1. **Find & Replace**: Search all HTML files for `(414) XXX-XXXX` and replace with your real number
2. **Test locally**: Open `index.html` in your browser, click everything
3. **Check mobile**: View on your phone

**After going live:**
1. Test the contact form
2. Share the link with a friend - get feedback
3. Submit to Google Search Console: search.google.com/search-console
4. Update Google Business Profile with new website

---

## Need Help?

**Stuck on GitHub/Git?**
- Just use TigerTech upload (Option A) - works perfectly fine
- You can always switch to Netlify later

**Stuck on DNS?**
- It can take up to 24 hours to fully propagate (usually 10 minutes)
- You can test using the Netlify temporary URL first

**Want to change something?**
- Ask me! I can modify copy, colors, layout, anything
- I can walk you through any step

---

## You've Got This! 💪

This is WAY simpler than it sounds. Thousands of people do this every day. And if you get stuck, I'm here to help!

**Remember**: Your WordPress site has been sitting unfinished for a year. This new site is ready to launch TODAY. Don't overthink it - just get it live and refine as you go!
