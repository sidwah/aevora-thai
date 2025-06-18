'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { forwardRef, useImperativeHandle, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { MenuItem, formatPrice, getDietaryLabel } from '@/data/menu-items';

interface MenuItemCardProps {
  item: MenuItem;
  minHeight?: number;
  onHeightChange?: (height: number) => void;
}

const MenuItemCard = forwardRef<HTMLDivElement, MenuItemCardProps>(({ 
  item, 
  minHeight,
  onHeightChange 
}, ref) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => cardRef.current!);

  useEffect(() => {
    const measureHeight = () => {
      if (cardRef.current) {
        const height = cardRef.current.offsetHeight;
        if (onHeightChange) {
          onHeightChange(height);
        }
      }
    };

    measureHeight();
    
    // Remeasure on window resize
    window.addEventListener('resize', measureHeight);
    return () => window.removeEventListener('resize', measureHeight);
  }, [onHeightChange, item]);

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ 
        scale: 1.02,
        y: -4
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      style={{ 
        minHeight: minHeight ? `${minHeight}px` : 'auto'
      }}
      className={cn(
        "group relative overflow-hidden rounded-xl sm:rounded-2xl",
        "glass-medium hover:glass-strong transition-all duration-300",
        "border border-white/20 dark:border-white/10",
        "shadow-lg hover:shadow-2xl",
        "backdrop-blur-lg",
        "flex flex-col w-full",
        // Mobile: smaller cards
        "h-auto"
      )}
    >
      {/* Image Container - Responsive Height */}
      <div className={cn(
        "relative flex-shrink-0 overflow-hidden",
        "h-32 sm:h-40 lg:h-48" // Mobile: 128px, Tablet: 160px, Desktop: 192px
      )}>
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* Signature Badge */}
        {item.isSignature && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className={cn(
              "absolute top-2 left-2 bg-primary-brown text-white rounded-full text-xs font-bold shadow-lg border border-white/20",
              "px-2 py-1 sm:px-3 sm:py-1" // Smaller on mobile
            )}
          >
            <span className="hidden sm:inline">⭐ Signature</span>
            <span className="sm:hidden">⭐</span>
          </motion.div>
        )}
        
        {/* Spice Level Indicator */}
        {item.spiceLevel && (
          <div className={cn(
            "absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded-full border border-white/20",
            "px-1.5 py-1 sm:px-2 sm:py-1"
          )}>
            <div className="flex gap-0.5">
              {Array.from({ length: item.spiceLevel }).map((_, i) => (
                <span key={i} className="text-red-500 text-xs sm:text-sm drop-shadow-lg">
                  🌶️
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Content Container - Flex Grow */}
      <div className={cn(
        "relative flex-1 flex flex-col",
        "bg-white/90 dark:bg-black/60",
        "backdrop-blur-md",
        "border-t border-white/30 dark:border-white/10",
        "p-3 sm:p-4 lg:p-5" // Responsive padding
      )}>
        {/* Header Row */}
        <div className="flex justify-between items-start mb-2 sm:mb-3">
          <h3 className={cn(
            "font-primary font-bold flex-1 mr-2",
            "text-primary-dark dark:text-white",
            "line-clamp-2",
            "text-sm sm:text-base lg:text-lg" // Responsive text size
          )}>
            {item.name}
          </h3>
          <div className="flex-shrink-0">
            <span className={cn(
              "font-secondary font-bold",
              "text-black dark:text-white",
              "bg-primary-brown/20 dark:bg-primary-brown/30",
              "rounded-full border-2 border-black dark:border-white",
              "px-2 py-0.5 sm:px-3 sm:py-1", // Responsive padding
              "text-xs sm:text-sm lg:text-base" // Responsive text size
            )}>
              {formatPrice(item.price)}
            </span>
          </div>
        </div>
        
        {/* Description - Flex Grow */}
        <div className="flex-1 mb-3">
          <p className={cn(
            "font-secondary leading-relaxed",
            "text-neutral-gray dark:text-gray-300",
            "line-clamp-3 sm:line-clamp-4", // Fewer lines on mobile
            "text-xs sm:text-sm" // Smaller text on mobile
          )}>
            {item.description}
          </p>
        </div>

        {/* Dietary Indicators - Fixed at Bottom */}
        {item.dietary.length > 0 && (
          <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto">
            {item.dietary.map((diet) => (
              <span
                key={diet}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full font-bold",
                  "bg-accent-gold/20 dark:bg-accent-gold/30",
                  "text-black dark:text-white",
                  "border-2 border-black dark:border-white",
                  "px-2 py-0.5 sm:px-3 sm:py-1", // Responsive padding
                  "text-xs" // Smaller text
                )}
              >
                {/* Mobile: Show only icons, Desktop: Show full labels */}
                <span className="sm:hidden">
                  {diet === 'vegetarian' && '🌱'}
                  {diet === 'vegan' && '🌿'}
                  {diet === 'gluten-free' && '🌾'}
                  {diet === 'spicy' && '🌶️'}
                </span>
                <span className="hidden sm:inline">
                  {getDietaryLabel(diet)}
                </span>
              </span>
            ))}
          </div>
        )}

        {/* Hover Overlay Effect */}
        <div className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          "bg-gradient-to-t from-primary-brown/10 via-transparent to-transparent",
          "pointer-events-none"
        )} />
      </div>
    </motion.div>
  );
});

MenuItemCard.displayName = 'MenuItemCard';

export default MenuItemCard;