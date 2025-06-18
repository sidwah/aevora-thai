'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { menuCategories } from '@/data/menu-items';

interface CategoryNavigationProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

// Add "All" category to the beginning
const allCategories = [
  {
    id: 'all',
    name: 'All Items',
    icon: '🍽️',
    count: 41, // Total count of all menu items
    description: 'Browse our complete menu selection'
  },
  ...menuCategories
];

export default function CategoryNavigation({ 
  activeCategory, 
  onCategoryChange 
}: CategoryNavigationProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to active category
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const activeButton = container.querySelector(`[data-category="${activeCategory}"]`) as HTMLElement;
    if (activeButton) {
      const containerWidth = container.offsetWidth;
      const buttonLeft = activeButton.offsetLeft;
      const buttonWidth = activeButton.offsetWidth;
      const scrollLeft = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);
      
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, [activeCategory]);

  return (
    <div className="relative">
      {/* Scroll Container - REMOVED SHADOW GRADIENTS */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-4 scrollbar-hide gap-3 px-1"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          // WebkitScrollbar: { display: 'none' }
        }}
      >
        {allCategories.map((category, index) => (
          <motion.button
            key={category.id}
            data-category={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              "flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-2xl border-2 transition-all duration-300 group",
              "font-secondary font-semibold text-sm lg:text-base whitespace-nowrap",
              "hover:scale-105 hover:shadow-lg active:scale-95",
              activeCategory === category.id
                ? "bg-primary-brown text-white border-primary-brown shadow-lg transform scale-105"
                : "bg-secondary-white dark:bg-secondary-white text-primary-dark dark:text-primary-dark border-neutral-light hover:border-primary-brown hover:bg-primary-brown/5 dark:hover:bg-primary-brown/10"
            )}
          >
            {/* Category Icon */}
            <span className="text-xl lg:text-2xl transition-transform group-hover:scale-110">
              {category.icon}
            </span>
            
            {/* Category Info */}
            <div className="flex flex-col items-start">
              <span>{category.name}</span>
              <span className={cn(
                "text-xs font-normal opacity-75",
                activeCategory === category.id ? "text-white/80" : "text-neutral-gray"
              )}>
                {category.count} items
              </span>
            </div>
            
            {/* Active Indicator */}
            {activeCategory === category.id && (
              <motion.div
                layoutId="categoryIndicator"
                className="absolute inset-0 bg-primary-brown rounded-2xl -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.button>
        ))}
      </div>
      
      {/* REMOVED SHADOW GRADIENTS COMPLETELY */}
    </div>
  );
}