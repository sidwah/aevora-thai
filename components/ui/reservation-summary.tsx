'use client';

import { motion } from 'framer-motion';
import { Calendar,  Star, MapPin, Phone } from 'lucide-react';
import { specialOccasions } from '@/data/reservation-options';
import { locationInfo } from '@/data/location-info';
import type { ReservationData } from '@/types/reservations';

interface ReservationSummaryProps {
  reservationData: Partial<ReservationData>;
}

export default function ReservationSummary({ reservationData }: ReservationSummaryProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (timeString: string) => {
    if (!timeString) return '';
    const [hours, minutes] = timeString.split(':');
    const time = new Date();
    time.setHours(parseInt(hours), parseInt(minutes));
    return time.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const getOccasionLabel = (value: string) => {
    const occasion = specialOccasions.find(o => o.value === value);
    return occasion ? `${occasion.icon} ${occasion.label}` : '';
  };

  const estimatedDuration = reservationData.partySize && reservationData.partySize > 6 ? '2.5 hours' : '2 hours';

  return (
    <div className="space-y-6">
      {/* Booking Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-light rounded-2xl p-6"
      >
        <h3 className="font-primary text-xl mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary-brown" />
          Booking Summary
        </h3>

        <div className="space-y-4">
          {/* Date */}
          {reservationData.date ? (
            <div className="flex items-center justify-between">
              <span className="font-secondary text-sm text-neutral-gray">Date:</span>
              <span className="font-secondary text-sm font-medium ">
                {formatDate(reservationData.date)}
              </span>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <span className="font-secondary text-sm text-neutral-gray">Date:</span>
              <span className="font-secondary text-sm text-neutral-gray italic">Not selected</span>
            </div>
          )}

          {/* Time */}
         {reservationData.time ? (
           <div className="flex items-center justify-between">
             <span className="font-secondary text-sm text-neutral-gray">Time:</span>
             <span className="font-secondary text-sm font-medium">
               {formatTime(reservationData.time)}
             </span>
           </div>
         ) : (
           <div className="flex items-center justify-between">
             <span className="font-secondary text-sm text-neutral-gray">Time:</span>
             <span className="font-secondary text-sm text-neutral-gray italic">Not selected</span>
           </div>
         )}

         {/* Party Size */}
         {reservationData.partySize ? (
           <div className="flex items-center justify-between">
             <span className="font-secondary text-sm text-neutral-gray">Guests:</span>
             <span className="font-secondary text-sm font-medium">
               {reservationData.partySize} {reservationData.partySize === 1 ? 'Guest' : 'Guests'}
             </span>
           </div>
         ) : (
           <div className="flex items-center justify-between">
             <span className="font-secondary text-sm text-neutral-gray">Guests:</span>
             <span className="font-secondary text-sm text-neutral-gray italic">Not selected</span>
           </div>
         )}

         {/* Special Occasion */}
         {reservationData.occasion && reservationData.occasion !== 'none' && (
           <div className="flex items-center justify-between">
             <span className="font-secondary text-sm text-neutral-gray">Occasion:</span>
             <span className="font-secondary text-sm font-medium">
               {getOccasionLabel(reservationData.occasion)}
             </span>
           </div>
         )}

         {/* Estimated Duration */}
         {reservationData.partySize && (
           <div className="flex items-center justify-between border-t border-neutral-light pt-3 mt-3">
             <span className="font-secondary text-sm">Estimated Duration:</span>
             <span className="font-secondary text-sm font-medium">
               {estimatedDuration}
             </span>
           </div>
         )}
       </div>
     </motion.div>

     {/* Restaurant Info */}
     <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6, delay: 0.2 }}
       className="glass-light rounded-2xl p-6"
     >
       <h3 className="font-primary text-xl mb-4 flex items-center gap-2">
         <MapPin className="w-5 h-5 text-primary-brown" />
         Restaurant Details
       </h3>

       <div className="space-y-3">
         {/* Address */}
         <div>
           <p className="font-secondary text-sm font-medium">Aevora Thai Restaurant</p>
           <p className="font-secondary text-sm text-neutral-gray">{locationInfo.restaurant.address.formatted}</p>
         </div>

         {/* Phone */}
         <div className="flex items-center gap-2">
           <Phone className="w-4 h-4 text-primary-brown" />
           <a 
             href={locationInfo.contact.phoneDialable}
             className="font-secondary text-sm text-primary-brown hover:text-primary-dark transition-colors"
           >
             {locationInfo.contact.phoneDisplay}
           </a>
         </div>

         {/* Hours */}
         <div className="border-t border-neutral-light pt-3">
           <p className="font-secondary text-xs font-medium mb-2">Operating Hours:</p>
           <div className="space-y-1">
             <div className="flex justify-between">
               <span className="font-secondary text-xs text-neutral-gray">Mon - Thu:</span>
               <span className="font-secondary text-xs text-neutral-gray">11:00 AM - 9:00 PM</span>
             </div>
             <div className="flex justify-between">
               <span className="font-secondary text-xs text-neutral-gray">Friday:</span>
               <span className="font-secondary text-xs text-neutral-gray">11:00 AM - 10:00 PM</span>
             </div>
             <div className="flex justify-between">
               <span className="font-secondary text-xs text-neutral-gray">Sat - Sun:</span>
               <span className="font-secondary text-xs text-neutral-gray">12:00 PM - 10:00 PM</span>
             </div>
           </div>
         </div>
       </div>
     </motion.div>

     {/* Quick Actions */}
     <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6, delay: 0.4 }}
       className="space-y-3"
     >
       {/* Call Restaurant */}
       <a 
         href={locationInfo.contact.phoneDialable}
         className="w-full bg-button-primary hover:bg-button-hover-primary text-white font-secondary font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
       >
         <Phone className="w-4 h-4" />
         Call Restaurant
       </a>

       {/* View Menu */}
       <a
         href="/menu"
         className="w-full bg-transparent border-2 border-primary-brown text-primary-brown hover:bg-primary-brown hover:text-white font-secondary font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
       >
         <Star className="w-4 h-4" />
         View Menu
       </a>
     </motion.div>

     {/* Reservation Policies Note */}
     <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6, delay: 0.6 }}
       className="glass-light rounded-xl p-4"
     >
       <p className="font-secondary text-xs text-neutral-gray text-center">
         By booking, you agree to our{' '}
         <span className="text-primary-brown cursor-pointer hover:underline">
           reservation policies
         </span>
         . Cancellations accepted up to 2 hours before your reservation.
       </p>
     </motion.div>
   </div>
 );
}