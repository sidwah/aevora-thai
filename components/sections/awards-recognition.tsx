'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/container';
import Section from '@/components/layout/section';
import { recognition } from '@/data/restaurant-story';
import { Award, Star, Trophy, Users2 } from 'lucide-react';

const iconMap = {
  "Best Thai Restaurant": Trophy,
  "Customer's Choice": Star,
  "Culinary Excellence": Award,
  "Community Partner": Users2,
};

export default function AwardsRecognition() {
  return (
    <Section spacing="lg">
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
            <Award className="w-5 h-5 text-primary-brown" />
            <span className="font-secondary text-sm uppercase tracking-wider text-neutral-gray">
              Recognition
            </span>
          </div>
          <h2 className="font-primary text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Awards &{' '}
            <span className="text-primary-brown">Recognition</span>
          </h2>
          <p className="font-secondary text-lg lg:text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            Our commitment to authentic Thai cuisine and exceptional service has been recognized by both customers and industry professionals.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {recognition.map((award, index) => {
            const IconComponent = iconMap[award.title as keyof typeof iconMap] || Award;
            
            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.15
                }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full glass-light rounded-2xl p-6 lg:p-8 text-center transition-all duration-300 hover:glass-medium hover:scale-105 hover:shadow-xl">
                  {/* Icon & Year */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-brown/20 to-accent-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-primary-brown" />
                    </div>
                    <span className="font-secondary text-sm font-semibold text-primary-brown bg-primary-brown/10 px-3 py-1 rounded-full">
                      {award.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-primary text-lg lg:text-xl font-bold  mb-2">
                    {award.title}
                  </h3>

                  {/* Source */}
                  <p className="font-secondary text-sm font-medium text-primary-brown mb-3">
                    {award.source}
                  </p>

                  {/* Description */}
                  <p className="font-secondary text-xs lg:text-sm text-neutral-gray leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Customer Reviews Summary */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-brown/10 to-accent-gold/10 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center text-center">
              
              {/* Rating */}
              <div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="font-primary text-2xl lg:text-3xl font-bold">
                  4.9/5
                </p>
                <p className="font-secondary text-sm text-neutral-gray">
                  Average Rating
                </p>
              </div>

              {/* Reviews Count */}
              <div>
                <p className="font-primary text-2xl lg:text-3xl font-bold text-primary-brown mb-1">
                  500+
                </p>
                <p className="font-secondary text-sm text-neutral-gray">
                  Happy Customers
                </p>
              </div>

              {/* Years */}
              <div>
                <p className="font-primary text-2xl lg:text-3xl font-bold text-primary-brown mb-1">
                  25+
                </p>
                <p className="font-secondary text-sm text-neutral-gray">
                  Years of Excellence
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-8 text-center border-t border-primary-brown/20 pt-8">
              <p className="font-secondary text-base lg:text-lg text-neutral-gray italic leading-relaxed max-w-2xl mx-auto">
              &quot;Aevora Thai has set the standard for authentic Thai cuisine in Ghana. Their dedication to quality and tradition is unmatched.&quot;
              </p>
              <p className="font-secondary text-sm text-primary-brown mt-3 font-semibold">
                — Ghana Restaurant Review
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}