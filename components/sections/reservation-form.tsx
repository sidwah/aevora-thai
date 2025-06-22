'use client';
import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/layout/container';
import Section from '@/components/layout/section';
import ReservationFormFields from '@/components/forms/reservation-form-fields';
import ReservationSummary from '@/components/ui/reservation-summary';
import type { ReservationData } from '@/types/reservations';

export default function ReservationForm() {
  const [reservationData, setReservationData] = useState<Partial<ReservationData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleReservationSubmit = async (data: ReservationData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Reservation Data:', data);
      setSubmitSuccess(true);
      
      // Reset submitSuccess after modal is handled
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 1000);
      
    } catch (error) {
      console.error('Reservation failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Use useCallback to prevent function recreation on every render
  const handleFormUpdate = useCallback((data: Partial<ReservationData>) => {
    setReservationData(prev => ({ ...prev, ...data }));
  }, []);

  return (
    <Section spacing="xl" className="reservation-form-bg">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Form - 2/3 width on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="glass-medium rounded-2xl p-6 lg:p-8">
              <div className="mb-6">
                <h2 className="font-primary text-2xl lg:text-3xl mb-2">
                  Book Your Table
                </h2>
                <p className="font-secondary text-neutral-gray">
                  Complete the form below to reserve your dining experience.
                </p>
              </div>
              <ReservationFormFields
                onSubmit={handleReservationSubmit}
                onUpdate={handleFormUpdate}
                isSubmitting={isSubmitting}
                submitSuccess={submitSuccess}
              />
            </div>
          </motion.div>

          {/* Sticky Booking Summary - 1/3 width on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            {/* Sticky wrapper for desktop */}
            <div className="lg:sticky lg:top-6 lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto">
              <ReservationSummary reservationData={reservationData} />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}