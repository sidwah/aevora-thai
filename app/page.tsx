import Container from '@/components/layout/container';
import Section from '@/components/layout/section';
import PageWrapper from '@/components/layout/page-wrapper';
import Grid from '@/components/layout/grid';
import Flex from '@/components/layout/flex';
import HeroSection from '@/components/sections/hero-section';

export default function Home() {
  return (
    <PageWrapper background="glass" decorativeElements>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Menu Preview Section */}
      <Section spacing="lg" background="glass-light" id="menu-preview">
        <div className="text-center mb-12">
          <h2 className="font-primary text-fluid-3xl font-bold text-primary-brown mb-4">
            The Finest Thai Cuisine
          </h2>
          <p className="font-secondary text-fluid-lg text-neutral-gray max-w-2xl mx-auto">
            Experience the authentic flavors of Thailand with our carefully crafted menu featuring traditional recipes passed down through generations.
          </p>
        </div>
        
        <Grid 
          cols={1} 
          gap="lg"
          responsive={{
            sm: 2,
            lg: 4
          }}
          className="container-query"
        >
          {['Appetizers', 'Salads', 'Soups', 'Main Dishes'].map((category) => (
            <div key={category} className="glass-card p-6 card-hover responsive-card">
              <div className="aspect-square rounded-lg bg-accent-gold/10 mb-4 flex items-center justify-center">
                <span className="text-accent-gold font-secondary text-xs">
                  {category} Image
                </span>
              </div>
              <h3 className="font-primary text-fluid-xl font-semibold text-primary-brown mb-2">
                {category}
              </h3>
              <p className="font-secondary text-neutral-gray text-sm">
                Discover our selection of {category.toLowerCase()} featuring authentic Thai ingredients and traditional cooking methods.
              </p>
            </div>
          ))}
        </Grid>
      </Section>

      {/* About Preview Section */}
      <Section spacing="lg" background="none" id="about-preview">
        <Grid 
          cols={1} 
          gap="xl"
          responsive={{
            lg: 2
          }}
          className="items-center"
        >
          <div className="glass-panel p-8 lg:p-12">
            <h2 className="font-primary text-fluid-3xl font-bold text-primary-brown mb-6">
              Tradition & Family Recipes
            </h2>
            <p className="font-secondary text-fluid-base text-neutral-gray mb-6 leading-relaxed">
              Our culinary journey began in the heart of Thailand, where our founder learned the art of authentic Thai cooking from her grandmother. Each dish tells a story of tradition, passion, and the finest ingredients.
            </p>
            <p className="font-secondary text-fluid-base text-neutral-gray mb-8 leading-relaxed">
              Today, we bring these cherished family recipes to East Legon, creating an ambient dining experience that honors the rich heritage of Thai cuisine while embracing contemporary elegance.
            </p>
            <Flex gap="md" className="mobile-stack">
              <button className="bg-button-primary hover:bg-button-hover-primary text-secondary-white px-6 py-3 rounded-lg font-medium transition-all duration-200 touch-target">
                Our Story
              </button>
              <button className="glass-light hover:glass-medium text-primary-dark px-6 py-3 rounded-lg font-medium transition-all duration-200 touch-target">
                View Gallery
              </button>
            </Flex>
          </div>
          
          <div className="glass-card p-6">
            <div className="aspect-[4/3] rounded-lg bg-secondary-warm-brown/10 flex items-center justify-center">
              <span className="text-secondary-warm-brown font-secondary text-sm">
                Restaurant Interior Image
              </span>
            </div>
          </div>
        </Grid>
      </Section>

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