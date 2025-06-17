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
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Section spacing="xl" background="none" id="testimonials">
      <Container size="lg">
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className={cn(
              "absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4",
              "lg:-translate-x-12 xl:-translate-x-16",
              "p-2 rounded-full transition-all duration-200",
              "hover:bg-primary-cream/50 hover:scale-110",
              "text-neutral-gray hover:text-primary-brown",
              "focus:outline-none focus:ring-2 focus:ring-primary-brown focus:ring-opacity-50"
            )}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className={cn(
              "absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4",
              "lg:translate-x-12 xl:translate-x-16",
              "p-2 rounded-full transition-all duration-200",
              "hover:bg-primary-cream/50 hover:scale-110",
              "text-neutral-gray hover:text-primary-brown",
              "focus:outline-none focus:ring-2 focus:ring-primary-brown focus:ring-opacity-50"
            )}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="px-8 lg:px-16"
            >
              {/* Star Rating */}
              <div className="flex justify-center mb-6">
                <StarRating rating={currentTestimonial.rating} size="lg" />
              </div>

              {/* Testimonial Title (if exists) */}
              {currentTestimonial.title && (
                <h3 className="font-primary text-xl sm:text-2xl lg:text-3xl font-semibold text-primary-brown mb-6">
                  {currentTestimonial.title}
                </h3>
              )}

              {/* Testimonial Comment - WHITE in dark mode */}
              <blockquote className="font-secondary text-lg sm:text-xl lg:text-2xl leading-relaxed text-primary-dark dark:text-white mb-8 max-w-3xl mx-auto">
                "{currentTestimonial.comment}"
              </blockquote>

              {/* Customer Attribution */}
              <div className="space-y-1">
                {/* Customer Name - WHITE in dark mode */}
                <p className="font-secondary font-semibold text-base lg:text-lg text-primary-dark dark:text-white">
                  {currentTestimonial.customerName}
                </p>
                {/* Location - Keep gray */}
                <p className="font-secondary text-sm lg:text-base text-neutral-gray">
                  {currentTestimonial.location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-200",
                  index === currentIndex 
                    ? "bg-primary-brown w-8" 
                    : "bg-neutral-gray/30 hover:bg-neutral-gray/50"
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