import React from 'react';
import { Target, Users, BarChart3 } from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../constants';

const icons = [Target, Users, BarChart3];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {WHY_CHOOSE_US_DATA.title}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {WHY_CHOOSE_US_DATA.subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_CHOOSE_US_DATA.cards.map((card, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
              >
                {/* Icon Circle */}
                <div className="mx-auto w-16 h-16 rounded-full bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;