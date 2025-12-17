# How to Replace Hardcoded Instagram URLs with Dynamic API

This guide shows how to update `HomeNew.tsx` to use the Instagram API instead of hardcoded URLs.

---

## Current Implementation (Hardcoded)

Currently in `HomeNew.tsx`:

```tsx
// Old way - fetching from events.json
const [instagramUrls, setInstagramUrls] = useState<string[]>([]);

useEffect(() => {
  fetch('/data/events.json')
    .then(res => res.json())
    .then(data => {
      setInstagramUrls(data.instagramPosts || []);
    });
}, []);

// Rendering
{instagramUrls.map((url, index) => (
  <InstagramEmbed url={url} width={328} />
))}
```

---

## New Implementation (Dynamic API)

### Option 1: Using the Custom Component (Recommended)

Replace the Instagram section in `HomeNew.tsx`:

```tsx
// Import the new component
import { InstagramFeed } from '@/components/InstagramFeed';

// Remove old state and useEffect for Instagram
// Delete these lines:
// const [instagramUrls, setInstagramUrls] = useState<string[]>([]);
// And the fetch logic in useEffect

// In your render (around line 635):
<section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <div className="inline-flex items-center gap-3 mb-4 text-primary">
        <IconBrandInstagram className="w-6 h-6" />
        <span className="font-black uppercase tracking-wide">Live from Instagram</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
        Follow Our Journey
      </h2>
      <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
        Stay updated with our latest initiatives and impact stories
      </p>
    </motion.div>

    {/* New Dynamic Instagram Feed */}
    <InstagramFeed limit={8} columns={4} showCaption={false} />

    {/* Follow Button */}
    <div className="text-center mt-12">
      <a 
        href="https://www.instagram.com/teamkavach/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-2xl font-black hover:scale-105 transition-all shadow-lg"
      >
        <IconBrandInstagram className="w-6 h-6" />
        Follow Us on Instagram
      </a>
    </div>
  </div>
</section>
```

---

### Option 2: Using the Hook Directly (More Control)

If you want to keep your custom carousel design:

```tsx
import { useInstagram } from '@/hooks/useInstagram';

function HomeNew() {
  // Replace old instagramUrls state with this:
  const { posts: instagramPosts, loading: instagramLoading, error: instagramError } = useInstagram(8);

  // In your render:
  <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
    <div className="container mx-auto px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-3 mb-4 text-primary">
          <IconBrandInstagram className="w-6 h-6" />
          <span className="font-black uppercase tracking-wide">Live from Instagram</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Follow Our Journey
        </h2>
      </motion.div>

      {/* Loading State */}
      {instagramLoading && (
        <div className="text-center py-12">
          <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
          <p className="mt-4 text-foreground/70">Loading Instagram posts...</p>
        </div>
      )}

      {/* Error State */}
      {instagramError && (
        <div className="text-center py-12">
          <p className="text-red-500">Failed to load Instagram posts</p>
        </div>
      )}

      {/* Instagram Posts */}
      {!instagramLoading && !instagramError && (
        <div className="relative">
          {/* Horizontal Scrolling Carousel */}
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
            {instagramPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[328px] snap-center"
              >
                <a
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all">
                    {/* Post Image */}
                    <img
                      src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                      alt={post.caption || 'Instagram post'}
                      className="w-full h-[328px] object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <div className="text-white">
                        {post.caption && (
                          <p className="text-sm line-clamp-3 mb-2">{post.caption}</p>
                        )}
                        <div className="flex items-center gap-2">
                          <IconBrandInstagram className="w-4 h-4" />
                          <span className="text-xs">View on Instagram</span>
                        </div>
                      </div>
                    </div>

                    {/* Video/Carousel indicator */}
                    {post.media_type === 'VIDEO' && (
                      <div className="absolute top-4 right-4 bg-black/70 rounded-full p-2">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    )}
                    {post.media_type === 'CAROUSEL_ALBUM' && (
                      <div className="absolute top-4 right-4 bg-black/70 rounded-full p-2">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Follow Button */}
          <div className="text-center mt-12">
            <a href="https://www.instagram.com/teamkavach/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <IconBrandInstagram className="w-6 h-6" />
              Follow Us on Instagram
            </a>
          </div>
        </div>
      )}
    </div>
  </section>
}
```

---

### Option 3: Hybrid Approach (Fallback)

Keep hardcoded URLs as fallback if API fails:

```tsx
import { useInstagram } from '@/hooks/useInstagram';

function HomeNew() {
  // Fallback hardcoded URLs
  const fallbackUrls = [
    "https://www.instagram.com/p/DQg6LPzE0sY/",
    "https://www.instagram.com/p/DHlo7LyTKBM/",
    "https://www.instagram.com/p/DKm2As8zOu0/",
    "https://www.instagram.com/p/DLMQKuuThAo/"
  ];

  const { posts, loading, error } = useInstagram(8);
  
  // Use API posts if available, otherwise use fallback
  const instagramData = posts.length > 0 
    ? posts 
    : fallbackUrls.map(url => ({
        id: url,
        permalink: url,
        media_url: '', // Will use InstagramEmbed component
        media_type: 'IMAGE' as const,
        timestamp: ''
      }));

  // Rest of your component...
}
```

---

## Migration Steps

### Step 1: Install Dependencies (if needed)
The Instagram API integration uses only native `fetch` - no additional dependencies needed!

### Step 2: Set Up Environment Variables

Create `.env` file:
```env
VITE_INSTAGRAM_ACCESS_TOKEN=your_token_here
VITE_INSTAGRAM_USER_ID=your_user_id_here
```

### Step 3: Update imports in HomeNew.tsx

```tsx
// Add this import
import { InstagramFeed } from '@/components/InstagramFeed';
// OR
import { useInstagram } from '@/hooks/useInstagram';
```

### Step 4: Remove old code

Delete or comment out:
```tsx
// Remove these lines:
const [instagramUrls, setInstagramUrls] = useState<string[]>([]);

// Remove this from useEffect:
fetch('/data/events.json')
  .then(res => res.json())
  .then(data => {
    setInstagramUrls(data.instagramPosts || []);
  });
```

### Step 5: Update events.json (Optional)

You can now remove the `instagramPosts` array from `events.json` since it's no longer needed:

```json
{
  "upcomingEvents": [
    // ... your events
  ]
  // Remove instagramPosts array
}
```

---

## Benefits of Dynamic API

✅ **Auto-updates**: New Instagram posts appear automatically  
✅ **No manual work**: No need to update JSON file  
✅ **Rich metadata**: Get captions, timestamps, media types  
✅ **Better UX**: Loading states, error handling  
✅ **Caching**: Reduces API calls with smart caching  
✅ **Type-safe**: Full TypeScript support  
✅ **Flexible**: Easy to customize display  

---

## Quick Comparison

| Feature | Hardcoded URLs | Dynamic API |
|---------|---------------|-------------|
| Auto-update | ❌ No | ✅ Yes |
| Setup time | 2 mins | 30 mins |
| Maintenance | Manual | Automatic |
| Captions | ❌ No | ✅ Yes |
| Metadata | ❌ Limited | ✅ Full |
| Performance | Fast | Fast (cached) |
| Reliability | 100% | 99% (with fallback) |

---

## Recommended Approach

**For Production**: Use **Option 3 (Hybrid)** - API with fallback to hardcoded URLs

This gives you the best of both worlds:
- Fresh content from Instagram API
- Reliable fallback if API has issues
- No downtime if token expires

---

## Testing

After implementing, test:

1. ✅ Posts load correctly
2. ✅ Loading spinner appears
3. ✅ Error handling works
4. ✅ Links open in new tab
5. ✅ Hover effects work
6. ✅ Mobile responsive
7. ✅ Videos show play icon
8. ✅ Carousels show indicator

---

## Need Help?

Refer to `INSTAGRAM_API_SETUP.md` for detailed Instagram API setup instructions!
