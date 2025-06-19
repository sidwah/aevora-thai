'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/container';
import Section from '@/components/layout/section';
import { coreValues } from '@/data/restaurant-story';
import { Heart, Target } from 'lucide-react';

export default function MissionValues() {
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
            <Heart className="w-5 h-5 text-primary-brown" />
            <span className="font-secondary text-sm uppercase tracking-wider text-neutral-gray">
              Our Foundation
            </span>
          </div>
          <h2 className="font-primary text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Mission &{' '}
            <span className="text-primary-brown">Values</span>
          </h2>
          <p className="font-secondary text-lg lg:text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            The principles that guide everything we do at Aevora Thai, from our kitchen to your table.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full glass-light rounded-2xl p-6 lg:p-8 text-center transition-all duration-300 hover:glass-medium hover:scale-105">
                {/* Icon */}
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-primary-brown/20 to-accent-gold/20 flex items-center justify-center text-2xl lg:text-3xl group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-primary text-xl lg:text-2xl font-bold  mb-3">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="font-secondary text-sm lg:text-base text-neutral-gray leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto glass-medium rounded-3xl p-8 lg:p-12 border border-white/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Target className="w-6 h-6 text-primary-brown" />
              <h3 className="font-primary text-2xl lg:text-3xl font-bold">
                Our Mission
              </h3>
            </div>
            
            <p className="font-secondary text-lg lg:text-xl text-neutral-gray leading-relaxed mb-6">
            &quot;To bring the authentic flavors of Thailand to Ghana while honoring traditional recipes and techniques passed down through generations.&quot;
            </p>
           
            <div className="inline-flex items-center gap-2 text-primary-brown font-secondary font-semibold text-sm uppercase tracking-wider">
              <span>— Michael Arkoh, Founder</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}