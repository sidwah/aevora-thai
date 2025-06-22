'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, ExternalLink } from 'lucide-react';
import { locationInfo } from '@/data/location-info';

const ContactInfoPanel = () => {
  const contactMethods = [
    {
      icon: Phone,
      label: 'Phone',
      value: locationInfo.contact.phoneDisplay,
      href: locationInfo.contact.phoneDialable,
      description: 'Call us directly',
    },
    {
      icon: Mail,
      label: 'Email',
      value: locationInfo.contact.email,
      href: locationInfo.contact.emailSubject,
      description: 'Send us an email',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: locationInfo.contact.phoneDisplay,
      href: locationInfo.contact.whatsappLink,
      description: 'Message us on WhatsApp',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: locationInfo.restaurant.address.formatted,
      href: `https://maps.google.com/?q=${locationInfo.restaurant.coordinates.lat},${locationInfo.restaurant.coordinates.lng}`,
      description: 'Get directions',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Contact Methods */}
      <div className="contact-info-panel glass-light rounded-2xl p-4 lg:p-6">
        <h3 className="font-primary text-xl lg:text-2xl mb-6">
          Contact Information
        </h3>
        
        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.label === 'Address' ? '_blank' : '_self'}
              rel={method.label === 'Address' ? 'noopener noreferrer' : undefined}
              className="contact-method-item group flex items-start gap-4 p-3 rounded-lg transition-colors"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
            >
              <div className="w-10 h-10 bg-primary-brown/20 rounded-full flex items-center justify-center group-hover:bg-primary-brown/30 transition-colors flex-shrink-0">
                <method.icon className="w-5 h-5 text-primary-brown" />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="font-secondary font-medium  group-hover:text-primary-brown transition-colors">
                  {method.label}
                </p>
                <p className="font-secondary text-sm text-neutral-gray break-words">
                  {method.value}
                </p>
                <p className="font-secondary text-xs text-neutral-gray mt-1">
                  {method.description}
                </p>
              </div>
              
              <ExternalLink className="w-4 h-4 text-neutral-gray group-hover:text-primary-brown transition-colors opacity-0 group-hover:opacity-100" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfoPanel;