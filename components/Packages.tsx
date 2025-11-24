import React from 'react';
import { PACKAGES_DATA } from '../constants';
import Button from './Button';
import { 
  Rocket, Palette, Zap, ShieldAlert, Search, Server, Smartphone,
  Package, BarChart3, PieChart, ShoppingCart, TrendingUp, MessageSquare, Trophy,
  Sparkles, Headphones, Lightbulb, Store, Puzzle, Crown, Check
} from 'lucide-react';

const Packages: React.FC = () => {
  // Mapping icons to features manually to match the visual style of the screenshot
  const getIcon = (planIndex: number, featureIndex: number) => {
    const iconProps = { className: "w-4 h-4 mt-1 flex-shrink-0" };
    
    // Standard Plan Icons
    if (planIndex === 0) {
      const icons = [Rocket, Palette, Zap, ShieldAlert, Search, Server, Smartphone];
      const Icon = icons[featureIndex] || Check;
      return <Icon {...iconProps} className={`${iconProps.className} text-orange-500`} />;
    }
    
    // Advanced Plan Icons
    if (planIndex === 1) {
      const icons = [Package, BarChart3, PieChart, ShoppingCart, TrendingUp, MessageSquare, Trophy];
      const Icon = icons[featureIndex] || Check;
      // Icons on the orange background should be white or dark grey depending on contrast. 
      // The text is dark, so let's use dark grey or white icons. 
      // In the image, icons look colorful/dark. Let's use a dark slate color for contrast on amber.
      return <Icon {...iconProps} className={`${iconProps.className} text-slate-800`} />;
    }
    
    // Custom Plan Icons
    if (planIndex === 2) {
      const icons = [Sparkles, Headphones, Lightbulb, Store, Puzzle, Crown];
      const Icon = icons[featureIndex] || Check;
      return <Icon {...iconProps} className={`${iconProps.className} text-orange-500`} />;
    }
    
    return <Check {...iconProps} />;
  };

  return (
    <section id="packages" className="py-16 lg:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
            <span className="text-amber-500">আমাদের ওয়েবসাইট ডেভেলপমেন্টের প্যাকেজ</span> <br />
            <span className="text-amber-500">সমূহ</span>
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed max-w-2xl mx-auto">
            {PACKAGES_DATA.subtitle}
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PACKAGES_DATA.plans.map((plan, planIndex) => (
            <div 
              key={planIndex}
              className={`relative rounded-2xl p-8 transition-all duration-300 h-full flex flex-col ${
                plan.isPopular 
                  ? 'bg-[#F59E0B] shadow-xl transform md:-translate-y-4 border border-amber-400' 
                  : 'bg-white border border-gray-100 shadow-sm hover:shadow-lg'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-amber-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm border border-amber-100">
                    সেরা পছন্দ
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-xl font-bold mb-4 ${plan.isPopular ? 'text-gray-900' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className={`text-2xl lg:text-3xl font-bold ${plan.isPopular ? 'text-gray-900' : 'text-gray-900'}`}>
                  {plan.price}
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    {getIcon(planIndex, idx)}
                    <p className={`text-[14px] leading-relaxed font-medium ${
                      plan.isPopular ? 'text-gray-800' : 'text-gray-600'
                    }`}>
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-auto space-y-3">
                <Button 
                  className={`w-full py-3 text-[15px] ${
                    plan.isPopular 
                      ? 'bg-transparent border-2 border-white/50 text-white hover:bg-white hover:text-amber-600 shadow-none' 
                      : 'bg-white border-2 border-orange-100 text-orange-600 hover:bg-orange-50 shadow-none'
                  }`}
                >
                  এই প্ল্যানটি বেছে নিন
                </Button>
                <div className="text-center">
                  <a href="#" className={`text-sm font-medium hover:underline ${
                    plan.isPopular ? 'text-gray-800' : 'text-gray-500'
                  }`}>
                    ডেমো দেখুন
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Packages;