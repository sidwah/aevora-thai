'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone, Clock } from 'lucide-react';
import Container from '@/components/layout/container';
import Section from '@/components/layout/section';
import { cn } from '@/lib/utils';

export default function MenuCTA() {
  return (
    <Section spacing="xl" background="glass-light" id="menu-cta">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Main CTA */}
          <div className="mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-primary mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl"
            >
              Ready to Experience
              <span className="text-primary-brown"> Authentic Thai</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-secondary text-neutral-gray mb-8 text-lg sm:text-xl"
            >
              Reserve your table today and embark on a culinary journey through
              Thailand
            </motion.p>

            {/* Primary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-12 flex flex-col justify-center gap-4 sm:flex-row"
            >
              <Link
                href="/reservations"
                className={cn(
                  'group inline-flex items-center justify-center gap-3',
                  'bg-button-secondary hover:bg-button-hover-secondary',
                  'text-secondary-white font-secondary font-semibold',
                  'rounded-2xl px-8 py-4 text-base lg:text-lg',
                  'transition-all duration-200 ease-out',
                  'hover:scale-105 hover:shadow-xl active:scale-95',
                  'border-2 border-transparent'
                )}
              >
                <span>Book a Table</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="tel:+233257799736"
                className={cn(
                  'group inline-flex items-center justify-center gap-3',
                  'bg-button-primary hover:bg-button-hover-primary',
                  'text-secondary-white font-secondary font-semibold',
                  'rounded-2xl px-8 py-4 text-base lg:text-lg',
                  'transition-all duration-200 ease-out',
                  'hover:scale-105 hover:shadow-xl active:scale-95',
                  'border-2 border-transparent'
                )}
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </Link>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                icon: Clock,
                title: 'Opening Hours',
                info: 'Mon-Thu: 11AM-9PM\nFri: 11AM-10PM\nSat-Sun: 12PM-10PM',
              },
              {
                icon: Phone,
                title: 'Reservations',
                info: '+233 25 779 9736\ntalktoaevora@gmail.com',
              },
              {
                icon: ArrowRight,
                title: 'Location',
                info: 'East Legon\nAccra, Ghana',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                className="glass-light group hover:glass-medium rounded-xl p-6 text-center transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  <div className="bg-primary-brown/10 group-hover:bg-primary-brown/20 flex h-12 w-12 items-center justify-center rounded-full transition-colors">
                    <item.icon className="text-primary-brown h-6 w-6" />
                  </div>
                </div>
                <h3 className="font-secondary mb-2 font-semibold">
                  {item.title}
                </h3>
                <p className="font-secondary text-neutral-gray text-sm whitespace-pre-line">
                  {item.info}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
