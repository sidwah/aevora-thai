'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface OrganicShapeProps {
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  variant?: 'blob1' | 'blob2' | 'blob3';
}

export default function OrganicShape({
  className,
  imageSrc = '/images/hero/restaurant-interior.jpg',
  imageAlt = 'Aevora Thai Restaurant Interior',
  variant = 'blob1'
}: OrganicShapeProps) {
  
  // Different organic shape paths
  const shapeVariants = {
    blob1: "M40,20 C60,10 80,15 90,40 C95,60 85,80 60,85 C40,90 20,75 15,50 C10,30 20,25 40,20 Z",
    blob2: "M30,25 C55,15 75,20 85,45 C90,65 80,80 55,85 C35,88 18,70 15,50 C12,30 25,20 30,25 Z", 
    blob3: "M35,15 C60,8 85,20 90,45 C92,70 75,85 50,88 C25,90 8,65 10,40 C12,20 30,12 35,15 Z"
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      className={cn("relative", className)}
    >
      {/* SVG Shape Container */}
      <div className="relative w-full h-full">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Clip path for the organic shape */}
            <clipPath id={`organic-shape-${variant}`}>
              <path d={shapeVariants[variant]} />
            </clipPath>
            
            {/* Gradient overlay */}
            <linearGradient id="glass-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
              <stop offset="100%" stopColor="rgba(181,149,107,0.1)" />
            </linearGradient>
            
            {/* Filter for glass effect */}
            <filter id="glass-blur">
              <feGaussianBlur stdDeviation="0.5" />
            </filter>
          </defs>
          
          {/* Background Image */}
          <foreignObject
            width="100"
            height="100"
            clipPath={`url(#organic-shape-${variant})`}
          >
            <div className="w-full h-full relative">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 300px, (max-width: 1200px) 500px, 600px"
                priority
              />
              
              {/* Glass Overlay */}
              <div className={cn(
                "absolute inset-0",
                "bg-gradient-to-br from-white/10 via-transparent to-primary-brown/10",
                "backdrop-blur-sm"
              )} />
            </div>
          </foreignObject>
          
          {/* Shape Border */}
          <path
            d={shapeVariants[variant]}
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="0.5"
            filter="url(#glass-blur)"
          />
          
          {/* Glass highlight */}
          <path
            d={shapeVariants[variant]}
            fill="url(#glass-gradient)"
            opacity="0.6"
          />
        </svg>
        
        {/* Floating glow effect */}
        <div className={cn(
          "absolute inset-0 rounded-[40%]",
          "bg-gradient-to-br from-primary-brown/20 to-accent-gold/20",
          "blur-2xl opacity-30 -z-10 scale-110"
        )} />
      </div>
    </motion.div>
  );
}