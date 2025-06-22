'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Download, Share2, Calendar, Tag, ExternalLink } from 'lucide-react';
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
      case 'd':
      case 'D':
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          handleDownload();
        }
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

  // Create watermarked image
  // Create watermarked image
const createWatermarkedImage = async (imageUrl: string): Promise<Blob> => {
  return new Promise(async (resolve, reject) => {
    try {
      // Create canvas
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Canvas not supported');

      // Load the original image
      const img = new window.Image();
      img.crossOrigin = 'anonymous';
      
      img.onload = async () => {
        // Set canvas size to match image
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the original image
        ctx.drawImage(img, 0, 0);

        // Load and draw logo
        try {
          const logo = new window.Image();
          logo.crossOrigin = 'anonymous';
          
          logo.onload = () => {
            // Watermark settings - CENTERED
            const watermarkHeight = Math.max(40, img.height * 0.05); // 5% of image height, minimum 40px
            const logoSize = watermarkHeight * 0.7;
            const padding = 20;
            const bottomY = img.height - padding;
            const watermarkWidth = logoSize + 150; // Logo + text space

            // Center the watermark horizontally
            const watermarkX = (img.width - watermarkWidth) / 2;

            // Create semi-transparent background for watermark
            ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
            ctx.fillRect(
              watermarkX,
              bottomY - watermarkHeight,
              watermarkWidth,
              watermarkHeight
            );

            // Draw logo - centered
            const logoX = watermarkX + 10;
            const logoY = bottomY - watermarkHeight + (watermarkHeight - logoSize) / 2;
            ctx.drawImage(logo, logoX, logoY, logoSize, logoSize);

            // Add text - centered
            const fontSize = Math.max(14, watermarkHeight * 0.3);
            ctx.font = `${fontSize}px Arial, sans-serif`;
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';

            const textX = logoX + logoSize + 10;
            const textY = bottomY - watermarkHeight / 2;
            
            ctx.fillText('Aevora Thai', textX, textY - 5);
            
            // Smaller subtitle
            ctx.font = `${fontSize * 0.7}px Arial, sans-serif`;
            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.fillText('aevora-thai.vercel.app', textX, textY + 8);

            // Convert canvas to blob
            canvas.toBlob((blob) => {
              if (blob) {
                resolve(blob);
              } else {
                reject(new Error('Failed to create blob'));
              }
            }, 'image/jpeg', 0.9);
          };

          logo.onerror = () => {
            // If logo fails to load, add text-only watermark - CENTERED
            console.log('Logo failed to load, using text-only watermark');
            
            const watermarkHeight = Math.max(40, img.height * 0.05);
            const padding = 20;
            const bottomY = img.height - padding;
            const watermarkWidth = 200; // Increased width for the longer URL

            // Center the watermark horizontally
            const watermarkX = (img.width - watermarkWidth) / 2;

            // Create semi-transparent background
            ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
            ctx.fillRect(
              watermarkX,
              bottomY - watermarkHeight,
              watermarkWidth,
              watermarkHeight
            );

            // Add text - centered
            const fontSize = Math.max(16, watermarkHeight * 0.4);
            ctx.font = `bold ${fontSize}px Arial, sans-serif`;
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';

            const textX = watermarkX + 15;
            const textY = bottomY - watermarkHeight / 2;
            
            ctx.fillText('Aevora Thai', textX, textY - 5);
            
            ctx.font = `${fontSize * 0.7}px Arial, sans-serif`;
            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.fillText('aevora-thai.vercel.app', textX, textY + 8);

            canvas.toBlob((blob) => {
              if (blob) {
                resolve(blob);
              } else {
                reject(new Error('Failed to create blob'));
              }
            }, 'image/jpeg', 0.9);
          };

          // Try to load logo from your public folder
          logo.src = '/logo.png'; // Update this path to match your actual logo

        } catch (logoError) {
          console.log('Logo loading failed, using text-only watermark', logoError);
          // Text-only watermark fallback - CENTERED
          const watermarkHeight = Math.max(40, img.height * 0.05);
          const padding = 20;
          const bottomY = img.height - padding;
          const watermarkWidth = 200; // Increased width for the longer URL

          // Center the watermark horizontally
          const watermarkX = (img.width - watermarkWidth) / 2;

          ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
          ctx.fillRect(
            watermarkX,
            bottomY - watermarkHeight,
            watermarkWidth,
            watermarkHeight
          );

          const fontSize = Math.max(16, watermarkHeight * 0.4);
          ctx.font = `bold ${fontSize}px Arial, sans-serif`;
          ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
          ctx.textAlign = 'left';
          ctx.textBaseline = 'middle';

          const textX = watermarkX + 15;
          const textY = bottomY - watermarkHeight / 2;
          
          ctx.fillText('Aevora Thai', textX, textY - 5);
          
          ctx.font = `${fontSize * 0.7}px Arial, sans-serif`;
          ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
          ctx.fillText('aevora-thai.vercel.app', textX, textY + 8);

          canvas.toBlob((blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('Failed to create blob'));
            }
          }, 'image/jpeg', 0.9);
        }
      };

      img.onerror = () => reject(new Error('Failed to load image'));
      
      // Load the original image
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const imageObjectUrl = URL.createObjectURL(blob);
      img.src = imageObjectUrl;

    } catch (error) {
      reject(error);
    }
  });
};

  // Share functionality
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${currentImage.title} | Aevora Thai Gallery`,
          text: currentImage.caption,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        console.log('URL copied to clipboard');
      }
    } catch (err) {
      console.log('Error sharing:', err);
      try {
        await navigator.clipboard.writeText(window.location.href);
        console.log('URL copied to clipboard as fallback');
      } catch (clipboardErr) {
        console.log('Could not copy to clipboard ', clipboardErr);
      }
    }
  };

  // Download functionality with watermark
  const handleDownload = async () => {
    try {
      console.log('Starting watermarked download...');
      
      // Create watermarked image
      const watermarkedBlob = await createWatermarkedImage(currentImage.fullSize);
      
      // Create download link
      const link = document.createElement('a');
      const blobUrl = URL.createObjectURL(watermarkedBlob);
      
      link.href = blobUrl;
      link.download = `aevora-thai-${currentImage.id}-${currentImage.title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up
      URL.revokeObjectURL(blobUrl);
      
      console.log('Watermarked download completed:', currentImage.title);
      
    } catch (error) {
      console.error('Watermarked download failed:', error);
      
      // Fallback: download original image without watermark
      try {
        const response = await fetch(currentImage.fullSize);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = `aevora-thai-${currentImage.id}-${currentImage.title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        URL.revokeObjectURL(blobUrl);
        console.log('Fallback download completed');
        
      } catch (fallbackError) {
        console.error('Fallback download also failed:', fallbackError);
        // Last resort: open in new tab
        window.open(currentImage.fullSize, '_blank');
      }
    }
  };

  // Alternative download method (right-click save) - original without watermark
  const handleImageRightClick = () => {
    // Allow default right-click behavior for "Save image as..." (without watermark)
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
            className="absolute top-4 right-4 z-10 w-12 h-12 glass-medium rounded-full flex items-center justify-center hover:glass-strong transition-all duration-200 group"
          >
            <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
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
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 glass-medium rounded-full flex items-center justify-center hover:glass-strong transition-all duration-200 group"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 glass-medium rounded-full flex items-center justify-center hover:glass-strong transition-all duration-200 group"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
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
                <div className="relative aspect-[4/3] lg:aspect-[3/2] w-full rounded-2xl overflow-hidden group">
                  <Image
                    src={currentImage.fullSize}
                    alt={currentImage.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                    onContextMenu={handleImageRightClick}
                  />
                  
                  {/* Image overlay with download hint */}
                  {/* <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                    <div className="glass-medium rounded-full px-4 py-2">
                      <span className="text-white text-sm font-secondary">
                        Download includes watermark • Right-click for original
                      </span>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Info Panel */}
              <div className="glass-medium rounded-2xl p-6 lg:p-8 text-white">
                {/* Header with Actions */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{getCategoryIcon(currentImage.category)}</span>
                    <span className="text-sm uppercase tracking-wider opacity-75 font-secondary">
                      {currentImage.category}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    {/* Share Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleShare}
                      className="w-10 h-10 glass-light rounded-full flex items-center justify-center hover:glass-medium transition-all duration-200 group"
                      title="Share image"
                    >
                      <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </motion.button>
                    
                    {/* Download Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleDownload}
                      className="w-10 h-10 glass-light rounded-full flex items-center justify-center hover:glass-medium transition-all duration-200 group"
                      title="Download with watermark (Ctrl+D)"
                    >
                      <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </motion.button>
                    
                    {/* Open in New Tab Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => window.open(currentImage.fullSize, '_blank')}
                      className="w-10 h-10 glass-light rounded-full flex items-center justify-center hover:glass-medium transition-all duration-200 group"
                      title="Open in new tab"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </motion.button>
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
                            className="px-2 py-1 bg-white/10 rounded-full text-xs font-secondary hover:bg-white/20 transition-colors duration-200"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Download Instructions */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="text-xs opacity-60 space-y-1">
                    <p>💡 <strong>Download:</strong> Click download button (or Ctrl + D)</p>
                    <p>💡 <strong>Navigate:</strong> Use arrow keys or click arrows</p>
                  </div>
                </div>

                {/* Image Counter */}
                <div className="mt-4 pt-4 border-t border-white/20">
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