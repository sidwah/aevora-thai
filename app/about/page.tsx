import type { Metadata } from 'next';
import AboutHero from '@/components/sections/about-hero';
import OurStory from '@/components/sections/our-story';
import MissionValues from '@/components/sections/mission-values';
import TeamProfiles from '@/components/sections/team-profiles';
import KitchenPhilosophy from '@/components/sections/kitchen-philosophy';
import IngredientSourcing from '@/components/sections/ingredient-sourcing';
import AwardsRecognition from '@/components/sections/awards-recognition';

export const metadata: Metadata = {
  title: 'About Us - Michael Arkoh\'s Authentic Thai Cuisine | Aevora Thai',
  description: 'Discover the story of Michael Arkoh and Aevora Thai Restaurant. Over 25 years of bringing authentic Thai flavors to East Legon, Ghana with traditional recipes and finest ingredients.',
  keywords: 'Michael Arkoh, Aevora Thai founder, authentic Thai restaurant Ghana, East Legon Thai food, traditional Thai cuisine, Aevora Thai team',
  openGraph: {
    title: 'About Aevora Thai - Michael Arkoh\'s Culinary Journey',
    description: 'From Thailand to Ghana: The story of authentic Thai cuisine and family traditions',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <OurStory />
      <MissionValues />
      <TeamProfiles />
      <KitchenPhilosophy />
      <IngredientSourcing />
      <AwardsRecognition />
    </main>
  );
}