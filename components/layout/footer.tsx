'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurant-info';
import { cn } from '@/lib/utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { href: '/menu', label: 'Menu' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About us' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    {
      href: restaurantInfo.socialMedia.facebook,
      icon: Facebook,
      label: 'Facebook',
      color: 'hover:text-blue-600',
    },
    {
      href: restaurantInfo.socialMedia.instagram,
      icon: Instagram,
      label: 'Instagram',
      color: 'hover:text-pink-600',
    },
    {
      href: restaurantInfo.socialMedia.twitter,
      icon: Twitter,
      label: 'Twitter',
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <footer className="glass-cream border-t border-neutral-light transition-all duration-150">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Section: Contact Info */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2">
            <a
              href={restaurantInfo.contact.phoneDialable}
              className={cn(
                "flex items-center gap-2 font-secondary text-sm text-neutral-gray transition-all duration-150",
                "hover:text-primary-brown dark:hover:text-primary-brown",
                "dark:text-shadow"
              )}
            >
              <Phone className="w-4 h-4 text-neutral-gray dark:text-neutral-gray" />
              <span>{restaurantInfo.contact.phoneDisplay}</span>
            </a>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-neutral-gray dark:text-neutral-gray dark:text-shadow" />
              <p className="font-secondary text-sm text-neutral-gray dark:text-shadow">
                {restaurantInfo.address.shortFormat}
              </p>
            </div>
          </div>

          {/* Center Section: Logo + Navigation */}
          <div className="flex flex-col items-center gap-4">
            <Link href="/" className="group">
              <div className="relative glass-light rounded-full p-2 transition-all duration-150 group-hover:glass-medium">
                <Image
                  src="/logo.png"
                  alt="Aevora Thai Restaurant Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 transition-transform duration-200 group-hover:scale-105"
                />
              </div>
            </Link>

            <nav className="flex flex-wrap items-center justify-center gap-6">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "footer-nav-link font-secondary text-sm font-medium text-neutral-gray",
                    "transition-all duration-150 hover:text-primary-brown",
                    "dark:hover:text-primary-brown dark:text-shadow",
                    "after:bg-primary-brown dark:after:bg-primary-brown"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Section: Social Media */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "glass-light p-2 rounded-lg transition-all duration-150",
                    "text-neutral-gray hover:glass-medium",
                    social.color,
                    "dark:text-shadow",
                    "hover:scale-105 active:scale-95"
                  )}
                  aria-label={social.label}
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              );
            })}

            {/* TripAdvisor */}
            <a
              href={restaurantInfo.socialMedia.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "glass-light p-2 rounded-lg transition-all duration-150",
                "text-neutral-gray hover:glass-medium hover:text-green-600",
                "dark:text-shadow",
                "hover:scale-105 active:scale-95"
              )}
              aria-label="TripAdvisor"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                <circle cx="9" cy="10" r="1.5" />
                <circle cx="15" cy="10" r="1.5" />
                <path d="M8 15c1.11 0 2.09-.67 2.5-1.71.41 1.04 1.39 1.71 2.5 1.71s2.09-.67 2.5-1.71c.08-.2.32-.29.5-.21.2.08.29.32.21.5-.61 1.55-2.02 2.42-3.21 2.42s-2.6-.87-3.21-2.42c-.08-.18.01-.42.21-.5.18-.08.42.01.5.21.41 1.04 1.39 1.71 2.5 1.71z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-neutral-light glass-cream transition-all duration-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center font-secondary text-xs text-neutral-gray dark:text-shadow">
            Copyright © {currentYear} by {restaurantInfo.name}. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}