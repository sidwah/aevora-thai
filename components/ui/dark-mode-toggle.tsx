'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent flash by checking theme immediately
  useEffect(() => {
    // Check theme synchronously to prevent flash
    const checkTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
      
      if (shouldBeDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      setIsDark(shouldBeDark);
      setMounted(true);
    };

    checkTheme();
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    // Update immediately for faster response
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Show nothing until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        onClick={toggleTheme}
        className="group relative w-14 h-14 glass-medium hover:glass-strong rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-brown/20 to-accent-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 blur-sm" />
        
        {/* Icon container */}
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            {isDark ? (
              <motion.div
                key="sun"
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <Sun 
                  className="w-5 h-5 text-accent-gold drop-shadow-sm" 
                  strokeWidth={2.5}
                />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <Moon 
                  className="w-5 h-5 text-primary-brown drop-shadow-sm" 
                  strokeWidth={2.5}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Ripple effect on click */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary-brown/30"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0 }}
          whileTap={{ scale: 1.4, opacity: [0, 0.4, 0] }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="glass-light px-3 py-2 rounded-lg">
          <span className="text-xs font-secondary text-primary-dark whitespace-nowrap">
            {isDark ? 'Light mode' : 'Dark mode'}
          </span>
        </div>
      </div>
    </div>
  );
}