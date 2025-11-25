import React from 'react';
import { Play, AlertTriangle, ArrowRight, CheckCircle } from 'lucide-react';
import { BUSINESS_LOSS_SECTION_DATA } from '../constants';

const BusinessLossPrevention: React.FC = () => {
  return (
    <section className="py-20 bg-brand-secondary relative overflow-hidden">
      {/* Abstract Shapes for Business Tech Feel */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-medium text-sm mb-6 backdrop-blur-sm">
            <AlertTriangle className="w-4 h-4" />
            <span>সতর্কবার্তা: নতুন উদ্যোক্তাদের জন্য</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {BUSINESS_LOSS_SECTION_DATA.title}
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            {BUSINESS_LOSS_SECTION_DATA.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Professional Video/Image Area */}
          <div className="relative group">
            {/* Glow effect behind video */}
             <div className="absolute -inset-2 bg-gradient-to-r from-brand-primary to-purple-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>
             
             <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-gray-900 aspect-video z-10">
                {/* Thumbnail / Placeholder Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/60 group-hover:bg-gray-900/40 transition-colors">
                   <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:scale-110 group-hover:bg-brand-primary transition-all duration-300 cursor-pointer">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                   </div>
                   <p className="mt-6 text-white/90 font-semibold tracking-wide text-sm bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                     কিভাবে আমরা লস থেকে বাঁচাই?
                   </p>
                </div>
             </div>

             {/* Stat Floating Card - Updated Text for Liability */}
             <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl hidden md:block z-20 animate-in slide-in-from-bottom-5 fade-in duration-700 delay-300">
                <div className="flex items-center gap-3">
                   <div className="bg-green-100 p-2.5 rounded-full">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                   </div>
                   <div>
                      {/* Changed from 100% Risk Free to Proper Planning to avoid false guarantees */}
                      <div className="text-gray-900 font-bold text-lg">সঠিক</div>
                      <div className="text-gray-500 text-xs font-medium">প্ল্যানিং ও শুরু</div>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Side: Process Steps */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-brand-primary pl-4">
              আমাদের "রেডি বিজনেস" প্রসেস
            </h3>

            <div className="space-y-4">
              {BUSINESS_LOSS_SECTION_DATA.steps.map((step, idx) => (
                <div key={step.id} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-brand-primary/30 transition-all duration-300 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-purple-700 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform">
                      {idx + 1}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[17px] mb-1 group-hover:text-brand-primary transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
               <a href="#contact" className="inline-flex items-center gap-2 text-white font-semibold hover:text-brand-primary transition-colors group">
                 <span>আলোচনা শুরু করুন</span>
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BusinessLossPrevention;