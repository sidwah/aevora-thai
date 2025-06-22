'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import { locationInfo } from '@/data/location-info';
import { cn } from '@/lib/utils';

// Dynamic import for LocationMap to prevent SSR issues
const LocationMap = dynamic(() => import('@/components/ui/location-map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-neutral-light animate-pulse" />
  )
});

const LocationInfoSection = () => {
  return (
    <section className="relative min-h-[500px] lg:min-h-[600px] overflow-hidden">
      {/* Full Background Map - Lower z-index */}
      <div className="absolute inset-0 z-0">
        <LocationMap 
          lat={locationInfo.restaurant.coordinates.lat}
          lng={locationInfo.restaurant.coordinates.lng}
          pinPosition="right"
          className="w-full h-full"
        />
        {/* Subtle map overlay for better glass contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/30 via-primary-dark/10 to-transparent" />
      </div>

      {/* Glass Information Panel - Higher z-index */}
      <div className="relative z-20 h-full min-h-[500px] lg:min-h-[600px] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn(
              "max-w-md lg:max-w-lg",
              "glass-panel-strong rounded-2xl p-6 lg:p-8",
              "border border-white/40",
              "backdrop-blur-3xl",
              "shadow-2xl"
            )}
          >
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-primary-brown" />
                <span className="font-secondary text-neutral-gray text-sm uppercase tracking-wider ">
                  Find Us
                </span>
              </div>
              <h2 className="font-primary text-2xl lg:text-3xl font-bold mb-2">
                Visit Our
                <br />
                <span className="text-primary-brown">Restaurant</span>
              </h2>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-4 mb-6"
            >
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-brown mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-secondary font-medium">
                    {locationInfo.restaurant.address.formatted}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-brown flex-shrink-0" />
                <a 
                  href={locationInfo.contact.phoneDialable}
                  className="font-secondary  hover:text-primary-brown transition-colors duration-200"
                >
                  {locationInfo.contact.phoneDisplay}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-brown flex-shrink-0" />
                <a 
                  href={`mailto:${locationInfo.contact.email}`}
                  className="font-secondary  hover:text-primary-brown transition-colors duration-200"
                >
                  {locationInfo.contact.email}
                </a>
              </div>
            </motion.div>

            {/* Operating Hours */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-primary-brown" />
                <span className="font-secondary font-semibold ">
                  Opening Hours
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-secondary text-sm ">
                    {locationInfo.hours.weekdays.label}
                  </span>
                  <span className="font-secondary text-sm ">
                    {locationInfo.hours.weekdays.time}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-secondary text-sm ">
                    {locationInfo.hours.friday.label}
                  </span>
                  <span className="font-secondary text-sm">
                    {locationInfo.hours.friday.time}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-secondary text-sm ">
                    {locationInfo.hours.weekend.label}
                  </span>
                  <span className="font-secondary text-sm">
                    {locationInfo.hours.weekend.time}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a 
                href="/reservations"
                className={cn(
                  "flex items-center justify-center gap-2 px-6 py-3 rounded-lg",
                  "bg-button-secondary hover:bg-button-hover-secondary",
                  "text-secondary-white font-secondary font-semibold text-sm",
                  "transition-all duration-200 hover:scale-105 active:scale-95",
                  "shadow-lg hover:shadow-xl"
                )}
              >
                Book a Table
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <a
                href="/contact"
                className={cn(
                  "flex items-center justify-center gap-2 px-6 py-3 rounded-lg",
                  "bg-button-primary hover:bg-button-hover-primary",
                  "text-secondary-white font-secondary font-semibold text-sm",
                  "transition-all duration-200 hover:scale-105 active:scale-95",
                  "shadow-lg hover:shadow-xl"
                )}
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </a>

              
            </motion.div>
             {/* Parking Info */}
             <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="mt-6 pt-6 border-t border-white/20"
                >
                  <p className="font-secondary text-xs text-white/75 text-center">
                    🚗 Free parking available • 🚌 Public transport accessible
                  </p>
                </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationInfoSection;