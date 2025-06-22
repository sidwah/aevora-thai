'use client';

import { motion } from 'framer-motion';
import { Calendar, Star, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { specialOccasions, dietaryOptions } from '@/data/reservation-options';
import { locationInfo } from '@/data/location-info';
import { validateReservationTime } from '@/lib/reservation-utils';
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

  const getDietaryLabels = (restrictions: string[]) => {
    return restrictions.map(restriction => {
      const option = dietaryOptions.find(opt => opt.value === restriction);
      return option ? option : { icon: '📝', label: restriction, value: restriction };
    });
  };

  const estimatedDuration = reservationData.partySize && reservationData.partySize > 6 ? '2.5 hours' : '2 hours';

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Booking Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-light rounded-2xl p-4 lg:p-6"
      >
        <h3 className="font-primary text-lg lg:text-xl  mb-3 lg:mb-4 flex items-center gap-2">
          <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-primary-brown" />
          Booking Summary
        </h3>

        <div className="space-y-3 lg:space-y-4">
          {/* Date */}
          {reservationData.date ? (
            <div className="flex items-center justify-between">
              <span className="font-secondary text-xs lg:text-sm text-neutral-gray">Date:</span>
              <span className="font-secondary text-xs lg:text-sm font-medium text-neutral-gray text-right">
                {formatDate(reservationData.date)}
              </span>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <span className="font-secondary text-xs lg:text-sm text-neutral-gray">Date:</span>
              <span className="font-secondary text-xs lg:text-sm text-neutral-gray italic">Not selected</span>
            </div>
          )}

          {/* Time */}
          {reservationData.time ? (
            <div className="flex items-center justify-between">
              <span className="font-secondary text-xs lg:text-sm text-neutral-gray">Time:</span>
              <span className="font-secondary text-xs lg:text-sm font-medium text-neutral-gray">
                {formatTime(reservationData.time)}
              </span>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <span className="font-secondary text-xs lg:text-sm text-neutral-gray">Time:</span>
              <span className="font-secondary text-xs lg:text-sm text-neutral-gray italic">Not selected</span>
            </div>
          )}

          {/* Party Size */}
          {reservationData.partySize ? (
            <div className="flex items-center justify-between">
              <span className="font-secondary text-xs lg:text-sm text-neutral-gray">Guests:</span>
              <span className="font-secondary text-xs lg:text-sm font-medium text-neutral-gray">
                {reservationData.partySize} {reservationData.partySize === 1 ? 'Guest' : 'Guests'}
              </span>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <span className="font-secondary text-xs lg:text-sm text-neutral-gray">Guests:</span>
              <span className="font-secondary text-xs lg:text-sm text-neutral-gray italic">Not selected</span>
            </div>
          )}

          {/* Special Occasion */}
          {reservationData.occasion && reservationData.occasion !== 'none' && (
            <div className="flex items-center justify-between">
              <span className="font-secondary text-xs lg:text-sm text-neutral-gray">Occasion:</span>
              <span className="font-secondary text-xs lg:text-sm font-medium text-neutral-gray">
                {getOccasionLabel(reservationData.occasion)}
              </span>
            </div>
          )}

          {/* Estimated Duration */}
          {reservationData.partySize && (
            <div className="flex items-center justify-between border-t border-neutral-light pt-2 lg:pt-3 mt-2 lg:mt-3">
              <span className="font-secondary text-xs lg:text-sm text-neutral-gray">Estimated Duration:</span>
              <span className="font-secondary text-xs lg:text-sm font-medium text-neutral-gray">
                {estimatedDuration}
              </span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Dietary Restrictions & Special Requests */}
      {(reservationData.dietaryRestrictions?.length || reservationData.specialRequests) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-light rounded-2xl p-4 lg:p-6"
        >
          <h3 className="font-primary text-lg lg:text-xl  mb-3 lg:mb-4 flex items-center gap-2">
            <span className="text-lg">🌱</span>
            Special Requirements
          </h3>

          <div className="space-y-3">
            {/* Dietary Restrictions */}
            {(reservationData.dietaryRestrictions && reservationData.dietaryRestrictions.length > 0) && (
              <div>
                <p className="font-secondary text-xs lg:text-sm font-medium text-neutral-gray mb-2">
                  Dietary Restrictions:
                </p>
                <div className="flex flex-wrap gap-1">
                  {getDietaryLabels(reservationData.dietaryRestrictions).map((dietary, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs"
                    >
                      <span>{dietary.icon}</span>
                      <span>{dietary.label}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Special Requests */}
            {reservationData.specialRequests && (
              <div className={reservationData.dietaryRestrictions?.length ? 'border-t border-neutral-light pt-3' : ''}>
                <p className="font-secondary text-xs lg:text-sm font-medium text-neutral-gray mb-2">
                  Special Requests:
                </p>
                <p className="font-secondary text-xs lg:text-sm leading-relaxed bg-neutral-light/50 p-2 rounded">
                  {reservationData.specialRequests}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Contact Information */}
      {(reservationData.guestInfo?.name || reservationData.guestInfo?.email || reservationData.guestInfo?.phone) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-light rounded-2xl p-4 lg:p-6"
        >
          <h3 className="font-primary text-lg lg:text-xl  mb-3 lg:mb-4 flex items-center gap-2">
            <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-primary-brown" />
            Contact Information
          </h3>

          <div className="space-y-2">
            {reservationData.guestInfo?.name && (
              <div className="flex items-center justify-between">
                <span className="font-secondary text-xs lg:text-sm text-neutral-gray">Name:</span>
                <span className="font-secondary text-xs lg:text-sm font-medium text-neutral-gray">
                  {reservationData.guestInfo.name}
                </span>
              </div>
            )}

            {reservationData.guestInfo?.email && (
              <div className="flex items-center justify-between">
                <span className="font-secondary text-xs lg:text-sm text-neutral-gray">Email:</span>
                <span className="font-secondary text-xs lg:text-sm font-medium text-neutral-gray break-all">
                  {reservationData.guestInfo.email}
                </span>
              </div>
            )}

            {reservationData.guestInfo?.phone && (
              <div className="flex items-center justify-between">
                <span className="font-secondary text-xs lg:text-sm text-neutral-gray">Phone:</span>
                <span className="font-secondary text-xs lg:text-sm font-medium text-neutral-gray">
                  {reservationData.guestInfo.phone}
                </span>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Availability Status */}
      {reservationData.date && reservationData.time && reservationData.partySize && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-light rounded-2xl p-4 lg:p-6"
        >
          <h3 className="font-primary text-lg lg:text-xl  mb-3 lg:mb-4 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-600" />
            Availability Status
          </h3>

          {(() => {
            const validation = validateReservationTime(
              reservationData.date,
              reservationData.time,
              reservationData.partySize
            );

            return validation.valid ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 lg:p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-green-600" />
                  <span className="font-secondary text-xs lg:text-sm font-medium text-green-800">
                    Time Slot Available
                  </span>
                </div>
                <p className="font-secondary text-xs text-green-700">
                  Your selected time is available for booking. Complete the form to confirm your reservation.
                </p>
              </div>
            ) : (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 lg:p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-3 h-3 lg:w-4 lg:h-4 text-red-600" />
                  <span className="font-secondary text-xs lg:text-sm font-medium text-red-800">
                    Booking Issue
                  </span>
                </div>
                <p className="font-secondary text-xs text-red-700">
                  {validation.message}
                </p>
              </div>
            );
          })()}
        </motion.div>
      )}

      {/* Restaurant Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="glass-light rounded-2xl p-4 lg:p-6"
      >
        <h3 className="font-primary text-lg lg:text-xl mb-3 lg:mb-4 flex items-center gap-2">
          <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-primary-brown" />
          Restaurant Details
        </h3>

        <div className="space-y-2 lg:space-y-3">
          {/* Address */}
          <div>
            <p className="font-secondary text-xs lg:text-sm font-medium ">Aevora Thai Restaurant</p>
            <p className="font-secondary text-xs lg:text-sm text-neutral-gray">{locationInfo.restaurant.address.formatted}</p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3 lg:w-4 lg:h-4 text-primary-brown" />
            <a 
              href={locationInfo.contact.phoneDialable}
              className="font-secondary text-xs lg:text-sm text-primary-brown hover:text-primary-dark transition-colors"
            >
              {locationInfo.contact.phoneDisplay}
            </a>
          </div>

          {/* Hours */}
          <div className="border-t border-neutral-light pt-2 lg:pt-3">
            <p className="font-secondary text-xs font-medium  mb-1 lg:mb-2">Operating Hours:</p>
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
        transition={{ duration: 0.6, delay: 0.6 }}
        className="space-y-2 lg:space-y-3"
      >
        {/* Call Restaurant */}
        <a 
          href={locationInfo.contact.phoneDialable}
          className="w-full bg-button-primary hover:bg-button-hover-primary text-white font-secondary font-medium py-2 lg:py-3 px-3 lg:px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm lg:text-base"
        >
          <Phone className="w-3 h-3 lg:w-4 lg:h-4" />
          Call Restaurant
        </a>

        {/* View Menu */}
        <a 
          href="/menu"
          className="w-full bg-transparent border-2 border-primary-brown text-primary-brown hover:bg-primary-brown hover:text-white font-secondary font-medium py-2 lg:py-3 px-3 lg:px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm lg:text-base"
        >
          <Star className="w-3 h-3 lg:w-4 lg:h-4" />
          View Menu
        </a>
      </motion.div>

      {/* Reservation Policies Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="glass-light rounded-xl p-3 lg:p-4"
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