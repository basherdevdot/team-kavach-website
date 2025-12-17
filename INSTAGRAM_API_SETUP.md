# Instagram API Integration Guide

## 🎯 Complete Guide to Fetch Instagram Posts Dynamically

This guide walks you through setting up Instagram Basic Display API to fetch posts dynamically instead of hardcoding URLs.

---

## 📋 Table of Contents
1. [Prerequisites](#prerequisites)
2. [Setup Instagram App](#setup-instagram-app)
3. [Get Access Token](#get-access-token)
4. [Configure Your Project](#configure-your-project)
5. [Usage Examples](#usage-examples)
6. [Alternative Solutions](#alternative-solutions)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

- Instagram account (converted to Business or Creator account)
- Facebook account (to access Meta Developer Console)
- Your website must use HTTPS (required for production)

---

## 🚀 Step 1: Setup Instagram App

### 1.1 Create Facebook App

1. Go to [Meta Developers](https://developers.facebook.com/)
2. Click **"My Apps"** → **"Create App"**
3. Choose **"Consumer"** or **"Other"**
4. Fill in details:
   - **App Name**: Team Kavach Website
   - **App Contact Email**: teamkavach1@gmail.com
5. Click **"Create App"**

### 1.2 Add Instagram Basic Display Product

1. In your app dashboard, scroll to **"Add Products"**
2. Find **"Instagram Basic Display"** and click **"Set Up"**
3. Click **"Create New App"** in the Instagram Basic Display panel
4. Fill in:
   - **Display Name**: Team Kavach
   - **Privacy Policy URL**: Your website URL (e.g., https://teamkavach.org/privacy)
   - **Terms of Service URL**: Your website URL (e.g., https://teamkavach.org/terms)

### 1.3 Configure OAuth Settings

In **Basic Display** → **Settings**:

**Valid OAuth Redirect URIs**:
```
https://localhost:5173/auth/instagram/callback
https://yourdomain.com/auth/instagram/callback
```

**Deauthorize Callback URL**:
```
https://yourdomain.com/auth/instagram/deauth
```

**Data Deletion Request URL**:
```
https://yourdomain.com/auth/instagram/delete
```

Save changes.

---

## 🔑 Step 2: Get Access Token

### 2.1 Add Instagram Test User

1. Go to **Instagram Basic Display** → **User Token Generator**
2. Click **"Add or Remove Instagram Testers"**
3. It will redirect to Instagram → Add your Instagram username
4. Accept the invitation in your Instagram app:
   - Go to Settings → Apps and Websites → Tester Invites → Accept

### 2.2 Generate Access Token

1. Back in Meta Developers, refresh the page
2. Click **"Generate Token"** next to your Instagram account
3. Login with Instagram and authorize the app
4. **Copy the Access Token** (starts with `IGQW...`)
5. Also copy your **Instagram User ID** (numeric)

### 2.3 Convert to Long-Lived Token

Short-lived tokens expire in 1 hour. Convert to long-lived (60 days):

```bash
curl -X GET "https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=YOUR_APP_SECRET&access_token=SHORT_LIVED_TOKEN"
```

Or use this online tool: https://developers.facebook.com/tools/debug/accesstoken/

**Response**:
```json
{
  "access_token": "LONG_LIVED_TOKEN",
  "token_type": "bearer",
  "expires_in": 5184000
}
```

Save this **long-lived token** - it's valid for 60 days!

---

## ⚙️ Step 3: Configure Your Project

### 3.1 Create `.env` File

Create `.env` in your project root:

```env
# Instagram API Configuration
VITE_INSTAGRAM_ACCESS_TOKEN=YOUR_LONG_LIVED_TOKEN_HERE
VITE_INSTAGRAM_USER_ID=YOUR_INSTAGRAM_USER_ID_HERE
```

**Important**: Add `.env` to `.gitignore` (already done in most projects)

### 3.2 Update `.env.example`

Create `.env.example` as a template:

```env
# Instagram API Configuration
VITE_INSTAGRAM_ACCESS_TOKEN=your_instagram_access_token
VITE_INSTAGRAM_USER_ID=your_instagram_user_id
```

---

## 📱 Step 4: Usage Examples

### 4.1 Basic Usage in Any Component

```tsx
import { InstagramFeed } from '@/components/InstagramFeed';

function MyPage() {
  return (
    <div>
      <h2>Follow Us on Instagram</h2>
      <InstagramFeed limit={8} columns={4} showCaption={false} />
    </div>
  );
}
```

### 4.2 Using the Hook Directly

```tsx
import { useInstagram } from '@/hooks/useInstagram';

function CustomInstagramSection() {
  const { posts, loading, error, refetch } = useInstagram(6);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {posts.map(post => (
        <a key={post.id} href={post.permalink} target="_blank">
          <img src={post.media_url} alt={post.caption || 'Instagram'} />
        </a>
      ))}
      <button onClick={refetch}>Refresh</button>
    </div>
  );
}
```

### 4.3 Using the Service Directly

```tsx
import { fetchInstagramPosts } from '@/services/instagram';

async function loadPosts() {
  const posts = await fetchInstagramPosts(10);
  console.log(posts);
}
```

---

## 🔄 Step 5: Token Refresh (Important!)

Long-lived tokens expire after 60 days. You need to refresh them.

### Option A: Manual Refresh

Before expiry, run this in your browser console or Postman:

```javascript
fetch(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=YOUR_CURRENT_TOKEN`)
  .then(r => r.json())
  .then(data => console.log('New token:', data.access_token));
```

Update your `.env` with the new token.

### Option B: Automated Refresh (Recommended)

Create a backend endpoint that refreshes the token automatically every 50 days.

**Node.js Example**:
```javascript
const cron = require('node-cron');
const fetch = require('node-fetch');
const fs = require('fs');

// Run every 50 days
cron.schedule('0 0 */50 * *', async () => {
  const currentToken = process.env.INSTAGRAM_TOKEN;
  
  const response = await fetch(
    `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${currentToken}`
  );
  
  const data = await response.json();
  
  // Save new token (implement your own logic)
  console.log('New token:', data.access_token);
  // Update .env or database
});
```

---

## 🎨 Component Props

### `<InstagramFeed>` Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `limit` | `number` | `8` | Number of posts to fetch (max 25) |
| `columns` | `2 \| 3 \| 4` | `4` | Grid columns layout |
| `showCaption` | `boolean` | `false` | Show caption on hover |

---

## 🔍 API Endpoints & Limits

### Instagram Basic Display API

**Endpoint**: `https://graph.instagram.com/{user-id}/media`

**Rate Limits**:
- 200 requests per hour per user
- 5000 requests per hour per app

**Available Fields**:
```
id, caption, media_type, media_url, permalink, 
thumbnail_url, timestamp, username
```

**Media Types**:
- `IMAGE` - Single image
- `VIDEO` - Single video
- `CAROUSEL_ALBUM` - Multiple images/videos

---

## 🆚 Alternative Solutions

### 1. Instagram Graph API (Business/Creator Accounts)

**Pros**:
- More features (insights, mentions, hashtags)
- Higher rate limits
- Better for business accounts

**Cons**:
- Requires Business/Creator Instagram account
- Needs Facebook Page connection
- More complex setup

### 2. Third-Party Services (Easiest)

#### A. **Juicer.io**
- **Price**: Free tier available
- **Features**: Social media aggregation
- **Setup**: 5 minutes
```html
<script src="https://assets.juicer.io/embed.js"></script>
<ul class="juicer-feed" data-feed-id="teamkavach"></ul>
```

#### B. **SnapWidget**
- **Price**: Free for basic
- **Features**: Instagram widgets
- **URL**: https://snapwidget.com/

#### C. **Instafeed.js** (Open Source)
- **GitHub**: https://github.com/stevenschobert/instafeed.js
- **Price**: Free
- **Note**: Requires access token

### 3. Web Scraping (Not Recommended)

Instagram's Terms of Service prohibit scraping. Use official APIs only.

---

## 🐛 Troubleshooting

### Error: "Invalid OAuth access token"

**Solution**: 
1. Check if token is expired (60 days)
2. Regenerate token from Meta Developer Console
3. Update `.env` file
4. Restart dev server

### Error: "User does not exist"

**Solution**: 
1. Verify `VITE_INSTAGRAM_USER_ID` is correct
2. Ensure Instagram account accepted tester invite
3. Check if account is set to Business/Creator

### Posts Not Showing

**Solution**:
1. Open browser console and check for errors
2. Verify `.env` variables are loaded:
   ```javascript
   console.log(import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN);
   ```
3. Check if Instagram account has public posts
4. Clear localStorage cache:
   ```javascript
   localStorage.removeItem('instagram_posts_cache');
   ```

### CORS Error

**Solution**:
Instagram Basic Display API supports CORS. If you get CORS errors:
1. Make sure you're using the correct endpoint
2. Don't use proxy - fetch directly
3. Check if token is valid

### Rate Limit Exceeded

**Solution**:
1. Use the caching feature (already implemented)
2. Cache posts for 1 hour minimum
3. Consider storing posts in your database

---

## 🎯 Production Checklist

- [ ] Convert to long-lived access token
- [ ] Set up token refresh mechanism
- [ ] Add `.env` to `.gitignore`
- [ ] Test with production domain
- [ ] Update OAuth redirect URIs
- [ ] Set up error monitoring
- [ ] Add fallback UI for API failures
- [ ] Test rate limiting behavior
- [ ] Configure caching strategy
- [ ] Document token refresh process

---

## 📊 Comparison: Hardcoded vs API

| Feature | Hardcoded URLs | Instagram API |
|---------|---------------|---------------|
| Setup Time | 2 minutes | 30-60 minutes |
| Maintenance | Manual updates | Automatic |
| Rate Limits | None | 200/hour |
| Cost | Free | Free |
| Token Expiry | N/A | Every 60 days |
| Real-time | No | Yes (with cache) |
| Captions | No | Yes |
| Metadata | Limited | Full |

---

## 🚀 Quick Start (TL;DR)

1. Create Facebook App at https://developers.facebook.com/
2. Add Instagram Basic Display product
3. Generate access token
4. Add to `.env`:
   ```
   VITE_INSTAGRAM_ACCESS_TOKEN=your_token
   VITE_INSTAGRAM_USER_ID=your_id
   ```
5. Use in component:
   ```tsx
   <InstagramFeed limit={8} columns={4} />
   ```
6. Refresh token every 60 days

---

## 📚 Resources

- [Instagram Basic Display API Docs](https://developers.facebook.com/docs/instagram-basic-display-api)
- [Meta Developer Console](https://developers.facebook.com/)
- [Token Debug Tool](https://developers.facebook.com/tools/debug/accesstoken/)
- [Instagram Graph API Explorer](https://developers.facebook.com/tools/explorer/)

---

## 💡 Pro Tips

1. **Cache Wisely**: Cache posts for at least 1 hour to avoid rate limits
2. **Fallback Data**: Keep hardcoded URLs as fallback if API fails
3. **Error Boundaries**: Wrap Instagram component in error boundary
4. **Loading States**: Always show loading indicators
5. **Token Management**: Set calendar reminder for token refresh
6. **Backup Strategy**: Store posts in your database as backup
7. **Performance**: Lazy load images using native lazy loading
8. **Analytics**: Track which posts get most clicks

---

## 🎉 Summary

You now have:
- ✅ Dynamic Instagram feed
- ✅ Automatic updates
- ✅ Caching to avoid rate limits
- ✅ Error handling
- ✅ Beautiful UI
- ✅ TypeScript support

**Next Steps**: Set up token refresh automation and monitor your API usage!

---

**Need Help?**
- Instagram API Issues: https://developers.facebook.com/community/
- Project Issues: Create a GitHub issue
- Email: teamkavach1@gmail.com
