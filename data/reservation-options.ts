export const specialOccasions = [
    { value: 'none', label: 'No Special Occasion', icon: '🍽️' },
    { value: 'birthday', label: 'Birthday Celebration', icon: '🎂' },
    { value: 'anniversary', label: 'Anniversary Dinner', icon: '💕' },
    { value: 'business', label: 'Business Meeting', icon: '💼' },
    { value: 'family', label: 'Family Gathering', icon: '👨‍👩‍👧‍👦' },
    { value: 'date', label: 'Date Night', icon: '🌹' },
    { value: 'special', label: 'Special Event', icon: '🎉' },
  ] as const;
  
  export const dietaryOptions = [
    { value: 'vegetarian', label: 'Vegetarian', icon: '🥬' },
    { value: 'vegan', label: 'Vegan', icon: '🌱' },
    { value: 'gluten-free', label: 'Gluten-Free', icon: '🌾' },
    { value: 'nut-allergies', label: 'Nut Allergies', icon: '🥜' },
    { value: 'shellfish-allergies', label: 'Shellfish Allergies', icon: '🦐' },
    { value: 'other', label: 'Other (specify in requests)', icon: '📝' },
  ] as const;
  
  export const partySizeOptions = Array.from({ length: 20 }, (_, i) => ({
    value: i + 1,
    label: i === 0 ? '1 Guest' : `${i + 1} Guests`,
    popular: i + 1 === 2 || i + 1 === 4, // Mark 2 and 4 as popular
  }));
  
  // Restaurant operating hours for reservations
  export const operatingHours = {
    weekday: { start: '11:00', end: '21:00' }, // 11 AM - 9 PM
    friday: { start: '11:00', end: '22:00' },  // 11 AM - 10 PM
    weekend: { start: '12:00', end: '22:00' }, // 12 PM - 10 PM
  };