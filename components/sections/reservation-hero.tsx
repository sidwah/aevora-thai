'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Phone } from 'lucide-react';
import Container from '@/components/layout/container';
import Section from '@/components/layout/section';

export default function ReservationHero() {
  return (
    <Section spacing="xl" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary-brown/8 blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-accent-gold/6 blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-secondary-warm-brown/5 blur-3xl animate-float" />
      </div>

      <Container size="xl">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Calendar className="w-5 h-5 text-primary-brown" />
            <span className="font-secondary text-sm uppercase tracking-wider text-neutral-gray">
              Table Reservations
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-primary text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6"
          >
            Reserve Your{' '}
            <span className="text-primary-brown">Table</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-secondary text-lg sm:text-xl lg:text-2xl text-neutral-gray max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Experience authentic Thai cuisine in the heart of East Legon. Book your table for an unforgettable dining experience with fresh flavors and warm hospitality.
          </motion.p>

          {/* Quick Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto mb-8"
          >
            {/* Quick Booking */}
            <div className="glass-light rounded-xl p-4 text-center group hover:glass-medium transition-all duration-300">
              <Clock className="w-6 h-6 text-primary-brown mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
              <p className="font-secondary text-sm font-medium">Quick Booking</p>
              <p className="font-secondary text-xs text-neutral-gray">2-minute process</p>
            </div>

            {/* Party Size */}
            <div className="glass-light rounded-xl p-4 text-center group hover:glass-medium transition-all duration-300">
              <Users className="w-6 h-6 text-primary-brown mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
              <p className="font-secondary text-sm font-medium">1-20 Guests</p>
              <p className="font-secondary text-xs text-neutral-gray">All party sizes</p>
            </div>

            {/* Contact */}
            <div className="glass-light rounded-xl p-4 text-center group hover:glass-medium transition-all duration-300">
              <Phone className="w-6 h-6 text-primary-brown mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
              <p className="font-secondary text-sm font-medium">Need Help?</p>
              <p className="font-secondary text-xs text-neutral-gray">Call +233 25 779 9736</p>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col items-center gap-2"
          >
            <p className="font-secondary text-sm text-neutral-gray">Scroll down to book your table</p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-primary-brown rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-primary-brown rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}