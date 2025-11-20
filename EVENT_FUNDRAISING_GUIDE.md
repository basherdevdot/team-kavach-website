# 🎯 Event Details & Fundraising System - Complete Guide

## 📋 Table of Contents
1. [Overview](#overview)
2. [How It Works](#how-it-works)
3. [Event Detail Pages](#event-detail-pages)
4. [Fundraising Features](#fundraising-features)
5. [How to Update Events](#how-to-update-events)
6. [Donation Flow](#donation-flow)

---

## 🌟 Overview

Your website now has a **complete event management and fundraising system**! Here's what visitors can do:

### ✅ For Event Visitors:
- **Click on any event** on homepage → See full event details
- **View event description**, activities, venue, timings
- **See fundraising progress** (if event needs donations)
- **Donate directly** to specific events
- **Register as volunteer**
- **Share events** on WhatsApp/Facebook
- **Contact event organizers** directly

### ✅ For You (Admin):
- **Add events** by editing one JSON file
- **Enable fundraising** for specific events
- **Highlight featured events** with special badge
- **Update donation progress** easily
- **No coding or website rebuild needed!**

---

## 🔄 How It Works

### 1️⃣ Homepage Event Cards
- All events show on homepage in cards
- **Featured events** have ⭐ badge + red ring + pulse animation
- Click "View Details" → Goes to event detail page

### 2️⃣ Event Detail Page
Each event gets its own page with:
- **Hero section** with event poster
- **Quick info bar** - Date, Time, Location, Volunteers
- **Full description** with paragraphs
- **Activities list** - What happens at the event
- **What to bring** - Items volunteers should bring
- **Venue details** with full address
- **Fundraising card** (if enabled) - Shows donation progress
- **Volunteer registration** - Track how many signed up
- **Contact person** - Phone/Email
- **Share buttons** - WhatsApp & Facebook

### 3️⃣ Donation System
When someone wants to donate:
- Click "Donate Now" button → Goes to donation page
- **Event info shows** at top (goal, raised, progress bar)
- Select donation amount (₹500, ₹1000, ₹2500, etc.)
- Enter donor details (name, email, phone)
- Choose payment method:
  - **Card** - Credit/Debit card
  - **UPI** - Shows UPI ID
  - **Bank Transfer** - Shows bank details
- Complete donation

---

## 📄 Event Detail Pages

### What Visitors See:

#### Hero Section
- Large event poster image
- Featured badge (if highlighted)
- Event title & short description

#### Quick Info Bar
```
📅 Date          | 🕐 Time         | 📍 Location      | 👥 Volunteers
December 15      | 10:00 AM - 4 PM | Bangalore        | 18/25 Registered
```

#### Main Content
1. **About This Event** - Full description with multiple paragraphs
2. **Event Activities** - Checklist of activities
3. **What to Bring** - Items volunteers need
4. **Venue Details** - Full address with map icon

#### Sidebar Cards
1. **Fundraising Progress** (if enabled)
   - Shows: ₹32,000 raised of ₹50,000 goal
   - Progress bar with percentage
   - Deadline date
   - "Donate Now" button

2. **Volunteer Registration**
   - Shows: 18/25 volunteers registered
   - Progress bar
   - "Register to Volunteer" button
   - Spots remaining count

3. **Contact Information**
   - Contact person name
   - Phone number (clickable)
   - Email address (clickable)

4. **Share Event**
   - WhatsApp share button
   - Facebook share button

---

## 💰 Fundraising Features

### How to Enable Fundraising for an Event

In `public/data/events.json`, add these fields:

```json
{
  "id": 1,
  "title": "Education Drive 2025",
  
  // ... other fields ...
  
  "isFundraising": true,
  "donationLink": "/donate?event=education-drive-2025",
  "fundraising": {
    "goalAmount": 50000,
    "currentAmount": 32000,
    "currency": "₹",
    "deadline": "December 10, 2025"
  }
}
```

### Fundraising Features:

1. **Progress Tracking**
   - Shows amount raised vs goal
   - Animated progress bar
   - Percentage calculation
   - Deadline countdown

2. **Donate Now Button**
   - Links to donation page
   - Pre-fills event info
   - Shows event context

3. **Visual Indicators**
   - Heart icon
   - Gradient background (red to purple)
   - Animated progress bar
   - Trending up arrow with percentage

### How to Update Donation Progress

Just change the `currentAmount` in JSON:

```json
"fundraising": {
  "goalAmount": 50000,
  "currentAmount": 45000,  // ← Change this number
  "currency": "₹",
  "deadline": "December 10, 2025"
}
```

**That's it!** Refresh website → Progress bar updates automatically.

---

## 📝 How to Update Events

### File to Edit: `public/data/events.json`

### Example Event with ALL Features:

```json
{
  "id": 1,
  "title": "Education Drive 2025",
  "shortDescription": "Join us for a mega education support event helping 100+ students",
  "fullDescription": "Team Kavach is organizing a massive education drive...\n\nWhat We'll Provide:\n• 100+ School bags\n• Textbooks and notebooks\n\nYour contribution will directly impact a child's future.",
  "date": "15",
  "month": "DEC",
  "year": "2025",
  "fullDate": "December 15, 2025",
  "time": "10:00 AM - 4:00 PM",
  "location": "Bangalore",
  "venue": "Government School, Whitefield",
  "address": "123 School Road, Whitefield, Bangalore - 560066",
  "posterUrl": "/images/events/upcoming/event-1.jpg",
  "registrationLink": "/get-involved",
  "donationLink": "/donate?event=education-drive-2025",
  "isHighlighted": true,
  "isFundraising": true,
  "fundraising": {
    "goalAmount": 50000,
    "currentAmount": 32000,
    "currency": "₹",
    "deadline": "December 10, 2025"
  },
  "whatToBring": [
    "Enthusiasm to make a difference",
    "Comfortable clothing",
    "Water bottle"
  ],
  "activities": [
    "Distribution of school supplies",
    "Interactive learning sessions",
    "Career guidance talks",
    "Fun activities with children"
  ],
  "contactPerson": {
    "name": "Volunteer Coordinator",
    "phone": "+91 80 1234 5678",
    "email": "events@teamkavach.org"
  },
  "volunteers": {
    "needed": 25,
    "registered": 18
  }
}
```

### Field Explanations:

| Field | Purpose | Example |
|-------|---------|---------|
| `id` | Unique number for each event | `1, 2, 3...` |
| `title` | Event name | `"Education Drive 2025"` |
| `shortDescription` | Brief summary (shows on cards) | `"Join us for..."` |
| `fullDescription` | Complete details (shows on detail page) | Long text with `\n\n` for paragraphs |
| `date` | Day of month | `"15"` |
| `month` | Month abbreviation | `"DEC"` |
| `year` | Year | `"2025"` |
| `fullDate` | Full date string | `"December 15, 2025"` |
| `time` | Event timings | `"10:00 AM - 4:00 PM"` |
| `location` | City/area | `"Bangalore"` |
| `venue` | Specific venue name | `"Government School, Whitefield"` |
| `address` | Full address | `"123 School Road..."` |
| `posterUrl` | Event poster image path | `"/images/events/upcoming/event-1.jpg"` |
| `registrationLink` | Volunteer signup page | `"/get-involved"` |
| `donationLink` | Donation page with event | `"/donate?event=education-drive-2025"` |
| `isHighlighted` | Show featured badge? | `true` or `false` |
| `isFundraising` | Enable fundraising? | `true` or `false` |
| `fundraising` | Donation details | Object with goal, current, deadline |
| `whatToBring` | Items volunteers should bring | Array of strings |
| `activities` | Event activities list | Array of strings |
| `contactPerson` | Organizer contact | Object with name, phone, email |
| `volunteers` | Volunteer tracking | Object with needed & registered count |

### Tips:

1. **Multiple Paragraphs in Description**
   - Use `\n\n` between paragraphs
   - Each `\n\n` creates a new paragraph

2. **Bullet Points**
   - Use `\n•` for bullets
   - Example: `"What We'll Provide:\n• Item 1\n• Item 2"`

3. **Event Without Fundraising**
   ```json
   "isFundraising": false,
   "fundraising": null,
   "donationLink": null
   ```

4. **Featured Event**
   - Only set ONE event to `"isHighlighted": true`
   - This shows ⭐ badge + red ring + pulse animation

---

## 💳 Donation Flow

### Step-by-Step User Journey:

1. **User clicks event card** on homepage
   → Goes to `/events/1` (event detail page)

2. **Sees fundraising card** in sidebar
   - Current progress: ₹32,000 / ₹50,000
   - Animated progress bar showing 64%
   - Deadline warning

3. **Clicks "Donate Now" button**
   → Goes to `/donate?event=education-drive-2025`

4. **Donation page shows:**
   - Event info at top (goal, raised, progress)
   - Amount selection buttons (₹500, ₹1000, etc.)
   - Custom amount option
   - Donor information form
   - Payment method selection

5. **User selects payment method:**

   **Option A: Card Payment**
   - Click card icon
   - Click "Donate ₹1000" button
   - Goes to payment gateway (to be integrated)

   **Option B: UPI**
   - Click UPI icon
   - Shows UPI ID: `teamkavach@upi`
   - User pays via any UPI app
   - Screenshot to `donations@teamkavach.org`

   **Option C: Bank Transfer**
   - Click bank icon
   - Shows bank details:
     ```
     Bank: HDFC Bank
     Account: Team Kavach
     Number: 1234567890
     IFSC: HDFC0001234
     ```
   - User transfers money
   - Emails transaction reference

6. **After donation:**
   - You update `currentAmount` in JSON
   - Progress bar automatically updates
   - Other visitors see new progress

---

## 🎨 Visual Features

### Featured Event Badge
```
⭐ FEATURED
```
- Appears on event card
- Red background, white text
- Pulse animation
- Red ring around card

### Progress Bars
- Animated fill effect
- Gradient colors (red to yellow)
- Percentage display
- Smooth transitions

### Fundraising Card
- Gradient background (red/purple)
- Heart icon
- Large donation amounts
- Trending arrow
- Prominent "Donate Now" button

### Contact Cards
- Icon for each contact method
- Clickable phone (opens dialer)
- Clickable email (opens mail app)

---

## 🚀 Quick Actions

### Highlight a Different Event
In `events.json`, change which event has `"isHighlighted": true`:

```json
// Event 1
"isHighlighted": false,  // Remove highlight

// Event 2
"isHighlighted": true,   // Add highlight here
```

### Update Fundraising Progress
Just change one number:
```json
"currentAmount": 45000,  // Was 32000, now 45000
```

### Add New Event
Copy any existing event object, change `id` and details:
```json
{
  "id": 4,  // New unique ID
  "title": "New Event Name",
  // ... rest of fields
}
```

### Remove Event
Delete the entire event object from the array.

### Disable Fundraising
```json
"isFundraising": false,
"fundraising": null,
"donationLink": null
```

---

## 📞 Support

Need help? Contact:
- **Email:** support@teamkavach.org
- **Phone:** +91 80 1234 5678

---

## ✅ Summary

**What You Can Now Do:**
- ✅ Click any event → See full details
- ✅ Track fundraising progress with progress bars
- ✅ Accept donations for specific events
- ✅ Show volunteer registration progress
- ✅ Display event activities and requirements
- ✅ Share events on social media
- ✅ Update everything via simple JSON editing
- ✅ No coding or website rebuild needed!

**Remember:** Every time you edit `public/data/events.json` and save, just **refresh your browser** to see changes immediately!

---

🎉 **Your event fundraising system is ready to use!**
