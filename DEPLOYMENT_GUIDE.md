# 🚀 How to Deploy on Shared Hosting (Simple!)

## ✅ Your Website is Perfect for Shared Hosting!

Since you're using **Vite** (which builds to static HTML/CSS/JS), you can deploy on **ANY shared hosting** like:
- **Hostinger**
- **Bluehost**  
- **GoDaddy**
- **SiteGround**
- **Namecheap**

---

## 📦 Step 1: Build Your Website

Run this command in your terminal (PowerShell):

```powershell
npm run build
```

This creates a **`dist`** folder with all your website files (HTML, CSS, JS).

---

## 📂 Step 2: What's in the `dist` Folder?

After building, you'll see:
```
dist/
├── index.html          ← Main HTML file
├── assets/             ← All CSS, JS files
│   ├── index-abc123.js
│   ├── index-xyz789.css
│   └── ...
├── data/               ← Your events.json
│   └── events.json
└── images/             ← All your photos
    ├── events/
    ├── instagram/
    └── ...
```

---

## 🌐 Step 3: Upload to Shared Hosting

### Option 1: Using cPanel File Manager (Most Common)

1. **Login to your hosting cPanel**
2. Open **File Manager**
3. Go to **`public_html`** folder (or `www` or `htdocs` depending on host)
4. **Upload entire `dist` folder contents**:
   - Select all files from `dist` folder
   - Upload to `public_html`
   - **NOT** the `dist` folder itself, just the files INSIDE it

### Option 2: Using FTP (FileZilla)

1. **Download FileZilla** (free FTP client)
2. **Connect to your hosting**:
   - Host: ftp.yourwebsite.com
   - Username: (from hosting)
   - Password: (from hosting)
   - Port: 21
3. **Upload files**:
   - Navigate to `public_html` folder on server
   - Drag all files from local `dist` folder
   - Upload everything

---

## 🔧 Step 4: Important - Configure Routing

Since you're using React Router, you need to handle routing on server.

### Create `.htaccess` file in `public_html`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

**What this does:**
- Makes sure all routes (`/about`, `/events/1`, etc.) work properly
- Without this, refreshing on `/events/1` will give 404 error

---

## 📝 Complete Upload Checklist

```
public_html/
├── index.html          ✅ Upload
├── assets/             ✅ Upload entire folder
├── data/               ✅ Upload (has events.json)
├── images/             ✅ Upload (all your photos)
├── .htaccess           ✅ Create this file
└── favicon.ico         ✅ Upload (if you have)
```

---

## 🎯 Step-by-Step Guide

### 1. Build Website
```powershell
cd "d:\project_trading\Team Kavach"
npm run build
```

### 2. Check `dist` Folder
- Open `dist` folder
- Should see `index.html`, `assets/`, `data/`, `images/`

### 3. Upload to Hosting
- Login to cPanel
- File Manager → public_html
- Upload ALL files from `dist` folder

### 4. Create `.htaccess`
- In cPanel File Manager
- Create new file: `.htaccess`
- Paste the Apache code above
- Save

### 5. Update Events Later
- Edit `public/data/events.json` locally
- Run `npm run build` again
- Upload ONLY the `dist/data/events.json` file
- Or edit directly on server via cPanel

---

## ⚡ Quick Update Process (After Changes)

### To Update Events Only:
1. Edit `public/data/events.json`
2. Run `npm run build`
3. Upload `dist/data/events.json` to server
4. **Done!** (No need to upload entire site)

### To Update Photos:
1. Add photos to `public/images/events/upcoming/`
2. Run `npm run build`
3. Upload new images to server `images/events/upcoming/`
4. **Done!**

### To Update Code (Pages, Components):
1. Make your changes
2. Run `npm run build`
3. Upload entire `dist/assets/` folder
4. **Done!**

---

## 🆓 Free Alternatives (If You Don't Have Hosting Yet)

If you don't have shared hosting, use these **FREE** options:

### 1. **Vercel** (EASIEST - Recommended!)
```powershell
npm install -g vercel
vercel login
vercel
```
- Free hosting
- Auto-updates on changes
- Custom domain support
- **Best for your setup!**

### 2. **Netlify**
```powershell
npm install -g netlify-cli
netlify login
netlify deploy --prod
```
- Free hosting
- Drag & drop `dist` folder
- Custom domain support

### 3. **GitHub Pages**
- Push code to GitHub
- Enable GitHub Pages
- Free hosting
- `yourname.github.io/teamkavach`

---

## 🔥 Recommended: Use Vercel (Easiest!)

Since you already have the code, **Vercel is PERFECT**:

### Why Vercel?
✅ **FREE forever** (for your use case)  
✅ **Automatic deployments** - just push code  
✅ **Fast CDN** - loads super fast  
✅ **Custom domain** - use teamkavach.org  
✅ **Auto SSL** - HTTPS included  
✅ **No server management** needed  

### Deploy to Vercel NOW:

```powershell
# Install Vercel
npm install -g vercel

# Deploy
cd "d:\project_trading\Team Kavach"
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name? team-kavach
# - Directory? ./
# - Build command? npm run build
# - Output directory? dist
```

**Done!** Your site is live at: `https://team-kavach-xyz.vercel.app`

### Add Custom Domain on Vercel:
1. Go to Vercel dashboard
2. Project → Settings → Domains
3. Add `teamkavach.org`
4. Update DNS records (Vercel shows you how)
5. **DONE!** Site live on your domain with HTTPS!

---

## 📊 Comparison Table

| Method | Cost | Difficulty | Speed | Updates |
|--------|------|-----------|-------|---------|
| **Vercel** | FREE | ⭐ Easy | ⚡ Super Fast | Auto |
| **Netlify** | FREE | ⭐⭐ Easy | ⚡ Fast | Auto |
| **Shared Hosting** | $3-10/mo | ⭐⭐⭐ Medium | 🐢 Medium | Manual FTP |
| **GitHub Pages** | FREE | ⭐⭐ Easy | ⚡ Fast | Auto (via Git) |

---

## 🎯 My Recommendation for Team Kavach:

### Use **Vercel** Because:
1. **100% FREE** (no hosting cost)
2. **No technical setup** needed
3. **Update events** by just editing JSON and pushing code
4. **Fast loading** for visitors
5. **Custom domain** support (teamkavach.org)
6. **HTTPS included** (secure)
7. **No FTP** headaches

### If You Want Shared Hosting:
- Build → Upload to cPanel → Add .htaccess → Done
- Update events → Build → Upload JSON → Done

---

## 🚨 IMPORTANT: Updating Events

### On Shared Hosting:
1. Edit `public/data/events.json`
2. Run `npm run build`
3. Upload `dist/data/events.json` via cPanel/FTP

### On Vercel (EASIER):
1. Edit `public/data/events.json`
2. `git add .`
3. `git commit -m "Updated events"`
4. `git push`
5. **Auto deploys in 30 seconds!**

---

## 📞 Need Help?

**Shared Hosting Issues:**
- Contact your hosting support
- Show them the .htaccess file
- Ask to enable mod_rewrite

**Vercel Issues:**
- Check Vercel docs: vercel.com/docs
- Free support in Vercel community

---

## ✅ Summary

**Best Option:** Use **Vercel** (free, fast, easy updates)

**Shared Hosting Steps:**
1. `npm run build`
2. Upload `dist` folder contents to `public_html`
3. Create `.htaccess` file
4. Visit your domain → Site live!

**To Update Events Later:**
- Edit JSON → Build → Upload JSON file only

---

🔥 **Choose Vercel mate - it's FREE and WAY EASIER than FTP uploads!** 🔥
