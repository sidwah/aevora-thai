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

export default function HeroSection() {
  return (
    <Section spacing="lg" id="hero" className="relative overflow-hidden pt-8 lg:pt-12">
      <Container size="xl">
        {/* Mobile Layout: Title -> Image -> Description -> Buttons */}
        <div className="lg:hidden space-y-6">
          {/* Mobile Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-center"
          >
            <h1 className={cn(
              "font-primary text-3xl sm:text-4xl font-bold",
              " leading-tight",
              "tracking-tight"
            )}>
              An Ambient
              <br />
              <span className="text-primary-brown">Dining Experience</span>
            </h1>
          </motion.div>

          {/* Mobile Visual Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative h-80 sm:h-96 mb-6"
          >
            {/* Restaurant Image - Mobile */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className={cn(
                "relative w-72 h-64 sm:w-80 sm:h-72 overflow-hidden",
                "organic-shape-reference",
                "shadow-2xl"
              )}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-brown/20 via-accent-gold/20 to-primary-brown/10" />
                
                <Image
                  src="/images/hero/restaurant-interior.jpg"
                  alt="Aevora Thai Restaurant Interior"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 288px, 320px"
                  priority
                />
                
                <div className={cn(
                  "absolute inset-0",
                  "bg-gradient-to-br from-white/8 via-transparent to-primary-brown/8"
                )} />
              </div>
            </div>

            {/* Mobile Floating Food Bowl 1 - Top Right */}
            <motion.div
              className="absolute top-2 right-4 z-20"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <FloatingFoodBowl
                imageSrc="/images/hero/thai-noodles-bowl.jpg"
                imageAlt="Thai Noodles"
                size="md"
                delay={0}
                className="gentle-float"
              />
            </motion.div>

            {/* Mobile Floating Food Bowl 2 - Bottom Left */}
            <motion.div
              className="absolute bottom-2 left-4 z-20"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <FloatingFoodBowl
                imageSrc="/images/hero/thai-curry-bowl.jpg"
                imageAlt="Thai Curry"
                size="sm"
                delay={0}
                className="gentle-float"
              />
            </motion.div>
          </motion.div>

          {/* Mobile Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center space-y-3"
          >
            <p className={cn(
              "font-secondary text-base sm:text-lg",
              "leading-relaxed",
              "max-w-md mx-auto"
            )}>
              Join us at the table as you dine for the perfect meal. 
              We treat all of our customers with special care and service.
            </p>
            
            <p className={cn(
              "font-secondary text-sm sm:text-base",
              "text-neutral-gray leading-relaxed",
              "max-w-md mx-auto"
            )}>
              Have a feast and enjoy our fine drinks while you are at it.
            </p>
          </motion.div>

          {/* Mobile CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            {/* Gallery Button */}
            <Link
              href="/gallery"
              className={cn(
                "group inline-flex items-center justify-center gap-3",
                "px-6 py-3 rounded-lg",
                "bg-button-primary text-white",
                "font-secondary font-semibold text-sm",
                "transition-all duration-200 ease-out",
                "hover:bg-button-hover-primary hover:scale-105",
                "active:scale-95",
                "shadow-lg hover:shadow-xl"
              )}
            >
              Gallery
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Menu Button */}
            <Link
              href="/menu"
              className={cn(
                "group inline-flex items-center justify-center gap-3",
                "px-6 py-3 rounded-lg",
                "bg-button-secondary text-white",
                "font-secondary font-semibold text-sm",
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
        </div>

        {/* Desktop Layout: Two Columns */}
        <div className="hidden lg:grid grid-cols-2 gap-16 items-center min-h-[75vh]">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 pr-6"
          >
            {/* Desktop Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-4"
            >
              <h1 className={cn(
                "font-primary text-5xl xl:text-6xl font-bold",
                "leading-tight",
                "tracking-tight"
              )}>
                An Ambient
                <br />
                <span className="text-primary-brown">Dining Experience</span>
              </h1>
            </motion.div>

            {/* Desktop Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4"
            >
              <p className={cn(
                "font-secondary text-xl",
                "leading-relaxed",
                "max-w-md"
              )}>
                Join us at the table as you dine for the perfect meal. 
                We treat all of our customers with special care and service.
              </p>
              
              <p className={cn(
                "font-secondary text-base",
                "text-neutral-gray leading-relaxed",
                "max-w-md"
              )}>
                Have a feast and enjoy our fine drinks while you are at it.
              </p>
            </motion.div>

            {/* Desktop CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex gap-4"
            >
              {/* Gallery Button */}
              <Link
                href="/gallery"
                className={cn(
                  "group inline-flex items-center justify-center gap-3",
                  "px-8 py-4 rounded-lg",
                  "bg-button-primary text-white",
                  "font-secondary font-semibold text-base",
                  "transition-all duration-200 ease-out",
                  "hover:bg-button-hover-primary hover:scale-105",
                  "active:scale-95",
                  "shadow-lg hover:shadow-xl"
                )}
              >
                Gallery
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Menu Button */}
              <Link
                href="/menu"
                className={cn(
                  "group inline-flex items-center justify-center gap-3",
                  "px-8 py-4 rounded-lg",
                  "bg-button-secondary text-white",
                  "font-secondary font-semibold text-base",
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
          <div className="relative h-[550px]">
            
            {/* Desktop Restaurant Image - No Gallery Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10"
            >
              <div className={cn(
                "relative w-[420px] h-[380px] overflow-hidden",
                "organic-shape-reference",
                "shadow-2xl"
              )}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-brown/20 via-accent-gold/20 to-primary-brown/10" />
                
                <Image
                  src="/images/hero/restaurant-interior.jpg"
                  alt="Aevora Thai Restaurant Interior"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="420px"
                  priority
                />
                
                <div className={cn(
                  "absolute inset-0",
                  "bg-gradient-to-br from-white/8 via-transparent to-primary-brown/8"
                )} />
              </div>
            </motion.div>

            {/* Desktop Floating Food Bowl 1 - Top Right */}
            <motion.div
              className="absolute top-4 right-2 z-20"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <FloatingFoodBowl
                imageSrc="/images/hero/thai-noodles-bowl.jpg"
                imageAlt="Thai Noodles"
                size="lg"
                delay={0}
                className="gentle-float"
              />
            </motion.div>

            {/* Desktop Floating Food Bowl 2 - Bottom Left */}
            <motion.div
              className="absolute bottom-4 left-4 z-20"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <FloatingFoodBowl
                imageSrc="/images/hero/thai-curry-bowl.jpg"
                imageAlt="Thai Curry"
                size="md"
                delay={0}
                className="gentle-float"
              />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-16 right-20 w-2 h-2 bg-primary-brown rounded-full opacity-60 animate-pulse" />
            <div className="absolute bottom-20 left-12 w-1.5 h-1.5 bg-accent-gold rounded-full opacity-40 animate-pulse [animation-delay:1s]" />
          </div>
        </div>
      </Container>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-brown/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl animate-float [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-secondary-warm-brown/3 rounded-full blur-3xl animate-float [animation-delay:4s]" />
      </div>
    </Section>
  );
}