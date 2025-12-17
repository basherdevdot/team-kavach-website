import { useState, useEffect } from 'react';
import { fetchInstagramPostsWithCache, InstagramPost } from '../services/instagram';

interface UseInstagramReturn {
  posts: InstagramPost[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

/**
 * Custom hook to fetch and manage Instagram posts
 * @param limit - Number of posts to fetch (default: 10)
 */
export const useInstagram = (limit: number = 10): UseInstagramReturn => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchInstagramPostsWithCache(limit);
      setPosts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch Instagram posts');
      console.error('Error fetching Instagram posts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [limit]);

  return {
    posts,
    loading,
    error,
    refetch: fetchPosts
  };
};
