'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Plus } from 'lucide-react';
import { dietaryOptions } from '@/data/reservation-options';

interface DietaryRestrictionsProps {
  selectedRestrictions: string[];
  onRestrictionsChange: (restrictions: string[]) => void;
  className?: string;
}

export default function DietaryRestrictions({
  selectedRestrictions,
  onRestrictionsChange,
  className = ''
}: DietaryRestrictionsProps) {
  const [customRestriction, setCustomRestriction] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);

  const handleRestrictionToggle = (value: string) => {
    const newRestrictions = selectedRestrictions.includes(value)
      ? selectedRestrictions.filter(r => r !== value)
      : [...selectedRestrictions, value];
    
    onRestrictionsChange(newRestrictions);
  };

  const handleCustomRestrictionAdd = () => {
    if (customRestriction.trim() && !selectedRestrictions.includes(customRestriction.trim())) {
      onRestrictionsChange([...selectedRestrictions, customRestriction.trim()]);
      setCustomRestriction('');
      setShowCustomInput(false);
    }
  };

  const handleCustomRestrictionRemove = (restriction: string) => {
    const isStandardOption = dietaryOptions.some(option => option.value === restriction);
    if (!isStandardOption) {
      onRestrictionsChange(selectedRestrictions.filter(r => r !== restriction));
    }
  };

    selectedRestrictions.filter(r => 
    dietaryOptions.some(option => option.value === r)
  );
  
  const customRestrictions = selectedRestrictions.filter(r => 
    !dietaryOptions.some(option => option.value === r) && r !== 'other'
  );

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Standard Dietary Options */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {dietaryOptions.filter(option => option.value !== 'other').map((option) => (
          <motion.button
            key={option.value}
            type="button"
            onClick={() => handleRestrictionToggle(option.value)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              relative p-3 rounded-lg border-2 transition-all duration-200 text-left
              ${selectedRestrictions.includes(option.value)
                ? 'border-primary-brown bg-primary-brown/10 text-primary-brown'
                : 'border-neutral-light bg-white text-neutral-gray hover:border-primary-brown/50'
              }
            `}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{option.icon}</span>
              <span className="font-secondary text-sm font-medium">{option.label}</span>
            </div>
            
            {selectedRestrictions.includes(option.value) && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-primary-brown rounded-full flex items-center justify-center"
              >
                <Check className="w-3 h-3 text-white" />
              </motion.div>
            )}
          </motion.button>
        ))}

        {/* Add Custom Button */}
        <motion.button
          type="button"
          onClick={() => setShowCustomInput(true)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="p-3 rounded-lg border-2 border-dashed border-neutral-light bg-white text-neutral-gray hover:border-primary-brown/50 transition-all duration-200 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span className="font-secondary text-sm font-medium">Add Custom</span>
        </motion.button>
      </div>

      {/* Custom Input */}
      <AnimatePresence>
        {showCustomInput && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-blue-50 border border-blue-200 rounded-lg p-4"
          >
            <label className="font-secondary text-sm font-medium text-blue-800 mb-2 block">
              Add Custom Dietary Restriction
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={customRestriction}
                onChange={(e) => setCustomRestriction(e.target.value)}
                placeholder="e.g., No seafood, Low sodium..."
                className="flex-1 p-2 border border-blue-300 rounded focus:border-primary-brown focus:ring-2 focus:ring-primary-brown/20 transition-colors text-primary-dark"
                onKeyPress={(e) => e.key === 'Enter' && handleCustomRestrictionAdd()}
              />
              <button
                type="button"
                onClick={handleCustomRestrictionAdd}
                disabled={!customRestriction.trim()}
                className="bg-primary-brown hover:bg-primary-brown/90 disabled:bg-gray-300 text-white px-4 py-2 rounded font-secondary text-sm font-medium transition-colors"
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowCustomInput(false);
                  setCustomRestriction('');
                }}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded font-secondary text-sm font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Selected Custom Restrictions */}
      {customRestrictions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <p className="font-secondary text-sm font-medium text-primary-dark">Custom Restrictions:</p>
          <div className="flex flex-wrap gap-2">
            {customRestrictions.map((restriction, index) => (
              <motion.span
                key={restriction}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm"
              >
                {restriction}
                <button
                  type="button"
                  onClick={() => handleCustomRestrictionRemove(restriction)}
                  className="hover:bg-orange-200 rounded-full p-0.5 transition-colors"
                >
                  <Plus className="w-3 h-3 rotate-45" />
                </button>
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}

      {/* Selected Count */}
      {selectedRestrictions.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-neutral-gray"
        >
          {selectedRestrictions.length} dietary restriction{selectedRestrictions.length !== 1 ? 's' : ''} selected
        </motion.div>
      )}
    </div>
  );
}