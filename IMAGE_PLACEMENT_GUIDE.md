# 📸 Image Placement Guide for Team Kavach Website

## 🎯 **Best Places to Add Photos**

### **1. HOME PAGE (HomeNew.tsx)**

#### **Hero Section** ⭐ PRIORITY 1
- **What to add**: Team photo of volunteers in action or group photo
- **File path**: `public/images/hero-volunteers.jpg`
- **Recommended size**: 1920x1080px (landscape)
- **What works**: 
  - Volunteers teaching kids
  - Group photo at an event
  - Community gathering
  - Action shots of volunteers working

#### **Programs Section** ⭐ PRIORITY 2
- **Education Program**: `public/images/programs/education.jpg`
  - Students in classroom
  - Volunteers teaching
  - Study materials distribution
  
- **Healthcare Program**: `public/images/programs/healthcare.jpg`
  - Health camp photos
  - Doctors/volunteers with patients
  - Medical check-ups
  
- **Community Program**: `public/images/programs/community.jpg`
  - Community gatherings
  - Skill training sessions
  - Volunteers with families

**Recommended size**: 800x600px each

#### **Volunteer CTA Section**
- **Team Photo**: `public/images/volunteers/team-action.jpg`
- **Recommended size**: 1200x800px
- **What works**: Candid shots of volunteers working together

---

### **2. ABOUT PAGE (AboutNew.tsx)**

#### **Our Story Section** ⭐ PRIORITY 1
- **File path**: `public/images/about/story.jpg`
- **Recommended size**: 800x800px (square)
- **What works**:
  - Founders/core team photo
  - First event photo from 2022
  - Memorable moment from early days

#### **Team Section** ⭐ PRIORITY 2
- **Core Team Photos**: `public/images/team/`
  - `leader-1.jpg`
  - `leader-2.jpg`
  - `leader-3.jpg`
  - `leader-4.jpg`
- **Recommended size**: 400x400px (square headshots)
- **Alternative**: Full team group photo `team-group.jpg` (1600x900px)

#### **Values Section** (Optional)
- Add small icons/photos representing each value
- `public/images/values/compassion.jpg`
- `public/images/values/community.jpg`
- `public/images/values/impact.jpg`
- `public/images/values/innovation.jpg`

---

### **3. PROGRAMS PAGE (ProgramsNew.tsx)**

#### **Each Program** ⭐ PRIORITY 1
- **Education**: `public/images/programs/education-detail.jpg`
  - Classroom scenes
  - Students studying
  - Tutoring sessions
  
- **Healthcare**: `public/images/programs/healthcare-detail.jpg`
  - Health camps
  - Medical consultations
  - Medicine distribution
  
- **Community Development**: `public/images/programs/community-detail.jpg`
  - Workshops
  - Training sessions
  - Community events
  
- **Elderly Care**: `public/images/programs/elderly-detail.jpg`
  - Spending time with elderly
  - Care activities
  - Elderly engagement programs

**Recommended size**: 1200x800px each (landscape)

---

### **4. GET INVOLVED PAGE (GetInvolvedNew.tsx)**

#### **Volunteer Roles Section** ⭐ PRIORITY 2
- **Field Volunteer**: `public/images/volunteers/field-volunteer.jpg`
  - On-ground work
  - Teaching/helping communities
  
- **Event Coordinator**: `public/images/volunteers/event-coordinator.jpg`
  - Event setup
  - Managing activities
  
- **Content Creator**: `public/images/volunteers/content-creator.jpg`
  - Social media work
  - Photography/videography

**Recommended size**: 600x600px (square)

#### **How It Works Section** (Optional)
- Step-by-step photos showing volunteer journey
- Registration → Training → Action

---

### **5. IMPACT PAGE (ImpactNew.tsx)**

#### **Testimonials Section** ⭐ PRIORITY 1
- **Beneficiary Photos**: 
  - `public/images/testimonials/lakshmi.jpg`
  - `public/images/testimonials/rajesh.jpg`
  - `public/images/testimonials/priya.jpg`
- **Recommended size**: 300x300px (circular headshots)
- **Alternative**: Impact photos showing real work

#### **Program Impact Section** ⭐ PRIORITY 2
- Add photos showing results:
  - `public/images/impact/education-impact.jpg`
  - `public/images/impact/healthcare-impact.jpg`
  - `public/images/impact/community-impact.jpg`
- **Recommended size**: 1000x600px

---

## 📁 **Image Directory Structure**

```
public/
└── images/
    ├── hero-volunteers.jpg          # Home page hero
    ├── programs/
    │   ├── education.jpg            # Education card
    │   ├── education-detail.jpg     # Programs page
    │   ├── healthcare.jpg           # Healthcare card
    │   ├── healthcare-detail.jpg    # Programs page
    │   ├── community.jpg            # Community card
    │   ├── community-detail.jpg     # Programs page
    │   └── elderly-detail.jpg       # Elderly program
    ├── volunteers/
    │   ├── team-action.jpg          # Volunteer CTA section
    │   ├── field-volunteer.jpg      # Field role
    │   ├── event-coordinator.jpg    # Event role
    │   └── content-creator.jpg      # Content role
    ├── about/
    │   └── story.jpg                # About story section
    ├── team/
    │   ├── team-group.jpg           # Full team photo
    │   ├── leader-1.jpg             # Individual headshots
    │   ├── leader-2.jpg
    │   ├── leader-3.jpg
    │   └── leader-4.jpg
    ├── impact/
    │   ├── education-impact.jpg     # Impact results
    │   ├── healthcare-impact.jpg
    │   └── community-impact.jpg
    ├── testimonials/
    │   ├── lakshmi.jpg              # Testimonial photos
    │   ├── rajesh.jpg
    │   └── priya.jpg
    ├── events/
    │   ├── event-1.jpg              # Event gallery
    │   ├── event-2.jpg
    │   └── event-3.jpg
    └── values/
        ├── compassion.jpg           # Value icons
        ├── community.jpg
        ├── impact.jpg
        └── innovation.jpg
```

---

## 📸 **Image Guidelines**

### **Quality**
- **Minimum resolution**: 1920x1080px for hero images
- **Format**: JPG (optimized) or WebP for better performance
- **File size**: Keep under 500KB each (compress with TinyPNG/ImageOptim)

### **Content**
- ✅ **Good**: Real photos of volunteers, beneficiaries, events
- ✅ **Good**: Candid action shots showing genuine work
- ✅ **Good**: Diverse representation of community
- ❌ **Avoid**: Stock photos that look too generic
- ❌ **Avoid**: Overly posed or staged photos
- ❌ **Avoid**: Poor lighting or blurry images

### **Privacy & Permissions**
- Get written consent before using photos of children
- Blur faces if needed for privacy
- Avoid identifiable patient photos in healthcare contexts
- Get volunteer permission for public use

---

## 🚀 **Quick Start: Adding Your First Photo**

1. **Add hero image to Home page**:
   - Save your best team photo as `public/images/hero-volunteers.jpg`
   - The code will automatically display it

2. **Add program photos**:
   - Save 3 photos to `public/images/programs/`
   - Name them: `education.jpg`, `healthcare.jpg`, `community.jpg`

3. **Add about story photo**:
   - Save founder/team photo to `public/images/about/story.jpg`

---

## 🎨 **Where Photos Will Appear**

I've already updated the code to include image sections. Once you add photos to the folders above, they'll automatically appear in:

1. ✅ **Home page hero** - Full-width background
2. ✅ **Home programs section** - 3 program cards with images
3. ✅ **About story section** - Large image alongside text
4. ✅ **Programs page** - Each program with detail image
5. ✅ **Get Involved** - Volunteer role photos
6. ✅ **Impact page** - Testimonial photos and impact visuals

---

## 📝 **Priority Order**

### **Must Have (Start Here)**
1. Hero image on home page (`hero-volunteers.jpg`)
2. About story photo (`about/story.jpg`)
3. Three program photos (`programs/education.jpg`, etc.)

### **Nice to Have**
4. Volunteer role photos
5. Team member headshots
6. Testimonial photos
7. Event gallery

### **Optional**
8. Value section icons
9. Impact detail photos
10. Additional event photos

---

## 💡 **Tips for Best Results**

- Use **high-quality** photos showing real volunteers and beneficiaries
- Choose photos with **good lighting** and clear subjects
- Prefer **action shots** over posed photos
- Show **diversity** in your volunteer and beneficiary photos
- Use **landscape orientation** for hero/program images
- Use **square/portrait** for team headshots and testimonials
- **Compress** all images before uploading

---

**Need help?** Once you add images to the folders, they'll automatically show up on the website. The code is already set up to display them beautifully!
