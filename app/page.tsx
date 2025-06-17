import Container from '@/components/layout/container';
import Section from '@/components/layout/section';
import PageWrapper from '@/components/layout/page-wrapper';
// import Grid from '@/components/layout/grid';
import Flex from '@/components/layout/flex';
import HeroSection from '@/components/sections/hero-section';
import AboutPreview from '@/components/sections/about-preview';
import MenuPreview from '@/components/sections/menu-preview';
import HeritageSection from '@/components/sections/heritage-section';
import TestimonialsSection from '@/components/sections/testimonials';

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

      {/* Contact Preview Section */}
      <Section spacing="md" background="glass-light" id="contact-preview">
        <Container size="md">
          <div className="glass-panel p-8 lg:p-12 text-center">
            <h2 className="font-primary text-fluid-2xl font-bold text-primary-brown mb-6">
              Visit Us in East Legon
            </h2>
            <Flex 
              direction="col" 
              gap="lg"
              responsive={{
                md: { direction: 'row', justify: 'around' }
              }}
              className="items-center"
            >
              <div className="text-center">
                <h3 className="font-secondary font-semibold text-primary-brown mb-2">Location</h3>
                <p className="font-secondary text-neutral-gray">East Legon, Ghana</p>
              </div>
              <div className="text-center">
                <h3 className="font-secondary font-semibold text-primary-brown mb-2">Phone</h3>
                <a 
                  href="tel:+233257799736" 
                  className="font-secondary text-neutral-gray hover:text-primary-brown transition-colors duration-200"
                >
                  +233 25 779 9736
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-secondary font-semibold text-primary-brown mb-2">Hours</h3>
                <p className="font-secondary text-neutral-gray">11:00 AM - 9:00 PM</p>
              </div>
            </Flex>
            <div className="mt-8">
              <button className="bg-button-secondary hover:bg-button-hover-secondary text-secondary-white px-8 py-4 rounded-lg font-medium transition-all duration-200 touch-target">
                Make a Reservation
              </button>
            </div>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}