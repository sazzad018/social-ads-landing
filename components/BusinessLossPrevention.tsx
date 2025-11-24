import React from 'react';
import { Play, AlertOctagon, Share2, Clock } from 'lucide-react';
import { BUSINESS_LOSS_SECTION_DATA } from '../constants';

const BusinessLossPrevention: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start gap-4 mb-8 lg:mb-12 max-w-5xl mx-auto">
          <div className="flex-shrink-0 mt-2 bg-red-100 p-2 rounded-full">
            <AlertOctagon className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {BUSINESS_LOSS_SECTION_DATA.title}
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              {BUSINESS_LOSS_SECTION_DATA.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Video */}
          <div className="relative">
             <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-gray-900 aspect-video group cursor-pointer">
              {/* Thumbnail Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                 <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                 
                 {/* Play Button */}
                 <div className="relative z-10 w-20 h-14 bg-red-600 rounded-xl flex items-center justify-center group-hover:bg-red-700 transition-all duration-300 shadow-lg group-hover:scale-110">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                 </div>
              </div>
              
              {/* Fake UI elements for YouTube look */}
              <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start bg-gradient-to-b from-black/60 to-transparent">
                 <div className="text-white font-medium text-lg drop-shadow-md truncate pr-4">
                   রেডি বিজনেস সেটআপ
                 </div>
                 <div className="flex space-x-4 text-white/90">
                    <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-white">
                      <Clock className="w-5 h-5" />
                      <span className="text-[10px]">Watch later</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-white">
                      <Share2 className="w-5 h-5" />
                      <span className="text-[10px]">Share</span>
                    </div>
                 </div>
              </div>

               <div className="absolute bottom-4 left-4">
                 <div className="bg-black/70 hover:bg-black/90 text-white text-xs px-3 py-2 rounded-md font-medium flex items-center space-x-2 transition-colors border border-white/20">
                    <span className="font-bold">Watch on</span>
                    <span className="font-bold flex items-center"><Play className="w-3 h-3 fill-white mr-0.5" /> YouTube</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Right: List */}
          <div className="flex flex-col space-y-4">
            {BUSINESS_LOSS_SECTION_DATA.steps.map((step) => (
              <div key={step.id} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-600 font-bold text-sm">
                  {step.id}
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold mb-1 text-[15px]">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 lg:mt-10 text-center">
            <p className="text-gray-500 italic text-sm">
                {BUSINESS_LOSS_SECTION_DATA.footerNote}
            </p>
        </div>

      </div>
    </section>
  );
};

export default BusinessLossPrevention;