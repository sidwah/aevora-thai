export interface RestaurantInfo {
    name: string;
    address: string;
    phone: string;
    email: string;
    hours: Record<string, string>;
    socialMedia: {
      facebook?: string;
      instagram?: string;
      twitter?: string;
    };
  }
  
  export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    dietary: string[];
    image: string;
    spiceLevel?: number;
    isSignature?: boolean;
  }
  
  export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: string;
  }
  
  export interface Testimonial {
    id: string;
    name: string;
    rating: number;
    comment: string;
    date: string;
    source?: string;
  }