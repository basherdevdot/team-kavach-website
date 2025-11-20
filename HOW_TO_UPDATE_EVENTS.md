# 🎉 HOW TO UPDATE WEBSITE - NO CODE NEEDED!

## ✅ **You're Right! This is the BEST Way!**

Now you can **update events & Instagram WITHOUT rebuilding** the website!

---

## 📝 **How to Update Events & Instagram**

### **Step 1: Open the JSON File**

Go to: `public/data/events.json`

You'll see something like this:

```json
{
  "upcomingEvents": [
    {
      "id": 1,
      "title": "Education Drive 2025",
      "description": "Join us for a mega education support event...",
      "date": "15",
      "month": "DEC",
      "location": "Bangalore",
      "posterUrl": "/images/events/upcoming/event-1.jpg",
      "registrationLink": "/get-involved",
      "isHighlighted": true  ← This makes it FEATURED!
    }
  ],
  "instagramPosts": [
    "https://www.instagram.com/p/DQg6LPzE0sY/",
    "https://www.instagram.com/p/DQg6LPzE0sY/",
    "https://www.instagram.com/p/DQg6LPzE0sY/",
    "https://www.instagram.com/p/DQg6LPzE0sY/"
  ]
}
```

---

### **Step 2: Edit What You Want**

#### **To Change Event Details:**
```json
{
  "title": "NEW EVENT NAME HERE",  ← Change this
  "description": "Event description...",
  "date": "25",  ← Change date
  "month": "JAN",  ← Change month
  "location": "Koramangala",  ← Change location
  "isHighlighted": true  ← true = ⭐ FEATURED, false = normal
}
```

#### **To Highlight/Feature an Event:**
```json
"isHighlighted": true  ← This adds ⭐ FEATURED badge + pulsing ring
```

Only ONE event should have `"isHighlighted": true`

#### **To Add New Event:**
Copy an existing event block and add it:
```json
{
  "id": 4,  ← New ID
  "title": "Blood Donation Camp",
  "description": "Help save lives...",
  "date": "10",
  "month": "FEB",
  "location": "HSR Layout",
  "posterUrl": "/images/events/upcoming/event-4.jpg",
  "registrationLink": "/get-involved",
  "isHighlighted": false
}
```

#### **To Update Instagram Posts:**
```json
"instagramPosts": [
  "https://www.instagram.com/p/YOUR_POST_1/",  ← Paste new URLs here
  "https://www.instagram.com/p/YOUR_POST_2/",
  "https://www.instagram.com/p/YOUR_POST_3/",
  "https://www.instagram.com/p/YOUR_POST_4/"
]
```

---

### **Step 3: Save & Refresh**

1. **Save** the `events.json` file
2. **Refresh** your browser (Ctrl+F5)
3. **Done!** Changes appear immediately! 🎉

---

## 🎯 **What's Featured/Highlighted?**

When you set `"isHighlighted": true` on an event:
- ⭐ **"FEATURED" badge** appears (animated pulse)
- **Red ring** around the card (ring-4 ring-primary)
- **Stands out** from other events

**Best Practice:** Only highlight 1 event at a time (your most important upcoming event)

---

## 📸 **How to Get Instagram Post URLs**

1. Open **Instagram app or web**
2. Go to the post you want
3. Click **"..."** (three dots)
4. Click **"Copy Link"**
5. Paste into `events.json`

---

## 🚀 **Benefits of This Approach**

✅ **No coding needed** - Just edit text in JSON file
✅ **No rebuild** - Changes appear on refresh
✅ **Easy to manage** - One file controls everything
✅ **Anyone can update** - Send JSON file to client
✅ **Instant updates** - No deployment needed

---

## 📋 **Full Example: events.json**

```json
{
  "upcomingEvents": [
    {
      "id": 1,
      "title": "Education Drive 2025",
      "description": "Join us for a mega education support event helping 100+ students with books and supplies",
      "date": "15",
      "month": "DEC",
      "location": "Bangalore",
      "posterUrl": "/images/events/upcoming/event-1.jpg",
      "registrationLink": "/get-involved",
      "isHighlighted": true
    },
    {
      "id": 2,
      "title": "Free Health Camp",
      "description": "Free medical check-ups and consultations for underprivileged families",
      "date": "22",
      "month": "DEC",
      "location": "Whitefield",
      "posterUrl": "/images/events/upcoming/event-2.jpg",
      "registrationLink": "/get-involved",
      "isHighlighted": false
    },
    {
      "id": 3,
      "title": "Community Gathering",
      "description": "Monthly community meet to celebrate our achievements together",
      "date": "31",
      "month": "DEC",
      "location": "Koramangala",
      "posterUrl": "/images/events/upcoming/event-3.jpg",
      "registrationLink": "/get-involved",
      "isHighlighted": false
    }
  ],
  "instagramPosts": [
    "https://www.instagram.com/p/DQg6LPzE0sY/",
    "https://www.instagram.com/p/ABC123/",
    "https://www.instagram.com/p/DEF456/",
    "https://www.instagram.com/p/GHI789/"
  ]
}
```

---

##  **Common Tasks**

### **Want to feature a different event?**
1. Find the event you want to highlight
2. Change its `"isHighlighted": true`
3. Change all others to `"isHighlighted": false`
4. Save & refresh!

### **Event is over, want to remove it?**
1. Delete the entire event block (including curly braces)
2. Make sure you keep the commas right between events
3. Save & refresh!

### **New Instagram post?**
1. Copy the post link
2. Replace one of the URLs in `instagramPosts` array
3. Save & refresh!

---

## 🎯 **This is EXACTLY What You Wanted!**

**Before:** Had to edit React code → Rebuild → Redeploy (NOT GOOD!)

**Now:** Edit JSON file → Save → Refresh browser (PERFECT!) ✅

**Client Can:**
- Update event details in 30 seconds
- Highlight important events
- Change Instagram posts
- Add/remove events
- **NO coding required!**

---

## 📞 **Need Help?**

Just send me the JSON file and I'll help you format it correctly!

**Location of file:** `public/data/events.json`

**That's it! You're all set, mate!** 🎉
