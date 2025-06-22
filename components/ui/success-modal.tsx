'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Star, X, Phone, Mail, MapPin } from 'lucide-react';
import { locationInfo } from '@/data/location-info';
import type { ReservationData } from '@/types/reservations';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  reservationData: ReservationData;
  confirmationNumber: string;
}

export default function SuccessModal({ 
  isOpen, 
  onClose, 
  reservationData, 
  confirmationNumber 
}: SuccessModalProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const time = new Date();
    time.setHours(parseInt(hours), parseInt(minutes));
    return time.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-xlg max-h-[115vh] overflow-y-auto glass-strong rounded-2xl p-6 lg:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Star className="w-8 h-8 text-white" />
          </motion.div>

          {/* Success Message */}
          <div className="text-center mb-6">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-primary text-2xl lg:text-3xl text-white mb-3"
            >
              Reservation Confirmed!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-secondary text-white/90 mb-4"
            >
              Thank you for your reservation. We look forward to serving you!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/20 rounded-lg p-3 mb-6"
            >
              <p className="font-secondary text-sm text-white/80 mb-1">Confirmation Number</p>
              <p className="font-secondary text-lg font-bold text-white">{confirmationNumber}</p>
            </motion.div>
          </div>

          {/* Reservation Details */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/10 rounded-xl p-4 mb-6"
          >
            <h3 className="font-secondary text-sm font-semibold text-white mb-3">Reservation Details</h3>
            
            <div className="space-y-2">
              {/* Date & Time */}
              <div className="flex items-center justify-between">
                <span className="font-secondary text-sm text-white/80">Date & Time:</span>
                <div className="text-right">
                  <p className="font-secondary text-sm font-medium text-white">
                    {formatDate(reservationData.date)}
                  </p>
                  <p className="font-secondary text-xs text-white/80">
                    {formatTime(reservationData.time)}
                  </p>
                </div>
              </div>

              {/* Party Size */}
              <div className="flex items-center justify-between">
                <span className="font-secondary text-sm text-white/80">Guests:</span>
                <span className="font-secondary text-sm font-medium text-white">
                  {reservationData.partySize} {reservationData.partySize === 1 ? 'Guest' : 'Guests'}
                </span>
              </div>

              {/* Guest Name */}
              <div className="flex items-center justify-between">
                <span className="font-secondary text-sm text-white/80">Name:</span>
                <span className="font-secondary text-sm font-medium text-white">
                  {reservationData.guestInfo.name}
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between">
                <span className="font-secondary text-sm text-white/80">Phone:</span>
                <span className="font-secondary text-sm font-medium text-white">
                  {reservationData.guestInfo.phone}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-blue-500/20 rounded-xl p-4 mb-6"
          >
            <h3 className="font-secondary text-sm font-semibold text-white mb-2">What&apos;s Next?</h3>
            <ul className="space-y-1">
              <li className="font-secondary text-xs text-white/90 flex items-center gap-2">
                <Mail className="w-3 h-3" />
                Confirmation email sent to {reservationData.guestInfo.email}
              </li>
              <li className="font-secondary text-xs text-white/90 flex items-center gap-2">
                <Phone className="w-3 h-3" />
                We&apos;ll call if there are any changes
              </li>
              <li className="font-secondary text-xs text-white/90 flex items-center gap-2">
                <MapPin className="w-3 h-3" />
                Please arrive 5-10 minutes early
              </li>
            </ul>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-3"
          >
            {/* Call Restaurant */}
            <a
              href={locationInfo.contact.phoneDialable}
              className="w-full bg-white/20 hover:bg-white/30 text-white font-secondary font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Restaurant
            </a>

            {/* Close Modal */}
            <button
              onClick={onClose}
              className="w-full bg-primary-brown hover:bg-primary-brown/90 text-white font-secondary font-semibold py-3 px-4 rounded-lg transition-all duration-300"
            >
              Close & Make Another Reservation
            </button>
          </motion.div>

          {/* Policies Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-4 text-center"
          >
            <p className="font-secondary text-xs text-white/70">
              Need to modify or cancel? Call us at least 2 hours in advance.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}