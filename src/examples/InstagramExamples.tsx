/**
 * Example implementation of Instagram Dynamic Feed
 * This demonstrates how to use the Instagram API integration
 */

import React from 'react';
import { InstagramFeed } from '@/components/InstagramFeed';
import { useInstagram } from '@/hooks/useInstagram';
import { IconBrandInstagram } from '@tabler/icons-react';

/**
 * Example 1: Simple Grid Layout
 * Uses the pre-built InstagramFeed component
 */
export const SimpleInstagramGrid: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Latest from Instagram
        </h2>
        
        {/* Simple 4-column grid */}
        <InstagramFeed limit={8} columns={4} showCaption={false} />
        
        <div className="text-center mt-8">
          <a 
            href="https://www.instagram.com/teamkavach/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-all"
          >
            <IconBrandInstagram className="w-5 h-5" />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

/**
 * Example 2: Custom Layout with Hook
 * Uses the useInstagram hook for custom rendering
 */
export const CustomInstagramLayout: React.FC = () => {
  const { posts, loading, error, refetch } = useInstagram(6);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Instagram Feed
        </h2>

        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600">Loading posts...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-500 mb-4">Failed to load posts: {error}</p>
            <button 
              onClick={refetch}
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <a 
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                      alt={post.caption || 'Instagram post'}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Post Type Indicator */}
                    {post.media_type === 'VIDEO' && (
                      <div className="absolute top-3 right-3 bg-black/70 rounded-full p-2">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  {post.caption && (
                    <div className="p-4">
                      <p className="text-sm text-gray-700 line-clamp-2">
                        {post.caption}
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        {new Date(post.timestamp).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

/**
 * Example 3: Horizontal Scrolling Carousel
 * Similar to current HomeNew.tsx implementation
 */
export const InstagramCarousel: React.FC = () => {
  const { posts, loading } = useInstagram(10);

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4 text-primary">
            <IconBrandInstagram className="w-6 h-6" />
            <span className="font-bold uppercase tracking-wide text-sm">
              Live from Instagram
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Follow Our Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest initiatives and impact stories
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
          </div>
        ) : (
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
              {posts.map((post, index) => (
                <div
                  key={post.id}
                  className="flex-shrink-0 w-[328px] snap-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <a
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all">
                      <img
                        src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                        alt={post.caption || 'Instagram post'}
                        className="w-full h-[328px] object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      
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

                      {post.media_type === 'VIDEO' && (
                        <div className="absolute top-4 right-4 bg-black/70 rounded-full p-2">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <a 
            href="https://www.instagram.com/teamkavach/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-lg"
          >
            <IconBrandInstagram className="w-6 h-6" />
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

/**
 * Example 4: With Fallback URLs
 * Shows posts from API, or falls back to hardcoded URLs
 */
export const InstagramWithFallback: React.FC = () => {
  const { posts, loading, error } = useInstagram(8);
  
  // Fallback URLs if API fails
  const fallbackUrls = [
    "https://www.instagram.com/p/DQg6LPzE0sY/",
    "https://www.instagram.com/p/DHlo7LyTKBM/",
    "https://www.instagram.com/p/DKm2As8zOu0/",
    "https://www.instagram.com/p/DLMQKuuThAo/"
  ];

  const hasApiPosts = !loading && !error && posts.length > 0;
  const shouldShowFallback = !loading && (error || posts.length === 0);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Instagram Feed
        </h2>

        {loading && (
          <div className="text-center py-12">
            <p>Loading Instagram posts...</p>
          </div>
        )}

        {hasApiPosts && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                  alt={post.caption || 'Instagram'}
                  className="w-full h-full object-cover hover:scale-110 transition-transform"
                />
              </a>
            ))}
          </div>
        )}

        {shouldShowFallback && (
          <>
            <p className="text-center text-gray-500 mb-4">
              {error ? 'Using cached posts' : 'Showing recent posts'}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {fallbackUrls.map((url, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square overflow-hidden rounded-lg border-2 border-gray-200"
                >
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <IconBrandInstagram className="w-12 h-12 text-gray-400" />
                  </div>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

// Export all examples
export default {
  SimpleInstagramGrid,
  CustomInstagramLayout,
  InstagramCarousel,
  InstagramWithFallback
};
