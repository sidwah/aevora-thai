'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/layout/container';
import Section from '@/components/layout/section';
import { kitchenPhilosophy } from '@/data/team-members';
import { cn } from '@/lib/utils';
import { ChefHat } from 'lucide-react';

export default function KitchenPhilosophy() {
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
            <ChefHat className="w-5 h-5 text-primary-brown" />
            <span className="font-secondary text-sm uppercase tracking-wider text-neutral-gray">
              Kitchen Excellence
            </span>
          </div>
          <h2 className="font-primary text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {kitchenPhilosophy.title}
          </h2>
          <p className="font-secondary text-lg lg:text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            {kitchenPhilosophy.description}
          </p>
        </motion.div>

        {/* Philosophy Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={cn("glass-medium rounded-3xl shadow-2xl",
              "relative order-2 lg:order-1",
              "hover:shadow-3xl transition-all duration-500",
              "hover:scale-105 transform rotate-2 hover:rotate-3"
            )}
          >
            <div className="relative h-80 lg:h-[500px]">
              <div className="relative h-full glass-medium rounded-2xl overflow-hidden">
                <Image
                  src="/images/about/kitchen-philosophy.jpg"
                  alt="Aevora Thai Kitchen in Action"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating philosophy badge */}
              <div className="absolute -bottom-6 -right-6 glass-strong rounded-xl p-4 border border-white/20 backdrop-blur-xl">
                <div className="text-center text-white">
                  <ChefHat className="w-8 h-8 text-primary-brown mx-auto mb-2" />
                  <p className="font-secondary text-xs font-medium">
                    Traditional Methods
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Philosophy Principles */}
          <motion.div 
            className="space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {kitchenPhilosophy.principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.1
                  }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 glass-light rounded-xl hover:glass-medium transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-brown/20 to-accent-gold/20 flex items-center justify-center text-lg">
                      {principle.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-secondary font-bold text-lg mb-2">
                      {principle.title}
                    </h3>
                    <p className="font-secondary text-neutral-gray text-sm leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}