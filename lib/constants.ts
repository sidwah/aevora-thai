// Add to existing constants
export const LAYOUT = {
    // Container sizes
    CONTAINER_SIZES: {
      SM: 'max-w-3xl',
      MD: 'max-w-5xl', 
      LG: 'max-w-7xl',
      XL: 'max-w-[1400px]',
      FULL: 'max-w-none'
    },
    
    // Section spacing
    SECTION_SPACING: {
      NONE: '',
      SM: 'py-8 sm:py-12',
      MD: 'py-12 sm:py-16 lg:py-20',
      LG: 'py-16 sm:py-20 lg:py-24',
      XL: 'py-20 sm:py-24 lg:py-32'
    },
    
    // Container padding
    CONTAINER_PADDING: {
      NONE: '',
      SM: 'px-4 sm:px-6',
      MD: 'px-4 sm:px-6 lg:px-8',
      LG: 'px-6 sm:px-8 lg:px-12'
    },
    
    // Grid gaps
    GRID_GAPS: {
      NONE: 'gap-0',
      SM: 'gap-4',
      MD: 'gap-6',
      LG: 'gap-8',
      XL: 'gap-12'
    },
    
    // Glass effects
    GLASS_EFFECTS: {
      LIGHT: 'glass-light',
      MEDIUM: 'glass-medium',
      STRONG: 'glass-strong',
      CARD: 'glass-card',
      PANEL: 'glass-panel'
    },
    
    // Background patterns
    BACKGROUNDS: {
      DEFAULT: 'bg-primary-cream',
      GLASS: 'bg-section',
      HERO: 'bg-hero-gradient',
      WHITE: 'bg-secondary-white',
      TRANSPARENT: 'bg-transparent'
    },
    
    // Breakpoints
    BREAKPOINTS: {
      SM: '640px',
      MD: '768px',
      LG: '1024px',
      XL: '1280px',
      '2XL': '1536px'
    },
    
    // Z-index scale
    Z_INDEX: {
      BACKGROUND: -10,
      DEFAULT: 0,
      DROPDOWN: 10,
      STICKY: 20,
      MODAL_BACKDROP: 40,
      MODAL: 50,
      TOOLTIP: 60
    }
  } as const;
  
  // Animation constants
  export const ANIMATIONS = {
    DURATION: {
      FAST: '150ms',
      NORMAL: '200ms',
      SLOW: '300ms',
      SLOWER: '500ms'
    },
    EASING: {
      DEFAULT: 'ease',
      IN: 'ease-in',
      OUT: 'ease-out',
      IN_OUT: 'ease-in-out'
    }
  } as const;
  
  // Touch target sizes for accessibility
  export const TOUCH_TARGET = {
    MIN_SIZE: '44px',
    COMFORTABLE: '48px',
    LARGE: '56px'
  } as const;