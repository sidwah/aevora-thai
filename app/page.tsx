// import Container from '@/components/layout/container';
// import Section from '@/components/layout/section';
import PageWrapper from '@/components/layout/page-wrapper';
// import Grid from '@/components/layout/grid';
// import Flex from '@/components/layout/flex';
import HeroSection from '@/components/sections/hero-section';
import AboutPreview from '@/components/sections/about-preview';
import MenuPreview from '@/components/sections/menu-preview';
import HeritageSection from '@/components/sections/heritage-section';
import TestimonialsSection from '@/components/sections/testimonials';
import LocationInfoSection from '@/components/sections/location-info';

export default function Home() {
  return (
    <PageWrapper background="glass" decorativeElements>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Menu Preview Section */}
      <MenuPreview />

      {/* About Preview Section */}
      <AboutPreview />

      {/* Heritage Section */}
      <HeritageSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Location Info Section */}
      <LocationInfoSection />
    </PageWrapper>
  );
}