'use client';

import { useState } from 'react';
import Container from './container';
import Section from './section';
import Grid from './grid';
import Flex from './flex';
import { cn } from '@/lib/utils';

export default function LayoutTest() {
  const [activeTest, setActiveTest] = useState<string>('containers');

  const tests = {
    containers: 'Container Sizes',
    sections: 'Section Spacing',
    grids: 'Grid Layouts',
    flex: 'Flex Layouts',
    glass: 'Glass Effects',
    responsive: 'Responsive Behavior'
  };

  return (
    <div className="min-h-screen bg-primary-cream p-4">
      {/* Test Navigation */}
      <div className="mb-8">
        <h1 className="font-primary text-3xl font-bold text-primary-brown mb-4">
          Layout System Test Suite
        </h1>
        <Flex wrap gap="sm" className="mb-6">
          {Object.entries(tests).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTest(key)}
              className={cn(
                "px-4 py-2 rounded-lg font-secondary text-sm transition-all duration-200",
                activeTest === key
                  ? "bg-primary-brown text-secondary-white"
                  : "glass-light hover:glass-medium text-primary-dark"
              )}
            >
              {label}
            </button>
          ))}
        </Flex>
      </div>

      {/* Container Size Tests */}
      {activeTest === 'containers' && (
        <div className="space-y-8">
          <h2 className="font-primary text-2xl font-semibold text-primary-brown">Container Sizes</h2>
          {(['sm', 'md', 'lg', 'xl', 'full'] as const).map((size) => (
            <Container key={size} size={size} className="bg-accent-gold/10 p-4 rounded-lg">
              <p className="font-secondary text-primary-dark">
                Container Size: <strong>{size}</strong> - Max Width: {
                  size === 'sm' ? '768px' :
                  size === 'md' ? '1024px' :
                  size === 'lg' ? '1280px' :
                  size === 'xl' ? '1400px' : 'none'
                }
              </p>
            </Container>
          ))}
        </div>
      )}

      {/* Section Spacing Tests */}
      {activeTest === 'sections' && (
        <div>
          <h2 className="font-primary text-2xl font-semibold text-primary-brown mb-4">Section Spacing</h2>
          {(['sm', 'md', 'lg', 'xl'] as const).map((spacing) => (
            <Section key={spacing} spacing={spacing} background="glass-light" className="mb-4">
              <p className="font-secondary text-primary-dark text-center">
                Section Spacing: <strong>{spacing}</strong>
              </p>
            </Section>
          ))}
        </div>
      )}

      {/* Grid Layout Tests */}
      {activeTest === 'grids' && (
        <Container>
          <h2 className="font-primary text-2xl font-semibold text-primary-brown mb-6">Grid Layouts</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-secondary font-semibold text-primary-brown mb-4">Responsive Grid (1 → 2 → 4)</h3>
              <Grid cols={1} gap="md" responsive={{ sm: 2, lg: 4 }}>
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="glass-card p-4 text-center">
                    <span className="font-secondary text-primary-dark">Item {i + 1}</span>
                  </div>
                ))}
              </Grid>
            </div>
            
            <div>
              <h3 className="font-secondary font-semibold text-primary-brown mb-4">3-Column Grid</h3>
              <Grid cols={3} gap="lg">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="glass-card p-6 text-center">
                    <span className="font-secondary text-primary-dark">Card {i + 1}</span>
                  </div>
                ))}
              </Grid>
            </div>
          </div>
        </Container>
      )}

      {/* Flex Layout Tests */}
      {activeTest === 'flex' && (
        <Container>
          <h2 className="font-primary text-2xl font-semibold text-primary-brown mb-6">Flex Layouts</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-secondary font-semibold text-primary-brown mb-4">Responsive Flex (Column → Row)</h3>
              <Flex 
                direction="col" 
                gap="md" 
                responsive={{ lg: { direction: 'row', justify: 'between' } }}
                className="glass-light p-6 rounded-lg"
              >
                <div className="glass-card p-4 flex-1">Flex Item 1</div>
                <div className="glass-card p-4 flex-1">Flex Item 2</div>
                <div className="glass-card p-4 flex-1">Flex Item 3</div>
              </Flex>
            </div>
            
            <div>
              <h3 className="font-secondary font-semibold text-primary-brown mb-4">Centered Content</h3>
              <Flex justify="center" align="center" className="glass-light p-12 rounded-lg min-h-40">
                <div className="glass-card p-6">Perfectly Centered</div>
              </Flex>
            </div>
          </div>
        </Container>
      )}

      {/* Glass Effects Tests */}
      {activeTest === 'glass' && (
        <Container>
          <h2 className="font-primary text-2xl font-semibold text-primary-brown mb-6">Glass Effects</h2>
          
          <Grid cols={1} gap="lg" responsive={{ sm: 2, lg: 3 }}>
            {[
              { name: 'Light', class: 'glass-light' },
              { name: 'Medium', class: 'glass-medium' },
              { name: 'Strong', class: 'glass-strong' },
              { name: 'Card', class: 'glass-card' },
              { name: 'Panel', class: 'glass-panel' }
            ].map(({ name, class: glassClass }) => (
              <div key={name} className={cn(glassClass, "p-6 text-center")}>
                <h3 className="font-secondary font-semibold text-primary-brown mb-2">{name}</h3>
                <p className="font-secondary text-neutral-gray text-sm">
                  Glass effect: {glassClass}
                </p>
              </div>
            ))}
          </Grid>
        </Container>
      )}

      {/* Responsive Behavior Tests */}
      {activeTest === 'responsive' && (
        <Container>
          <h2 className="font-primary text-2xl font-semibold text-primary-brown mb-6">Responsive Behavior</h2>
          
          <div className="space-y-8">
            <div className="glass-light p-6 rounded-lg">
              <h3 className="font-secondary font-semibold text-primary-brown mb-4">
                Resize browser to test responsive behavior
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="glass-card p-4">Mobile: 1 col</div>
                <div className="glass-card p-4">Tablet: 2 cols</div>
                <div className="glass-card p-4">Desktop: 3 cols</div>
              </div>
            </div>
            
            <div className="glass-panel p-6 rounded-lg">
              <h3 className="font-secondary font-semibold text-primary-brown mb-4">
                Fluid Typography Test
              </h3>
              <p className="text-fluid-sm mb-2">Small fluid text (text-fluid-sm)</p>
              <p className="text-fluid-base mb-2">Base fluid text (text-fluid-base)</p>
              <p className="text-fluid-lg mb-2">Large fluid text (text-fluid-lg)</p>
              <p className="text-fluid-xl mb-2">XL fluid text (text-fluid-xl)</p>
              <p className="text-fluid-2xl">2XL fluid text (text-fluid-2xl)</p>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}