'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImageCard from './image-card';
import { type GalleryImage } from '@/data/gallery-images';

interface UniformGalleryGridProps {
  images: GalleryImage[];
  onImageClick: (imageId: string) => void;
}

export default function UniformGalleryGrid({ images, onImageClick }: UniformGalleryGridProps) {
  const [visibleCount, setVisibleCount] = useState(16); // Start with 2 rows on mobile (8*2), 4 rows on desktop (4*4)
  const [isLoading, setIsLoading] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Load more images when scrolling near bottom
  useEffect(() => {
    if (inView && visibleCount < images.length && !isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        setVisibleCount(prev => Math.min(prev + 12, images.length)); // Load 12 more (2 rows mobile, 3 rows desktop)
        setIsLoading(false);
      }, 300);
    }
  }, [inView, visibleCount, images.length, isLoading]);

  // Reset visible count when images change (category filter)
  useEffect(() => {
    setVisibleCount(16);
  }, [images]);

  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  return (
    <div className="w-full">
      {/* Uniform Grid - Responsive Columns */}
      <motion.div 
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {visibleImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.4,
                delay: index * 0.03,
                layout: { duration: 0.3, ease: "easeInOut" }
              }}
            >
              <ImageCard
                image={image}
                index={index}
                onClick={() => onImageClick(image.id)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Load More Section */}
      {hasMore && (
        <div ref={ref} className="flex justify-center py-12">
          {isLoading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3"
            >
              <div className="w-6 h-6 border-2 border-primary-brown border-t-transparent rounded-full animate-spin" />
              <span className="font-secondary text-neutral-gray">Loading more photos...</span>
            </motion.div>
          ) : (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleCount(prev => Math.min(prev + 12, images.length))}
              className="px-8 py-4 bg-primary-brown hover:bg-primary-brown/90 text-white rounded-full font-secondary font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Load More Photos ({images.length - visibleCount} remaining)
            </motion.button>
          )}
        </div>
      )}

      {/* End Message */}
      {!hasMore && images.length > 16 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="glass-light rounded-2xl p-6 max-w-md mx-auto">
            <span className="text-4xl mb-3 block">🎉</span>
            <h4 className="font-primary text-lg text-primary-dark mb-2">
              You&apos;ve seen it all!
            </h4>
            <p className="font-secondary text-neutral-gray text-sm">
              All {images.length} photos in this collection have been viewed
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}