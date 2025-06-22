export interface TimeSlot {
  time: string;
  display: string;
  available: boolean;
  popular?: boolean;
  reason?: string;
}

export interface DateAvailability {
  date: string;
  available: boolean;
  timeSlots: TimeSlot[];
  reason?: string;
}

// Generate time slots for a specific date
export const generateTimeSlots = (date: Date): TimeSlot[] => {
  const dayOfWeek = date.getDay();
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // Sunday or Saturday
  const isFriday = dayOfWeek === 5;
  
  // Determine operating hours based on day
  let startHour: number, endHour: number;
  
  if (isWeekend) {
    startHour = 12; // 12 PM weekends
    endHour = 22;   // 10 PM weekends
  } else if (isFriday) {
    startHour = 11; // 11 AM Friday
    endHour = 22;   // 10 PM Friday
  } else {
    startHour = 11; // 11 AM weekdays
    endHour = 21;   // 9 PM weekdays
  }

  const slots: TimeSlot[] = [];
  const now = new Date();
  const isToday = date.toDateString() === now.toDateString();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  // Generate 30-minute slots
  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      const displayTime = formatTimeDisplay(hour, minute);
      
      // Check if slot is available
      let available = true;
      let reason = '';

      // Business rule: No same-day reservations after 6 PM
      if (isToday && (hour > 18 || (hour === 18 && currentHour >= 18))) {
        available = false;
        reason = 'Same-day reservations not available after 6 PM';
      }

      // Business rule: No reservations within 2 hours of current time
      if (isToday) {
        const slotTime = hour * 60 + minute;
        const currentTime = currentHour * 60 + currentMinute;
        if (slotTime <= currentTime + 120) { // 2 hours buffer
          available = false;
          reason = 'Requires 2-hour advance notice';
        }
      }

      // Mock some slots as unavailable for realism
      const unavailableSlots = getUnavailableSlots(date);
      if (unavailableSlots.includes(timeString)) {
        available = false;
        reason = 'Fully booked';
      }

      // Mark popular time slots
      const isPopular = isPopularTimeSlot(hour, dayOfWeek);

      slots.push({
        time: timeString,
        display: displayTime,
        available,
        popular: isPopular && available,
        reason: available ? undefined : reason,
      });
    }
  }

  return slots;
};

// Format time for display (12-hour format)
const formatTimeDisplay = (hour: number, minute: number): string => {
  const period = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  const displayMinute = minute.toString().padStart(2, '0');
  return `${displayHour}:${displayMinute} ${period}`;
};

// Mock unavailable slots (in real app, this would come from database)
const getUnavailableSlots = (date: Date): string[] => {
  const dayOfWeek = date.getDay();
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  
  // Mock some busy periods
  const unavailableSlots: string[] = [];
  
  if (isWeekend) {
    // Weekends - lunch rush and dinner rush more booked
    unavailableSlots.push('12:00', '12:30', '13:00', '19:00', '19:30', '20:00');
  } else {
    // Weekdays - dinner rush more booked
    unavailableSlots.push('18:00', '18:30', '19:00', '19:30');
  }
  
  return unavailableSlots;
};

// Determine popular time slots
const isPopularTimeSlot = (hour: number, dayOfWeek: number): boolean => {
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  
  if (isWeekend) {
    // Weekend popular times: lunch (1-3 PM) and early dinner (6-8 PM)
    return (hour >= 13 && hour <= 15) || (hour >= 18 && hour <= 20);
  } else {
    // Weekday popular times: early dinner (6-8 PM)
    return hour >= 18 && hour <= 20;
  }
};

// Check if a date is available for reservations
export const isDateAvailable = (date: Date): boolean => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const checkDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  
  // No past dates
  if (checkDate < today) {
    return false;
  }
  
  // No more than 30 days in advance
  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 30);
  if (checkDate > maxDate) {
    return false;
  }
  
  // Mock some fully booked dates
  const fullyBookedDates = getFullyBookedDates();
  const dateString = checkDate.toISOString().split('T')[0];
  if (fullyBookedDates.includes(dateString)) {
    return false;
  }
  
  return true;
};

// Mock fully booked dates (in real app, this would come from database)
const getFullyBookedDates = (): string[] => {
  const today = new Date();
  const fullyBooked: string[] = [];
  
  // Mock some upcoming Saturday nights as fully booked
  for (let i = 0; i < 4; i++) {
    const saturday = new Date(today);
    saturday.setDate(today.getDate() + (6 - today.getDay() + 7 * i));
    fullyBooked.push(saturday.toISOString().split('T')[0]);
  }
  
  return fullyBooked;
};

// Get available dates for the next 30 days
export const getAvailableDates = (): DateAvailability[] => {
  const dates: DateAvailability[] = [];
  const today = new Date();
  
  for (let i = 0; i < 30; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    
    const available = isDateAvailable(date);
    const timeSlots = available ? generateTimeSlots(date) : [];
    
    dates.push({
      date: date.toISOString().split('T')[0],
      available,
      timeSlots,
      reason: available ? undefined : 'Fully booked',
    });
  }
  
  return dates;
};

// Validate reservation time against business rules
export const validateReservationTime = (
  date: string,
  time: string,
  partySize: number
): { valid: boolean; message?: string } => {
  const reservationDate = new Date(date);
  const now = new Date();
  
  // Check if date is available
  if (!isDateAvailable(reservationDate)) {
    return { valid: false, message: 'Selected date is not available' };
  }
  
  // Check if time slot is available
  const timeSlots = generateTimeSlots(reservationDate);
  const selectedSlot = timeSlots.find(slot => slot.time === time);
  
  if (!selectedSlot) {
    return { valid: false, message: 'Invalid time slot selected' };
  }
  
  if (!selectedSlot.available) {
    return { valid: false, message: selectedSlot.reason || 'Time slot not available' };
  }
  
  // Large party validation
  if (partySize > 8) {
    const hoursUntilReservation = (reservationDate.getTime() - now.getTime()) / (1000 * 60 * 60);
    if (hoursUntilReservation < 48) {
      return { 
        valid: false, 
        message: 'Parties of 8+ guests require 48-hour advance notice. Please call +233 25 779 9736.' 
      };
    }
  }
  
  if (partySize > 20) {
    return { 
      valid: false, 
      message: 'Parties larger than 20 guests require special arrangements. Please call +233 25 779 9736.' 
    };
  }
  
  return { valid: true };
};