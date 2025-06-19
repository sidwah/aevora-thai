'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/layout/container';
import Section from '@/components/layout/section';
import { teamMembers } from '@/data/team-members';
import { Users, Crown, Award } from 'lucide-react';

export default function TeamProfiles() {
  return (
    <Section spacing="lg" className="bg-section">
      <Container size="xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="w-5 h-5 text-primary-brown" />
            <span className="font-secondary text-sm uppercase tracking-wider text-neutral-gray">
              Our Team
            </span>
          </div>
          <h2 className="font-primary text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Meet Our{' '}
            <span className="text-primary-brown">Culinary Team</span>
          </h2>
          <p className="font-secondary text-lg lg:text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            The passionate professionals who bring authentic Thai flavors to life every day.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="text-center">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="relative w-48 h-48 mx-auto glass-medium rounded-full overflow-hidden transition-all duration-500 group-hover:glass-strong group-hover:scale-105">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="192px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  
                  {/* Founder Badge */}
                  {member.isFounder && (
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-primary-brown to-accent-gold rounded-full flex items-center justify-center shadow-lg">
                      <Crown className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>

                {/* Member Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-primary text-xl lg:text-2xl font-bold mb-1">
                      {member.name}
                    </h3>
                    <p className="font-secondary text-sm lg:text-base font-medium text-primary-brown mb-2">
                      {member.role}
                    </p>
                  </div>

                  {/* Experience & Specialization */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-xs lg:text-sm text-neutral-gray">
                      <Award className="w-4 h-4" />
                      <span>{member.experience} Experience</span>
                    </div>
                    <p className="font-secondary text-xs lg:text-sm text-primary-brown font-medium">
                      {member.specialization}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="font-secondary text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}