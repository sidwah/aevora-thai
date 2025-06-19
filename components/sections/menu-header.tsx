'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/container';
import Section from '@/components/layout/section';

export default function MenuHeader() {
  return (
    <Section spacing="sm" background="glass-light" id="menu-header">
      <Container size="sm">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center "
        >
          {/* Header Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="w-10 h-10 bg-primary-brown/10 rounded-full flex items-center justify-center">
              <span className="text-xl">🍛</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-primary text-xl sm:text-2xl lg:text-3xl font-bold mb-4"
          >
            Our Menu
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-secondary text-sm sm:text-base lg:text-lg text-neutral-gray leading-relaxed mb-5"
          >
            Discover authentic Thai flavors crafted with traditional techniques and the finest ingredients. 
            Each dish tells a story of <span className="text-primary-brown font-medium">heritage and passion</span>.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {[
              { icon: '🌿', text: 'Fresh Ingredients' },
              { icon: '🔥', text: 'Traditional Recipes' },
              { icon: '👨‍🍳', text: '25+ Years Experience' },
              { icon: '🌶️', text: 'Authentic Spices' }
            ].map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                className="bg-secondary-white/80 backdrop-blur-sm border border-neutral-light rounded-full px-2 py-1 flex items-center gap-1"
              >
                <span className="text-lg">{feature.icon}</span>
                <span className="font-secondary text-xs font-semibold text-primary-dark">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}