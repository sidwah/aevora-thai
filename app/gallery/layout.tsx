import type { Metadata } from 'next';

const siteUrl = process.env.NODE_ENV === 'production' 
  ? 'https://aevora-thai.vercel.app' 
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Gallery | Aevora Thai Restaurant - Authentic Thai Cuisine in East Legon',
  description: 'Explore our collection of authentic Thai dishes, restaurant ambiance, and behind-the-scenes moments at Aevora Thai Restaurant in East Legon, Accra.',
  keywords: 'Thai food gallery, restaurant photos, East Legon dining, authentic Thai cuisine, Aevora Thai images',
  openGraph: {
    title: 'Gallery | Aevora Thai Restaurant',
    description: 'Discover the artistry of authentic Thai cuisine and the warmth of our dining atmosphere',
    url: '/gallery',
    siteName: 'Aevora Thai Restaurant',
    images: [
      {
        url: '/images/gallery/featured/hero-gallery.jpg',
        width: 1200,
        height: 630,
        alt: 'Aevora Thai Restaurant Gallery'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery | Aevora Thai Restaurant',
    description: 'Discover the artistry of authentic Thai cuisine and the warmth of our dining atmosphere',
    images: ['/images/gallery/featured/hero-gallery.jpg'],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}