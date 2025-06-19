export interface MenuCategory {
    id: string;
    name: string;
    description: string;
    badge: string;
    image: string;
    href: string;
  }
  
  export const menuCategories: MenuCategory[] = [
    {
      id: 'appetizers',
      name: 'Appetizers',
      description: 'Crispy and delicious appetizers, including spring rolls and fresh dumplings to start your meal.',
      badge: 'A',
      image: '/images/menu/appetizers-spring-rolls.jpg',
      href: '/menu#appetizers'
    },
    {
      id: 'salads',
      name: 'Salads',
      description: 'Our refreshing, crisp fresh salads, perfectly balanced, vibrant mixed vegetables.',
      badge: 'S',
      image: '/images/menu/salads-fresh-salad.jpg',
      href: '/menu#salads'
    },
    {
      id: 'soups',
      name: 'Soups',
      description: 'In mollis consequat ex, et denisum eros non lobortis eleifend lorem ipsum dolor sit amet.',
      badge: 'S',
      image: '/images/menu/soups-tom-yum.jpg',
      href: '/menu#soups'
    },
    {
      id: 'main-dishes',
      name: 'Main Dishes',
      description: 'Indulgent main dishes that will satisfy your cravings, includes all your classic Thai dishes.',
      badge: 'M',
      image: '/images/menu/main-dishes-stir-fry.jpg',
      href: '/menu#main-dishes'
    }
  ];
  
  export const menuHeroContent = {
    title: "The Finest Thai Cuisine",
    description: "At Aevora Thai, we thrive at creating the best Thai dish. With over 20 dishes to choose from, explore what our menu has to offer.",
    heroImage: "/images/menu/hero-pad-thai.jpg"
  };