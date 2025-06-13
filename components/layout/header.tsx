'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navigationItems = [
  { name: 'Menu', href: '/menu' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Main Header with Glass Effect */}
      <header className="sticky top-0 z-50 w-full glass-header">
        {/* Smaller padding for header compared to main sections */}
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
          <div className="flex h-16 sm:h-20 lg:h-24 items-center justify-between">
            
            {/* Column 1: Logo + Restaurant Name */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3 group">
                {/* Logo from public/logo.png */}
                <div className="relative glass-light rounded-full p-1 transition-all duration-300 group-hover:glass-medium">
                  <Image
                    src="/logo.png"
                    alt="Aevora Thai Restaurant Logo"
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain transition-transform duration-200 group-hover:scale-105"
                    priority
                  />
                </div>
                
                {/* Restaurant Name with Subtitle */}
                <div className="flex flex-col">
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-primary font-bold text-primary-brown tracking-wide leading-tight transition-colors duration-200 group-hover:text-primary-dark">
                    Aevora Thai
                  </h1>
                  <p className="text-xs sm:text-sm font-secondary text-neutral-gray uppercase tracking-widest leading-tight">
                    Restaurant
                  </p>
                </div>
              </Link>
            </div>

            {/* Column 2: Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative py-2 px-3 text-sm font-secondary font-medium transition-all duration-150",
                    "nav-link rounded-lg",
                    "hover:glass-light",
                    "after:content-[''] after:absolute after:bottom-1 after:left-3 after:w-0 after:h-0.5",
                    "after:bg-primary-brown after:transition-all after:duration-200",
                    "hover:after:w-[calc(100%-1.5rem)]"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Column 3: CTA Button + Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              {/* Book a Table Button with Glass Effect */}
              <Link
                href="/reservations"
                className={cn(
                  "hidden sm:inline-flex items-center px-4 lg:px-6 py-2 lg:py-3",
                  "bg-button-secondary hover:bg-button-hover-secondary",
                  "text-white font-secondary font-medium text-sm lg:text-base",
                  "rounded-lg shadow-lg hover:shadow-xl backdrop-blur-sm",
                  "transition-all duration-150 group",
                  "focus:outline-none focus:ring-2 focus:ring-button-secondary focus:ring-offset-2",
                  "hover:scale-105 active:scale-95"
                )}
              >
                Book a Table
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              {/* Mobile Menu Button with Glass Effect */}
              <button
                onClick={toggleMobileMenu}
                className={cn(
                  "lg:hidden p-2 rounded-lg glass-light transition-all duration-150",
                  "text-primary-dark hover:text-primary-brown hover:glass-medium",
                  "hover:scale-105 active:scale-95"
                )}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Enhanced Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-neutral-charcoal/30 backdrop-blur-sm lg:hidden"
              onClick={toggleMobileMenu}
            />
            
            {/* Mobile Menu with Glass Effect */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 z-50 h-full w-72 glass-mobile-menu lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header with Glass */}
                <div className="flex items-center justify-between p-6 border-b border-primary-brown/10">
                  <span className="text-lg font-primary font-bold text-primary-brown">
                    Menu
                  </span>
                  <button
                    onClick={toggleMobileMenu}
                    className={cn(
                      "p-2 rounded-lg glass-light transition-all duration-150",
                      "text-primary-dark hover:text-primary-brown hover:glass-medium",
                      "hover:scale-105 active:scale-95"
                    )}
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Navigation Items with Glass Hover */}
                <nav className="flex-1 py-6 space-y-2 px-4">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={toggleMobileMenu}
                        className={cn(
                          "mobile-nav-link block px-4 py-3 text-base font-secondary font-medium",
                          "rounded-lg glass-light hover:glass-medium transition-all duration-150",
                          "hover:scale-105 active:scale-95"
                        )}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA Button with Glass */}
                <div className="p-6 border-t border-primary-brown/10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <Link
                      href="/reservations"
                      onClick={toggleMobileMenu}
                      className={cn(
                        "flex items-center justify-center w-full px-4 py-4",
                        "bg-button-secondary hover:bg-button-hover-secondary",
                        "text-white font-secondary font-medium rounded-lg",
                        "shadow-lg backdrop-blur-sm transition-all duration-150 group",
                        "hover:scale-105 active:scale-95 hover:shadow-xl"
                      )}
                    >
                      Book a Table
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}