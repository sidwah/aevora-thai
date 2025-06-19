export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    experience: string;
    specialization: string;
    image: string;
    isFounder?: boolean;
  }
  
  export const teamMembers: TeamMember[] = [
    {
      id: 'michael-arkoh',
      name: 'Michael Arkoh',
      role: 'Founder & Head Chef',
      bio: 'Michael brings over 25 years of culinary expertise to Aevora Thai. His passion for authentic Thai cuisine began during his travels to Thailand, where he learned traditional cooking techniques from local masters. He established Aevora Thai with a vision to bring genuine Thai flavors to Ghana.',
      experience: '25+ years',
      specialization: 'Traditional Thai Cuisine',
      image: '/images/about/team/michael-arkoh-profile.jpg',
      isFounder: true
    },
    {
      id: 'sarah-mensah',
      name: 'Sarah Mensah',
      role: 'Sous Chef',
      bio: 'Sarah joined our kitchen team 8 years ago and has become Michael\'s right hand in maintaining our high standards. She specializes in Thai curries and has an exceptional understanding of balancing traditional Thai spices with local ingredients.',
      experience: '8 years',
      specialization: 'Thai Curries & Spice Blending',
      image: '/images/about/team/sarah-mensah-profile.jpg'
    },
    {
      id: 'kwame-asante',
      name: 'Kwame Asante',
      role: 'Kitchen Manager',
      bio: 'Kwame ensures our kitchen runs smoothly and maintains the highest standards of food safety and quality. His attention to detail and organizational skills keep our team working in perfect harmony during busy service periods.',
      experience: '6 years',
      specialization: 'Kitchen Operations & Quality Control',
      image: '/images/about/team/kwame-asante-profile.jpg'
    },
    {
      id: 'grace-osei',
      name: 'Grace Osei',
      role: 'Restaurant Manager',
      bio: 'Grace leads our front-of-house team with warmth and professionalism. She ensures every guest feels welcomed and receives exceptional service that matches the quality of our authentic Thai cuisine.',
      experience: '5 years',
      specialization: 'Guest Experience & Service Excellence',
      image: '/images/about/team/grace-osei-profile.jpg'
    }
  ] as const;
  
  export const kitchenPhilosophy = {
    title: "Our Kitchen Philosophy",
    subtitle: "Where Tradition Meets Excellence",
    description: "Our kitchen is the heart of Aevora Thai, where traditional Thai cooking techniques are practiced with reverence and precision.",
    
    principles: [
      {
        title: "Fresh Daily",
        description: "All ingredients are sourced fresh daily from local markets and trusted suppliers.",
        icon: "🌱"
      },
      {
        title: "Traditional Techniques",
        description: "We use time-honored Thai cooking methods passed down through generations.",
        icon: "👨‍🍳"
      },
      {
        title: "Authentic Spices",
        description: "Our spices and herbs are imported directly from Thailand for authentic flavors.",
        icon: "🌶️"
      },
      {
        title: "Made to Order",
        description: "Every dish is prepared fresh when you order, ensuring optimal taste and quality.",
        icon: "🔥"
      }
    ]
  } as const;
  
  export const sourcingPractices = {
    title: "Quality Sourcing",
    description: "We believe great dishes start with great ingredients. Our sourcing practices ensure authenticity and freshness.",
    
    practices: [
      {
        category: "Local Fresh Produce",
        description: "Daily sourcing from Accra's best markets for vegetables, herbs, and proteins.",
        items: ["Fresh vegetables", "Local herbs", "Quality proteins", "Seasonal produce"]
      },
      {
        category: "Thai Imports",
        description: "Authentic Thai ingredients imported directly from trusted suppliers in Thailand.",
        items: ["Thai chilies", "Fish sauce", "Coconut cream", "Traditional spices"]
      },
      {
        category: "Quality Standards",
        description: "Rigorous quality checks ensure every ingredient meets our high standards.",
        items: ["Freshness verification", "Origin authentication", "Quality grading", "Proper storage"]
      }
    ]
  } as const;