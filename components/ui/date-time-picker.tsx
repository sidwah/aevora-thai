'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, AlertCircle, CheckCircle, Star } from 'lucide-react';
import {
  generateTimeSlots,
  isDateAvailable,
  type TimeSlot,
} from '@/lib/reservation-utils';

interface DateTimePickerProps {
  selectedDate?: string;
  selectedTime?: string;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
  partySize?: number;
  className?: string;
}

export default function DateTimePicker({
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
  partySize = 2,
  className = '',
}: DateTimePickerProps) {
  const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [dateError, setDateError] = useState<string | null>(null);

  // Memoize the time slot generation to prevent unnecessary recalculations
  const generateTimeSlotsForDate = useCallback((dateString: string) => {
    const date = new Date(dateString);

    if (!isDateAvailable(date)) {
      setDateError('Selected date is not available for reservations');
      setAvailableTimeSlots([]);
      return;
    }

    const slots = generateTimeSlots(date);
    setAvailableTimeSlots(slots);
    setDateError(null);
  }, []);

  // Generate time slots when date changes - FIXED useEffect
  useEffect(() => {
    if (!selectedDate) {
      setAvailableTimeSlots([]);
      setDateError(null);
      return;
    }

    setIsLoadingSlots(true);

    // Simulate API delay
    const timeoutId = setTimeout(() => {
      generateTimeSlotsForDate(selectedDate);
      setIsLoadingSlots(false);
    }, 500);

    // Cleanup timeout on unmount or dependency change
    return () => clearTimeout(timeoutId);
  }, [selectedDate, generateTimeSlotsForDate]); // Fixed: stable dependencies

  // Clear time selection if current time is no longer available - FIXED useEffect
  useEffect(() => {
    if (selectedTime && availableTimeSlots.length > 0) {
      const selectedSlot = availableTimeSlots.find(
        (slot) => slot.time === selectedTime
      );
      if (!selectedSlot?.available) {
        onTimeChange('');
      }
    }
  }, [selectedTime, availableTimeSlots, onTimeChange]); // Fixed: stable dependencies

  // Generate date constraints
  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maxDateString = maxDate.toISOString().split('T')[0];

  const handleDateChange = (date: string) => {
    onDateChange(date);
    onTimeChange(''); // Reset time when date changes
  };

  const handleTimeSelect = (timeSlot: TimeSlot) => {
    if (timeSlot.available) {
      onTimeChange(timeSlot.time);
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Date Selection */}
      <div>
        <label className="font-secondary mb-2 flex items-center gap-2 text-sm font-medium">
          <Calendar className="text-primary-brown h-4 w-4" />
          Preferred Date
          {partySize > 8 && (
            <span className="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-600">
              48h notice required
            </span>
          )}
        </label>

        <input
          type="date"
          value={selectedDate || ''}
          onChange={(e) => handleDateChange(e.target.value)}
          min={today}
          max={maxDateString}
          className="reservation-form-input border-neutral-light focus:border-primary-brown focus:ring-primary-brown/20 w-full rounded-lg border p-3 transition-colors focus:ring-2"
        />

        {dateError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 flex items-center gap-2 text-red-600"
          >
            <AlertCircle className="h-4 w-4" />
            <span className="text-sm">{dateError}</span>
          </motion.div>
        )}
      </div>

      {/* Time Selection */}
      <div>
        <label className="font-secondary mb-2 flex items-center gap-2 text-sm font-medium">
          <Clock className="text-primary-brown h-4 w-4" />
          Preferred Time
          {selectedDate && !isLoadingSlots && availableTimeSlots.length > 0 && (
            <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-600">
              {availableTimeSlots.filter((slot) => slot.available).length} slots
              available
            </span>
          )}
        </label>

        {!selectedDate ? (
          <div className="reservation-form-input border-neutral-light flex w-full items-center rounded-lg border bg-gray-50 p-3 text-gray-400">
            Please select a date first
          </div>
        ) : isLoadingSlots ? (
          <div className="reservation-form-input border-neutral-light flex w-full items-center gap-2 rounded-lg border p-3">
            <div className="border-primary-brown h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"></div>
            Loading available times...
          </div>
        ) : dateError ? (
          <div className="reservation-form-input flex w-full items-center gap-2 rounded-lg border border-red-300 bg-red-50 p-3 text-red-600">
            <AlertCircle className="h-4 w-4" />
            Date not available
          </div>
        ) : availableTimeSlots.length === 0 ? (
          <div className="reservation-form-input flex w-full items-center gap-2 rounded-lg border border-orange-300 bg-orange-50 p-3 text-orange-600">
            <AlertCircle className="h-4 w-4" />
            No time slots available for this date
          </div>
        ) : (
          <div className="space-y-3">
            {/* Time Slots Grid */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {availableTimeSlots.map((slot, index) => (
                  <motion.button
                    key={`${selectedDate}-${slot.time}`} // Fixed: stable key
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                      delay: index * 0.05,
                      layout: { duration: 0.2 },
                    }}
                    type="button"
                    onClick={() => handleTimeSelect(slot)}
                    disabled={!slot.available}
                    className={`relative rounded-lg p-3 text-sm font-medium transition-all duration-200 ${
                      slot.available
                        ? selectedTime === slot.time
                          ? 'bg-primary-brown scale-105 text-white shadow-lg'
                          : 'dark:bg-secondary-white border-neutral-light dark:border-neutral-gray hover:border-primary-brown dark:hover:border-primary-brown hover:bg-primary-brown/5 dark:hover:bg-primary-brown/10 text-primary-dark dark:text-primary-dark border bg-white hover:scale-105'
                        : 'cursor-not-allowed border border-gray-200 bg-gray-100 text-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500'
                    } ${slot.popular && slot.available ? 'ring-primary-brown/20 dark:ring-primary-brown/30 ring-2' : ''} `}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span>{slot.display}</span>
                      {slot.popular && slot.available && (
                        <Star className="text-primary-brown h-3 w-3" />
                      )}
                      {selectedTime === slot.time && (
                        <CheckCircle className="h-3 w-3" />
                      )}
                    </div>

                    {slot.popular && slot.available && (
                      <div className="bg-primary-brown absolute -top-1 -right-1 h-2 w-2 rounded-full"></div>
                    )}
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>

            {/* Legend */}
            <div className="text-neutral-gray border-neutral-light flex flex-wrap items-center gap-4 border-t pt-3 text-xs">
              <div className="flex items-center gap-1">
                <Star className="text-primary-brown h-3 w-3" />
                <span>Popular times</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 rounded border bg-gray-100"></div>
                <span>Unavailable</span>
              </div>
              {selectedTime && (
                <div className="flex items-center gap-1">
                  <CheckCircle className="text-primary-brown h-3 w-3" />
                  <span>Selected</span>
                </div>
              )}
            </div>

            {/* Unavailable Slots Info */}
            {availableTimeSlots.some((slot) => !slot.available) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="rounded-lg border border-orange-200 bg-orange-50 p-3"
              >
                <h4 className="font-secondary mb-2 text-sm font-medium text-orange-800">
                  Why some times aren&apos;t available:
                </h4>
                <ul className="space-y-1 text-xs text-orange-700">
                  {Array.from(
                    new Set(
                      availableTimeSlots
                        .filter((slot) => !slot.available && slot.reason)
                        .map((slot) => slot.reason)
                    )
                  ).map((reason, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-orange-500"></div>
                      {reason}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
