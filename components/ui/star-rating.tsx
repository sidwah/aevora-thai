// components/ui/star-rating.tsx
'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  maxRating = 5, 
  size = 'md',
  className 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {[...Array(maxRating)].map((_, index) => (
        <Star
          key={index}
          className={cn(
            sizeClasses[size],
            index < rating 
              ? "fill-yellow-400 text-yellow-400" 
              : "fill-gray-200 text-gray-200"
          )}
        />
      ))}
    </div>
  );
};

export default StarRating;