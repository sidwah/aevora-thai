'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { galleryCategories, getCategoryCount } from '@/data/gallery-images';

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <section className="py-8 lg:py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="glass-light rounded-full p-2">
              <span className="text-2xl">🎨</span>
            </div>
            <span className="font-secondary text-sm uppercase tracking-wider text-neutral-gray">
              Browse Categories
            </span>
          </div>
          <h2 className="font-primary text-3xl lg:text-4xl mb-4">
            Explore Our <span className="text-primary-brown">Collections</span>
          </h2>
          <p className="font-secondary text-lg text-neutral-gray max-w-2xl mx-auto">
            From mouth-watering dishes to behind-the-scenes moments, discover the story of Aevora Thai
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 lg:gap-4"
        >
          {galleryCategories.map((category, index) => {
            const count = getCategoryCount(category.id);
            const isActive = activeCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onCategoryChange(category.id)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 lg:px-6 lg:py-4 rounded-2xl",
                  "font-secondary font-medium text-sm lg:text-base transition-all duration-300",
                  "border-2 backdrop-blur-md",
                  isActive
                    ? "bg-primary-brown text-white border-primary-brown shadow-lg scale-105"
                    : "glass-light hover:glass-medium border-transparent hover:border-primary-brown/20"
                )}
              >
                {/* Category Icon */}
                <span className="text-lg lg:text-xl">{category.icon}</span>
                
                {/* Category Info */}
                <div className="flex flex-col items-start">
                  <span className="font-semibold">{category.name}</span>
                  <span className={cn(
                    "text-xs opacity-75",
                    isActive ? "text-white/80" : " "
                  )}>
                    {count} {count === 1 ? 'photo' : 'photos'}
                  </span>
                </div>

                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary-brown rounded-2xl -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Active Category Description */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mt-6"
        >
          <p className="font-secondary text-neutral-gray max-w-lg mx-auto">
            {galleryCategories.find(cat => cat.id === activeCategory)?.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}