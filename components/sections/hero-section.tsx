'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Container from '@/components/layout/container';
import Section from '@/components/layout/section';
import FloatingFoodBowl from '@/components/ui/floating-food-bowl';
import GalleryCard from '@/components/ui/gallery-card';

export default function HeroSection() {
  return (
    <Section spacing="lg" id="hero" className="relative overflow-hidden pt-8 lg:pt-12"> {/* Reduced spacing and added custom padding */}
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[70vh] lg:min-h-[75vh]"> {/* Reduced min-height */}
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 lg:space-y-8 lg:pr-6 order-2 lg:order-1" /* Reduced spacing */
          >
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-3 lg:space-y-4"
            >
              <h1 className={cn(
                "font-primary text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold", // More responsive text sizing
                "text-primary-dark leading-tight",
                "tracking-tight"
              )}>
                An Ambient
                <br />
                <span className="text-primary-brown">Dining Experience</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-3 lg:space-y-4"
            >
              <p className={cn(
                "font-secondary text-base sm:text-lg lg:text-xl", // More responsive text sizing
                "text-neutral-gray leading-relaxed",
                "max-w-md"
              )}>
                Join us at the table as you dine for the perfect meal. 
                We treat all of our customers with special care and service.
              </p>
              
              <p className={cn(
                "font-secondary text-sm sm:text-base", // Smaller on mobile
                "text-neutral-gray leading-relaxed",
                "max-w-md"
              )}>
                Have a feast and enjoy our fine drinks while you're at it.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 lg:gap-4"
            >
              {/* About Us Button */}
              <Link
                href="/about"
                className={cn(
                  "group inline-flex items-center justify-center gap-3",
                  "px-6 lg:px-8 py-3 lg:py-4 rounded-lg", // Smaller padding on mobile
                  "bg-button-primary text-white",
                  "font-secondary font-semibold text-sm lg:text-base", // Responsive text size
                  "transition-all duration-200 ease-out",
                  "hover:bg-button-hover-primary hover:scale-105",
                  "active:scale-95",
                  "shadow-lg hover:shadow-xl"
                )}
              >
                About us
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Menu Button */}
              <Link
                href="/menu"
                className={cn(
                  "group inline-flex items-center justify-center gap-3",
                  "px-6 lg:px-8 py-3 lg:py-4 rounded-lg", // Smaller padding on mobile
                  "bg-button-secondary text-white",
                  "font-secondary font-semibold text-sm lg:text-base", // Responsive text size
                  "transition-all duration-200 ease-out",
                  "hover:bg-button-hover-secondary hover:scale-105",
                  "active:scale-95",
                  "shadow-lg hover:shadow-xl"
                )}
              >
                Menu
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <div className="relative order-1 lg:order-2 h-80 sm:h-96 lg:h-[550px]"> {/* Increased height */}
            
            {/* Restaurant Image - Larger Size */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-10"
            >
              <div className={cn(
                "relative w-72 h-64 sm:w-80 sm:h-72 lg:w-[420px] lg:h-[380px] overflow-hidden", // Much larger size
                "organic-shape-reference",
                "shadow-2xl"
              )}>
                {/* Fallback Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-brown/20 via-accent-gold/20 to-primary-brown/10" />
                
                {/* Restaurant Image - Using your local image */}
                <Image
                  src="/images/hero/restaurant-interior.jpg" // Your local image
                  alt="Aevora Thai Restaurant Interior"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 420px"
                  priority
                  onError={(e) => {
                    console.log('Restaurant image failed to load, showing fallback');
                    // Keep the gradient background visible
                  }}
                />
                
                {/* Glass Overlay */}
                <div className={cn(
                  "absolute inset-0",
                  "bg-gradient-to-br from-white/8 via-transparent to-primary-brown/8"
                )} />
              </div>

              {/* Our Gallery Card - Larger and Better Positioned */}
              <div className="absolute bottom-4 lg:bottom-6 right-4 lg:right-6 z-20">
                <GalleryCard 
                  className="scale-90 lg:scale-100"
                  title="Our Gallery"
                />
              </div>
            </motion.div>

            {/* Floating Food Bowl 1 - Top Right */}
            <motion.div
              className="absolute top-2 lg:top-4 right-0 lg:right-2 z-20"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <FloatingFoodBowl
                imageSrc="/images/hero/thai-noodles-bowl.jpg" // Your local image
                imageAlt="Thai Noodles"
                size="lg"
                delay={0}
                className="gentle-float"
              />
            </motion.div>

            {/* Floating Food Bowl 2 - Bottom Left */}
            <motion.div
              className="absolute bottom-2 lg:bottom-4 left-2 lg:left-4 z-20"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <FloatingFoodBowl
                imageSrc="/images/hero/thai-curry-bowl.jpg" // Your local image
                imageAlt="Thai Curry"
                size="md"
                delay={0}
                className="gentle-float"
              />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-12 lg:top-16 right-16 lg:right-20 w-2 h-2 bg-primary-brown rounded-full opacity-60 animate-pulse" />
            <div className="absolute bottom-16 lg:bottom-20 left-8 lg:left-12 w-1.5 h-1.5 bg-accent-gold rounded-full opacity-40 animate-pulse [animation-delay:1s]" />
          </div>
        </div>
      </Container>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 lg:top-20 left-5 lg:left-10 w-48 lg:w-72 h-48 lg:h-72 bg-primary-brown/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 lg:bottom-20 right-5 lg:right-10 w-64 lg:w-96 h-64 lg:h-96 bg-accent-gold/5 rounded-full blur-3xl animate-float [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/4 w-32 lg:w-48 h-32 lg:h-48 bg-secondary-warm-brown/3 rounded-full blur-3xl animate-float [animation-delay:4s]" />
      </div>
    </Section>
  );
}