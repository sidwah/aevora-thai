'use client';

import { motion } from 'framer-motion';
import GalleryHero from '@/components/sections/gallery-hero';
import CategoryTabs from '@/components/ui/category-tabs';
import GalleryMain from '@/components/sections/gallery-main';
import { useGalleryFilter } from '@/hooks/use-gallery-filter';

export default function GalleryPage() {
  const {
    activeCategory,
    filteredImages,
    filteredCount,
    handleCategoryChange
  } = useGalleryFilter();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <GalleryHero />

      {/* Gallery Content */}
      <div id="gallery-content">
        {/* Category Filter Navigation */}
        <CategoryTabs 
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Results Count & Search Stats */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-neutral-gray">
                <p className="font-secondary">
                  Showing <span className="font-semibold text-primary-brown">{filteredCount}</span> photos
                  {activeCategory !== 'all' && (
                    <span> in <span className="font-semibold capitalize">{activeCategory}</span> category</span>
                  )}
                </p>
                
                {/* Category description */}
                {activeCategory !== 'all' && (
                  <span className="hidden sm:block w-px h-4 bg-neutral-gray/30" />
                )}
                
                <p className="font-secondary text-sm text-neutral-gray">
                  {activeCategory === 'all' 
                    ? 'Complete collection of our finest moments'
                    : activeCategory === 'food' 
                    ? 'Authentic Thai cuisine artistry'
                    : activeCategory === 'interior'
                    ? 'Restaurant ambiance and decor'
                    : activeCategory === 'team'
                    ? 'Behind-the-scenes kitchen action'
                    : 'Special occasions and celebrations'
                  }
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Gallery Grid */}
        <GalleryMain 
          images={filteredImages}
          activeCategory={activeCategory}
        />

        {/* Gallery Stats Footer */}
        <GalleryStats filteredCount={filteredCount} activeCategory={activeCategory} />
      </div>
    </main>
  );
}

// Gallery Stats Component
function GalleryStats({ filteredCount, activeCategory }: { filteredCount: number, activeCategory: string }) {
  return (
    <section className="py-12 lg:py-16 bg-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-light rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="font-primary text-2xl lg:text-3xl mb-6">
              Thank you for exploring our{' '}
              <span className="text-primary-brown">
                {activeCategory === 'all' ? 'complete' : activeCategory}
              </span>{' '}
              collection
            </h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
              {[
                { label: 'Photos Viewed', value: filteredCount, icon: '📸' },
                { label: 'Categories', value: '4+', icon: '🗂️' },
                { label: 'Memories Shared', value: '1000+', icon: '❤️' },
                { label: 'Years of Stories', value: '25+', icon: '⭐' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="font-primary text-2xl lg:text-3xl font-bold text-primary-brown mb-1">
                    {stat.value}
                  </div>
                  <div className="font-secondary text-sm text-neutral-gray">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-brown hover:bg-primary-brown/90 text-white rounded-full font-secondary font-medium transition-colors duration-200"
              >
                <span>🍽️</span>
                <span>Explore Our Menu</span>
              </motion.a>
              
              <motion.a
                href="/reservations"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-button-primary hover:bg-button-hover-primary text-white rounded-full font-secondary font-medium transition-colors duration-200"
              >
                <span>📅</span>
                <span>Book a Table</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}