import React from 'react';
import { Check, Play, Share2, Clock } from 'lucide-react';
import { MARKETING_SOLUTION_DATA } from '../constants';

const MarketingSolution: React.FC = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50 border-t border-gray-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Badge */}
        <div className="flex justify-center mb-10">
           <span className="bg-orange-100 text-orange-800 px-6 py-2 rounded-full text-sm font-bold border border-orange-200 shadow-sm">
             {MARKETING_SOLUTION_DATA.badge}
           </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {MARKETING_SOLUTION_DATA.title}
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {MARKETING_SOLUTION_DATA.description}
            </p>

            {/* Key Points Grid Box */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-orange-200 rounded-lg overflow-hidden mb-8 bg-white divide-y sm:divide-y-0 sm:divide-x divide-orange-100">
              {MARKETING_SOLUTION_DATA.keyPoints.map((point, idx) => (
                <div key={idx} className="p-4 flex items-center justify-center text-center hover:bg-orange-50/50 transition-colors">
                  <div className="h-full flex items-center">
                    {idx === 0 && <span className="w-1 h-8 bg-orange-500 rounded-full mr-3 sm:hidden"></span>}
                    <span className="text-[15px] font-semibold text-gray-800">{point}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Checklist */}
            <div className="space-y-4 mb-8">
              {MARKETING_SOLUTION_DATA.features.map((feature, idx) => (
                <div key={idx} className="flex items-start group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                        <Check className="w-3 h-3 text-orange-600" strokeWidth={3} />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700 text-[15px] font-medium">{feature}</p>
                </div>
              ))}
            </div>

            {/* Note Box */}
            <div className="bg-orange-50/50 border-l-4 border-orange-500 p-5 rounded-r-lg">
              <p className="text-sm text-gray-800 font-medium">
                <span className="font-bold text-orange-700">বিশেষ দ্রষ্টব্য:</span> {MARKETING_SOLUTION_DATA.note.replace('বিশেষ দ্রষ্টব্য:', '')}
              </p>
            </div>
          </div>

          {/* Right Video Content */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-900 aspect-video group cursor-pointer group">
              {/* Thumbnail Placeholder - Simulated YouTube Player */}
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
                   ফুল ফানেল মার্কেটিং স্ট্র্যাটেজি
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
            <p className="text-center text-sm text-gray-500 mt-4 font-medium">
              {MARKETING_SOLUTION_DATA.videoCaption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSolution;