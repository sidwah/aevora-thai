import { Metadata } from 'next';
import MenuHeader from '@/components/sections/menu-header';
import MenuContent from '@/components/sections/menu-content';
import MenuCTA from '@/components/sections/menu-cta';

export const metadata: Metadata = {
  title: 'Our Menu | Aevora Thai Restaurant',
  description: 'Discover authentic Thai flavors crafted with traditional techniques and the finest ingredients. Explore our complete menu of appetizers, mains, desserts and more.',
  keywords: 'Thai menu, authentic Thai food, Thai restaurant menu, pad thai, green curry, tom yum, East Legon restaurant',
};

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      <MenuHeader />
      <MenuContent />
      <MenuCTA />
    </main>
  );
}