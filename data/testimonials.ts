// data/testimonials.ts
export interface Testimonial {
    id: string;
    rating: number;
    title?: string;
    comment: string;
    customerName: string;
    location: string;
    date: string;
  }
  
  export const testimonials: Testimonial[] = [
    {
      id: '1',
      rating: 5,
      title: "My favorite Thai place in Geneva!",
      comment: "I love this restaurant because it's calm and authentic. The service is excellent and I've always enjoyed the variety of dishes they offer.",
      customerName: "Michael Arkoh",
      location: "Geneva, Switzerland",
      date: "2024-03-15"
    },
    {
      id: '2',
      rating: 5,
      title: "Absolutely exceptional dining experience!",
      comment: "The authentic Thai flavors transported me straight to Bangkok. Every dish was perfectly prepared with fresh ingredients and traditional techniques.",
      customerName: "Sarah Johnson",
      location: "Accra, Ghana",
      date: "2024-03-10"
    },
    {
      id: '3',
      rating: 5,
      title: "Best Thai food in East Legon!",
      comment: "Outstanding service and incredible food. The chef's expertise really shows in every bite. We'll definitely be coming back regularly!",
      customerName: "Kwame Asante",
      location: "East Legon, Accra",
      date: "2024-03-08"
    },
    {
      id: '4',
      rating: 5,
      title: "Perfect for special occasions",
      comment: "The ambiance is beautiful and the food quality is consistently excellent. Our family celebrations are always memorable here.",
      customerName: "Fatima Al-Hassan",
      location: "Airport Residential, Accra",
      date: "2024-03-05"
    },
    {
      id: '5',
      rating: 5,
      title: "Authentic Thai cuisine at its finest",
      comment: "As someone who has traveled extensively in Thailand, I can confidently say this restaurant serves the most authentic Thai food I've found in Ghana.",
      customerName: "David Chen",
      location: "Cantonments, Accra",
      date: "2024-03-01"
    }
  ];