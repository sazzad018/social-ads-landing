
import React from 'react';
import { Check, Info, TrendingUp, DollarSign } from 'lucide-react';
import { FB_PACKAGES_DATA } from '../constants';
import Button from './Button';

const FacebookPackages: React.FC = () => {
  const handleBooking = (planName: string) => {
    const adminNumber = "8801718205643";
    const text = `আমি ফেসবুক মার্কেটিং এর "${planName}" প্যাকেজটি নিতে আগ্রহী। বিস্তারিত জানতে চাই।`;
    window.open(`https://wa.me/${adminNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            {FB_PACKAGES_DATA.title}
          </h2>
          <p className="text-gray-600">
            {FB_PACKAGES_DATA.subtitle}
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {FB_PACKAGES_DATA.plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 border transition-all duration-300 relative flex flex-col h-full ${
                plan.highlight 
                  ? 'bg-gray-900 text-white border-gray-800 shadow-xl scale-100 md:scale-105 z-10' 
                  : 'bg-white border-gray-200 text-gray-900 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-3xl font-bold ${plan.highlight ? 'text-orange-400' : 'text-orange-600'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.unit}
                  </span>
                </div>
                <div className={`mt-2 text-sm font-medium py-1 px-2 rounded w-fit ${
                    plan.highlight ? 'bg-gray-800 text-orange-300' : 'bg-orange-50 text-orange-700'
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
                    <div className={`mt-1 rounded-full p-0.5 ${plan.highlight ? 'bg-orange-500/20' : 'bg-orange-100'}`}>
                       <Check className={`w-3.5 h-3.5 ${plan.highlight ? 'text-orange-400' : 'text-orange-600'}`} strokeWidth={3} />
                    </div>
                    <span className={`text-sm font-medium ${plan.highlight ? 'text-gray-200' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleBooking(plan.name)}
                className={`w-full py-3.5 rounded-lg font-bold text-center transition-all duration-200 ${
                  plan.highlight 
                    ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white hover:from-orange-600 hover:to-amber-700 shadow-lg shadow-orange-900/20' 
                    : 'bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200'
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

export default FacebookPackages;
