'use client';

import { motion } from 'framer-motion';
import { Clock, Users, Calendar, AlertTriangle } from 'lucide-react';

interface ReservationBusinessRulesProps {
  partySize?: number;
  selectedDate?: string;
  className?: string;
}

export default function ReservationBusinessRules({ 
  partySize = 2, 
  selectedDate,
  className = '' 
}: ReservationBusinessRulesProps) {
  const now = new Date();
  const isToday = selectedDate === now.toISOString().split('T')[0];
  const currentHour = now.getHours();
  
  const rules = [
    {
      icon: <Clock className="w-4 h-4 text-blue-600" />,
      title: 'Advance Notice',
      description: '2-hour minimum advance booking required',
      active: true,
    },
    {
      icon: <Calendar className="w-4 h-4 text-orange-600" />,
      title: 'Same-Day Limit',
      description: 'Same-day reservations accepted until 6:00 PM',
      active: isToday && currentHour < 18,
      warning: isToday && currentHour >= 18,
    },
    {
      icon: <Users className="w-4 h-4 text-purple-600" />,
      title: 'Large Parties',
      description: '8+ guests require 48-hour advance notice',
      active: partySize >= 8,
      warning: partySize >= 8,
    },
    {
      icon: <AlertTriangle className="w-4 h-4 text-red-600" />,
      title: 'Maximum Party Size',
      description: '20+ guests require special arrangements',
      active: partySize > 20,
      warning: partySize > 20,
    },
  ];

  const activeRules = rules.filter(rule => rule.active);

  if (activeRules.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-blue-50 border border-blue-200 rounded-lg p-4 ${className}`}
    >
      <h4 className="font-secondary text-sm font-medium text-blue-800 mb-3 flex items-center gap-2">
        <Calendar className="w-4 h-4" />
        Reservation Guidelines
      </h4>
      
      <div className="space-y-2">
        {activeRules.map((rule, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-start gap-3 p-2 rounded ${
              rule.warning ? 'bg-orange-100' : 'bg-blue-100'
            }`}
          >
            <div className="flex-shrink-0 mt-0.5">
              {rule.icon}
            </div>
            <div>
              <p className={`font-secondary text-sm font-medium ${
                rule.warning ? 'text-orange-800' : 'text-blue-800'
              }`}>
                {rule.title}
              </p>
              <p className={`font-secondary text-xs ${
                rule.warning ? 'text-orange-700' : 'text-blue-700'
              }`}>
                {rule.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {partySize > 20 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3 p-2 bg-red-100 border border-red-300 rounded flex items-center gap-2"
        >
          <AlertTriangle className="w-4 h-4 text-red-600" />
          <p className="font-secondary text-xs text-red-700">
            Please call +233 25 779 9736 for parties over 20 guests
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}