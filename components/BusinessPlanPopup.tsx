import React, { useState, useEffect } from 'react';
import { X, TrendingUp, User, Phone } from 'lucide-react';
import Button from './Button';

const BusinessPlanPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    // Show popup after 20 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const adminNumber = "8801798205143";
    const text = `আমি ১.৫-২ লক্ষ টাকা ইনভেস্ট করে পার্টনারশিপ বিজনেস করতে চাই।\n\nআমার নাম: ${name}\nনাম্বার: ${phone}`;
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/${adminNumber}?text=${encodeURIComponent(text)}`, '_blank');
    
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Popup Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300 border-2 border-amber-500">
        
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors z-10 bg-gray-100 rounded-full p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8 pt-10">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 shadow-inner">
              <TrendingUp className="w-8 h-8 text-amber-600" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              পার্টনারশিপ বিজনেস অফার! 🤝
            </h3>
            
            <p className="text-gray-600 text-[15px] leading-relaxed">
              প্রতিদিন লাখ টাকা সেল জেনারেট করতে চান? <br/>
              <span className="font-bold text-amber-600">১.৫ - ২ লক্ষ টাকা বিনিয়োগে</span> আমাদের সাথে বিজনেস শুরু করুন। আমরা গাইডলাইন দিব, আপনি শুধু পরিচালনা করবেন।
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="আপনার নাম"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-gray-50 transition-all"
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="WhatsApp নাম্বার"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-gray-50 transition-all"
                />
              </div>
            </div>

            <Button type="submit" className="w-full py-3 font-bold text-lg shadow-amber-200 hover:shadow-amber-300">
              একসাথে বিজনেস শুরু করুন
            </Button>
          </form>
          
          <p className="text-center text-xs text-gray-400 mt-4">
            সীমিত সময়ের জন্য অফারটি প্রযোজ্য
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessPlanPopup;