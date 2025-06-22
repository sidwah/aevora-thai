'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Camera, Image as ImageIcon, Play, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';
import { featuredImages } from '@/data/gallery-images';

export default function GalleryHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(new Array(featuredImages.length).fill(false));

  // Track image loading
  const handleImageLoad = useCallback((index: number) => {
    setImagesLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  }, []);

  // Auto-advance images
  useEffect(() => {
    if (!isPlaying || featuredImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + featuredImages.length) % featuredImages.length);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % featuredImages.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext, togglePlayPause]);

  // Fallback if no images
  if (!featuredImages || featuredImages.length === 0) {
    return (
      <section className="relative h-[75vh] lg:h-[85vh] overflow-hidden bg-gradient-to-br from-primary-cream to-secondary-light-beige flex items-center justify-center">
        <div className="text-center">
          <Camera className="w-16 h-16 text-primary-brown mx-auto mb-4" />
          <h1 className="font-primary text-4xl text-primary-dark mb-2">Gallery</h1>
          <p className="font-secondary text-neutral-gray">Loading gallery images...</p>
        </div>
      </section>
    );
  }

  const currentImage = featuredImages[currentIndex];
  const allImagesLoaded = imagesLoaded.every(loaded => loaded);

  return (
    <section className="relative h-[75vh] lg:h-[85vh] overflow-hidden">
      {/* All Images Mounted (Hidden/Visible) */}
      <div className="relative h-full">
        {featuredImages.map((image, index) => (
          <div
            key={image.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-in-out",
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <Image
              src={image.fullSize}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index < 2} // Prioritize first 2 images
              sizes="100vw"
              onLoad={() => handleImageLoad(index)}
            />
          </div>
        ))}
      </div>

      {/* Loading Overlay (only while initial images load) */}
      {!allImagesLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-cream via-secondary-light-beige to-primary-cream flex items-center justify-center z-20">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary-brown border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="font-secondary text-primary-dark">Loading gallery...</p>
          </div>
        </div>
      )}

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-white max-w-5xl mx-auto px-6"
        >
          {/* Gallery Label */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Camera className="w-5 h-5 text-primary-brown" />
            <span className="font-secondary text-xs sm:text-sm uppercase tracking-wider text-white font-medium drop-shadow-lg">
              Our Gallery
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-primary text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight"
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.6), 0 8px 16px rgba(0,0,0,0.4)'
            }}
          >
            Visual Stories of{' '}
            <span className="text-primary-brown">Authentic Thai</span>{' '}
            Excellence
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-secondary text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed text-white"
            style={{
              textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'
            }}
          >
            Experience the artistry of our authentic Thai cuisine, the warmth of our dining atmosphere, 
            and the passion of our team through our curated collection of moments
          </motion.p>

          {/* Current Image Info with smooth transition */}
          <motion.div
            key={currentImage.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="mt-6 glass-medium rounded-full px-4 py-2 inline-block backdrop-blur-lg"
          >
            <span className="font-secondary text-sm text-white font-medium">
              {currentImage.title}
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none z-30">
        {/* Left Arrow */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          onClick={goToPrevious}
          className="glass-medium hover:glass-strong rounded-full p-2 lg:p-3 transition-all duration-200 hover:scale-110 pointer-events-auto"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
        </motion.button>

        {/* Right Arrow */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          onClick={goToNext}
          className="glass-medium hover:glass-strong rounded-full p-2 lg:p-3 transition-all duration-200 hover:scale-110 pointer-events-auto"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
        </motion.button>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-4 lg:bottom-6 inset-x-0 flex items-center justify-between px-4 lg:px-6 z-30">
        {/* Slide Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex items-center gap-2 glass-medium rounded-full px-3 py-2 backdrop-blur-lg"
        >
          {featuredImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "bg-primary-brown w-6 lg:w-8"
                  : "bg-white/50 hover:bg-white/75"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>

        {/* Play/Pause and Scroll Indicator */}
        <div className="flex items-center gap-3">
          {/* Play/Pause Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            onClick={togglePlayPause}
            className="glass-medium rounded-full p-2 hover:glass-strong transition-all duration-200 hover:scale-110 backdrop-blur-lg"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? (
              <Pause className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
            ) : (
              <Play className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
            )}
          </motion.button>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="cursor-pointer"
            onClick={() => {
              const nextSection = document.querySelector('#gallery-content');
              nextSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="glass-medium rounded-full p-2 lg:p-3 hover:glass-strong transition-all duration-200 backdrop-blur-lg"
            >
              <ImageIcon className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-0 left-0 h-1 bg-white/20 w-full z-30"
      >
        <motion.div
          key={`progress-${currentIndex}-${isPlaying}`}
          initial={{ width: "0%" }}
          animate={{ width: isPlaying ? "100%" : "0%" }}
          transition={{ 
            duration: isPlaying ? 5 : 0,
            ease: "linear"
          }}
          className="h-full bg-primary-brown shadow-lg"
        />
      </motion.div>
    </section>
  );
}