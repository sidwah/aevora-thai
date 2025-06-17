'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Image as Gallery, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

import Container from '@/components/layout/container';
import Section from '@/components/layout/section';

export default function HeritageSection() {
  return (
    <Section spacing="lg" id="heritage" className="heritage-section-bg">
      <Container size="xl">
        {/* Mobile Layout: Title -> Heritage Image -> Story -> CTAs */}
        <div className="lg:hidden mb-12">
          {/* Mobile Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-center mb-6"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-primary-brown" />
              <span className="font-secondary text-sm text-neutral-gray uppercase tracking-wider">
                Our Heritage
              </span>
            </div>
            <h2 className={cn(
              "font-primary font-bold text-neutral-gray",
              "text-2xl sm:text-3xl",
              "leading-tight"
            )}>
              Tradition & Family
              <br />
              <span className="text-primary-brown">Recipes</span>
            </h2>
          </motion.div>

          {/* Mobile Heritage Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative mb-8"
          >
            <div className="relative w-full h-64 sm:h-80 rounded-3xl overflow-hidden mx-auto shadow-2xl max-w-md glass-light">
              <Image
                src="/images/heritage/restaurant-interior-dining.jpg"
                alt="Aevora Thai Restaurant Interior - Traditional Thai Dining Atmosphere"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 400px"
                priority
              />
            </div>

            {/* Mobile Decorative Elements */}
            <div className="absolute -top-2 -right-2 text-primary-brown/30">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </motion.div>

          {/* Mobile Heritage Story */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-4 mb-8 text-center"
          >
            <p className={cn(
              "font-secondary text-neutral-gray leading-relaxed",
              "text-base sm:text-lg",
              "max-w-2xl mx-auto"
            )}>
              For over 25 years, our family has preserved the authentic flavors of Thailand, 
              passing down traditional recipes through generations of passionate chefs.
            </p>
            
            <p className={cn(
              "font-secondary text-neutral-gray leading-relaxed",
              "text-sm sm:text-base",
              "max-w-xl mx-auto"
            )}>
              Every dish tells a story of heritage, crafted with time-honored techniques 
              and the finest ingredients to bring you the true taste of Thailand.
            </p>
          </motion.div>

          {/* Mobile CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              href="/gallery"
              className={cn(
                "inline-flex items-center justify-center gap-2",
                "px-6 py-3",
                "bg-button-secondary hover:bg-button-hover-secondary",
                "text-secondary-white font-secondary font-semibold",
                "text-sm sm:text-base",
                "rounded-lg shadow-md hover:shadow-lg",
                "transition-all duration-200 ease-out",
                "hover:scale-105 active:scale-95"
              )}
            >
              <Gallery className="w-4 h-4" />
              Gallery
            </Link>
            
            <Link
              href="/about"
              className={cn(
                "inline-flex items-center justify-center gap-2",
                "px-6 py-3",
                "bg-button-primary hover:bg-button-hover-primary",
                "text-secondary-white font-secondary font-semibold",
                "text-sm sm:text-base",
                "rounded-lg shadow-md hover:shadow-lg",
                "transition-all duration-200 ease-out",
                "hover:scale-105 active:scale-95"
              )}
            >
              <Users className="w-4 h-4" />
              Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Desktop Layout: Heritage Image Left, Content Right */}
        <div className="hidden lg:block mb-12 lg:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-center">
            {/* Heritage Image Column - LEFT */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative lg:order-1"
            >
              {/* Desktop Heritage Image */}
              <div className="w-full lg:h-[380px] xl:h-[420px] rounded-3xl overflow-hidden shadow-2xl glass-medium">
                <Image
                  src="/images/heritage/restaurant-interior-dining.jpg"
                  alt="Aevora Thai Restaurant Interior - Traditional Thai Dining Atmosphere"
                  width={600}
                  height={420}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Desktop Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 opacity-20">
                <div className="w-full h-full bg-primary-brown/30 rounded-full blur-xl animate-pulse" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 opacity-15">
                <div className="w-full h-full bg-accent-gold/40 rounded-full blur-2xl animate-float" />
              </div>

              {/* Thai Cultural Decorative Symbol */}
              <div className="absolute top-8 right-8 text-primary-brown/20">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </motion.div>

            {/* Content Column - RIGHT */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:order-2 lg:pl-8 xl:pl-12"
            >
              <div className="space-y-6 lg:space-y-8">
                {/* Desktop Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-6 h-6 text-primary-brown" />
                    <span className="font-secondary text-sm text-neutral-gray uppercase tracking-wider">
                      Our Heritage
                    </span>
                  </div>
                  <h2 className={cn(
                    "font-primary font-bold text-neutral-gray",
                    "text-3xl lg:text-4xl xl:text-5xl",
                    "leading-tight"
                  )}>
                    Tradition & Family
                    <br />
                    <span className="text-primary-brown">Recipes</span>
                  </h2>
                </motion.div>

                {/* Desktop Heritage Story */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="space-y-4 lg:space-y-6"
                >
                  <p className={cn(
                    "font-secondary text-neutral-gray leading-relaxed",
                    "text-lg lg:text-xl",
                    "max-w-lg"
                  )}>
                    For over 25 years, our family has preserved the authentic flavors of Thailand, 
                    passing down traditional recipes through generations of passionate chefs.
                  </p>
                  
                  <p className={cn(
                    "font-secondary text-neutral-gray leading-relaxed",
                    "text-base lg:text-lg",
                    "max-w-lg"
                  )}>
                    Every dish tells a story of heritage, crafted with time-honored techniques 
                    and the finest ingredients to bring you the true taste of Thailand.
                  </p>
                  
                  <p className={cn(
                    "font-secondary text-neutral-gray leading-relaxed",
                    "text-base lg:text-lg",
                    "max-w-lg"
                  )}>
                    From our kitchen to your table, we continue this legacy of culinary excellence, 
                    creating an authentic dining experience that honors our Thai roots.
                  </p>
                </motion.div>

                {/* Desktop CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    href="/gallery"
                    className={cn(
                      "inline-flex items-center gap-3",
                      "px-8 py-4",
                      "bg-button-secondary hover:bg-button-hover-secondary",
                      "text-secondary-white font-secondary font-semibold",
                      "text-base lg:text-lg",
                      "rounded-xl shadow-lg hover:shadow-xl",
                      "transition-all duration-300 ease-out",
                      "hover:scale-105 active:scale-95"
                    )}
                  >
                    <Gallery className="w-5 h-5" />
                    Gallery
                  </Link>
                  
                  <Link
                    href="/about"
                    className={cn(
                      "inline-flex items-center gap-3",
                      "px-8 py-4",
                      "bg-button-primary hover:bg-button-hover-primary",
                      "text-secondary-white font-secondary font-semibold",
                      "text-base lg:text-lg",
                      "rounded-xl shadow-lg hover:shadow-xl",
                      "transition-all duration-300 ease-out",
                      "hover:scale-105 active:scale-95"
                    )}
                  >
                    <Users className="w-5 h-5" />
                    Our Story
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}