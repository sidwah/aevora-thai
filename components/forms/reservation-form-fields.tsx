'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
// import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { Calendar, Users, Star, Loader2, AlertCircle } from 'lucide-react';
import { specialOccasions, partySizeOptions } from '@/data/reservation-options';
import { validateReservationTime } from '@/lib/reservation-utils';
import DateTimePicker from '@/components/ui/date-time-picker';
import ReservationBusinessRules from '@/components/ui/reservation-business-rules';
import DietaryRestrictions from '@/components/ui/dietary-restrictions';
import FormStepIndicator from '@/components/ui/form-step-indicator';
import SuccessModal from '@/components/ui/success-modal';
import type { ReservationData } from '@/types/reservations';

// Form validation schema - Fixed to match the form structure
const reservationSchema = z.object({
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  partySize: z.number().min(1, 'Please select party size').max(20, 'Maximum 20 guests'),
  occasion: z.string().optional(),
  dietaryRestrictions: z.array(z.string()), // Removed .default([]) and made required
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
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedData, setSubmittedData] = useState<ReservationData | null>(null);
  const [confirmationNumber, setConfirmationNumber] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
    reset,
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      partySize: 2,
      occasion: 'none',
      dietaryRestrictions: [], // This matches the schema now
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

  // Memoize the watched values to prevent unnecessary updates
  const memoizedWatchedValues = useMemo(() => watchedValues, [
    watchedValues.date,
    watchedValues.time,
    watchedValues.partySize,
    watchedValues.occasion,
    watchedValues.dietaryRestrictions,
    watchedValues.guestInfo?.name,
    watchedValues.guestInfo?.email,
    watchedValues.guestInfo?.phone,
    watchedValues.specialRequests
  ]);

  // Update parent component with form changes
  useEffect(() => {
    if (onUpdate) {
      onUpdate(memoizedWatchedValues as Partial<ReservationData>);
    }
  }, [memoizedWatchedValues, onUpdate]);

  // Show modal when submission is successful
  useEffect(() => {
    if (submitSuccess && submittedData) {
      setShowSuccessModal(true);
    }
  }, [submitSuccess, submittedData]);

  // Fixed function signature to match the inferred type
  const onFormSubmit = async (data: ReservationFormData) => {
    // Validate reservation time against business rules
    const validation = validateReservationTime(data.date, data.time, data.partySize);
    
    if (!validation.valid) {
      // Show error message (you could use a toast library here)
      alert(validation.message);
      return;
    }
    
    // Store submitted data and generate confirmation number
    setSubmittedData(data as ReservationData);
    setConfirmationNumber(`RES-${Date.now().toString().slice(-6)}`);
    
    await onSubmit(data as ReservationData);
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    setSubmittedData(null);
    setConfirmationNumber('');
    reset(); // Reset form when modal is closed
  };

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
        {/* Form Progress Indicator */}
        <FormStepIndicator 
          reservationData={memoizedWatchedValues as Partial<ReservationData>} 
          className="mb-6 p-4 glass-light rounded-xl"
        />

        {/* Enhanced Date & Time Selection */}
        <div>
          <DateTimePicker
            selectedDate={watch('date')}
            selectedTime={watch('time')}
            onDateChange={(date) => setValue('date', date)}
            onTimeChange={(time) => setValue('time', time)}
            partySize={watch('partySize')}
          />
          {(errors.date || errors.time) && (
            <div className="mt-2 space-y-1">
              {errors.date && (
                <p className="text-red-500 text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {errors.date.message}
                </p>
              )}
              {errors.time && (
                <p className="text-red-500 text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {errors.time.message}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Business Rules Display */}
        <ReservationBusinessRules
          partySize={watch('partySize')}
          selectedDate={watch('date')}
          className="mt-4"
        />

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
            <label className="flex items-center gap-2 font-secondary text-sm font-medium  mb-2">
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

        {/* Dietary Restrictions */}
        <div>
          <label className="flex items-center gap-2 font-secondary text-sm font-medium mb-3">
            <span className="text-lg">🌱</span>
            Dietary Restrictions (Optional)
          </label>
          <DietaryRestrictions
            selectedRestrictions={watch('dietaryRestrictions') || []}
            onRestrictionsChange={(restrictions) => setValue('dietaryRestrictions', restrictions)}
          />
        </div>

        {/* Guest Information */}
        <div className="space-y-4">
          <h3 className="font-secondary text-lg font-medium  border-b border-neutral-light pb-2">
            Contact Information
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="sm:col-span-2">
              <label className="font-secondary text-sm font-medium  mb-2 block">
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

      {/* Success Modal */}
      {submittedData && (
        <SuccessModal
          isOpen={showSuccessModal}
          onClose={handleModalClose}
          reservationData={submittedData}
          confirmationNumber={confirmationNumber}
        />
      )}
    </>
  );
}