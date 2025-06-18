export const locationInfo = {
  restaurant: {
    name: 'Aevora Thai',
    address: {
      street: 'East Legon',
      city: 'Accra',
      region: 'Greater Accra',
      country: 'Ghana',
      formatted: 'East Legon, Accra, Ghana',
      shortFormat: 'East Legon, Ghana',
    },
    coordinates: {
      lat: 5.634546,
      lng: -0.171911,
    },
  },
  contact: {
    phone: '+233 25 779 9736',
    phoneDisplay: '+233 25 779 9736',
    phoneDialable: 'tel:+233257799736',
    email: 'talktoaevora@gmail.com',
    website: 'www.aevorathai.com',
  },
  hours: {
    weekdays: {
      label: 'Monday - Thursday',
      time: '11:00 AM - 9:00 PM',
    },
    friday: {
      label: 'Friday',
      time: '11:00 AM - 10:00 PM',
    },
    weekend: {
      label: 'Saturday - Sunday',
      time: '12:00 PM - 10:00 PM',
    },
  },
  features: [
    'Authentic Thai Cuisine',
    'Dine-in & Takeaway',
    'Private Events',
    'Catering Services',
  ],
} as const;
