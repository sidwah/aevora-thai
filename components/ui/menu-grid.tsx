'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RowMatchedGrid from '@/components/ui/row-matched-grid';
import Pagination from '@/components/ui/pagination';
import { getMenuItemsByCategory, menuItems } from '@/data/menu-items';

interface MenuGridProps {
  activeCategory: string;
}

const ITEMS_PER_PAGE = 20;

export default function MenuGrid({ activeCategory }: MenuGridProps) {
  const [currentPage, setCurrentPage] = useState(1);

  // Get items based on category
  const allItems =
    activeCategory === 'all'
      ? menuItems
      : getMenuItemsByCategory(activeCategory);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Pagination calculations
  const totalPages = Math.ceil(allItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = allItems.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll to top of menu grid
    const menuContent = document.getElementById('menu-content');
    if (menuContent) {
      menuContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full">
      {/* Items Count Display */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center"
      >
        <p className="font-secondary text-neutral-gray text-xs sm:text-sm dark:text-gray-400">
          Showing {startIndex + 1}-
          {Math.min(startIndex + ITEMS_PER_PAGE, allItems.length)} of{' '}
          {allItems.length} items
        </p>
        {totalPages > 1 && (
          <p className="font-secondary text-neutral-gray text-xs sm:text-sm dark:text-gray-400">
            Page {currentPage} of {totalPages}
          </p>
        )}
      </motion.div>

      {/* Row-Matched Menu Items Grid */}
      <motion.div
        key={`${activeCategory}-${currentPage}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full"
      >
        <RowMatchedGrid items={paginatedItems} />
      </motion.div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {/* Empty State */}
      {allItems.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-12 text-center"
        >
          <div className="mb-4 text-4xl sm:text-6xl">🍽️</div>
          <h3 className="font-primary text-primary-dark mb-2 text-xl font-semibold sm:text-2xl dark:text-white">
            No items found
          </h3>
          <p className="font-secondary text-neutral-gray text-sm sm:text-base dark:text-gray-300">
            This category is currently being updated with new dishes.
          </p>
        </motion.div>
      )}
    </div>
  );
}
