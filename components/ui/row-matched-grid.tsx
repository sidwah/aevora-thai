'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import MenuItemCard from '@/components/ui/menu-item-card';
import { MenuItem } from '@/data/menu-items';
import { cn } from '@/lib/utils';

interface RowMatchedGridProps {
  items: MenuItem[];
}

export default function RowMatchedGrid({ items }: RowMatchedGridProps) {
  const [rowHeights, setRowHeights] = useState<number[]>([]);
  const [itemsPerRow, setItemsPerRow] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate items per row based on screen size
  useEffect(() => {
    const calculateItemsPerRow = () => {
      if (typeof window === 'undefined') return;

      const width = window.innerWidth;
      if (width < 640) {
        // mobile
        setItemsPerRow(2);
      } else if (width < 1024) {
        // tablet
        setItemsPerRow(3);
      } else {
        // desktop
        setItemsPerRow(4);
      }
    };

    calculateItemsPerRow();
    window.addEventListener('resize', calculateItemsPerRow);
    return () => window.removeEventListener('resize', calculateItemsPerRow);
  }, []);

  // Group items into rows
  const itemRows = [];
  for (let i = 0; i < items.length; i += itemsPerRow) {
    itemRows.push(items.slice(i, i + itemsPerRow));
  }

  // Track heights for each row
  const handleHeightChange = (
    rowIndex: number,
    itemIndex: number,
    height: number
  ) => {
    setRowHeights((prev) => {
      const newHeights = [...prev];
      if (!newHeights[rowIndex]) {
        newHeights[rowIndex] = 0;
      }
      newHeights[rowIndex] = Math.max(newHeights[rowIndex], height);
      return newHeights;
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full space-y-4 sm:space-y-6"
    >
      {itemRows.map((row, rowIndex) => (
        <motion.div
          key={rowIndex}
          variants={rowVariants}
          className={cn(
            'grid gap-3 sm:gap-4 lg:gap-6',
            'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4' // Responsive grid
          )}
        >
          {row.map((item, itemIndex) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="w-full"
            >
              <MenuItemCard
                item={item}
                minHeight={rowHeights[rowIndex]}
                onHeightChange={(height) =>
                  handleHeightChange(rowIndex, itemIndex, height)
                }
              />
            </motion.div>
          ))}

          {/* Fill empty slots in the last row to maintain grid alignment */}
          {row.length < itemsPerRow &&
            Array.from({ length: itemsPerRow - row.length }).map(
              (_, emptyIndex) => (
                <div key={`empty-${emptyIndex}`} className="w-full" />
              )
            )}
        </motion.div>
      ))}
    </motion.div>
  );
}
