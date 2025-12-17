// Instagram API Service
// Using Instagram Basic Display API

export interface InstagramPost {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
  username?: string;
}

export interface InstagramApiResponse {
  data: InstagramPost[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

// Your Instagram Access Token (get from Facebook Developer Console)
const INSTAGRAM_ACCESS_TOKEN = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN || '';
const INSTAGRAM_USER_ID = import.meta.env.VITE_INSTAGRAM_USER_ID || '';

/**
 * Fetch recent Instagram posts
 * @param limit - Number of posts to fetch (default: 10, max: 25)
 */
export const fetchInstagramPosts = async (limit: number = 10): Promise<InstagramPost[]> => {
  try {
    if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_USER_ID) {
      console.warn('Instagram API credentials not configured');
      return [];
    }

    const fields = 'id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username';
    const url = `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=${fields}&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=${limit}`;

    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`);
    }

    const data: InstagramApiResponse = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return [];
  }
};

/**
 * Fetch Instagram posts with caching (to avoid rate limits)
 * Cache expires after 1 hour
 */
export const fetchInstagramPostsWithCache = async (limit: number = 10): Promise<InstagramPost[]> => {
  const CACHE_KEY = 'instagram_posts_cache';
  const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

  try {
    // Check if we have cached data
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      const { posts, timestamp } = JSON.parse(cachedData);
      const now = Date.now();
      
      // Return cached data if it's still valid
      if (now - timestamp < CACHE_DURATION) {
        console.log('Using cached Instagram posts');
        return posts;
      }
    }

    // Fetch fresh data
    console.log('Fetching fresh Instagram posts');
    const posts = await fetchInstagramPosts(limit);

    // Cache the data
    if (posts.length > 0) {
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        posts,
        timestamp: Date.now()
      }));
    }

    return posts;
  } catch (error) {
    console.error('Error in fetchInstagramPostsWithCache:', error);
    
    // Try to return cached data even if expired
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      const { posts } = JSON.parse(cachedData);
      return posts;
    }
    
    return [];
  }
};

/**
 * Convert Instagram post URLs to post objects
 * This is a fallback method if API is not configured
 */
export const convertUrlsToPosts = (urls: string[]): Array<{ permalink: string; id: string }> => {
  return urls.map(url => ({
    permalink: url,
    id: url.split('/p/')[1]?.replace('/', '') || url
  }));
};

/**
 * Refresh Instagram access token (long-lived tokens expire after 60 days)
 * This should be called from your backend
 */
export const refreshAccessToken = async (currentToken: string): Promise<string | null> => {
  try {
    const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${currentToken}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.access_token || null;
  } catch (error) {
    console.error('Error refreshing Instagram token:', error);
    return null;
  }
};
