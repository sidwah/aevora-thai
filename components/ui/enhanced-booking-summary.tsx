'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Star, CheckCircle } from 'lucide-react';
import { specialOccasions, dietaryOptions } from '@/data/reservation-options';
import type { ReservationData } from '@/types/reservations';

interface EnhancedBookingSummaryProps {
  reservationData: Partial<ReservationData>;
  className?: string;
}

export default function EnhancedBookingSummary({ 
  reservationData, 
  className = '' 
}: EnhancedBookingSummaryProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return {
      weekday: date.toLocaleDateString('en-US', { weekday: 'long' }),
      date: date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    };
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
    return occasion ? occasion : null;
  };

  const getDietaryLabels = (restrictions: string[]) => {
    return restrictions.map(restriction => {
      const option = dietaryOptions.find(opt => opt.value === restriction);
      return option ? option : { icon: '📝', label: restriction, value: restriction };
    });
  };

  const estimatedDuration = reservationData.partySize && reservationData.partySize > 6 ? '2.5 hours' : '2 hours';
  const formattedDate = reservationData.date ? formatDate(reservationData.date) : null;
  const occasion = reservationData.occasion && reservationData.occasion !== 'none' 
    ? getOccasionLabel(reservationData.occasion) : null;
  const dietaryLabels = reservationData.dietaryRestrictions?.length 
    ? getDietaryLabels(reservationData.dietaryRestrictions) : [];

  const hasBasicInfo = reservationData.date && reservationData.time && reservationData.partySize;
  const hasContactInfo = reservationData.guestInfo?.name && reservationData.guestInfo?.email;
  const completionPercentage = (() => {
    let completed = 0;
    if (reservationData.date) completed += 20;
    if (reservationData.time) completed += 20;
    if (reservationData.partySize) completed += 15;
    if (reservationData.guestInfo?.name) completed += 15;
    if (reservationData.guestInfo?.email) completed += 15;
    if (reservationData.guestInfo?.phone) completed += 10;
    if (reservationData.occasion && reservationData.occasion !== 'none') completed += 5;
    return completed;
  })();

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Completion Progress */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-light rounded-xl p-4"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="font-secondary text-sm font-medium">Booking Progress</span>
          <span className="font-secondary text-sm text-neutral-gray">{completionPercentage}%</span>
        </div>
        <div className="w-full bg-neutral-light rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${completionPercentage}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-gradient-to-r from-primary-brown to-accent-gold h-2 rounded-full"
          />
        </div>
        {completionPercentage < 100 && (
          <p className="font-secondary text-xs text-neutral-gray mt-1">
            Complete all fields to finalize your reservation
          </p>
        )}
      </motion.div>

      {/* Booking Details */}
      {hasBasicInfo && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-medium rounded-xl p-4 border border-primary-brown/20"
        >
          <h3 className="font-primary text-lg text-primary-dark mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary-brown" />
            Reservation Details
          </h3>

          <div className="space-y-3">
            {/* Date & Time */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-neutral-gray" />
                <span className="font-secondary text-sm text-neutral-gray">When:</span>
              </div>
              <div className="text-right">
                {formattedDate && (
                  <>
                    <p className="font-secondary text-sm font-medium text-primary-dark">
                      {formattedDate.weekday}
                    </p>
                    <p className="font-secondary text-xs text-neutral-gray">
                      {formattedDate.date} at {formatTime(reservationData.time!)}
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Party Size */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-neutral-gray" />
                <span className="font-secondary text-sm text-neutral-gray">Guests:</span>
              </div>
              <span className="font-secondary text-sm font-medium text-primary-dark">
                {reservationData.partySize} {reservationData.partySize === 1 ? 'Guest' : 'Guests'}
              </span>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-neutral-gray" />
                <span className="font-secondary text-sm text-neutral-gray">Duration:</span>
              </div>
              <span className="font-secondary text-sm font-medium text-primary-dark">
                {estimatedDuration}
              </span>
            </div>

            {/* Special Occasion */}
            {occasion && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-neutral-gray" />
                  <span className="font-secondary text-sm text-neutral-gray">Occasion:</span>
                </div>
                <span className="font-secondary text-sm font-medium text-primary-dark">
                  {occasion.icon} {occasion.label}
                </span>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Contact Information */}
      {hasContactInfo && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-light rounded-xl p-4"
        >
          <h3 className="font-secondary text-sm font-medium text-primary-dark mb-2">Contact Information</h3>
          <div className="space-y-1">
            <p className="font-secondary text-xs text-neutral-gray">
              <span className="font-medium">{reservationData.guestInfo?.name}</span>
            </p>
            <p className="font-secondary text-xs text-neutral-gray">
              {reservationData.guestInfo?.email}
            </p>
            {reservationData.guestInfo?.phone && (
              <p className="font-secondary text-xs text-neutral-gray">
                {reservationData.guestInfo.phone}
              </p>
            )}
          </div>
        </motion.div>
      )}

      {/* Dietary Restrictions */}
      {dietaryLabels.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-light rounded-xl p-4"
        >
          <h3 className="font-secondary text-sm font-medium text-primary-dark mb-2">Dietary Restrictions</h3>
          <div className="flex flex-wrap gap-1">
           {dietaryLabels.map((dietary, index) => (
             <span
               key={index}
               className="inline-flex items-center gap-1 bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs"
             >
               <span>{dietary.icon}</span>
               <span>{dietary.label}</span>
             </span>
           ))}
         </div>
       </motion.div>
     )}

     {/* Special Requests */}
     {reservationData.specialRequests && (
       <motion.div
         initial={{ opacity: 0, y: 10 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.4 }}
         className="glass-light rounded-xl p-4"
       >
         <h3 className="font-secondary text-sm font-medium text-primary-dark mb-2">Special Requests</h3>
         <p className="font-secondary text-xs text-neutral-gray leading-relaxed">
           {reservationData.specialRequests}
         </p>
       </motion.div>
     )}

     {/* Confirmation Ready */}
     {completionPercentage >= 85 && (
       <motion.div
         initial={{ opacity: 0, scale: 0.9 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ delay: 0.5, type: "spring" }}
         className="bg-green-50 border border-green-200 rounded-xl p-4"
       >
         <div className="flex items-center gap-2 mb-2">
           <CheckCircle className="w-4 h-4 text-green-600" />
           <span className="font-secondary text-sm font-medium text-green-800">
             Ready to Book!
           </span>
         </div>
         <p className="font-secondary text-xs text-green-700">
           Your reservation details look complete. Click &quot;Confirm Reservation&quot; to finalize your booking.
         </p>
       </motion.div>
     )}
   </div>
 );
}