import React from 'react';
import { motion } from 'framer-motion';
import { useInstagram } from '../hooks/useInstagram';
import { Loader2, Instagram, ExternalLink } from 'lucide-react';

interface InstagramFeedProps {
  limit?: number;
  columns?: 2 | 3 | 4;
  showCaption?: boolean;
}

export const InstagramFeed: React.FC<InstagramFeedProps> = ({
  limit = 8,
  columns = 4,
  showCaption = false
}) => {
  const { posts, loading, error } = useInstagram(limit);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <span className="ml-3 text-foreground/70">Loading Instagram posts...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <Instagram className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <p className="text-red-500">Failed to load Instagram posts</p>
        <p className="text-sm text-foreground/60 mt-2">{error}</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <Instagram className="w-12 h-12 text-foreground/40 mx-auto mb-4" />
        <p className="text-foreground/60">No Instagram posts available</p>
      </div>
    );
  }

  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4`}>
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all"
        >
          {/* Instagram Post Image/Video */}
          <a
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            {post.media_type === 'VIDEO' ? (
              <img
                src={post.thumbnail_url || post.media_url}
                alt={post.caption || 'Instagram post'}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
            ) : (
              <img
                src={post.media_url}
                alt={post.caption || 'Instagram post'}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
            )}

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <div className="text-white w-full">
                {showCaption && post.caption && (
                  <p className="text-sm line-clamp-2 mb-2">{post.caption}</p>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-xs flex items-center gap-1">
                    <Instagram className="w-4 h-4" />
                    {post.username || 'View on Instagram'}
                  </span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Video indicator */}
            {post.media_type === 'VIDEO' && (
              <div className="absolute top-2 right-2 bg-black/70 rounded-full p-2">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            )}

            {/* Carousel indicator */}
            {post.media_type === 'CAROUSEL_ALBUM' && (
              <div className="absolute top-2 right-2 bg-black/70 rounded-full p-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default InstagramFeed;
