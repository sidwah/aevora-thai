'use client';

import React from 'react'; // Add this import
import Image from 'next/image';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface OrganicRestaurantViewProps {
  children?: React.ReactNode; // Fix React reference
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function OrganicRestaurantView({
  children,
  className,
  imageSrc = '/images/hero/restaurant-interior.jpg',
  imageAlt = 'Aevora Thai Restaurant Interior',
  size = 'lg'
}: OrganicRestaurantViewProps) {
  
  const sizeClasses = {
    sm: 'w-64 h-64',
    md: 'w-80 h-80', 
    lg: 'w-96 h-96'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      className={cn(
        "relative",
        sizeClasses[size],
        className
      )}
    >
      {/* Main Container with Organic Shape */}
      <div className={cn(
        "relative w-full h-full overflow-hidden",
        "organic-shape-container",
        "glass-panel"
      )}>
        {/* Restaurant Image */}
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          sizes="(max-width: 768px) 256px, (max-width: 1200px) 320px, 384px"
          priority
        />
        
        {/* Glass Overlay */}
        <div className={cn(
          "absolute inset-0",
          "bg-gradient-to-br from-white/15 via-transparent to-primary-brown/10",
          "backdrop-blur-[2px]"
        )} />
        
        {/* Inner Glow */}
        <div className={cn(
          "absolute inset-2",
          "rounded-[40%] bg-gradient-to-br from-white/20 to-transparent",
          "opacity-50"
        )} />
        
        {/* Border Highlight */}
        <div className={cn(
          "absolute inset-0",
          "rounded-[40%]",
          "ring-1 ring-white/20 ring-inset"
        )} />
      </div>
      
      {/* Floating Background Glow */}
      <div className={cn(
        "absolute inset-0 -z-10",
        "bg-gradient-radial from-primary-brown/30 via-accent-gold/20 to-transparent",
        "blur-3xl scale-150 opacity-60"
      )} />
      
      {/* Decorative Floating Dots */}
      <div className="absolute -top-2 -right-2 w-2 h-2 bg-primary-brown rounded-full opacity-60 animate-pulse" />
      <div className="absolute -bottom-3 -left-3 w-1.5 h-1.5 bg-accent-gold rounded-full opacity-40 animate-pulse [animation-delay:1s]" />
      
      {children}
    </motion.div>
  );
}