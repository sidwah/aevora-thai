'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart } from 'lucide-react';
import Container from '@/components/layout/container';
import Section from '@/components/layout/section';
import Grid from '@/components/layout/grid';
import { cn } from '@/lib/utils';

export default function AboutPreview() {
  return (
    <Section spacing="xl" background="none" id="about-preview">
      <Container size="xl">
        <Grid cols={1} responsive={{ sm: 2, lg: 2 }} gap="md">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4 sm:space-y-6 lg:space-y-8 lg:pr-6 flex flex-col justify-center"
          >
            {/* Section Header */}
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center gap-2 sm:gap-3"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-primary-brown/10 flex items-center justify-center">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary-brown" />
                </div>
                <span className="font-secondary text-xs sm:text-sm font-semibold text-primary-brown uppercase tracking-widest">
                  Our Story
                </span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-dark leading-tight"
              >
                Authentic Thai Heritage
                <br />
                <span className="text-primary-brown">In Every Dish</span>
              </motion.h2>
            </div>

            {/* Single Content Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-secondary text-sm sm:text-base md:text-lg lg:text-xl text-neutral-gray leading-relaxed"
            >
              Founded with a passion for bringing authentic Thai flavors to East Legon, 
              Aevora Thai represents three generations of culinary expertise. Our commitment 
              to traditional cooking methods and fresh ingredients creates an unparalleled 
              dining experience that celebrates both Thai heritage and Ghanaian hospitality.
            </motion.p>

            {/* Call-to-Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-1 sm:pt-2"
            >
              <Link
                href="/about"
                className={cn(
                  "inline-flex items-center gap-2 sm:gap-3",
                  "px-6 py-3 sm:px-8 sm:py-4 rounded-lg",
                  "bg-button-secondary hover:bg-button-hover-secondary",
                  "text-secondary-white font-secondary font-semibold",
                  "text-sm sm:text-base",
                  "transition-all duration-200 ease-out",
                  "hover:scale-105 active:scale-95",
                  "shadow-lg hover:shadow-xl"
                )}
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Chef Visual Column - Responsive Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative h-80 sm:h-96 md:h-[450px] lg:h-[500px] sm:pl-4 lg:pl-8 flex items-center justify-center"
          >
            {/* Main Chef Portrait - Responsive Sizing */}
            <div className="relative w-full max-w-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className={cn(
                  "relative mx-auto",
                  // More aggressive mobile sizing for side-by-side layout
                  "w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 lg:w-[422px] lg:h-[422px]",
                  "rounded-2xl sm:rounded-3xl overflow-hidden",
                  "glass-medium border-2 sm:border-4 border-secondary-white",
                  "shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-500",
                  "hover:scale-105 transform rotate-1 sm:rotate-2 hover:rotate-2 sm:hover:rotate-3"
                )}
              >
                <Image
                  src="/images/about/chef-portrait.jpg"
                  alt="Head Chef - Aevora Thai Restaurant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 352px, 422px"
                  priority
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-dark/5" />
              </motion.div>

              {/* Experience Badge - Responsive Positioning */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className={cn(
                  "absolute -top-2 -right-1 sm:-top-4 sm:-right-2 lg:-top-6 lg:-right-0",
                  "glass-strong rounded-lg sm:rounded-2xl",
                  "px-2 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4",
                  "border border-white/20",
                  "shadow-lg sm:shadow-xl"
                )}
              >
                <div className="text-center">
                  <div className="font-primary text-base sm:text-xl lg:text-2xl font-bold text-primary-brown">
                    25+
                  </div>
                  <div className="font-secondary text-xs lg:text-sm text-primary-dark font-medium">
                    Years
                    <span className="hidden sm:inline"> Experience</span>
                  </div>
                </div>
              </motion.div>

              {/* Chef Title Badge - Responsive */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className={cn(
                  "absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6",
                  "glass-strong rounded-lg sm:rounded-2xl",
                  "px-2 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4",
                  "border border-white/20",
                  "shadow-lg sm:shadow-xl"
                )}
              >
                <div className="text-center">
                  <div className="font-primary text-xs sm:text-sm lg:text-base font-bold text-primary-brown">
                    Head Chef
                  </div>
                  <div className="font-secondary text-xs text-primary-dark font-medium">
                    & Founder
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements - Smaller on mobile */}
              <div className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 w-8 h-8 sm:w-16 sm:h-16 bg-primary-brown/8 rounded-full blur-xl animate-pulse opacity-60" />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 w-10 h-10 sm:w-20 sm:h-20 bg-accent-gold/6 rounded-full blur-xl animate-pulse opacity-60" style={{ animationDelay: '2s' }} />
              <div className="absolute top-1/2 -left-6 sm:-left-12 w-6 h-6 sm:w-12 sm:h-12 bg-secondary-warm-brown/6 rounded-full blur-xl animate-pulse opacity-40" style={{ animationDelay: '4s' }} />
            </div>
          </motion.div>
        </Grid>
      </Container>
    </Section>
  );
}