'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { MenuCategory } from '@/data/menu-categories';

interface MenuCategoryCardProps extends MenuCategory {
  index?: number;
}

export default function MenuCategoryCard({ 
  name, 
  description, 
  badge, 
  image, 
  href,
  index = 0 
}: MenuCategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: 0.6 + (index * 0.1), 
        duration: 0.6,
        ease: "easeOut" 
      }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link href={href} className="block">
        <div className={cn(
          "relative overflow-hidden rounded-2xl",
          "menu-category-card",
          "shadow-lg hover:shadow-xl",
          "transition-all duration-300 ease-out",
          "transform hover:scale-[1.02]"
        )}>
          {/* Badge */}
          <div className={cn(
            "absolute top-3 left-3 z-10",
            "w-8 h-8 rounded-full",
            "category-badge",
            "flex items-center justify-center",
            "font-secondary font-bold text-sm",
            "shadow-md"
          )}>
            {badge}
          </div>

          {/* Image Container */}
          <div className="relative w-full h-48 sm:h-56 lg:h-48 xl:h-56 overflow-hidden">
            <Image
              src={image}
              alt={`${name} - Thai cuisine category`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="p-4 lg:p-6">
            <h3 className={cn(
              "font-primary font-semibold text-primary-dark mb-3",
              "text-lg sm:text-xl lg:text-lg xl:text-xl",
              "group-hover:text-primary-brown transition-colors duration-200"
            )}>
              {name}
            </h3>
            
            <p className={cn(
              "font-secondary text-neutral-gray leading-relaxed",
              "text-sm sm:text-base lg:text-sm xl:text-base",
              "line-clamp-3"
            )}>
              {description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}