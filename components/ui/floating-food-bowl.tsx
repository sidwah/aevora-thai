'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FloatingFoodBowlProps {
  imageSrc: string;
  imageAlt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  delay?: number;
}

export default function FloatingFoodBowl({
  imageSrc,
  imageAlt,
  size = 'md',
  className,
  delay = 0
}: FloatingFoodBowlProps) {
  
  const sizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-28 h-28',
    lg: 'w-36 h-36'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay, 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        damping: 20
      }}
      className={cn(
        "relative",
        sizeClasses[size],
        className
      )}
    >
      <div className={cn(
        "relative w-full h-full rounded-full overflow-hidden",
        "floating-bowl-shadow",
        "transition-all duration-300 ease-out",
        "hover:scale-105"
      )}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 80px, (max-width: 1200px) 112px, 144px"
          onError={(e) => {
            console.log('Bowl image failed to load:', e.currentTarget.src);
            // You can set a fallback background color here
            e.currentTarget.style.display = 'none';
          }}
        />
        
        {/* Subtle glass effect */}
        <div className={cn(
          "absolute inset-0 rounded-full",
          "bg-gradient-to-br from-white/10 via-transparent to-transparent"
        )} />
        
        {/* Light reflection */}
        <div className={cn(
          "absolute top-1 left-1 w-4 h-4 rounded-full",
          "bg-white/30 blur-sm"
        )} />

        {/* Fallback background if image fails */}
        <div className={cn(
          "absolute inset-0 rounded-full -z-10",
          "bg-gradient-to-br from-primary-brown/20 to-accent-gold/20"
        )} />
      </div>
    </motion.div>
  );
}