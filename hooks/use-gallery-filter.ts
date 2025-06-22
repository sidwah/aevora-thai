'use client';

import { useState, useCallback, useMemo } from 'react';
import { galleryImages, getImagesByCategory, type GalleryImage } from '@/data/gallery-images';

export function useGalleryFilter() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter images by category
  const filteredByCategory = useMemo(() => {
    return getImagesByCategory(activeCategory);
  }, [activeCategory]);

  // Further filter by search query if provided
  const filteredImages = useMemo(() => {
    if (!searchQuery.trim()) {
      return filteredByCategory;
    }

    const query = searchQuery.toLowerCase().trim();
    return filteredByCategory.filter(image => 
      image.title.toLowerCase().includes(query) ||
      image.caption.toLowerCase().includes(query) ||
      image.tags?.some(tag => tag.toLowerCase().includes(query)) ||
      image.category.toLowerCase().includes(query)
    );
  }, [filteredByCategory, searchQuery]);

  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category);
    // Clear search when changing categories for better UX
    setSearchQuery('');
  }, []);

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const clearFilters = useCallback(() => {
    setActiveCategory('all');
    setSearchQuery('');
  }, []);

  return {
    activeCategory,
    searchQuery,
    filteredImages,
    totalImages: galleryImages.length,
    filteredCount: filteredImages.length,
    handleCategoryChange,
    handleSearchChange,
    clearFilters
  };
}