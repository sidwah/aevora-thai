'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Download, Share2, Calendar, Tag } from 'lucide-react';
// import { cn } from '@/lib/utils';
import { type GalleryImage, getCategoryIcon } from '@/data/gallery-images';

interface ModernLightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function ModernLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious
}: ModernLightboxProps) {
  const currentImage = images[currentIndex];

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        onPrevious();
        break;
      case 'ArrowRight':
        onNext();
        break;
    }
  }, [isOpen, onClose, onNext, onPrevious]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentImage.title,
          text: currentImage.caption,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (!currentImage) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-12 h-12 glass-medium rounded-full flex items-center justify-center hover:glass-strong transition-all duration-200"
          >
            <X className="w-6 h-6 text-white" />
          </motion.button>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onPrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 glass-medium rounded-full flex items-center justify-center hover:glass-strong transition-all duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 glass-medium rounded-full flex items-center justify-center hover:glass-strong transition-all duration-200"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </motion.button>
            </>
          )}

          {/* Main Content */}
          <div className="flex items-center justify-center min-h-screen p-4 lg:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {/* Image */}
              <div className="lg:col-span-2">
                <div className="relative aspect-[4/3] lg:aspect-[3/2] w-full rounded-2xl overflow-hidden">
                  <Image
                    src={currentImage.fullSize}
                    alt={currentImage.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                  />
                </div>
              </div>

              {/* Info Panel */}
              <div className="glass-medium rounded-2xl p-6 lg:p-8 text-white">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{getCategoryIcon(currentImage.category)}</span>
                    <span className="text-sm uppercase tracking-wider opacity-75 font-secondary">
                      {currentImage.category}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={handleShare}
                      className="w-8 h-8 glass-light rounded-full flex items-center justify-center hover:glass-medium transition-all duration-200"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 glass-light rounded-full flex items-center justify-center hover:glass-medium transition-all duration-200">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Title & Description */}
                <h2 className="font-primary text-2xl lg:text-3xl font-bold mb-3">
                  {currentImage.title}
                </h2>
                <p className="font-secondary text-base lg:text-lg opacity-90 leading-relaxed mb-6">
                  {currentImage.caption}
                </p>

                {/* Metadata */}
                <div className="space-y-4">
                  {currentImage.dateTaken && (
                    <div className="flex items-center gap-3 text-sm opacity-75">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(currentImage.dateTaken).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                  )}

                  {currentImage.photographer && (
                    <div className="flex items-center gap-3 text-sm opacity-75">
                      <span>📷</span>
                      <span>by {currentImage.photographer}</span>
                    </div>
                  )}

                  {/* Tags */}
                  {currentImage.tags && currentImage.tags.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-sm opacity-75">
                        <Tag className="w-4 h-4" />
                        <span>Tags</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {currentImage.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-white/10 rounded-full text-xs font-secondary"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Image Counter */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-sm opacity-75 text-center">
                    {currentIndex + 1} of {images.length}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}