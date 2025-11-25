import React from 'react';
import { PACKAGES_DATA, DEMO_LINKS } from '../constants';
import Button from './Button';
import { 
  Rocket, Palette, Zap, ShieldAlert, Search, Server, Smartphone,
  Package, BarChart3, PieChart, ShoppingCart, TrendingUp, MessageSquare, Trophy,
  Sparkles, Headphones, Lightbulb, Store, Puzzle, Crown, Check, Eye
} from 'lucide-react';

const Packages: React.FC = () => {
  // Mapping icons to features manually to match the visual style of the screenshot
  const getIcon = (planIndex: number, featureIndex: number) => {
    const iconProps = { className: "w-4 h-4 mt-1 flex-shrink-0" };
    
    // Standard Plan Icons
    if (planIndex === 0) {
      const icons = [Rocket, Palette, Zap, ShieldAlert, Search, Server, Smartphone];
      const Icon = icons[featureIndex] || Check;
      return <Icon {...iconProps} className={`${iconProps.className} text-brand-primary`} />;
    }
    
    // Advanced Plan Icons
    if (planIndex === 1) {
      const icons = [Package, BarChart3, PieChart, ShoppingCart, TrendingUp, MessageSquare, Trophy];
      const Icon = icons[featureIndex] || Check;
      // Icons on the active background
      return <Icon {...iconProps} className={`${iconProps.className} text-brand-secondary`} />;
    }
    
    // Custom Plan Icons
    if (planIndex === 2) {
      const icons = [Sparkles, Headphones, Lightbulb, Store, Puzzle, Crown];
      const Icon = icons[featureIndex] || Check;
      return <Icon {...iconProps} className={`${iconProps.className} text-brand-primary`} />;
    }
    
    return <Check {...iconProps} />;
  };

  const handlePlanSelection = (planName: string) => {
    const adminNumber = "8801718205643";
    const text = `আমি "${planName}" প্যাকেজটি সম্পর্কে বিস্তারিত জানতে চাই এবং এটি নিতে আগ্রহী।`;
    window.open(`https://wa.me/${adminNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="packages" className="py-16 lg:py-24 bg-gray-50/50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-4 text-center">
            <span className="text-brand-primary">আমাদের ওয়েবসাইট ডেভেলপমেন্টের প্যাকেজ</span> <br />
            <span className="text-brand-primary">সমূহ</span>
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed max-w-2xl mx-auto">
            {PACKAGES_DATA.subtitle}
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-16">
          {PACKAGES_DATA.plans.map((plan, planIndex) => (
            <div 
              key={planIndex}
              className={`relative rounded-2xl p-8 transition-all duration-300 h-full flex flex-col ${
                plan.isPopular 
                  ? 'bg-brand-primary shadow-xl transform md:-translate-y-4 border border-purple-400' 
                  : 'bg-white border border-gray-100 shadow-sm hover:shadow-lg'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-brand-secondary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm border border-purple-100">
                    সেরা পছন্দ
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-xl font-bold mb-4 ${plan.isPopular ? 'text-brand-secondary' : 'text-brand-secondary'}`}>
                  {plan.name}
                </h3>
                <div className={`text-2xl lg:text-3xl font-bold ${plan.isPopular ? 'text-brand-secondary' : 'text-brand-secondary'}`}>
                  {plan.price}
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    {getIcon(planIndex, idx)}
                    <p className={`text-[14px] leading-relaxed font-medium ${
                      plan.isPopular ? 'text-brand-secondary' : 'text-gray-600'
                    }`}>
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-auto space-y-3">
                <Button 
                  onClick={() => handlePlanSelection(plan.name)}
                  className={`w-full py-3 text-[15px] ${
                    plan.isPopular 
                      ? 'bg-brand-secondary text-white hover:bg-brand-secondary/90 shadow-none' 
                      : 'bg-white border-2 border-purple-100 text-brand-secondary hover:bg-purple-50 shadow-none'
                  }`}
                >
                  এই প্ল্যানটি বেছে নিন
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* New Demo Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-sm text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-secondary mb-3">
               আমাদের তৈরি কিছু ডেমো ওয়েবসাইট দেখুন
            </h3>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto text-sm">
               আমরা বিভিন্ন ক্যাটাগরির জন্য প্রফেশনাল এবং হাই-কনভার্টিং ওয়েবসাইট তৈরি করি। নিচের বাটনগুলোতে ক্লিক করে কিছু নমুনা দেখুন।
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {DEMO_LINKS.map((demo, idx) => (
                <a
                  key={idx}
                  href={demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 bg-gray-50 text-gray-700 font-medium hover:border-brand-primary hover:bg-white hover:text-brand-primary hover:shadow-md transition-all duration-200 group"
                >
                   <Eye className="w-4 h-4 text-gray-400 group-hover:text-brand-primary transition-colors" />
                   <span>{demo.label}</span>
                </a>
              ))}
            </div>
            
            <p className="mt-6 text-xs text-gray-400 italic">
               * ডেমো লিংকগুলো শুধুমাত্র ডিজাইনের ধারণার জন্য দেওয়া হয়েছে।
            </p>
        </div>

      </div>
    </section>
  );
};

export default Packages;