'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, Camera, Image as ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { featuredImages } from '@/data/gallery-images';

export default function GalleryHero() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      duration: 30 
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onInit = useCallback((emblaApi: UseEmblaCarouselType[1]) => {
    if (emblaApi) {
      setScrollSnaps(emblaApi.scrollSnapList());
    }
  }, []);

  const onSelect = useCallback((emblaApi: UseEmblaCarouselType[1]) => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="relative h-[65vh] lg:h-[75vh] overflow-hidden">
      {/* Embla Carousel Container */}
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {featuredImages.map((image, index) => (
            <div key={image.id} className="embla__slide relative h-full">
              <Image
                src={image.fullSize}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Improved Gradient Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-white z-10 max-w-5xl mx-auto px-6"
        >
          {/* Gallery Label - Smaller and Higher */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Camera className="w-5 h-5 text-primary-brown" />
            <span className="font-secondary text-xs sm:text-sm uppercase tracking-wider text-white/90 font-medium">
              Our Gallery
            </span>
          </motion.div>

          {/* Main Heading - Reduced Size */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-primary text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight"
          >
            Visual Stories of{' '}
            <span className="text-primary-brown">Authentic Thai</span>{' '}
            Excellence
          </motion.h1>

          {/* Description - Smaller */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-secondary text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed text-white/95"
          >
            Experience the artistry of our authentic Thai cuisine, the warmth of our dining atmosphere, 
            and the passion of our team through our curated collection of moments
          </motion.p>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute inset-y-0 left-4 flex items-center"
      >
        <button
          onClick={scrollPrev}
          className="glass-medium hover:glass-strong rounded-full p-2 lg:p-3 transition-all duration-200 hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute inset-y-0 right-4 flex items-center"
      >
        <button
          onClick={scrollNext}
          className="glass-medium hover:glass-strong rounded-full p-2 lg:p-3 transition-all duration-200 hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
        </button>
      </motion.div>

      {/* Carousel Indicators - Smaller and More Subtle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex items-center gap-2 glass-light rounded-full px-3 py-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full transition-all duration-200",
                index === selectedIndex
                  ? "bg-primary-brown w-6 lg:w-8"
                  : "bg-white/50 hover:bg-white/75"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator - The Jumping Image Icon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-4 lg:bottom-6 right-4 lg:right-6"
      >
        <motion.div
          animate={{ 
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="glass-light rounded-full p-2 lg:p-3 cursor-pointer hover:glass-medium transition-all duration-200"
          onClick={() => {
            // Scroll to gallery content section
            const nextSection = document.querySelector('#gallery-content');
            nextSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <ImageIcon className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
}