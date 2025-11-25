
import React from 'react';
import { Check, Play, Clock, Share2 } from 'lucide-react';
import { MARKETING_SOLUTION_DATA, FB_PACKAGES_DATA } from '../constants';

const MarketingSolution: React.FC = () => {
  const handleBooking = (planName: string) => {
    const adminNumber = "8801718205643";
    const text = `আমি ফেসবুক মার্কেটিং এর "${planName}" প্যাকেজটি নিতে আগ্রহী। বিস্তারিত জানতে চাই।`;
    window.open(`https://wa.me/${adminNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50 border-t border-gray-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Content Section with Video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="text-left">
             <div className="inline-block mb-4">
               <span className="bg-purple-100 text-brand-secondary px-6 py-2 rounded-full text-sm font-bold border border-purple-200 shadow-sm">
                 {MARKETING_SOLUTION_DATA.badge}
               </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-6 leading-tight">
              {MARKETING_SOLUTION_DATA.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {MARKETING_SOLUTION_DATA.description}
            </p>

            <div className="space-y-4">
              {MARKETING_SOLUTION_DATA.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                   <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center">
                     <Check className="w-3.5 h-3.5 text-brand-primary" strokeWidth={3} />
                   </div>
                   <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Video Content */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-brand-secondary aspect-video group cursor-pointer transform hover:scale-[1.02] transition-transform duration-300">
              {/* Thumbnail Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-brand-secondary flex items-center justify-center">
                 <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                 
                 {/* Play Button */}
                 <div className="relative z-10 w-20 h-14 bg-red-600 rounded-xl flex items-center justify-center group-hover:bg-red-700 transition-all duration-300 shadow-lg group-hover:scale-110">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                 </div>
              </div>
              
              {/* Fake UI elements for YouTube look */}
              <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start bg-gradient-to-b from-black/60 to-transparent">
                 <div className="text-white font-medium text-lg drop-shadow-md truncate pr-4">
                   ফুল ফানেল ফেসবুক মার্কেটিং সল্যুশন
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

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {FB_PACKAGES_DATA.plans.map((plan, index) => (
                <div 
                key={index} 
                className={`rounded-2xl p-8 border transition-all duration-300 relative flex flex-col h-full ${
                    plan.highlight 
                    ? 'bg-brand-secondary text-white border-gray-800 shadow-2xl scale-100 md:scale-105 z-10 ring-4 ring-brand-primary/20' 
                    : 'bg-white border-gray-200 text-gray-900 shadow-sm hover:shadow-lg'
                }`}
                >
                {plan.highlight && (
                    <div className="absolute top-0 right-0 bg-brand-primary text-brand-secondary text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl shadow-sm">
                    POPULAR CHOICE
                    </div>
                )}

                <div className="mb-6 border-b border-gray-100/10 pb-6">
                    <h3 className={`text-xl font-bold mb-3 ${plan.highlight ? 'text-white' : 'text-brand-secondary'}`}>
                    {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-3">
                    <span className={`text-4xl font-bold ${plan.highlight ? 'text-brand-primary' : 'text-brand-secondary'}`}>
                        {plan.price}
                    </span>
                    <span className={`text-sm font-medium ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                        {plan.unit}
                    </span>
                    </div>
                    <div className={`inline-block text-sm font-semibold py-1.5 px-3 rounded-md ${
                        plan.highlight ? 'bg-gray-800 text-brand-primary' : 'bg-purple-50 text-brand-secondary'
                    }`}>
                        {plan.subPrice}
                    </div>
                </div>

                <p className={`text-[15px] leading-relaxed mb-8 ${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                    {plan.description}
                </p>

                <div className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                        <div className={`mt-1 rounded-full p-0.5 flex-shrink-0 ${plan.highlight ? 'bg-brand-primary/20' : 'bg-purple-100'}`}>
                        <Check className={`w-3.5 h-3.5 ${plan.highlight ? 'text-brand-primary' : 'text-brand-secondary'}`} strokeWidth={3} />
                        </div>
                        <span className={`text-sm font-medium ${plan.highlight ? 'text-gray-200' : 'text-gray-700'}`}>
                        {feature}
                        </span>
                    </div>
                    ))}
                </div>

                <button
                    onClick={() => handleBooking(plan.name)}
                    className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-200 text-[15px] ${
                    plan.highlight 
                        ? 'bg-brand-primary text-brand-secondary hover:bg-opacity-90 shadow-lg shadow-purple-900/30' 
                        : 'bg-white border-2 border-purple-100 text-brand-secondary hover:bg-purple-50 hover:border-purple-200'
                    }`}
                >
                    {plan.buttonText}
                </button>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default MarketingSolution;
