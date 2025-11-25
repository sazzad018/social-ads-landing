import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Subtle Background Blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-purple-50/50 rounded-full blur-3xl -z-10 pointer-events-none opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-4">
            {TESTIMONIALS_DATA.title}
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed">
            {TESTIMONIALS_DATA.subtitle}
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.items.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Quote */}
              <p className="text-gray-600 leading-relaxed italic text-[15px] mb-8 flex-grow">
                {item.quote}
              </p>

              {/* Author */}
              <div className="flex items-center mt-auto border-t border-gray-50 pt-5">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-100 mr-4"
                />
                <div>
                  <h4 className="font-bold text-brand-secondary text-base">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;