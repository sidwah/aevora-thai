'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/layout/container';
import Section from '@/components/layout/section';
import { founderInfo, restaurantStory } from '@/data/restaurant-story';
import { ArrowRight, Award, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <Section spacing="lg" className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 h-64 w-64 rounded-full bg-primary-brown/5 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-accent-gold/8 blur-3xl animate-float" 
             style={{ animationDelay: '2s' }} />
      </div>

      <Container size="xl">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {/* Header */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-5 h-5 text-primary-brown" />
              <span className="font-secondary text-sm uppercase tracking-wider text-neutral-gray">
                Our Story
              </span>
            </div>
            <h1 className="font-primary text-3xl sm:text-4xl font-bold  mb-4">
              Meet{' '}
              <span className="text-primary-brown">Michael Arkoh</span>
            </h1>
            <p className="font-secondary text-lg max-w-2xl mx-auto">
              The visionary founder bringing authentic Thai flavors to Ghana&apos;s culinary landscape
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="relative h-80 sm:h-96 max-w-lg mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="relative h-full glass-medium rounded-2xl overflow-hidden">
              <Image
                src="/images/about/michael-arkoh-hero.jpg"
                alt="Michael Arkoh, Founder of Aevora Thai Restaurant"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 90vw, 500px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating info card */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 glass-light rounded-xl p-4 border border-white/20 backdrop-blur-xl">
              <div className="text-center">
                <p className="font-secondary font-semibold text-primary-brown text-sm">
                  {founderInfo.experience} Experience
                </p>
                <p className="font-secondary text-xs ">
                  {founderInfo.specialization}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Story Introduction */}
          <motion.div 
            className="text-center space-y-6 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="font-secondary text-base sm:text-lg leading-relaxed">
              {restaurantStory.journey.beginning}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/gallery"
                className="inline-flex items-center justify-center gap-2 bg-button-secondary hover:bg-button-hover-secondary text-white px-6 py-3 rounded-lg font-secondary font-semibold text-sm transition-all duration-200 hover:scale-105"
              >
                <Award className="w-4 h-4" />
                View Gallery
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-button-primary hover:bg-button-hover-primary text-white px-6 py-3 rounded-lg font-secondary font-semibold text-sm transition-all duration-200 hover:scale-105"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-16 items-center min-h-[600px]">
            {/* Content Column */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-6 h-6 text-primary-brown" />
                  <span className="font-secondary text-sm uppercase tracking-wider text-neutral-gray">
                    Our Story
                  </span>
                </div>
                <h1 className="font-primary text-4xl xl:text-5xl font-bold  mb-6">
                  Meet{' '}
                  <span className="text-primary-brown">Michael Arkoh</span>
                </h1>
                <p className="font-secondary text-xl  mb-8 leading-relaxed">
                  The visionary founder bringing authentic Thai flavors to Ghana&apos;s culinary landscape for over {founderInfo.experience}.
                </p>
              </div>

              <div className="space-y-6">
                <p className="font-secondary text-lg   leading-relaxed">
                  {restaurantStory.journey.beginning}
                </p>
                <p className="font-secondary text-lg leading-relaxed">
                  {restaurantStory.journey.development}
                </p>
              </div>

              <div className="flex gap-4">
                <Link 
                  href="/gallery"
                  className="inline-flex items-center gap-3 bg-button-secondary hover:bg-button-hover-secondary text-white px-8 py-4 rounded-lg font-secondary font-semibold text-base transition-all duration-200 hover:scale-105"
                >
                  <Award className="w-5 h-5" />
                  View Gallery
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-button-primary hover:bg-button-hover-primary text-white px-8 py-4 rounded-lg font-secondary font-semibold text-base transition-all duration-200 hover:scale-105"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={cn(" relative glass-medium rounded-3xl ",
                "shadow-2xl hover:shadow-3xl transition-all duration-500",
                "hover:scale-105 transform rotate-2 hover:rotate-3"
              )}
            >
              <div className="relative h-[500px] xl:h-[600px]">
                <div className="relative h-full rounded-3xl overflow-hidden">
                  <Image
                    src="/images/about/michael-arkoh-hero.jpg"
                    alt="Michael Arkoh, Founder of Aevora Thai Restaurant"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 600px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Floating achievement card */}
                <div className="absolute -bottom-8 -left-8 glass-strong rounded-2xl p-6 border border-white/30 backdrop-blur-2xl max-w-xs">
                  <div className="text-center text-white">
                    <p className="font-primary text-2xl font-bold text-primary-brown mb-2">
                      {restaurantStory.yearsOfService}
                    </p>
                    <p className="font-secondary text-sm font-medium mb-1">
                      Years of Excellence
                    </p>
                    <p className="font-secondary text-xs opacity-90">
                      Serving authentic Thai cuisine in Ghana
                    </p>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-brown/10 rounded-full blur-xl animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}