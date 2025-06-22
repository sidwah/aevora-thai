'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/container';
import Section from '@/components/layout/section';
import ContactForm from '@/components/forms/contact-form';
import ContactInfoPanel from '@/components/ui/contact-info-panel';

const ContactFormSection = () => {
  return (
    <Section spacing="xl" className="contact-section-bg relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 right-1/4 h-80 w-80 rounded-full bg-secondary-warm-brown/5 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/3 h-64 w-64 rounded-full bg-accent-gold/8 blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <Container size="xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-primary text-3xl sm:text-4xl lg:text-5xl mb-6">
            We&apos;re Here to{' '}
            <span className="text-primary-brown">Help</span>
          </h2>
          <p className="font-secondary text-lg lg:text-xl text-neutral-gray max-w-3xl mx-auto">
            Have a question, want to make a reservation, or planning a special event? 
            Get in touch with us using the form below or through any of our contact methods.
          </p>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Contact Form - Takes 2/3 on desktop */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Information - Takes 1/3 on desktop */}
          <div className="lg:col-span-1">
            <ContactInfoPanel />
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass-light rounded-2xl p-6 lg:p-8 inline-block">
            <h3 className="font-secondary font-semibold text-lg mb-2">
              Quick Response Guarantee
            </h3>
            <p className="font-secondary text-sm text-neutral-gray max-w-md">
              We typically respond to all inquiries within 2-4 hours during business hours. 
              For urgent matters, please call us directly.
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default ContactFormSection;