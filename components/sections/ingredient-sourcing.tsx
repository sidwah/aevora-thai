'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/container';
import Section from '@/components/layout/section';
import { sourcingPractices } from '@/data/team-members';
import { Leaf, Package, ShieldCheck } from 'lucide-react';

const iconMap = {
  "Local Fresh Produce": Leaf,
  "Thai Imports": Package,
  "Quality Standards": ShieldCheck,
};

export default function IngredientSourcing() {
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
            <Leaf className="w-5 h-5 text-primary-brown" />
            <span className="font-secondary text-sm uppercase tracking-wider text-neutral-gray">
              Ingredient Excellence
            </span>
          </div>
          <h2 className="font-primary text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {sourcingPractices.title}
          </h2>
          <p className="font-secondary text-lg lg:text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            {sourcingPractices.description}
          </p>
        </motion.div>

        {/* Sourcing Practices Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {sourcingPractices.practices.map((practice, index) => {
            const IconComponent = iconMap[practice.category as keyof typeof iconMap] || Leaf;
            
            return (
              <motion.div
                key={practice.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.2
                }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full glass-light rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:glass-medium hover:scale-105">
                  {/* Icon */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-primary-brown/20 to-accent-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 lg:w-10 lg:h-10 text-primary-brown" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h3 className="font-primary text-xl lg:text-2xl font-bold">
                      {practice.category}
                    </h3>
                    <p className="font-secondary text-sm lg:text-base text-neutral-gray leading-relaxed">
                      {practice.description}
                    </p>

                    {/* Items List */}
                    <div className="space-y-2 pt-4 border-t border-primary-brown/10">
                      {practice.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center justify-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-brown" />
                          <span className="font-secondary text-xs lg:text-sm ">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quality Promise */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-brown/10 to-accent-gold/10 rounded-3xl p-8 lg:p-12">
            <h3 className="font-primary text-2xl lg:text-3xl font-bold  mb-4">
              Our Quality Promise
            </h3>
            <p className="font-secondary text-lg lg:text-xl text-neutral-gray max-w-4xl mx-auto leading-relaxed mb-6">
              Every ingredient that enters our kitchen is carefully selected, inspected, and approved by our head chef. 
              We never compromise on quality because authentic Thai cuisine deserves nothing less than the finest ingredients.
            </p>
            <div className="inline-flex items-center gap-2 text-primary-brown font-secondary font-semibold text-sm uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Guaranteed Fresh Daily</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}