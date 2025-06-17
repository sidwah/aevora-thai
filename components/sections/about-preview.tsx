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
        {/* Mobile Layout: Title -> Image -> Description -> Button */}
        <div className="lg:hidden space-y-6 mb-16">
          {/* Mobile Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-center space-y-3"
          >
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-brown/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-brown" />
              </div>
              <span className="font-secondary text-sm font-semibold text-primary-brown uppercase tracking-widest">
                Our Story
              </span>
            </div>
            
            <h2 className="font-primary text-2xl sm:text-3xl font-bold text-primary-dark leading-tight">
              Authentic Thai Heritage
              <br />
              <span className="text-primary-brown">In Every Dish</span>
            </h2>
          </motion.div>

          {/* Mobile Chef Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative flex justify-center mb-8"
          >
            <div className="relative">
              <div className={cn(
                "relative w-64 h-64 sm:w-80 sm:h-80",
                "rounded-2xl sm:rounded-3xl overflow-hidden",
                "glass-medium border-2 sm:border-4 border-secondary-white",
                "shadow-xl hover:shadow-2xl transition-all duration-500",
                "hover:scale-105 transform rotate-1 hover:rotate-2"
              )}>
                <Image
                  src="/images/about/chef-portrait.jpg"
                  alt="Head Chef - Aevora Thai Restaurant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 256px, 320px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-dark/5" />
              </div>

              {/* Mobile Experience Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className={cn(
                  "absolute -top-3 -right-2",
                  "glass-strong rounded-lg",
                  "px-3 py-2",
                  "border border-white/20",
                  "shadow-lg"
                )}
              >
                <div className="text-center">
                  <div className="font-primary text-lg font-bold text-primary-brown">25+</div>
                  <div className="font-secondary text-xs text-primary-dark font-medium">Years</div>
                </div>
              </motion.div>

              {/* Mobile Chef Title Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className={cn(
                  "absolute -bottom-3 -left-2",
                  "glass-strong rounded-lg",
                  "px-3 py-2",
                  "border border-white/20",
                  "shadow-lg"
                )}
              >
                <div className="text-center">
                  <div className="font-primary text-sm font-bold text-primary-brown">Head Chef</div>
                  <div className="font-secondary text-xs text-primary-dark font-medium">& Founder</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-secondary text-base sm:text-lg text-neutral-gray leading-relaxed text-center max-w-2xl mx-auto"
          >
            Founded with a passion for bringing authentic Thai flavors to East Legon, 
            Aevora Thai represents three generations of culinary expertise. Our commitment 
            to traditional cooking methods and fresh ingredients creates an unparalleled 
            dining experience that celebrates both Thai heritage and Ghanaian hospitality.
          </motion.p>

          {/* Mobile CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center"
          >
            <Link
              href="/about"
              className={cn(
                "inline-flex items-center gap-3",
                "px-6 py-3 rounded-lg",
                "bg-button-secondary hover:bg-button-hover-secondary",
                "text-secondary-white font-secondary font-semibold",
                "text-sm",
                "transition-all duration-200 ease-out",
                "hover:scale-105 active:scale-95",
                "shadow-lg hover:shadow-xl"
              )}
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Desktop Layout: Two Columns with Better Spacing */}
        <div className="hidden lg:block">
          <Grid cols={1} responsive={{ lg: 2 }} gap="xl" className="items-center">
            {/* Content Column - Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8 pr-12" // Increased right padding for more separation
            >
              {/* Desktop Section Header */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-brown/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary-brown" />
                  </div>
                  <span className="font-secondary text-sm font-semibold text-primary-brown uppercase tracking-widest">
                    Our Story
                  </span>
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="font-primary text-4xl xl:text-5xl font-bold text-primary-dark leading-tight"
                >
                  Authentic Thai Heritage
                  <br />
                  <span className="text-primary-brown">In Every Dish</span>
                </motion.h2>
              </div>

              {/* Desktop Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-secondary text-xl text-neutral-gray leading-relaxed max-w-lg"
              >
                Founded with a passion for bringing authentic Thai flavors to East Legon, 
                Aevora Thai represents three generations of culinary expertise. Our commitment 
                to traditional cooking methods and fresh ingredients creates an unparalleled 
                dining experience that celebrates both Thai heritage and Ghanaian hospitality.
              </motion.p>

              {/* Desktop CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Link
                  href="/about"
                  className={cn(
                    "inline-flex items-center gap-3",
                    "px-8 py-4 rounded-lg",
                    "bg-button-secondary hover:bg-button-hover-secondary",
                    "text-secondary-white font-secondary font-semibold",
                    "text-base",
                    "transition-all duration-200 ease-out",
                    "hover:scale-105 active:scale-95",
                    "shadow-lg hover:shadow-xl"
                  )}
                >
                  Learn More About Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Chef Visual Column - Right with Better Spacing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative h-[500px] pl-12 flex items-center justify-center" // Increased left padding for more separation
            >
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className={cn(
                    "relative w-[422px] h-[422px]",
                    "rounded-3xl overflow-hidden",
                    "glass-medium border-4 border-secondary-white",
                    "shadow-2xl hover:shadow-3xl transition-all duration-500",
                    "hover:scale-105 transform rotate-2 hover:rotate-3"
                  )}
                >
                  <Image
                    src="/images/about/chef-portrait.jpg"
                    alt="Head Chef - Aevora Thai Restaurant"
                    fill
                    className="object-cover"
                    sizes="422px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-dark/5" />
                </motion.div>

                {/* Desktop Experience Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className={cn(
                    "absolute -top-6 -right-0",
                    "glass-strong rounded-2xl",
                    "px-6 py-4",
                    "border border-white/20",
                    "shadow-xl"
                  )}
                >
                  <div className="text-center">
                    <div className="font-primary text-2xl font-bold text-primary-brown">25+</div>
                    <div className="font-secondary text-sm text-primary-dark font-medium">Years Experience</div>
                  </div>
                </motion.div>

                {/* Desktop Chef Title Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className={cn(
                    "absolute -bottom-6 -left-6",
                    "glass-strong rounded-2xl",
                    "px-6 py-4",
                    "border border-white/20",
                    "shadow-xl"
                  )}
                >
                  <div className="text-center">
                    <div className="font-primary text-base font-bold text-primary-brown">Head Chef</div>
                    <div className="font-secondary text-sm text-primary-dark font-medium">& Founder</div>
                  </div>
                </motion.div>

                {/* Desktop Decorative Elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-primary-brown/8 rounded-full blur-xl animate-pulse opacity-60" />
                <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-accent-gold/6 rounded-full blur-xl animate-pulse opacity-60" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 -left-12 w-12 h-12 bg-secondary-warm-brown/6 rounded-full blur-xl animate-pulse opacity-40" style={{ animationDelay: '4s' }} />
              </div>
            </motion.div>
          </Grid>
        </div>
      </Container>
    </Section>
  );
}