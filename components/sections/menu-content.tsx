'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/layout/container';
import Section from '@/components/layout/section';
import CategoryNavigation from '@/components/ui/category-navigation';
import MenuGrid from '@/components/ui/menu-grid';
import { menuCategories } from '@/data/menu-items';

export default function MenuContent() {
  const [activeCategory, setActiveCategory] = useState('all'); // Changed default to 'all'
  
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  // Handle "All" category display
  const getCurrentCategoryInfo = () => {
    if (activeCategory === 'all') {
      return {
        name: 'All Menu Items',
        description: 'Explore our complete collection of authentic Thai dishes, from traditional appetizers to signature mains'
      };
    }
    
    const currentCategory = menuCategories.find(cat => cat.id === activeCategory);
    return {
      name: currentCategory?.name || '',
      description: currentCategory?.description || ''
    };
  };

  const categoryInfo = getCurrentCategoryInfo();

  return (
    <Section spacing="xl" id="menu-content">
      <Container size="xl">
        <div className="space-y-8 lg:space-y-12">
          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <CategoryNavigation 
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </motion.div>

          {/* Category Header */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="font-primary text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                {categoryInfo.name}
              </h2>
              <p className="font-secondary text-neutral-gray text-lg sm:text-xl">
                {categoryInfo.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Menu Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <MenuGrid activeCategory={activeCategory} />
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  );
}