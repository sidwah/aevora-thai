'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone, Clock, Instagram, Facebook } from 'lucide-react';
import dynamic from 'next/dynamic';
import Container from '@/components/layout/container';
import Section from '@/components/layout/section';
import { locationInfo } from '@/data/location-info';

// Dynamic import for map component (fixed props)
const LocationMap = dynamic(() => import('@/components/ui/location-map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-neutral-light animate-pulse rounded-2xl" />
  ),
});

const ContactMapSection = () => {
  const handleGetDirections = () => {
    const { lat, lng } = locationInfo.restaurant.coordinates;
    const directionsUrl = `https://maps.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(directionsUrl, '_blank');
  };

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: locationInfo.social.instagram,
      color: 'text-pink-600',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: locationInfo.social.facebook,
      color: 'text-blue-600',
    },
  ];

  return (
    <Section spacing="xl" className="bg-section relative overflow-hidden">
      {/* Map Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <LocationMap 
          lat={locationInfo.restaurant.coordinates.lat}
          lng={locationInfo.restaurant.coordinates.lng}
          pinPosition="right"
          className="w-full h-full"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/60 via-primary-dark/30 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 h-full min-h-[500px] lg:min-h-[600px] flex items-center">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Information Panel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center"
            >
              <div className="glass-panel-strong rounded-2xl p-6 lg:p-8 w-full max-w-md">
                <div className="mb-6">
                  <h2 className="font-primary text-2xl lg:text-3xl xl:text-4xl text-white mb-4">
                    Visit Us in{' '}
                    <span className="text-primary-brown">East Legon</span>
                  </h2>
                  <p className="font-secondary text-white/90 leading-relaxed">
                    Located in the heart of East Legon, our restaurant offers an authentic 
                    Thai dining experience in a warm and welcoming atmosphere.
                  </p>
                </div>

                {/* Quick Address */}
                <motion.div
                  className="flex items-start gap-3 mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="w-8 h-8 bg-primary-brown/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-secondary text-sm text-white/75 uppercase tracking-wide">
                      Address
                    </p>
                    <p className="font-secondary font-medium text-white/95">
                      {locationInfo.restaurant.address.formatted}
                    </p>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <div className="space-y-3 mb-8">
                  <motion.button
                    onClick={handleGetDirections}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-brown hover:bg-primary-brown/90 text-white font-secondary font-semibold rounded-lg transition-all duration-200 hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </motion.button>

                  <motion.a
                    href={locationInfo.contact.phoneDialable}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-secondary font-semibold rounded-lg transition-all duration-200 hover:scale-105 backdrop-blur-sm border border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </motion.a>
                </div>

                {/* Parking Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="pt-6 border-t border-white/20"
                >
                  <p className="font-secondary text-xs text-white/75 text-center">
                    🚗 Free parking available • 🚌 Public transport accessible
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Transparent to show map */}
            <div className="hidden lg:block">
              {/* This space intentionally left empty to show the map background */}
            </div>
          </div>
        </Container>
      </div>

      {/* Additional Information Below Map */}
      <div className="relative z-20 py-16">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Operating Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-light rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary-brown" />
                <h3 className="font-primary text-xl">
                  Opening Hours
                </h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-secondary text-sm text-neutral-gray">
                    {locationInfo.hours.weekdays.label}
                  </span>
                  <span className="font-secondary text-sm text-neutral-gray">
                    {locationInfo.hours.weekdays.time}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-secondary text-sm text-neutral-gray">
                    {locationInfo.hours.friday.label}
                  </span>
                  <span className="font-secondary text-sm text-neutral-gray">
                    {locationInfo.hours.friday.time}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-secondary text-sm text-neutral-gray">
                    {locationInfo.hours.weekend.label}
                  </span>
                  <span className="font-secondary text-sm text-neutral-gray">
                    {locationInfo.hours.weekend.time}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-light rounded-2xl p-6"
            >
              <h3 className="font-primary text-xl mb-4">
                Our Services
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {locationInfo.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-brown rounded-full flex-shrink-0" />
                    <span className="font-secondary text-sm text-neutral-gray">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-light rounded-2xl p-6"
            >
              <h3 className="font-primary text-xl mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4 mb-4">
                {socialLinks.map((social) => (
                <a 
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-brown/20 rounded-full flex items-center justify-center hover:bg-primary-brown/30 transition-all duration-200 hover:scale-110"
                  >
                    <social.icon className={`w-5 h-5 ${social.color}`} />
                  </a>
                ))}
              </div>
              <p className="font-secondary text-xs text-neutral-gray">
                Stay updated with our latest dishes, events, and special offers.
              </p>
            </motion.div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default ContactMapSection;