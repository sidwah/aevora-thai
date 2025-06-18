'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const visiblePages = getVisiblePages();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-center gap-2 mt-8"
    >
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200",
          "border-2 font-secondary font-medium",
          currentPage === 1
            ? "border-neutral-light text-neutral-gray cursor-not-allowed opacity-50"
            : "border-primary-brown text-primary-brown hover:bg-primary-brown hover:text-white hover:scale-105 active:scale-95"
        )}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {visiblePages.map((page, index) => (
          <motion.div
            key={`${page}-${index}`}
            whileHover={{ scale: page !== '...' ? 1.05 : 1 }}
            whileTap={{ scale: page !== '...' ? 0.95 : 1 }}
          >
            {page === '...' ? (
              <span className="flex items-center justify-center w-10 h-10 text-neutral-gray font-secondary">
                ...
              </span>
            ) : (
              <button
                onClick={() => onPageChange(page as number)}
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200",
                  "border-2 font-secondary font-medium text-sm",
                  currentPage === page
                    ? "bg-primary-brown border-primary-brown text-white shadow-lg scale-105"
                    : "border-neutral-light hover:border-primary-brown hover:bg-primary-brown/10 dark:border-white/20 dark:hover:bg-primary-brown/20"
                )}
              >
                {page}
              </button>
            )}
          </motion.div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200",
          "border-2 font-secondary font-medium",
          currentPage === totalPages
            ? "border-neutral-light text-neutral-gray cursor-not-allowed opacity-50"
            : "border-primary-brown text-primary-brown hover:bg-primary-brown hover:text-white hover:scale-105 active:scale-95"
        )}
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
}