// components/sections/testimonials-section.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '@/components/layout/container';
import Section from '@/components/layout/section';
import StarRating from '@/components/ui/star-rating';
import { testimonials } from '@/data/testimonials';
import { cn } from '@/lib/utils';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Section spacing="xl" background="none" id="testimonials">
      <Container size="lg">
        <div className="relative mx-auto max-w-4xl text-center">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className={cn(
              'absolute top-1/2 left-0 -translate-x-4 -translate-y-1/2 transform',
              'lg:-translate-x-12 xl:-translate-x-16',
              'rounded-full p-2 transition-all duration-200',
              'hover:bg-primary-cream/50 hover:scale-110',
              'text-neutral-gray hover:text-primary-brown',
              'focus:ring-primary-brown focus:ring-opacity-50 focus:ring-2 focus:outline-none'
            )}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className={cn(
              'absolute top-1/2 right-0 translate-x-4 -translate-y-1/2 transform',
              'lg:translate-x-12 xl:translate-x-16',
              'rounded-full p-2 transition-all duration-200',
              'hover:bg-primary-cream/50 hover:scale-110',
              'text-neutral-gray hover:text-primary-brown',
              'focus:ring-primary-brown focus:ring-opacity-50 focus:ring-2 focus:outline-none'
            )}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Testimonial Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="px-8 lg:px-16"
            >
              {/* Star Rating */}
              <div className="mb-6 flex justify-center">
                <StarRating rating={currentTestimonial.rating} size="lg" />
              </div>

              {/* Testimonial Title (if exists) */}
              {currentTestimonial.title && (
                <h3 className="font-primary text-primary-brown mb-6 text-xl font-semibold sm:text-2xl lg:text-3xl">
                  {currentTestimonial.title}
                </h3>
              )}

              {/* Testimonial Comment - WHITE in dark mode */}
              <blockquote className="font-secondary mx-auto mb-8 max-w-3xl text-lg leading-relaxed sm:text-xl lg:text-2xl">
                &quot;{currentTestimonial.comment}&quot;
              </blockquote>

              {/* Customer Attribution */}
              <div className="space-y-1">
                {/* Customer Name - WHITE in dark mode */}
                <p className="font-secondary text-neutral-gray text-base font-semibold lg:text-lg">
                  {currentTestimonial.customerName}
                </p>
                {/* Location - Keep gray */}
                <p className="font-secondary text-neutral-gray text-sm lg:text-base">
                  {currentTestimonial.location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Testimonial Indicators */}
          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  'h-2 w-2 rounded-full transition-all duration-200',
                  index === currentIndex
                    ? 'bg-primary-brown w-8'
                    : 'bg-neutral-gray/30 hover:bg-neutral-gray/50'
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default TestimonialsSection;
