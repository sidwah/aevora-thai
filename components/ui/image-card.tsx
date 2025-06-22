'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { type GalleryImage, getCategoryIcon } from '@/data/gallery-images';

interface ImageCardProps {
  image: GalleryImage;
  index: number;
  onClick: () => void;
}

export default function ImageCard({ image, index, onClick }: ImageCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05,
        layout: { duration: 0.3 }
      }}
      layout
      whileHover={{ y: -4 }}
      className="group cursor-zoom-in"
      onClick={onClick}
    >
      <div className="relative glass-light rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
        {/* Main Image Container - Fixed Aspect Ratio */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          {!imageError ? (
            <Image
              src={image.thumbnail}
              alt={image.alt}
              fill
              className={cn(
                "object-cover transition-all duration-500",
                "group-hover:scale-110",
                imageLoaded ? "opacity-100" : "opacity-0"
              )}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          ) : (
            // Fallback for missing images
            <div className="w-full h-full bg-gradient-to-br from-neutral-light to-neutral-gray flex items-center justify-center">
              <div className="text-center text-neutral-gray">
                <span className="text-4xl mb-2 block">📸</span>
                <p className="text-sm">Image unavailable</p>
              </div>
            </div>
          )}
          
          {/* Loading State */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-neutral-light animate-pulse" />
          )}
          
          {/* Hover Overlay with Details */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              {/* Title */}
              <h4 className="font-primary text-lg lg:text-xl font-semibold mb-2 line-clamp-2">
                {image.title}
              </h4>
              
              {/* Caption */}
              <p className="font-secondary text-sm opacity-90 line-clamp-3 mb-3">
                {image.caption}
              </p>
              
              {/* Tags */}
              {image.tags && image.tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {image.tags.slice(0, 4).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-secondary font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                  {image.tags.length > 4 && (
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-secondary font-medium">
                      +{image.tags.length - 4}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Top Badges - Always Visible */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="glass-strong px-2 py-1 rounded-full"
          >
            <span className="flex items-center gap-1 text-xs font-secondary font-medium text-white">
              <span>{getCategoryIcon(image.category)}</span>
              <span className="capitalize">{image.category}</span>
            </span>
          </motion.div>

          {/* Special Indicators */}
          <div className="flex gap-2">
            {image.isSignature && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 + 0.1 }}
                className="glass-strong w-7 h-7 rounded-full flex items-center justify-center"
              >
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
              </motion.div>
            )}
            
            {image.isVideo && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 + 0.2 }}
                className="glass-strong w-7 h-7 rounded-full flex items-center justify-center"
              >
                <Play className="w-3 h-3 text-white fill-current" />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}