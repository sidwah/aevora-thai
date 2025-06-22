export interface ReservationData {
    date: string;
    time: string;
    partySize: number;
    occasion?: string;
    dietaryRestrictions: string[];
    specialRequests?: string;
    guestInfo: {
      name: string;
      email: string;
      phone: string;
    };
  }
  
  export type SpecialOccasion = 
    | 'birthday'
    | 'anniversary'
    | 'business'
    | 'family'
    | 'date'
    | 'special'
    | 'none';
  
  export type DietaryRestriction = 
    | 'vegetarian'
    | 'vegan'
    | 'gluten-free'
    | 'nut-allergies'
    | 'shellfish-allergies'
    | 'other';
  
  export interface TimeSlot {
    time: string;
    available: boolean;
    popular?: boolean;
  }
  
  export interface ReservationFormProps {
    onSubmit: (data: ReservationData) => Promise<void>;
    isSubmitting?: boolean;
  }