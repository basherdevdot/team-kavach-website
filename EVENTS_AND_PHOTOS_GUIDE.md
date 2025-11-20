# 🎉 Events & Photos Complete Guide

## ✅ What I Just Added for You

### **1. Upcoming Events Section** (Home Page)
- Beautiful event cards with poster display
- 3 event slots ready to showcase
- Date badges, location, registration buttons
- Automatic fallback if no poster image

### **2. Instagram Photo Gallery** (Home Page)
- 8-photo grid showcasing your best work
- Links directly to your Instagram
- Hover effects and animations
- Works even without photos (shows placeholders)

### **3. Photo Folders Structure**
All folders created and ready for your images!

---

## 📁 **Complete Folder Structure**

```
public/images/
├── hero-volunteers.jpg              # Home page hero background
├── programs/
│   ├── education.jpg                # Education program card
│   ├── healthcare.jpg               # Healthcare program card
│   └── community.jpg                # Community program card
├── events/
│   └── upcoming/
│       ├── event-1.jpg              # ⭐ Event poster 1
│       ├── event-2.jpg              # ⭐ Event poster 2
│       └── event-3.jpg              # ⭐ Event poster 3
├── instagram/
│   ├── post-1.jpg                   # ⭐ Instagram photo 1
│   ├── post-2.jpg                   # ⭐ Instagram photo 2
│   ├── post-3.jpg                   # ⭐ Instagram photo 3
│   ├── post-4.jpg                   # ⭐ Instagram photo 4
│   ├── post-5.jpg                   # ⭐ Instagram photo 5
│   ├── post-6.jpg                   # ⭐ Instagram photo 6
│   ├── post-7.jpg                   # ⭐ Instagram photo 7
│   └── post-8.jpg                   # ⭐ Instagram photo 8
├── volunteers/
│   └── team-action.jpg              # Volunteer CTA section
├── about/
│   └── story.jpg                    # About page story
├── team/
│   └── team-group.jpg               # Team photo
└── testimonials/
    ├── lakshmi.jpg                  # Testimonial photos
    ├── rajesh.jpg
    └── priya.jpg
```

---

## 🎯 **Where to Add Photos - Step by Step**

### **STEP 1: Add Event Posters** ⭐ HIGH PRIORITY

**Location on Website:** Home page, after stats section

**Where to put files:**
```
public/images/events/upcoming/
├── event-1.jpg    # Your next event poster
├── event-2.jpg    # Second upcoming event
└── event-3.jpg    # Third upcoming event
```

**Recommended Size:** 
- Dimensions: 800x1200px (portrait poster format)
- File size: Under 400KB
- Format: JPG

**What to use:**
- Your actual event posters (canva designs)
- Flyers for upcoming programs
- Announcement graphics

**How to update event details:**
Edit the text in `src/pages/HomeNew.tsx` around line 250:
```tsx
<h3>Your Event Name</h3>
<p>Your event description</p>
<span>📍 Location</span>
{/* Change date badge */}
<div className="text-3xl font-black text-primary">15</div>
<div className="text-xs font-bold">DEC</div>
```

---

### **STEP 2: Add Instagram Photos** ⭐ HIGH PRIORITY

**Location on Website:** Home page, before final CTA

**Where to put files:**
```
public/images/instagram/
├── post-1.jpg    # Best Instagram photo 1
├── post-2.jpg    # Best Instagram photo 2
├── post-3.jpg    # ... and so on
└── post-8.jpg    # 8th photo
```

**Recommended Size:**
- Dimensions: 1080x1080px (square Instagram format)
- File size: Under 300KB each
- Format: JPG

**What to use:**
- Your best Instagram posts from @teamkavach
- Event highlights
- Volunteer action shots
- Community impact photos
- Behind-the-scenes moments

**How to get photos:**
1. Go to https://www.instagram.com/teamkavach/
2. Right-click your best posts → "Save image as"
3. Rename to `post-1.jpg`, `post-2.jpg`, etc.
4. Add to `public/images/instagram/` folder

---

### **STEP 3: Add Program Photos**

**Where to put files:**
```
public/images/programs/
├── education.jpg     # Students learning/classroom
├── healthcare.jpg    # Health camp/medical care
└── community.jpg     # Community gatherings
```

**Recommended Size:** 800x600px (landscape)

---

### **STEP 4: Add Hero Background**

**Where to put file:**
```
public/images/hero-volunteers.jpg
```

**Recommended Size:** 1920x1080px (full HD landscape)

**What works best:**
- Group photo of volunteers in action
- Team photo at an event
- Powerful moment showing impact

---

## 🎨 **Best Practices for Event Posters**

### **Design Tips:**
- ✅ Use Canva for poster design
- ✅ Include: Event name, date, time, location
- ✅ Use Team Kavach brand colors (Red/Yellow/Purple)
- ✅ Add your logo
- ✅ Clear call-to-action ("Register Now")
- ✅ High contrast text for readability

### **Poster Checklist:**
- [ ] Event name in large, bold text
- [ ] Date and time prominently displayed
- [ ] Location/venue mentioned
- [ ] Team Kavach branding
- [ ] Contact info or registration link
- [ ] Relevant graphics/icons
- [ ] Compressed to under 400KB

---

## 📸 **Best Practices for Instagram Photos**

### **Photo Selection:**
Choose photos that show:
- ✅ Volunteers in action (teaching, helping)
- ✅ Happy beneficiaries
- ✅ Event highlights
- ✅ Community engagement
- ✅ Impact and results
- ✅ Team spirit and collaboration

### **Photo Quality:**
- ✅ Good lighting (bright, clear)
- ✅ In focus (not blurry)
- ✅ Show people's faces (with consent)
- ✅ Action shots preferred over posed
- ✅ Diverse representation
- ✅ Genuine moments

### **Photo Order:**
Arrange `post-1.jpg` to `post-8.jpg` in order of:
1. Your most impressive/recent event
2. Volunteer action shots
3. Community impact
4. Team photos
5. Success stories
6. Behind-the-scenes
7. Testimonial moments
8. Future vision/call-to-action

---

## 🚀 **Quick Start Guide**

### **Option 1: Start Small (Just Events)**
1. Create 3 event posters in Canva
2. Save as `event-1.jpg`, `event-2.jpg`, `event-3.jpg`
3. Add to `public/images/events/upcoming/`
4. Edit event details in code (name, description, date, location)
5. Refresh website!

### **Option 2: Add Instagram Grid**
1. Go to your Instagram
2. Screenshot/download 8 best posts
3. Crop to square (1:1 ratio)
4. Rename as `post-1.jpg` through `post-8.jpg`
5. Add to `public/images/instagram/`
6. Photos appear automatically!

### **Option 3: Complete Setup**
1. Add all event posters
2. Add Instagram photos
3. Add program photos
4. Add hero background
5. Add about/team photos
6. Full website with visuals!

---

## 💡 **Instagram Embed Alternative**

If you want **live Instagram feed** instead of static photos:

### **Option A: Use Instagram Embed Code**
1. Go to any Instagram post
2. Click "..." → "Embed"
3. Copy embed code
4. Add to website (I can help with this)

### **Option B: Use Third-Party Widget**
- **EmbedSocial** (free tier available)
- **Juicer** (Instagram aggregator)
- **Spotlight** (Instagram feed widget)

### **My Recommendation:**
**Stick with the photo grid** I created because:
- ✅ No external dependencies
- ✅ Super fast loading
- ✅ You control exactly what shows
- ✅ No Instagram API issues
- ✅ Works offline
- ✅ Beautiful hover effects

Just update the 8 photos monthly with your latest posts!

---

## 🔄 **How to Update Event Posters**

### **When you have a new event:**

1. **Create poster** in Canva
2. **Save** as `event-1.jpg` (overwrites old one)
3. **Update code** in `HomeNew.tsx`:

```tsx
{/* Around line 250 */}
<h3 className="text-xl font-black mb-3">Your New Event Name</h3>
<p className="text-foreground/70 mb-4">
  New event description here
</p>
<span className="text-sm font-bold text-primary">📍 New Location</span>

{/* Update date badge around line 235 */}
<div className="text-3xl font-black text-primary">25</div>
<div className="text-xs font-bold text-foreground/70">JAN</div>
```

---

## 📊 **Image Optimization**

### **Before uploading, compress images:**

**Online Tools:**
- TinyPNG (https://tinypng.com)
- Squoosh (https://squoosh.app)
- CompressJPEG (https://compressjpeg.com)

**Target File Sizes:**
- Event posters: 300-400KB
- Instagram photos: 200-300KB
- Program photos: 200-300KB
- Hero background: 400-500KB

---

## ✅ **Checklist for Complete Photo Integration**

### **Priority 1 (Do First):**
- [ ] Create 3 event posters
- [ ] Add to `events/upcoming/` folder
- [ ] Update event details in code
- [ ] Test on localhost

### **Priority 2 (Do Next):**
- [ ] Download 8 best Instagram posts
- [ ] Crop to square
- [ ] Add to `instagram/` folder
- [ ] Verify on website

### **Priority 3 (Nice to Have):**
- [ ] Add program photos (education/healthcare/community)
- [ ] Add hero background image
- [ ] Add about story photo
- [ ] Add team group photo

---

## 🎯 **Where Everything Appears**

| Photo Type | File Location | Appears On | Section |
|------------|--------------|------------|---------|
| Event Posters | `events/upcoming/event-*.jpg` | Home | After stats, before programs |
| Instagram Grid | `instagram/post-*.jpg` | Home | Before final CTA |
| Program Cards | `programs/*.jpg` | Home | Programs section |
| Hero Background | `hero-volunteers.jpg` | Home | Top background |
| Story Photo | `about/story.jpg` | About | Our story section |
| Team Photo | `team/team-group.jpg` | About | Team section |
| Volunteer CTA | `volunteers/team-action.jpg` | Home | Join our community |

---

## 🔥 **Pro Tips**

1. **Update monthly:** Refresh Instagram photos with latest posts
2. **Keep it current:** Update event posters as events change
3. **Use real photos:** Authentic > Stock images
4. **Get consent:** Always ask permission for photos with people
5. **Compress everything:** Faster site = better experience
6. **Test mobile:** Check how photos look on phone
7. **Backup originals:** Keep high-res versions safe

---

## 🆘 **Need Help?**

**Can't find the folders?**
They're in: `public/images/` (inside your project)

**Images not showing?**
- Check file names match exactly
- Ensure files are in correct folders
- Clear browser cache and refresh

**Want to change event details?**
- Edit `src/pages/HomeNew.tsx`
- Look for event card sections (around line 250-380)
- Update text, dates, locations

---

## 🎉 **You're All Set!**

Your website now has:
✅ **Upcoming Events Section** with 3 event card slots
✅ **Instagram Photo Gallery** with 8-photo grid
✅ **All folders created** and ready for images
✅ **Beautiful fallbacks** if images are missing
✅ **Automatic optimization** and hover effects

**Just add your images and watch your website come alive!** 📸

---

**Quick Reference:**
- Event posters → `public/images/events/upcoming/`
- Instagram photos → `public/images/instagram/`
- Program photos → `public/images/programs/`
- Other photos → See folder structure above

**Happy posting! 🚀**
