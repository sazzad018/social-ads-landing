import React from 'react';
import { Globe, Check, Play, Clock, Share2 } from 'lucide-react';
import { WEBSITE_SOLUTION_DATA } from '../constants';

const WebsiteSolution: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Badge */}
        <div className="flex justify-center mb-12">
           <span className="bg-purple-100 text-purple-700 px-6 py-2 rounded-full text-sm font-bold border border-purple-200 shadow-sm">
             {WEBSITE_SOLUTION_DATA.badge}
           </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 p-2 rounded-full">
                    <Globe className="w-6 h-6 text-brand-primary" />
                </div>
                <h2 className="text-3xl lg:text-3xl font-bold text-brand-secondary leading-tight">
                {WEBSITE_SOLUTION_DATA.title}
                </h2>
            </div>
            
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {WEBSITE_SOLUTION_DATA.description}
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WEBSITE_SOLUTION_DATA.features.map((feature, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                         <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 text-brand-primary" strokeWidth={3} />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Video Content */}
          <div className="relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-brand-secondary aspect-video group cursor-pointer">
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
                   হাই কনভার্টিং ওয়েবসাইট স্ট্র্যাটেজি
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
        </div>
      </div>
    </section>
  );
};

export default WebsiteSolution;