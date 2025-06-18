export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'appetizers' | 'salads' | 'soups' | 'mains' | 'desserts' | 'beverages';
    dietary: ('vegetarian' | 'vegan' | 'gluten-free' | 'spicy')[];
    spiceLevel?: 1 | 2 | 3; // 1=mild, 2=medium, 3=hot
    image: string;
    isSignature?: boolean;
    ingredients?: string[];
    allergens?: string[];
  }
  
  export interface MenuCategory {
    id: string;
    name: string;
    icon: string;
    count: number;
    description: string;
  }
  
  export const menuCategories: MenuCategory[] = [
    {
      id: 'appetizers',
      name: 'Appetizers',
      icon: '🥗',
      count: 8,
      description: 'Start your meal with authentic Thai starters'
    },
    {
      id: 'salads',
      name: 'Salads',
      icon: '🥙',
      count: 6,
      description: 'Fresh and vibrant Thai salads'
    },
    {
      id: 'soups',
      name: 'Soups',
      icon: '🍲',
      count: 5,
      description: 'Traditional Thai soups and broths'
    },
    {
      id: 'mains',
      name: 'Main Dishes',
      icon: '🍛',
      count: 12,
      description: 'Signature Thai main courses'
    },
    {
      id: 'desserts',
      name: 'Desserts',
      icon: '🍮',
      count: 4,
      description: 'Sweet Thai desserts and treats'
    },
    {
      id: 'beverages',
      name: 'Beverages',
      icon: '🥤',
      count: 6,
      description: 'Traditional and modern Thai drinks'
    }
  ];
  
  export const menuItems: MenuItem[] = [
    // APPETIZERS
    {
      id: 'app001',
      name: 'Fresh Spring Rolls',
      description: 'Rice paper rolls filled with fresh herbs, lettuce, carrots, and vermicelli noodles, served with our signature peanut dipping sauce',
      price: 8.95,
      category: 'appetizers',
      dietary: ['vegetarian', 'vegan'],
      image: '/images/menu/appetizers/spring-rolls.jpg',
      ingredients: ['rice paper', 'lettuce', 'carrots', 'herbs', 'vermicelli'],
      allergens: ['peanuts']
    },
    {
      id: 'app002',
      name: 'Chicken Satay',
      description: 'Grilled marinated chicken skewers served with peanut sauce and cucumber relish',
      price: 12.95,
      category: 'appetizers',
      dietary: ['gluten-free'],
      spiceLevel: 1,
      image: '/images/menu/appetizers/chicken-satay.jpg',
      isSignature: true,
      ingredients: ['chicken', 'coconut milk', 'turmeric', 'lemongrass'],
      allergens: ['peanuts']
    },
    {
      id: 'app003',
      name: 'Thai Fish Cakes',
      description: 'Deep-fried fish cakes made with red curry paste, served with sweet chili sauce',
      price: 10.95,
      category: 'appetizers',
      dietary: ['spicy'],
      spiceLevel: 2,
      image: '/images/menu/appetizers/fish-cakes.jpg',
      ingredients: ['fish', 'red curry paste', 'green beans', 'kaffir lime'],
      allergens: ['fish']
    },
    {
      id: 'app004',
      name: 'Crispy Tofu',
      description: 'Golden fried tofu cubes served with sweet and sour tamarind sauce',
      price: 9.95,
      category: 'appetizers',
      dietary: ['vegetarian', 'vegan'],
      image: '/images/menu/appetizers/crispy-tofu.jpg',
      ingredients: ['tofu', 'tamarind', 'palm sugar', 'chili'],
      allergens: []
    },
    {
      id: 'app005',
      name: 'Prawn Crackers',
      description: 'Traditional Thai prawn crackers served with spicy seafood dipping sauce',
      price: 7.95,
      category: 'appetizers',
      dietary: ['spicy'],
      spiceLevel: 2,
      image: '/images/menu/appetizers/prawn-crackers.jpg',
      ingredients: ['prawn', 'tapioca starch', 'chili', 'garlic'],
      allergens: ['shellfish']
    },
    {
      id: 'app006',
      name: 'Chicken Wings',
      description: 'Thai-style marinated chicken wings grilled to perfection with herbs and spices',
      price: 11.95,
      category: 'appetizers',
      dietary: ['spicy', 'gluten-free'],
      spiceLevel: 2,
      image: '/images/menu/appetizers/chicken-wings.jpg',
      ingredients: ['chicken wings', 'fish sauce', 'garlic', 'chili'],
      allergens: ['fish']
    },
    {
      id: 'app007',
      name: 'Vegetable Spring Rolls',
      description: 'Deep-fried spring rolls filled with mixed vegetables and glass noodles',
      price: 8.95,
      category: 'appetizers',
      dietary: ['vegetarian'],
      image: '/images/menu/appetizers/veg-spring-rolls.jpg',
      ingredients: ['cabbage', 'carrots', 'glass noodles', 'mushrooms'],
      allergens: []
    },
    {
      id: 'app008',
      name: 'Thai Beef Jerky',
      description: 'Traditional dried beef served with sticky rice and spicy dipping sauce',
      price: 13.95,
      category: 'appetizers',
      dietary: ['spicy', 'gluten-free'],
      spiceLevel: 3,
      image: '/images/menu/appetizers/beef-jerky.jpg',
      isSignature: true,
      ingredients: ['beef', 'fish sauce', 'palm sugar', 'chili'],
      allergens: ['fish']
    },
  
    // SALADS
    {
      id: 'sal001',
      name: 'Som Tam (Papaya Salad)',
      description: 'Traditional green papaya salad with tomatoes, green beans, peanuts, and lime dressing',
      price: 11.95,
      category: 'salads',
      dietary: ['vegetarian', 'vegan', 'spicy'],
      spiceLevel: 3,
      image: '/images/menu/salads/som-tam.jpg',
      isSignature: true,
      ingredients: ['green papaya', 'tomatoes', 'green beans', 'peanuts', 'lime'],
      allergens: ['peanuts']
    },
    {
      id: 'sal002',
      name: 'Larb Gai',
      description: 'Spicy minced chicken salad with herbs, lime juice, and toasted rice powder',
      price: 13.95,
      category: 'salads',
      dietary: ['spicy', 'gluten-free'],
      spiceLevel: 3,
      image: '/images/menu/salads/larb-gai.jpg',
      ingredients: ['minced chicken', 'lime juice', 'fish sauce', 'herbs', 'rice powder'],
      allergens: ['fish']
    },
    {
      id: 'sal003',
      name: 'Thai Beef Salad',
      description: 'Grilled beef slices with mixed greens, herbs, and spicy lime dressing',
      price: 15.95,
      category: 'salads',
      dietary: ['spicy', 'gluten-free'],
      spiceLevel: 2,
      image: '/images/menu/salads/beef-salad.jpg',
      ingredients: ['beef', 'mixed greens', 'mint', 'cilantro', 'lime'],
      allergens: ['fish']
    },
    {
      id: 'sal004',
      name: 'Seafood Salad',
      description: 'Mixed seafood salad with squid, shrimp, and mussels in spicy lime dressing',
      price: 17.95,
      category: 'salads',
      dietary: ['spicy', 'gluten-free'],
      spiceLevel: 3,
      image: '/images/menu/salads/seafood-salad.jpg',
      ingredients: ['squid', 'shrimp', 'mussels', 'lime', 'chili'],
      allergens: ['shellfish', 'fish']
    },
    {
      id: 'sal005',
      name: 'Glass Noodle Salad',
      description: 'Yam woon sen with glass noodles, minced pork, and peanuts in lime dressing',
      price: 12.95,
      category: 'salads',
      dietary: ['spicy'],
      spiceLevel: 2,
      image: '/images/menu/salads/glass-noodle.jpg',
      ingredients: ['glass noodles', 'minced pork', 'peanuts', 'tomatoes'],
      allergens: ['peanuts', 'fish']
    },
    {
      id: 'sal006',
      name: 'Cucumber Salad',
      description: 'Refreshing cucumber salad with peanuts and sweet and sour dressing',
      price: 9.95,
      category: 'salads',
      dietary: ['vegetarian', 'vegan'],
      image: '/images/menu/salads/cucumber-salad.jpg',
      ingredients: ['cucumber', 'peanuts', 'palm sugar', 'vinegar'],
      allergens: ['peanuts']
    },
  
    // SOUPS
    {
      id: 'sou001',
      name: 'Tom Yum Goong',
      description: 'Famous hot and sour soup with prawns, mushrooms, and aromatic herbs',
      price: 14.95,
      category: 'soups',
      dietary: ['spicy', 'gluten-free'],
      spiceLevel: 3,
      image: '/images/menu/soups/tom-yum-goong.jpg',
      isSignature: true,
      ingredients: ['prawns', 'mushrooms', 'lemongrass', 'lime leaves', 'chili'],
      allergens: ['shellfish', 'fish']
    },
    {
      id: 'sou002',
      name: 'Tom Kha Gai',
      description: 'Creamy coconut chicken soup with galangal, lime leaves, and mushrooms',
      price: 13.95,
      category: 'soups',
      dietary: ['gluten-free'],
      spiceLevel: 1,
      image: '/images/menu/soups/tom-kha-gai.jpg',
      ingredients: ['chicken', 'coconut milk', 'galangal', 'lime leaves', 'mushrooms'],
      allergens: ['fish']
    },
    {
      id: 'sou003',
      name: 'Tom Yum Vegetable',
      description: 'Spicy and sour vegetable soup with mushrooms, tomatoes, and herbs',
      price: 11.95,
      category: 'soups',
      dietary: ['vegetarian', 'vegan', 'spicy'],
      spiceLevel: 3,
      image: '/images/menu/soups/tom-yum-veg.jpg',
      ingredients: ['mushrooms', 'tomatoes', 'lemongrass', 'lime leaves', 'chili'],
      allergens: []
    },
    {
      id: 'sou004',
      name: 'Wonton Soup',
      description: 'Clear broth with pork and shrimp wontons, vegetables, and noodles',
      price: 12.95,
      category: 'soups',
      dietary: [],
      image: '/images/menu/soups/wonton-soup.jpg',
      ingredients: ['pork', 'shrimp', 'wonton wrapper', 'bok choy', 'noodles'],
      allergens: ['shellfish', 'gluten', 'fish']
    },
    {
      id: 'sou005',
      name: 'Thai Chicken Noodle Soup',
      description: 'Comforting chicken soup with rice noodles, bean sprouts, and herbs',
      price: 13.95,
      category: 'soups',
      dietary: ['gluten-free'],
      image: '/images/menu/soups/chicken-noodle.jpg',
      ingredients: ['chicken', 'rice noodles', 'bean sprouts', 'cilantro'],
      allergens: ['fish']
    },
  
    // MAIN DISHES
    {
      id: 'mai001',
      name: 'Pad Thai',
      description: 'Thailand\'s national dish with stir-fried rice noodles, prawns, tofu, and peanuts',
      price: 16.95,
      category: 'mains',
      dietary: ['gluten-free'],
      image: '/images/menu/mains/pad-thai.jpg',
      isSignature: true,
      ingredients: ['rice noodles', 'prawns', 'tofu', 'bean sprouts', 'peanuts'],
      allergens: ['shellfish', 'peanuts', 'fish']
    },
    {
      id: 'mai002',
      name: 'Green Curry Chicken',
      description: 'Traditional green curry with chicken, Thai eggplant, and basil in coconut milk',
      price: 18.95,
      category: 'mains',
      dietary: ['spicy', 'gluten-free'],
      spiceLevel: 3,
      image: '/images/menu/mains/green-curry.jpg',
      isSignature: true,
      ingredients: ['chicken', 'green curry paste', 'coconut milk', 'eggplant', 'basil'],
      allergens: ['fish']
    },
    {
      id: 'mai003',
      name: 'Massaman Curry Beef',
      description: 'Rich and mild curry with tender beef, potatoes, and peanuts',
      price: 19.95,
      category: 'mains',
      dietary: ['spicy', 'gluten-free'],
      spiceLevel: 1,
      image: '/images/menu/mains/massaman-curry.jpg',
      ingredients: ['beef', 'massaman paste', 'coconut milk', 'potatoes', 'peanuts'],
      allergens: ['peanuts', 'fish']
    },
    {
      id: 'mai004',
      name: 'Pad Krapow Chicken',
      description: 'Stir-fried minced chicken with holy basil, chili, and fried egg',
      price: 15.95,
      category: 'mains',
      dietary: ['spicy', 'gluten-free'],
      spiceLevel: 3,
      image: '/images/menu/mains/pad-krapow.jpg',
      ingredients: ['minced chicken', 'holy basil', 'chili', 'garlic', 'egg'],
      allergens: ['eggs', 'fish']
    },
    {
      id: 'mai005',
      name: 'Red Curry Duck',
      description: 'Aromatic red curry with roasted duck, pineapple, and Thai herbs',
      price: 22.95,
      category: 'mains',
      dietary: ['spicy', 'gluten-free'],
      spiceLevel: 2,
      image: '/images/menu/mains/red-curry-duck.jpg',
      isSignature: true,
      ingredients: ['duck', 'red curry paste', 'coconut milk', 'pineapple', 'basil'],
      allergens: ['fish']
    },
    {
      id: 'mai006',
      name: 'Pad See Ew',
      description: 'Stir-fried wide rice noodles with Chinese broccoli and sweet soy sauce',
      price: 14.95,
      category: 'mains',
      dietary: [],
      image: '/images/menu/mains/pad-see-ew.jpg',
      ingredients: ['wide noodles', 'Chinese broccoli', 'pork', 'egg', 'soy sauce'],
      allergens: ['eggs', 'soy', 'gluten']
    },
    {
      id: 'mai007',
      name: 'Thai Fried Rice',
      description: 'Jasmine rice stir-fried with prawns, chicken, pineapple, and cashew nuts',
      price: 15.95,
      category: 'mains',
      dietary: ['gluten-free'],
      image: '/images/menu/mains/thai-fried-rice.jpg',
      ingredients: ['jasmine rice', 'prawns', 'chicken', 'pineapple', 'cashews'],
      allergens: ['shellfish', 'nuts', 'fish']
    },
    {
      id: 'mai008',
      name: 'Cashew Chicken',
      description: 'Stir-fried chicken with roasted cashew nuts, vegetables, and tamarind sauce',
      price: 17.95,
      category: 'mains',
      dietary: ['gluten-free'],
      image: '/images/menu/mains/cashew-chicken.jpg',
      ingredients: ['chicken', 'cashew nuts', 'bell peppers', 'onions', 'tamarind'],
      allergens: ['nuts', 'fish']
    },
    {
      id: 'mai009',
      name: 'Fish with Ginger',
      description: 'Steamed fish fillet with ginger, scallions, and light soy sauce',
      price: 20.95,
      category: 'mains',
      dietary: ['gluten-free'],
      image: '/images/menu/mains/fish-ginger.jpg',
      ingredients: ['fish fillet', 'ginger', 'scallions', 'soy sauce', 'cilantro'],
      allergens: ['fish', 'soy']
    },
    {
      id: 'mai010',
      name: 'Vegetable Green Curry',
      description: 'Traditional green curry with mixed vegetables and tofu in coconut milk',
      price: 14.95,
      category: 'mains',
      dietary: ['vegetarian', 'vegan', 'spicy'],
      spiceLevel: 3,
      image: '/images/menu/mains/veg-green-curry.jpg',
      ingredients: ['mixed vegetables', 'tofu', 'green curry paste', 'coconut milk', 'basil'],
      allergens: []
    },
    {
      id: 'mai011',
      name: 'Thai BBQ Pork Ribs',
      description: 'Tender pork ribs marinated in Thai herbs and grilled to perfection',
      price: 21.95,
      category: 'mains',
      dietary: ['spicy', 'gluten-free'],
      spiceLevel: 2,
      image: '/images/menu/mains/bbq-ribs.jpg',
      ingredients: ['pork ribs', 'lemongrass', 'garlic', 'chili', 'palm sugar'],
      allergens: ['fish']
    },
    {
      id: 'mai012',
      name: 'Whole Fish Sweet & Sour',
      description: 'Deep-fried whole fish topped with sweet and sour sauce and vegetables',
      price: 24.95,
      category: 'mains',
      dietary: [],
      image: '/images/menu/mains/whole-fish.jpg',
      isSignature: true,
      ingredients: ['whole fish', 'pineapple', 'tomatoes', 'bell peppers', 'tamarind'],
      allergens: ['fish']
    },
  
    // DESSERTS
    {
      id: 'des001',
      name: 'Mango Sticky Rice',
      description: 'Traditional Thai dessert with sweet sticky rice, fresh mango, and coconut milk',
      price: 8.95,
      category: 'desserts',
      dietary: ['vegetarian', 'vegan', 'gluten-free'],
      image: '/images/menu/desserts/mango-sticky-rice.jpg',
      isSignature: true,
      ingredients: ['sticky rice', 'mango', 'coconut milk', 'palm sugar'],
      allergens: []
    },
    {
      id: 'des002',
      name: 'Thai Coconut Ice Cream',
      description: 'Homemade coconut ice cream served in a coconut shell with toppings',
      price: 7.95,
      category: 'desserts',
      dietary: ['vegetarian', 'gluten-free'],
      image: '/images/menu/desserts/coconut-ice-cream.jpg',
      ingredients: ['coconut milk', 'palm sugar', 'peanuts', 'corn'],
      allergens: ['peanuts']
    },
    {
      id: 'des003',
      name: 'Tub Tim Grob',
      description: 'Water chestnuts in coconut milk with crushed ice and palm sugar syrup',
      price: 6.95,
      category: 'desserts',
      dietary: ['vegetarian', 'vegan', 'gluten-free'],
      image: '/images/menu/desserts/tub-tim-grob.jpg',
      ingredients: ['water chestnuts', 'coconut milk', 'tapioca starch', 'palm sugar'],
      allergens: []
    },
    {
      id: 'des004',
      name: 'Thai Banana Fritters',
      description: 'Deep-fried banana in crispy batter served with honey and sesame seeds',
      price: 7.95,
      category: 'desserts',
      dietary: ['vegetarian'],
      image: '/images/menu/desserts/banana-fritters.jpg',
      ingredients: ['banana', 'flour', 'coconut', 'honey', 'sesame seeds'],
      allergens: ['gluten', 'sesame']
    },
  
    // BEVERAGES
    {
      id: 'bev001',
      name: 'Thai Iced Tea',
      description: 'Traditional Thai tea with condensed milk and ice',
      price: 4.95,
      category: 'beverages',
      dietary: ['vegetarian'],
      image: '/images/menu/beverages/thai-iced-tea.jpg',
      isSignature: true,
      ingredients: ['Thai tea', 'condensed milk', 'sugar', 'ice'],
      allergens: ['dairy']
    },
    {
      id: 'bev002',
      name: 'Fresh Coconut Water',
      description: 'Pure coconut water served fresh from young coconuts',
      price: 5.95,
      category: 'beverages',
      dietary: ['vegetarian', 'vegan', 'gluten-free'],
      image: '/images/menu/beverages/coconut-water.jpg',
      ingredients: ['young coconut'],
      allergens: []
    },
    {
      id: 'bev003',
      name: 'Lemongrass Juice',
      description: 'Refreshing lemongrass juice with honey and lime',
      price: 4.95,
      category: 'beverages',
      dietary: ['vegetarian', 'vegan', 'gluten-free'],
      image: '/images/menu/beverages/lemongrass-juice.jpg',
      ingredients: ['lemongrass', 'honey', 'lime', 'water'],
      allergens: []
    },
    {
      id: 'bev004',
      name: 'Thai Iced Coffee',
      description: 'Strong Thai coffee with condensed milk and ice',
      price: 4.95,
      category: 'beverages',
      dietary: ['vegetarian'],
      image: '/images/menu/beverages/thai-iced-coffee.jpg',
      ingredients: ['Thai coffee', 'condensed milk', 'sugar', 'ice'],
      allergens: ['dairy']
    },
    {
      id: 'bev005',
      name: 'Mango Smoothie',
      description: 'Fresh mango blended with ice and a touch of lime',
      price: 5.95,
      category: 'beverages',
      dietary: ['vegetarian', 'vegan', 'gluten-free'],
      image: '/images/menu/beverages/mango-smoothie.jpg',
      ingredients: ['fresh mango', 'lime', 'ice', 'sugar'],
      allergens: []
    },
    {
      id: 'bev006',
      name: 'Chrysanthemum Tea',
      description: 'Traditional Chinese herbal tea served hot or cold',
      price: 3.95,
      category: 'beverages',
      dietary: ['vegetarian', 'vegan', 'gluten-free'],
      image: '/images/menu/beverages/chrysanthemum-tea.jpg',
      ingredients: ['chrysanthemum flowers', 'rock sugar'],
      allergens: []
    }
  ];
  
  // Helper functions
  export const getMenuItemsByCategory = (category: string): MenuItem[] => {
    return menuItems.filter(item => item.category === category);
  };
  
  export const getSignatureItems = (): MenuItem[] => {
    return menuItems.filter(item => item.isSignature);
  };
  
  export const formatPrice = (price: number): string => {
    return `$${price.toFixed(2)}`;
  };
  
  export const getDietaryLabel = (dietary: string): string => {
    const labels: Record<string, string> = {
      'vegetarian': '🌱 Vegetarian',
      'vegan': '🌿 Vegan',
      'gluten-free': '🌾 Gluten-Free',
      'spicy': '🌶️ Spicy'
    };
    return labels[dietary] || dietary;
  };
  
  export const getSpiceLevelDisplay = (level: number): string => {
    return '🌶️'.repeat(level);
  };

  // Update the "All" category count in category-navigation.tsx
export const allCategories = [
  {
    id: 'all',
    name: 'All Items',
    icon: '🍽️',
    count: 41, // Update this to match actual total: 8+6+5+12+4+6 = 41
    description: 'Browse our complete menu selection'
  },
  ...menuCategories
];