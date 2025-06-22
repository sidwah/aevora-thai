export interface GalleryImage {
    id: string;
    title: string;
    category: 'food' | 'interior' | 'team' | 'events';
    thumbnail: string;          // 400x400 optimized
    fullSize: string;           // 1200x1200 high-res
    alt: string;
    caption: string;
    width: number;
    height: number;
    isSignature?: boolean;      // Featured/signature items
    isVideo?: boolean;
    videoId?: string;           // YouTube ID
    tags?: string[];            // For search functionality
    photographer?: string;
    dateTaken?: string;
  }
  
  export interface GalleryCategory {
    id: string;
    name: string;
    icon: string;
    description: string;
    count: number;
  }
  
  // Gallery Categories
  export const galleryCategories: GalleryCategory[] = [
    {
      id: 'all',
      name: 'All Gallery',
      icon: '🍽️',
      description: 'Browse our complete collection',
      count: 53
    },
    {
      id: 'food',
      name: 'Food',
      icon: '🥘',
      description: 'Authentic Thai cuisine artistry',
      count: 20
    },
    {
      id: 'interior',
      name: 'Interior',
      icon: '🏮',
      description: 'Restaurant ambiance and decor',
      count: 15
    },
    {
      id: 'team',
      name: 'Behind Scenes',
      icon: '👨‍🍳',
      description: 'Our kitchen and team in action',
      count: 10
    },
    {
      id: 'events',
      name: 'Events',
      icon: '🎉',
      description: 'Special occasions and celebrations',
      count: 8
    }
  ];
  
  // Sample Gallery Images (we'll start with a comprehensive set)
  export const galleryImages: GalleryImage[] = [
    // FOOD CATEGORY (20 items)
    {
      id: 'food-001',
      title: 'Signature Pad Thai',
      category: 'food',
      thumbnail: '/images/gallery/food/pad-thai-thumb.jpg',
      fullSize: '/images/gallery/food/pad-thai-full.jpg',
      alt: 'Authentic Pad Thai with fresh herbs and lime garnish',
      caption: 'Our signature Pad Thai, prepared with traditional techniques and the finest ingredients imported from Thailand',
      width: 1200,
      height: 800,
      isSignature: true,
      tags: ['pad-thai', 'signature', 'noodles', 'traditional', 'herbs'],
      photographer: 'Aevora Thai Team',
      dateTaken: '2024-06-15'
    },
    {
      id: 'food-002',
      title: 'Green Curry Chicken',
      category: 'food',
      thumbnail: '/images/gallery/food/green-curry-thumb.jpg',
      fullSize: '/images/gallery/food/green-curry-full.jpg',
      alt: 'Creamy green curry with tender chicken and Thai basil',
      caption: 'Rich and aromatic green curry with coconut milk, Thai eggplant, and fresh basil leaves',
      width: 1200,
      height: 800,
      isSignature: true,
      tags: ['curry', 'chicken', 'coconut', 'spicy', 'basil'],
      photographer: 'Aevora Thai Team',
      dateTaken: '2024-06-14'
    },
    {
      id: 'food-003',
      title: 'Tom Yum Goong',
      category: 'food',
      thumbnail: '/images/gallery/food/tom-yum-thumb.jpg',
      fullSize: '/images/gallery/food/tom-yum-full.jpg',
      alt: 'Spicy and sour Tom Yum soup with fresh prawns',
      caption: 'Traditional hot and sour soup with prawns, mushrooms, lemongrass, and lime leaves',
      width: 1200,
      height: 800,
      isSignature: true,
      tags: ['soup', 'prawns', 'spicy', 'sour', 'lemongrass'],
      photographer: 'Aevora Thai Team',
      dateTaken: '2024-06-13'
    },
    {
      id: 'food-004',
      title: 'Som Tam Thai',
      category: 'food',
      thumbnail: '/images/gallery/food/som-tam-thumb.jpg',
      fullSize: '/images/gallery/food/som-tam-full.jpg',
      alt: 'Fresh papaya salad with tomatoes, green beans, and peanuts',
      caption: 'Refreshing green papaya salad with lime, fish sauce, and crushed peanuts',
      width: 1200,
      height: 800,
      isSignature: true,
      tags: ['salad', 'papaya', 'fresh', 'peanuts', 'lime'],
      photographer: 'Aevora Thai Team',
      dateTaken: '2024-06-12'
    },
    {
      id: 'food-005',
      title: 'Massaman Beef Curry',
      category: 'food',
      thumbnail: '/images/gallery/food/massaman-thumb.jpg',
      fullSize: '/images/gallery/food/massaman-full.jpg',
      alt: 'Rich Massaman curry with tender beef and potatoes',
      caption: 'Slow-cooked beef in aromatic Massaman curry with potatoes and roasted peanuts',
      width: 1200,
      height: 800,
      tags: ['curry', 'beef', 'massaman', 'potatoes', 'peanuts'],
      photographer: 'Aevora Thai Team',
      dateTaken: '2024-06-11'
    },
    // Continue with more food items...
    {
      id: 'food-006',
      title: 'Thai Basil Stir Fry',
      category: 'food',
      thumbnail: '/images/gallery/food/basil-stir-fry-thumb.jpg',
      fullSize: '/images/gallery/food/basil-stir-fry-full.jpg',
      alt: 'Spicy Thai basil stir fry with fresh chilies',
      caption: 'Aromatic stir fry with holy basil, chilies, and garlic served over jasmine rice',
      width: 1200,
      height: 800,
      tags: ['stir-fry', 'basil', 'spicy', 'rice', 'chilies'],
      photographer: 'Aevora Thai Team',
      dateTaken: '2024-06-10'
    },
  
    // INTERIOR CATEGORY (15 items)
    {
      id: 'interior-001',
      title: 'Main Dining Area',
      category: 'interior',
      thumbnail: '/images/gallery/interior/main-dining-thumb.jpg',
      fullSize: '/images/gallery/interior/main-dining-full.jpg',
      alt: 'Elegant main dining room with traditional Thai decor',
      caption: 'Our spacious main dining area featuring authentic Thai artwork and warm ambient lighting',
      width: 1200,
      height: 800,
      tags: ['dining', 'traditional', 'elegant', 'spacious', 'lighting'],
      photographer: 'Aevora Thai Team',
      dateTaken: '2024-06-09'
    },
    {
      id: 'interior-002',
      title: 'Private Dining Room',
      category: 'interior',
      thumbnail: '/images/gallery/interior/private-dining-thumb.jpg',
      fullSize: '/images/gallery/interior/private-dining-full.jpg',
      alt: 'Intimate private dining room for special occasions',
      caption: 'Perfect for celebrations and business meetings with traditional Thai ambiance',
      width: 1200,
      height: 800,
      tags: ['private', 'intimate', 'celebrations', 'business', 'traditional'],
      photographer: 'Aevora Thai Team',
      dateTaken: '2024-06-08'
    },
    {
      id: 'interior-003',
      title: 'Thai Art Gallery Wall',
      category: 'interior',
      thumbnail: '/images/gallery/interior/art-wall-thumb.jpg',
      fullSize: '/images/gallery/interior/art-wall-full.jpg',
      alt: 'Beautiful Thai artwork and cultural displays',
      caption: 'Curated collection of authentic Thai art and cultural artifacts throughout the restaurant',
      width: 1200,
      height: 800,
      tags: ['art', 'culture', 'authentic', 'artifacts', 'display'],
      photographer: 'Aevora Thai Team',
      dateTaken: '2024-06-07'
    },
  
    // TEAM CATEGORY (10 items)
    {
      id: 'team-001',
      title: 'Chef Michael in Action',
      category: 'team',
      thumbnail: '/images/gallery/team/chef-michael-thumb.jpg',
      fullSize: '/images/gallery/team/chef-michael-full.jpg',
      alt: 'Head Chef Michael Arkoh preparing traditional Thai curry',
      caption: 'Chef Michael Arkoh demonstrating traditional Thai cooking techniques in our kitchen',
      width: 1200,
      height: 800,
      isSignature: true,
      tags: ['chef', 'michael', 'cooking', 'traditional', 'kitchen'],
      photographer: 'Aevora Thai Team',
      dateTaken: '2024-06-06'
    },
    {
      id: 'team-002',
      title: 'Kitchen Team Collaboration',
      category: 'team',
      thumbnail: '/images/gallery/team/team-work-thumb.jpg',
      fullSize: '/images/gallery/team/team-work-full.jpg',
      alt: 'Kitchen team working together during busy dinner service',
      caption: 'Our dedicated kitchen team ensuring every dish meets our high standards',
      width: 1200,
      height: 800,
      tags: ['teamwork', 'kitchen', 'service', 'collaboration', 'dedication'],
      photographer: 'Aevora Thai Team',
      dateTaken: '2024-06-05'
    },
    {
      id: 'team-003',
      title: 'Fresh Ingredient Preparation',
      category: 'team',
      thumbnail: '/images/gallery/team/prep-work-thumb.jpg',
      fullSize: '/images/gallery/team/prep-work-full.jpg',
      alt: 'Team member carefully preparing fresh herbs and vegetables',
      caption: 'Daily preparation of fresh ingredients ensuring authentic flavors in every dish',
      width: 1200,
      height: 800,
      tags: ['preparation', 'fresh', 'ingredients', 'herbs', 'authentic'],
      photographer: 'Aevora Thai Team',
      dateTaken: '2024-06-04'
    },
  
    // EVENTS CATEGORY (8 items)
    {
      id: 'events-001',
      title: 'Anniversary Celebration',
      category: 'events',
      thumbnail: '/images/gallery/events/anniversary-thumb.jpg',
      fullSize: '/images/gallery/events/anniversary-full.jpg',
      alt: 'Customers celebrating anniversary dinner with special Thai feast',
      caption: '25th anniversary celebration with our signature tasting menu and traditional Thai decorations',
      width: 1200,
      height: 800,
      isSignature: true,
      tags: ['anniversary', 'celebration', 'feast', 'special', 'traditional'],
      photographer: 'Aevora Thai Team',
      dateTaken: '2024-06-03'
    },
    {
      id: 'events-002',
      title: 'Thai Cooking Class',
      category: 'events',
      thumbnail: '/images/gallery/events/cooking-class-thumb.jpg',
      fullSize: '/images/gallery/events/cooking-class-full.jpg',
      alt: 'Chef teaching traditional Pad Thai preparation to customers',
      caption: 'Monthly cooking classes where guests learn authentic Thai cooking techniques',
      width: 1200,
      height: 800,
      tags: ['cooking', 'class', 'learning', 'interactive', 'education'],
      photographer: 'Aevora Thai Team',
      dateTaken: '2024-06-02'
    },
    {
      id: 'events-003',
      title: 'Community Food Festival',
      category: 'events',
      thumbnail: '/images/gallery/events/food-festival-thumb.jpg',
      fullSize: '/images/gallery/events/food-festival-full.jpg',
      alt: 'Aevora Thai booth at East Legon community food festival',
      caption: 'Participating in the annual East Legon food festival, sharing Thai culture with the community',
      width: 1200,
      height: 800,
      tags: ['festival', 'community', 'culture', 'sharing', 'participation'],
      photographer: 'Aevora Thai Team',
      dateTaken: '2024-06-01'
    }
  
    // Note: We'll add more images to reach the target counts
    // Food: 20 total, Interior: 15 total, Team: 10 total, Events: 8 total
  ];
  
  // Featured images for hero carousel
  export const featuredImages: GalleryImage[] = galleryImages.filter(img => img.isSignature);
  
  // Helper functions
  export function getImagesByCategory(category: string): GalleryImage[] {
    if (category === 'all') return galleryImages;
    return galleryImages.filter(img => img.category === category);
  }
  
  export function getCategoryIcon(category: string): string {
    const categoryData = galleryCategories.find(cat => cat.id === category);
    return categoryData?.icon || '📸';
  }
  
  export function getCategoryCount(category: string): number {
    if (category === 'all') return galleryImages.length;
    return galleryImages.filter(img => img.category === category).length;
  }