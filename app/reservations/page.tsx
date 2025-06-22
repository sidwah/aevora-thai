import type { Metadata } from 'next';
import ReservationHero from '@/components/sections/reservation-hero';
import ReservationForm from '@/components/sections/reservation-form';
import ReservationPolicies from '@/components/sections/reservation-policies';

export const metadata: Metadata = {
  title: 'Reservations | Aevora Thai Restaurant',
  description: 'Reserve your table at Aevora Thai Restaurant in East Legon, Accra. Experience authentic Thai cuisine with online booking for parties of 1-20 guests.',
  keywords: 'reservations, book table, Aevora Thai, East Legon restaurant, Thai cuisine Accra, dining booking',
  openGraph: {
    title: 'Reserve Your Table | Aevora Thai Restaurant',
    description: 'Book your authentic Thai dining experience in East Legon, Accra',
    type: 'website',
  },
};

export default function ReservationsPage() {
  return (
    <main className="min-h-screen">
      <ReservationHero />
      <ReservationForm />
      <ReservationPolicies />
    </main>
  );
}