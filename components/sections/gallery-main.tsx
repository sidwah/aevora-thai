'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import UniformGalleryGrid from '@/components/ui/uniform-gallery-grid';
import ModernLightbox from '@/components/ui/modern-lightbox';
import { type GalleryImage } from '@/data/gallery-images';

interface GalleryMainProps {
  images: GalleryImage[];
  activeCategory: string;
}

export default function GalleryMain({ images, activeCategory }: GalleryMainProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (imageId: string) => {
    const index = images.findIndex(img => img.id === imageId);
    if (index !== -1) {
      setCurrentImageIndex(index);
      setLightboxOpen(true);
    }
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-8 lg:py-12">
      <div className="container mx-auto px-4">
        {/* Gallery Grid with Animation Key */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <UniformGalleryGrid 
            images={images}
            onImageClick={handleImageClick}
          />
        </motion.div>

        {/* Lightbox */}
        <ModernLightbox
          images={images}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNextImage}
          onPrevious={handlePreviousImage}
        />
      </div>
    </section>
  );
}