import type { Metadata } from 'next';
import { Playfair_Display, Montserrat, Newsreader } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import DarkModeToggle from '@/components/ui/dark-mode-toggle';
import ThemeScript from '@/components/theme-script';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-primary',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-secondary',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-accent',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aevora Thai Restaurant - Authentic Thai Cuisine',
  description: 'Experience the finest Thai cuisine at Aevora Thai Restaurant. Traditional flavors, modern ambiance, and exceptional service.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${playfair.variable} ${montserrat.variable} ${newsreader.variable}`}
      suppressHydrationWarning={true}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="font-secondary text-primary-dark" suppressHydrationWarning={true}>
        {/* Background with decorative elements for glass effects */}
        <div className="fixed inset-0 -z-10">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-section" />
          
          {/* Decorative glass blur elements */}
          <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary-brown/8 blur-3xl animate-float" />
          <div 
            className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-accent-gold/6 blur-3xl animate-float" 
            style={{ animationDelay: '2s' }} 
          />
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-secondary-warm-brown/5 blur-3xl animate-float" 
            style={{ animationDelay: '4s' }} 
          />
          
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 bg-glass-decoration" />
        </div>

        <Header />
        <main className="relative min-h-screen">
          {children}
        </main>
        
        {/* Floating Dark Mode Toggle */}
        <DarkModeToggle />
      </body>
    </html>
  );
}