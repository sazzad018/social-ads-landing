import React from 'react';
import { PROCESS_DATA } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {PROCESS_DATA.title}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {PROCESS_DATA.subtitle}
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[20px] left-0 w-full h-0.5 border-t-2 border-dashed border-orange-200 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_DATA.steps.map((step) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
                
                {/* Number Badge */}
                <div className="w-10 h-10 rounded-full bg-orange-50 border-2 border-orange-200 flex items-center justify-center text-orange-600 font-bold text-lg shadow-sm mb-6 bg-white">
                  {step.id}
                </div>

                {/* Card Content */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full w-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;