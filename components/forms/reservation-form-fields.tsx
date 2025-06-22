'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Calendar, Clock, Users, Star, Loader2 } from 'lucide-react';
import { specialOccasions, partySizeOptions } from '@/data/reservation-options';
import type { ReservationData } from '@/types/reservations';

// Form validation schema
const reservationSchema = z.object({
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  partySize: z.number().min(1, 'Please select party size').max(20, 'Maximum 20 guests'),
  occasion: z.string().optional(),
  dietaryRestrictions: z.array(z.string()).optional(),
  specialRequests: z.string().optional(),
  guestInfo: z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    phone: z.string().min(10, 'Please enter a valid phone number'),
  }),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

interface ReservationFormFieldsProps {
  onSubmit: (data: ReservationData) => Promise<void>;
  onUpdate?: (data: Partial<ReservationData>) => void;
  isSubmitting?: boolean;
  submitSuccess?: boolean;
}

export default function ReservationFormFields({ 
  onSubmit, 
  onUpdate, 
  isSubmitting = false,
  submitSuccess = false 
}: ReservationFormFieldsProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      partySize: 2,
      occasion: 'none',
      dietaryRestrictions: [],
      guestInfo: {
        name: '',
        email: '',
        phone: '',
      },
    },
    mode: 'onChange',
  });

  // Watch form values for live updates
  const watchedValues = watch();

  // Update parent component with form changes
  useEffect(() => {
    if (onUpdate) {
      onUpdate(watchedValues as Partial<ReservationData>);
    }
  }, [watchedValues, onUpdate]);

  const onFormSubmit = async (data: ReservationFormData) => {
    await onSubmit(data as ReservationData);
    if (submitSuccess) {
      reset();
    }
  };

  if (submitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="glass-light rounded-2xl p-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Star className="w-8 h-8 text-white" />
          </motion.div>
          <h3 className="font-primary text-2xl text-primary-dark mb-2">
            Reservation Confirmed!
          </h3>
          <p className="font-secondary text-neutral-gray mb-4">
            Thank you for your reservation. We&apos;ll send you a confirmation email shortly.
          </p>
          <p className="font-secondary text-sm text-neutral-gray">
            Confirmation #: RES-{Date.now().toString().slice(-6)}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
      {/* Date & Time Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Date Selection */}
        <div>
          <label className="flex items-center gap-2 font-secondary text-sm font-medium mb-2">
            <Calendar className="w-4 h-4 text-primary-brown" />
            Preferred Date
          </label>
          <input
            type="date"
            {...register('date')}
            min={new Date().toISOString().split('T')[0]}
            max={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
            className="reservation-form-input w-full p-3 rounded-lg border border-neutral-light focus:border-primary-brown focus:ring-2 focus:ring-primary-brown/20 transition-colors"
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
          )}
        </div>

        {/* Time Selection */}
        <div>
          <label className="flex items-center gap-2 font-secondary text-sm font-medium mb-2">
            <Clock className="w-4 h-4 text-primary-brown" />
            Preferred Time
          </label>
          <select
            {...register('time')}
            className="reservation-form-input w-full p-3 rounded-lg border border-neutral-light focus:border-primary-brown focus:ring-2 focus:ring-primary-brown/20 transition-colors"
          >
            <option value="">Select a time</option>
            <option value="11:00">11:00 AM</option>
            <option value="11:30">11:30 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="12:30">12:30 PM</option>
            <option value="13:00">1:00 PM</option>
            <option value="13:30">1:30 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="14:30">2:30 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="15:30">3:30 PM</option>
            <option value="16:00">4:00 PM</option>
            <option value="16:30">4:30 PM</option>
            <option value="17:00">5:00 PM</option>
            <option value="17:30">5:30 PM</option>
            <option value="18:00">6:00 PM</option>
            <option value="18:30">6:30 PM</option>
            <option value="19:00">7:00 PM</option>
            <option value="19:30">7:30 PM</option>
            <option value="20:00">8:00 PM</option>
            <option value="20:30">8:30 PM</option>
            <option value="21:00">9:00 PM</option>
          </select>
          {errors.time && (
            <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
          )}
        </div>
      </div>

      {/* Party Size & Occasion Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Party Size */}
        <div>
          <label className="flex items-center gap-2 font-secondary text-sm font-medium mb-2">
            <Users className="w-4 h-4 text-primary-brown" />
            Party Size
          </label>
          <select
            {...register('partySize', { valueAsNumber: true })}
            className="reservation-form-input w-full p-3 rounded-lg border border-neutral-light focus:border-primary-brown focus:ring-2 focus:ring-primary-brown/20 transition-colors"
          >
            {partySizeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label} {option.popular && '(Popular)'}
              </option>
            ))}
          </select>
          {errors.partySize && (
            <p className="text-red-500 text-sm mt-1">{errors.partySize.message}</p>
          )}
        </div>

        {/* Special Occasion */}
        <div>
          <label className="flex items-center gap-2 font-secondary text-sm font-medium mb-2">
            <Star className="w-4 h-4 text-primary-brown" />
            Special Occasion
          </label>
          <select
            {...register('occasion')}
            className="reservation-form-input w-full p-3 rounded-lg border border-neutral-light focus:border-primary-brown focus:ring-2 focus:ring-primary-brown/20 transition-colors"
          >
            {specialOccasions.map((occasion) => (
              <option key={occasion.value} value={occasion.value}>
                {occasion.icon} {occasion.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Guest Information */}
      <div className="space-y-4">
        <h3 className="font-secondary text-lg font-medium border-b border-neutral-light pb-2">
          Contact Information
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name */}
          <div className="sm:col-span-2">
            <label className="font-secondary text-sm font-medium mb-2 block">
              Full Name
            </label>
            <input
              type="text"
              {...register('guestInfo.name')}
              placeholder="Enter your full name"
              className="reservation-form-input w-full p-3 rounded-lg border border-neutral-light focus:border-primary-brown focus:ring-2 focus:ring-primary-brown/20 transition-colors"
            />
            {errors.guestInfo?.name && (
              <p className="text-red-500 text-sm mt-1">{errors.guestInfo.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="font-secondary text-sm font-medium mb-2 block">
              Email Address
            </label>
            <input
              type="email"
              {...register('guestInfo.email')}
              placeholder="your.email@example.com"
              className="reservation-form-input w-full p-3 rounded-lg border border-neutral-light focus:border-primary-brown focus:ring-2 focus:ring-primary-brown/20 transition-colors"
            />
            {errors.guestInfo?.email && (
              <p className="text-red-500 text-sm mt-1">{errors.guestInfo.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="font-secondary text-sm font-medium mb-2 block">
              Phone Number
            </label>
            <input
              type="tel"
              {...register('guestInfo.phone')}
              placeholder="+233 XX XXX XXXX"
              className="reservation-form-input w-full p-3 rounded-lg border border-neutral-light focus:border-primary-brown focus:ring-2 focus:ring-primary-brown/20 transition-colors"
            />
            {errors.guestInfo?.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.guestInfo.phone.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Special Requests */}
      <div>
        <label className="font-secondary text-sm font-medium mb-2 block">
          Special Requests (Optional)
        </label>
        <textarea
          {...register('specialRequests')}
          placeholder="Any special requests, dietary restrictions, or notes for your visit..."
          rows={4}
          className="reservation-form-input w-full p-3 rounded-lg border border-neutral-light focus:border-primary-brown focus:ring-2 focus:ring-primary-brown/20 transition-colors resize-vertical"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting || !isValid}
          className="w-full bg-button-secondary hover:bg-button-hover-secondary disabled:bg-neutral-gray disabled:cursor-not-allowed text-white font-secondary font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing Reservation...
            </>
          ) : (
            <>
              <Calendar className="w-5 h-5" />
              Confirm Reservation
            </>
          )}
        </button>
      </div>
    </form>
  );
}