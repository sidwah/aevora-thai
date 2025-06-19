'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

import Container from '@/components/layout/container';
import Section from '@/components/layout/section';
import Grid from '@/components/layout/grid';
import MenuCategoryCard from '@/components/ui/menu-category-card';
import { menuCategories, menuHeroContent } from '@/data/menu-categories';

export default function MenuPreview() {
  return (
    <Section spacing="xl" id="menu-preview" className="menu-section-bg">
      <Container size="xl">
        {/* Mobile Layout: Title -> Hero Image -> Description -> Categories */}
        <div className="lg:hidden mb-16">
          {/* Mobile Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className={cn(
              "font-primary font-bold text-neutral-gray text-center mb-6",
              "text-2xl sm:text-3xl",
              "leading-tight"
            )}
          >
            {menuHeroContent.title}
          </motion.h2>

          {/* Mobile Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative mb-8"
          >
            <div className="relative w-full h-64 sm:h-80 rounded-3xl overflow-hidden mx-auto shadow-2xl max-w-md glass-light">
              <Image
                src="/images/menu/hero-pad-thai.jpg"
                alt="Authentic Pad Thai - Our signature dish"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 400px"
                priority
              />
            </div>

            {/* Mobile Decorative Elements */}
            <div className="absolute -top-2 -right-2 text-primary-brown/30 star-decoration">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </motion.div>

          {/* Mobile Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={cn(
              "font-secondary leading-relaxed text-center mb-12",
              "text-base sm:text-lg",
              "max-w-2xl mx-auto"
            )}
          >
            {menuHeroContent.description}
          </motion.p>
        </div>

        {/* Desktop Layout: Image Left, Content Right */}
        <div className="hidden lg:block mb-16 lg:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-center">
            {/* Image Column - LEFT (First in source order for lg+) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative lg:order-1"
            >
              {/* Desktop Main Image */}
              <div className="w-full lg:h-[320px] xl:h-[360px] rounded-3xl overflow-hidden shadow-2xl glass-medium">
                <Image
                  src="/images/menu/hero-pad-thai.jpg"
                  alt="Authentic Pad Thai - Our signature dish"
                  width={500}
                  height={360}
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

              {/* Desktop Decorative Stars */}
              <div className="absolute top-8 right-8 text-primary-brown/30 star-decoration">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              
              <div className="absolute bottom-12 right-12 text-primary-brown/20 star-decoration">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </motion.div>

            {/* Content Column - RIGHT (Second in source order for lg+) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:order-2 lg:pl-8 xl:pl-12"
            >
              <div className="space-y-6 lg:space-y-8">
                {/* Desktop Title */}
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className={cn(
                    "font-primary font-bold",
                    "text-3xl lg:text-4xl xl:text-5xl",
                    "leading-tight"
                  )}
                >
                  {menuHeroContent.title}
                </motion.h2>

                {/* Desktop Description */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className={cn(
                    "font-secondary leading-relaxed",
                    "text-lg lg:text-xl",
                    "max-w-lg"
                  )}
                >
                  {menuHeroContent.description}
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Category Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <Grid cols={1} responsive={{ sm: 2, lg: 4 }} gap="lg">
            {menuCategories.map((category, index) => (
              <MenuCategoryCard 
                key={category.id} 
                {...category} 
                index={index}
              />
            ))}
          </Grid>
        </motion.div>

        {/* Explore Menu Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/menu"
            className={cn(
              "inline-flex items-center gap-3",
              "px-8 lg:px-10 py-4 lg:py-5",
              "see-more-button",
              "text-secondary-white font-secondary font-semibold",
              "text-sm sm:text-base lg:text-lg",
              "rounded-xl shadow-lg hover:shadow-xl",
              "transition-all duration-300 ease-out",
              "hover:scale-105 active:scale-95"
            )}
          >
            <Eye className="w-4 h-4 lg:w-5 lg:h-5" />
            Explore Full Menu
            <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}