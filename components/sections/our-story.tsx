'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/layout/container';
import Section from '@/components/layout/section';
import { restaurantStory } from '@/data/restaurant-story';
import { Calendar, MapPin, Star } from 'lucide-react';

export default function OurStory() {
  return (
    <Section spacing="lg" className="bg-section">
      <Container size="xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-5 h-5 text-primary-brown" />
            <span className="font-secondary text-sm uppercase tracking-wider text-neutral-gray">
              Our Journey
            </span>
          </div>
          <h2 className="font-primary text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            From Vision to{' '}
            <span className="text-primary-brown">Reality</span>
          </h2>
          <p className="font-secondary text-lg lg:text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            {restaurantStory.mission}
          </p>
        </motion.div>

        {/* Story Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 glass-light rounded-xl">
                <div className="flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary-brown" />
                </div>
                <div>
                  <h3 className="font-secondary font-semibold  mb-1">
                    Established {restaurantStory.established}
                  </h3>
                  <p className="font-secondary text-sm text-neutral-gray">
                    Michael Arkoh opens Aevora Thai in East Legon
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass-light rounded-xl">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-brown" />
                </div>
                <div>
                  <h3 className="font-secondary font-semibold mb-1">
                    East Legon, Accra
                  </h3>
                  
                  <p className="font-secondary text-sm text-neutral-gray">
                 Strategically located in Ghana&apos;s premier dining district 
                  </p>
                  
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass-light rounded-xl">
                <div className="flex-shrink-0">
                  <Star className="w-6 h-6 text-primary-brown" />
                </div>
                <div>
             
                  <h3 className="font-secondary font-semibold  mb-1">
                  Ghana&apos;s Premier Thai Restaurant 
                  </h3>
               
                  <p className="font-secondary text-sm text-neutral-gray">
                    Recognized for authentic cuisine and exceptional service
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="font-secondary text-base lg:text-lg leading-relaxed">
                {restaurantStory.journey.development}
              </p>
              <p className="font-secondary text-base lg:text-lg leading-relaxed">
                {restaurantStory.journey.present}
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-80 lg:h-[500px]">
              <div className="relative h-full glass-medium rounded-2xl overflow-hidden">
                <Image
                  src="/images/about/restaurant-interior.jpg"
                  alt="Aevora Thai Restaurant Interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-6 -right-6 glass-strong rounded-xl p-4 border border-white/20 backdrop-blur-xl">
                <div className="text-center text-white">
                  <p className="font-primary text-xl font-bold text-primary-brown">
                    {restaurantStory.yearsOfService}
                  </p>
                  <p className="font-secondary text-xs">
                    Years Serving Ghana
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision Statement */}
        <motion.div 
          className="text-center bg-gradient-to-r from-primary-brown/10 to-accent-gold/10 rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-primary text-2xl lg:text-3xl font-bold mb-4">
            Our Vision
          </h3>
          <p className="font-secondary text-lg lg:text-xl text-neutral-gray max-w-4xl mx-auto leading-relaxed">
            {restaurantStory.vision}
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}