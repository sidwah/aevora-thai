'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { contactSubjects, type ContactSubject } from '@/data/location-info';

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.enum([...contactSubjects] as [ContactSubject, ...ContactSubject[]]),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="contact-form-container glass-medium rounded-2xl p-6 lg:p-8"
    >
      <div className="mb-6">
        <h2 className="font-primary text-2xl lg:text-3xl mb-2">
          Send us a Message
        </h2>
        <p className="font-secondary text-neutral-gray">
          Fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block font-secondary text-sm font-medium mb-2">
              Full Name <span className="text-primary-brown">*</span>
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              className="contact-form-input w-full px-4 py-3 rounded-lg border focus:border-primary-brown focus:ring-2 focus:ring-primary-brown/20 transition-all font-secondary"
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block font-secondary text-sm font-medium  mb-2">
              Email Address <span className="text-primary-brown">*</span>
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="contact-form-input w-full px-4 py-3 rounded-lg border focus:border-primary-brown focus:ring-2 focus:ring-primary-brown/20 transition-all font-secondary"
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Phone and Subject Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block font-secondary text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              className="contact-form-input w-full px-4 py-3 rounded-lg border focus:border-primary-brown focus:ring-2 focus:ring-primary-brown/20 transition-all font-secondary"
              placeholder="+233 XX XXX XXXX"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="subject" className="block font-secondary text-sm font-medium mb-2">
              Subject <span className="text-primary-brown">*</span>
            </label>
            <select
              {...register('subject')}
              id="subject"
              className="contact-form-input w-full px-4 py-3 rounded-lg border focus:border-primary-brown focus:ring-2 focus:ring-primary-brown/20 transition-all font-secondary"
            >
              <option value="">Select a subject</option>
              {contactSubjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            {errors.subject && (
              <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block font-secondary text-sm font-medium mb-2">
            Message <span className="text-primary-brown">*</span>
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={6}
            className="contact-form-input w-full px-4 py-3 rounded-lg border focus:border-primary-brown focus:ring-2 focus:ring-primary-brown/20 transition-all font-secondary resize-none"
            placeholder="Tell us about your inquiry, special requests, or any questions you may have..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-button-secondary hover:bg-button-hover-secondary disabled:bg-neutral-gray disabled:cursor-not-allowed text-secondary-white font-secondary font-semibold rounded-lg transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </button>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
          >
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            <p className="font-secondary text-sm text-green-800 dark:text-green-300">
              Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
            </p>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
          >
            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
            <p className="font-secondary text-sm text-red-800 dark:text-red-300">
              Sorry, there was an error sending your message. Please try again or contact us directly.
            </p>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;