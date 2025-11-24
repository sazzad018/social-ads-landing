import React from 'react';
import { CheckCircle2, User, Phone, Facebook, Star } from 'lucide-react';
import { HERO_FEATURES, TRUST_TEXT, HERO_TITLE_PREFIX, FORM_TITLE, FORM_SUBTITLE } from '../constants';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gray-50/50">
      {/* Top Gradient Overlay */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-orange-50/30 to-transparent pointer-events-none z-0" />

      {/* Grid Pattern with Mask - Adjusted to be smaller and visible only in top half */}
      <div className="absolute top-0 inset-x-0 h-[50vh] pointer-events-none">
        <div 
          className="absolute inset-0 bg-grid-pattern opacity-[0.6]"
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
          }}
        />
      </div>

      {/* Background Gradient Blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col space-y-6 lg:pr-8">
            <span className="inline-block py-1 px-3 rounded-full bg-orange-50 border border-orange-100 text-orange-600 font-medium text-xs tracking-wide w-fit">
              {HERO_TITLE_PREFIX}
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">Facebook Marketing</span> + <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">Website</span> + Ready Business <br />
              Setup – <span className="text-gray-900">সব এক জায়গায়।</span>
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              আমরা শুধু বুস্ট চালাই না, আমরা আপনার ব্যবসার মডেল, দৈনিক বাজেট এবং সেলস ফানেল 
              নিয়ে কাজ করি যেন আপনার প্রতিটি টাকা সঠিক জায়গায় বিনিয়োগ হয় এবং সর্বোচ্চ লাভ 
              নিয়ে আসে।
            </p>

            {/* Feature List */}
            <div className="space-y-3 pt-2">
              {HERO_FEATURES.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-4 pt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                   <img 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover" 
                    src={`https://picsum.photos/100/100?random=${i}`} 
                    alt="User" 
                   />
                ))}
              </div>
              <div className="flex flex-col">
                 <div className="flex text-amber-500 mb-0.5">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-current" />)}
                 </div>
                 <span className="text-gray-600 font-semibold text-sm">
                   {TRUST_TEXT}
                 </span>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {FORM_TITLE}
                </h3>
                <p className="text-gray-500 text-sm">
                  {FORM_SUBTITLE}
                </p>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:bg-white transition-all outline-none"
                    placeholder="আপনার নাম"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:bg-white transition-all outline-none"
                    placeholder="আপনার মোবাইল নাম্বার"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Facebook className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="url"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:bg-white transition-all outline-none"
                    placeholder="আপনার ফেসবুক পেজ লিংক"
                  />
                </div>

                <Button className="w-full py-4 text-lg shadow-orange-200 hover:shadow-orange-300">
                  কনসালটেন্সি নিন
                </Button>
              </form>
            </div>
            
            {/* Decoratiive blur behind form */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-tr from-orange-100 to-amber-50 rounded-2xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;