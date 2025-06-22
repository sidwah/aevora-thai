import { Metadata } from 'next';
import ContactHero from '@/components/sections/contact-hero';
import ContactFormSection from '@/components/sections/contact-form-section';
import ContactMapSection from '@/components/sections/contact-map-section';

export const metadata: Metadata = {
  title: 'Contact Us | Aevora Thai Restaurant',
  description: 'Get in touch with Aevora Thai Restaurant in East Legon, Accra. Contact us for reservations, catering, or any inquiries about our authentic Thai cuisine.',
  keywords: 'Aevora Thai contact, East Legon restaurant contact, Thai restaurant Accra, restaurant reservations Ghana',
  openGraph: {
    title: 'Contact Aevora Thai Restaurant',
    description: 'Reach out to us for reservations, catering, or any questions about our authentic Thai dining experience in East Legon, Accra.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactFormSection />
      <ContactMapSection />
    </main>
  );
}