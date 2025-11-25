
import React from 'react';
import { ShieldCheck, Ban, Lock } from 'lucide-react';
import { FAKE_ORDER_DATA } from '../constants';

const FakeOrderPrevention: React.FC = () => {
  return (
    <section className="bg-white border-t border-gray-100 py-10 relative overflow-hidden">
        {/* Decorative background element */}
       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
       
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="bg-red-50/50 rounded-2xl p-6 md:p-8 border border-red-100 flex flex-col md:flex-row items-center gap-6 md:gap-8 relative overflow-hidden">
            {/* Icon Block */}
            <div className="flex-shrink-0 relative">
               <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center relative z-10">
                  <ShieldCheck className="w-8 h-8 text-red-600" />
               </div>
               <div className="absolute inset-0 bg-red-200 blur-xl opacity-50 animate-pulse"></div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
               <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                   <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                     {FAKE_ORDER_DATA.title}
                   </h3>
                   <Ban className="w-5 h-5 text-red-500 hidden md:block" />
               </div>
               <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                 {FAKE_ORDER_DATA.subtitle}
               </p>
            </div>

            {/* Optional: Small visual tag */}
            <div className="hidden md:block">
               <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-red-100">
                  <Lock className="w-4 h-4 text-green-500" />
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Secured</span>
               </div>
            </div>
         </div>
       </div>
    </section>
  );
};

export default FakeOrderPrevention;
