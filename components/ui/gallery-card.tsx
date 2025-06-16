'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GalleryCardProps {
  className?: string;
  title?: string;
  href?: string;
}

export default function GalleryCard({
  className,
  title = 'Our Gallery',
  href = '/gallery'
}: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
      className={cn(
        "relative group",
        className
      )}
    >
      <Link href={href} className="block">
        {/* Main Card - Just Background with Text */}
        <div className={cn(
          "relative overflow-hidden rounded-2xl",
          "bg-neutral-charcoal/90 backdrop-blur-md",
          "border border-white/10",
          "p-6 pb-8",
          "transition-all duration-300 ease-out",
          "hover:scale-105 hover:shadow-2xl",
          "hover:bg-neutral-charcoal/95",
          "w-36 h-32", // Smaller, more like reference
          "flex flex-col items-center justify-center"
        )}>
          
          {/* Title */}
          <h3 className={cn(
            "font-primary text-base font-medium",
            "text-primary-cream text-center",
            "tracking-wide mb-3"
          )}>
            {title}
          </h3>

          {/* Arrow Icon */}
          <div className={cn(
            "flex items-center justify-center",
            "w-6 h-6 rounded-full",
            "bg-primary-brown/30 text-primary-cream",
            "transition-all duration-300",
            "group-hover:bg-primary-brown group-hover:scale-110"
          )}>
            <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-2 right-2 w-1 h-1 bg-primary-brown rounded-full opacity-60" />
          <div className="absolute bottom-2 left-2 w-1 h-1 bg-primary-brown rounded-full opacity-40" />
        </div>

        {/* Floating Glow Effect */}
        <div className={cn(
          "absolute inset-0 rounded-2xl",
          "bg-gradient-to-br from-primary-brown/10 to-accent-gold/10",
          "opacity-0 group-hover:opacity-100",
          "transition-opacity duration-500",
          "-z-10 blur-xl scale-110"
        )} />
      </Link>
    </motion.div>
  );
}