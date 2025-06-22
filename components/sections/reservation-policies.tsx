'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Clock, Users, Phone, AlertCircle, Calendar } from 'lucide-react';
import Container from '@/components/layout/container';
import Section from '@/components/layout/section';

export default function ReservationPolicies() {
  const policies = [
    {
      icon: <Calendar className="w-5 h-5 text-primary-brown" />,
      title: 'Advance Booking',
      description: 'Reservations accepted up to 30 days in advance. Same-day reservations until 6:00 PM.',
    },
    {
      icon: <Users className="w-5 h-5 text-primary-brown" />,
      title: 'Large Parties',
      description: 'Parties of 8 or more require 48-hour advance notice and may require a deposit.',
    },
    {
      icon: <Clock className="w-5 h-5 text-primary-brown" />,
      title: 'Dining Duration',
      description: 'Tables are reserved for 2 hours. Extended dining may be available upon request.',
    },
    {
      icon: <Phone className="w-5 h-5 text-primary-brown" />,
      title: 'Cancellation',
      description: 'Cancellations accepted up to 2 hours before reservation time. No-show policy applies.',
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-primary-brown" />,
      title: 'Confirmation',
      description: 'All reservations will be confirmed via email or phone within 2 hours of booking.',
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-primary-brown" />,
      title: 'Special Requests',
      description: 'Dietary restrictions and special occasions should be noted when booking.',
    },
  ];

  return (
    <Section spacing="xl" className="reservation-policies-bg">
      <Container size="xl">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-primary text-3xl sm:text-4xl lg:text-5xl mb-4">
              Reservation <span className="text-primary-brown">Policies</span>
            </h2>
            <p className="font-secondary text-lg text-neutral-gray max-w-2xl mx-auto">
              Please review our reservation policies to ensure a smooth dining experience for all guests.
            </p>
          </motion.div>

          {/* Policies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-light rounded-xl p-6 hover:glass-medium transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-brown/10 rounded-lg flex items-center justify-center">
                    {policy.icon}
                  </div>
                  <div>
                    <h3 className="font-secondary text-lg font-semibold mb-2">
                      {policy.title}
                    </h3>
                    <p className="font-secondary text-sm text-neutral-gray leading-relaxed">
                      {policy.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="glass-medium rounded-2xl p-8 mt-12 text-center"
          >
            <h3 className="font-primary text-2xl  mb-4">
              Questions About Your Reservation?
            </h3>
            <p className="font-secondary text-neutral-gray mb-6">
              Our team is here to help. Contact us for any questions about your booking or special requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+233257799736"
                className="bg-button-secondary hover:bg-button-hover-secondary text-white font-secondary font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call +233 25 779 9736
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-primary-brown text-primary-brown hover:bg-primary-brown hover:text-white font-secondary font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-4 h-4" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}