import React from 'react';
import { STATS_DATA } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-secondary mb-3">
            {STATS_DATA.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {STATS_DATA.subtitle}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.items.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-4xl font-bold text-brand-primary mb-2">
                {item.count}
              </div>
              <div className="text-gray-600 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;