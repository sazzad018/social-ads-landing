import React from 'react';
import { FOUNDER_DATA } from '../constants';
import Button from './Button';

const Founder: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Left: Image */}
            <div className="relative h-96 md:h-full">
              <img 
                src={FOUNDER_DATA.image} 
                alt={FOUNDER_DATA.name}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
              <div className="absolute bottom-6 left-6 text-white md:hidden">
                <h3 className="text-2xl font-bold">{FOUNDER_DATA.name}</h3>
                <p className="opacity-90">{FOUNDER_DATA.designation}</p>
              </div>
            </div>

            {/* Right: Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {FOUNDER_DATA.title}
              </h2>
              
              <p className="text-gray-600 mb-8 leading-relaxed text-[15px] lg:text-base">
                {FOUNDER_DATA.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 border-t border-b border-gray-100 py-6">
                {FOUNDER_DATA.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl lg:text-2xl font-bold text-orange-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs lg:text-sm text-gray-500 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="hidden md:block mb-8">
                <h3 className="text-xl font-bold text-gray-900">{FOUNDER_DATA.name}</h3>
                <p className="text-sm text-gray-500">{FOUNDER_DATA.designation}</p>
              </div>

              <Button className="w-full sm:w-auto shadow-orange-200 hover:shadow-orange-300">
                {FOUNDER_DATA.buttonText}
              </Button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Founder;