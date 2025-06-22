'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, Contact, FileText, CheckCircle } from 'lucide-react';
import type { ReservationData } from '@/types/reservations';

interface FormStepIndicatorProps {
  reservationData: Partial<ReservationData>;
  className?: string;
}

export default function FormStepIndicator({ 
  reservationData, 
  className = '' 
}: FormStepIndicatorProps) {
  const steps = [
    {
      id: 'datetime',
      label: 'Date & Time',
      icon: Calendar,
      completed: !!(reservationData.date && reservationData.time),
    },
    {
      id: 'party',
      label: 'Party Details',
      icon: Users,
      completed: !!(reservationData.partySize),
    },
    {
      id: 'contact',
      label: 'Contact Info',
      icon: Contact,
      completed: !!(reservationData.guestInfo?.name && reservationData.guestInfo?.email),
    },
    {
      id: 'details',
      label: 'Final Details',
      icon: FileText,
      completed: !!(reservationData.guestInfo?.phone),
    },
  ];

  const completedSteps = steps.filter(step => step.completed).length;
  
  // Fix: Current step should be the next incomplete step, not completedSteps
  const currentStepIndex = steps.findIndex(step => !step.completed);
  const currentStep = currentStepIndex === -1 ? steps.length - 1 : currentStepIndex;

  return (
    <div className={`${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="font-secondary text-sm font-medium">
          Booking Progress
        </span>
        <span className="font-secondary text-sm text-neutral-gray">
          {completedSteps}/{steps.length} Complete
        </span>
      </div>

      <div className="flex items-center gap-2">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isCompleted = step.completed;
          const isCurrent = index === currentStep && !isCompleted;

          return (
            <div key={step.id} className="flex items-center flex-1">
              {/* Step Circle */}
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className={`
                  relative flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300
                  ${isCompleted 
                    ? 'bg-primary-brown border-primary-brown text-white' 
                    : isCurrent
                    ? 'bg-primary-brown/10 border-primary-brown text-primary-brown'
                    : 'bg-neutral-light border-neutral-light text-neutral-gray'
                  }
                `}
              >
                {isCompleted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <CheckCircle className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <Icon className="w-4 h-4" />
                )}

                {isCurrent && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-primary-brown"
                  />
                )}
              </motion.div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 mx-2 bg-neutral-light">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isCompleted ? '100%' : '0%' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full bg-primary-brown"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Step Labels */}
      <div className="flex items-center gap-2 mt-2">
        {steps.map((step, index) => (
          <div key={`label-${step.id}`} className="flex items-center flex-1">
            <span className={`
              font-secondary text-xs transition-colors duration-300
              ${step.completed 
                ? 'text-primary-brown font-medium' 
                : index === currentStep
                ? 'font-medium'
                : 'text-neutral-gray'
              }
            `}>
              {step.label}
            </span>
            {index < steps.length - 1 && <div className="flex-1" />}
          </div>
        ))}
      </div>
    </div>
  );
}