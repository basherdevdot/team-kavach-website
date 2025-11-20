# TeamKavach - Charity Trust Website

> A modern, dynamic website for TeamKavach NGO showcasing their impact, programs, and community work across India.

## 🎨 **Design Philosophy**

This is a **charity trust website** (not a volunteering platform) designed to:
- **Showcase Impact**: Real stories, metrics, and transformations
- **Inspire Action**: Multiple ways to get involved (volunteer, donate, partner, sponsor)
- **Build Trust**: Transparent about programs, impact, and community work
- **Engage Emotionally**: Warm colors, powerful imagery, compelling narratives

**Design Inspiration**: Make A Difference (MAD) India, iVolunteer

---

## ✨ **Key Features**

### 🎯 **Core Pages**
1. **Home** - Story-driven hero with scroll animations, impact stats, programs showcase, Instagram feed
2. **Our Programs** - Education, Healthcare, Elderly Care, Women Empowerment, Community Development
3. **Our Impact** - Metrics, stories, testimonials, timeline of milestones
4. **Stories** - Real volunteer and beneficiary stories
5. **Get Involved** - Volunteer, Donate, Partner, Sponsor
6. **About Us** - Mission, team, partners, governance
7. **Contact** - Multi-channel contact options

### 🎨 **Design System**

**Color Palette** (Warm Charity Theme):
- **Primary**: `hsl(14, 100%, 57%)` - Warm red/orange from logo
- **Secondary**: `hsl(0, 0%, 15%)` - Deep charcoal for text
- **Accent**: `hsl(25, 95%, 53%)` - Vibrant orange
- **Background**: Pure white for clean, trustworthy look

**Typography**:
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, large, emotional
- **Body**: Readable, professional

### 🎭 **Animations** (Framer Motion)

- **Parallax Scrolling**: Hero section scales and fades on scroll
- **Fade In Up**: Sections animate into view as you scroll
- **Stagger Children**: Elements appear sequentially for elegance
- **Scale In**: Cards and stats pop in with scale animation
- **Hover Effects**: Cards lift, images zoom, buttons transform
- **Scroll Progress**: Smooth scroll indicators and progress tracking

---

## 🚀 **Technology Stack**

| Category | Technology |
|----------|-----------|
| **Framework** | React 18.3.1 |
| **Language** | TypeScript 5.6.2 |
| **Build Tool** | Vite 5.4.5 (SWC for ultra-fast compilation) |
| **Styling** | Tailwind CSS 3.4.11 + Custom theme |
| **Components** | shadcn/ui (Radix UI primitives) |
| **Animations** | Framer Motion 11.5.4 |
| **Routing** | React Router DOM 6.26.0 |
| **Icons** | Lucide React 0.446.0 |

### Why shadcn/ui?
- ✅ **Production-ready**: Battle-tested, accessible components
- ✅ **Built on Radix UI**: Keyboard navigation, ARIA labels, WCAG compliant
- ✅ **Customizable**: Own the code, style with Tailwind
- ✅ **Type-safe**: Full TypeScript support
- ✅ **No dependency hell**: Copy components you need

---

## 📁 **Project Structure**

```
Team Kavach/
├── src/
│   ├── components/
│   │   ├── ui/               # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── accordion.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   └── textarea.tsx
│   │   └── layout/
│   │       ├── Navbar.tsx    # Responsive navigation
│   │       ├── Footer.tsx    # Site footer
│   │       └── AppLayout.tsx # Main layout wrapper
│   ├── pages/
│   │   ├── NewHome.tsx       # ⭐ New charity-focused home
│   │   ├── Programs.tsx      # All programs showcase
│   │   ├── GetInvolved.tsx   # Ways to contribute
│   │   ├── Impact.tsx        # Impact metrics & stories
│   │   ├── Stories.tsx       # Story listing
│   │   ├── StoryDetail.tsx   # Individual story
│   │   ├── About.tsx         # About TeamKavach
│   │   ├── Contact.tsx       # Contact information
│   │   ├── Donate.tsx        # Donation page
│   │   └── FAQ.tsx           # Frequently asked questions
│   ├── data/
│   │   ├── programs.ts       # ⭐ New programs data
│   │   ├── stories.ts        # Story content
│   │   └── mockData.ts       # Supporting data
│   ├── lib/
│   │   └── utils.ts          # shadcn/ui utilities (cn helper)
│   ├── router/
│   │   └── index.tsx         # ⭐ Updated route configuration
│   ├── types/
│   │   └── index.ts          # TypeScript interfaces
│   ├── index.css             # ⭐ Updated global styles + CSS variables
│   └── main.tsx              # Application entry point
├── public/                   # Static assets
├── package.json              # ⭐ Updated dependencies
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # ⭐ Updated Tailwind theme
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

---

## 🛠️ **Getting Started**

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation

```bash
# Navigate to project directory
cd "d:\project_trading\Team Kavach"

# Install dependencies (already done)
npm install

# Start development server (already running)
npm run dev
```

**App URL**: http://localhost:5173/

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🎨 **Customization Guide**

### Update Brand Colors

Edit `src/index.css`:

```css
:root {
  --primary: 14 100% 57%;      /* Warm red/orange */
  --secondary: 0 0% 15%;       /* Charcoal */
  --accent: 25 95% 53%;        /* Orange */
}
```

### Add New Program

Edit `src/data/programs.ts`:

```typescript
{
  id: '6',
  title: 'Your New Program',
  slug: 'new-program',
  tagline: 'Brief tagline',
  description: 'Full description...',
  icon: '🎯',
  color: 'from-blue-500 to-blue-700',
  image: 'https://...',
  stats: [...],
  highlights: [...],
  stories: [...]
}
```

### Update Navigation

Edit `src/components/layout/Navbar.tsx`:

```typescript
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Your Page', path: '/your-page' },
  // ...
];
```

---

## 📸 **Instagram Integration** (Next Steps)

### Option 1: Instagram Basic Display API

```bash
npm install axios
```

Create `src/services/instagram.ts`:

```typescript
export async function getInstagramFeed() {
  const response = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${YOUR_ACCESS_TOKEN}`
  );
  return response.json();
}
```

### Option 2: EmbedSocial / Curator.io
- No coding required
- Generate embed code
- Paste into `NewHome.tsx` Instagram section

### Option 3: Static Feed
- Manually update with latest Instagram images
- Store in `src/data/instagramPosts.ts`

---

## 🚀 **Deployment**

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag 'dist' folder to Netlify
```

### Traditional Hosting

```bash
npm run build
# Upload 'dist' folder to your server
```

---

## 📋 **Next Steps**

- [ ] **Instagram API Integration** - Show live posts from TeamKavach's Instagram
- [ ] **Real Images** - Replace placeholder images with actual TeamKavach photos
- [ ] **Donate Page** - Build payment integration (Razorpay, PayPal, etc.)
- [ ] **CMS Integration** - Connect to Strapi/Contentful for dynamic content management
- [ ] **Blog System** - Add full blog functionality for stories
- [ ] **Analytics** - Add Google Analytics / Mixpanel
- [ ] **SEO Optimization** - Meta tags, Open Graph, Schema.org markup
- [ ] **Performance** - Image optimization, lazy loading, code splitting
- [ ] **Accessibility Audit** - WCAG 2.1 AA compliance testing
- [ ] **Multi-language** - Add Hindi and regional language support

---

## 🤝 **Contributing**

This website is built for TeamKavach NGO. To contribute:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit pull request with description

---

## 📞 **Support**

For questions about the website:
- **Technical Issues**: Check browser console for errors
- **Design Changes**: Refer to Tailwind CSS and Framer Motion docs
- **Content Updates**: Edit files in `src/data/` directory

---

## 📄 **License**

This project is built for TeamKavach NGO. All rights reserved.

---

**Built with ❤️ for TeamKavach**

*Making a difference, one line of code at a time.*
