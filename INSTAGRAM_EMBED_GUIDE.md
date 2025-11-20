# Instagram Video Integration Guide

## How to Add Instagram Videos/Reels to Your Website

You have **3 easy options** to embed Instagram content on Team Kavach website:

---

## Option 1: EmbedSocial (Recommended - Easiest)

### Step 1: Sign up at EmbedSocial
1. Go to [https://embedsocial.com/](https://embedsocial.com/)
2. Sign up for a free account (free plan available)
3. Connect your Instagram account (@teamkavach)

### Step 2: Create Instagram Widget
1. Click "Create New Widget"
2. Select "Instagram"
3. Choose widget type:
   - **Feed Widget** - Shows latest posts in a grid
   - **Stories Widget** - Shows Instagram stories
   - **Reels Widget** - Shows Instagram reels
4. Customize the design (colors, layout, number of posts)

### Step 3: Get Embed Code
1. Click "Generate Code"
2. Copy the embed code (looks like this):
```html
<script src="https://embedsocial.com/cdn/ht.js" id="EmbedSocialHashtagScript"></script>
<div class="embedsocial-hashtag" data-ref="abc123"></div>
```

### Step 4: Add to Website
Replace the placeholder div in `src/pages/NewHome.tsx` (around line 361):

**Find this:**
```tsx
<div className="min-h-[400px] flex items-center justify-center border-2 border-dashed border-white/30 rounded-2xl">
  <p className="text-white/60">Instagram feed will appear here</p>
</div>
```

**Replace with:**
```tsx
<div 
  className="instagram-embed-container rounded-2xl overflow-hidden"
  dangerouslySetInnerHTML={{ 
    __html: `<script src="https://embedsocial.com/cdn/ht.js" id="EmbedSocialHashtagScript"></script>
<div class="embedsocial-hashtag" data-ref="YOUR_REFERENCE_CODE"></div>` 
  }} 
/>
```

---

## Option 2: Curator.io (Free + Paid)

### Step 1: Sign up
1. Go to [https://curator.io/](https://curator.io/)
2. Create free account
3. Connect Instagram @teamkavach

### Step 2: Create Feed
1. Select "Instagram" as source
2. Choose layout (Grid, Carousel, Waterfall)
3. Customize design

### Step 3: Embed
1. Copy the embed code
2. Add to `NewHome.tsx` same way as Option 1

---

## Option 3: Instagram Official Embed (Individual Posts Only)

This method works for **individual posts/reels**, not feeds.

### Step 1: Get Embed Code from Instagram
1. Go to the Instagram post you want to embed
2. Click the "..." (three dots) menu
3. Click "Embed"
4. Copy the embed code

### Step 2: Add Multiple Embeds
Replace the placeholder in `NewHome.tsx`:

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
  <div dangerouslySetInnerHTML={{ __html: `
    <blockquote class="instagram-media" data-instgrm-captioned 
      data-instgrm-permalink="https://www.instagram.com/p/YOUR_POST_ID/"
      data-instgrm-version="14">
    </blockquote>
    <script async src="//www.instagram.com/embed.js"></script>
  ` }} />
  
  {/* Repeat for more posts */}
</div>
```

---

## My Recommendation: Use EmbedSocial

**Why?**
- ✅ Free plan available
- ✅ Shows live feed (auto-updates)
- ✅ Beautiful customizable design
- ✅ Can show reels, posts, stories
- ✅ No coding required
- ✅ Fast loading
- ✅ Mobile responsive

**Setup Time:** 10 minutes

---

## After Adding Embed Code

The Instagram section in your website will automatically show:
- Latest videos/reels from @teamkavach
- Auto-updates when you post new content
- Click-through to Instagram
- Responsive design on mobile

**Current Location in Code:**
File: `src/pages/NewHome.tsx`
Line: ~361-366
Section: "Instagram Video Section - MAD Style"

---

## Need Help?

If you need help with the embed code, share:
1. Which option you chose (EmbedSocial, Curator, or Official)
2. The embed code you received
3. I'll help you integrate it perfectly!
