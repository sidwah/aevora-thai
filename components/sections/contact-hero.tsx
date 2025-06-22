'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Container from '@/components/layout/container';
import Section from '@/components/layout/section';

const ContactHero = () => {
  return (
    <Section spacing="xl" className="bg-section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 h-64 w-64 rounded-full bg-primary-brown/8 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-accent-gold/6 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <Container size="xl">
        <div className="text-center">
          {/* Simple Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mail className="w-5 h-5 text-primary-brown" />
              <span className="font-secondary text-sm uppercase tracking-wider text-neutral-gray">
                Contact Us
              </span>
            </div>
            
            <h1 className="font-primary text-4xl sm:text-5xl lg:text-6xl xl:text-7xl  mb-6">
              Get in{' '}
              <span className="text-primary-brown">Touch</span>
            </h1>
            
            <p className="font-secondary text-lg sm:text-xl lg:text-2xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
              We&apos;d love to hear from you. Whether you&apos;re planning a visit, organizing an event, 
              or simply want to know more about our authentic Thai cuisine, we&apos;re here to help.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactHero;