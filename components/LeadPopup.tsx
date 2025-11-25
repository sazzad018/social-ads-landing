import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Send } from 'lucide-react';
import Button from './Button';

const LeadPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState('');

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      // Optional: Check if user has already seen it in this session to avoid annoyance
      // if (!sessionStorage.getItem('popupSeen')) {
        setIsOpen(true);
        // sessionStorage.setItem('popupSeen', 'true');
      // }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Admin WhatsApp Number
    const adminNumber = "8801798205143"; // Added 88 for BD country code
    
    // Construct the message
    const text = `আমি ১০০% সেল গ্যারান্টি অফারটি সম্পর্কে জানতে চাই। শর্ত মেনে কাজ করতে আগ্রহী। আমার নাম্বার: ${phone}`;
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${adminNumber}?text=${encodeURIComponent(text)}`;
    
    // Redirect
    window.open(whatsappUrl, '_blank');
    
    // Close popup after submit
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Popup Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Header Background */}
        <div className="bg-gradient-to-r from-brand-secondary to-purple-800 p-6 text-center relative">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors bg-white/10 rounded-full p-1"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-white font-bold text-xl md:text-2xl leading-tight">
            ফেসবুক মার্কেটিং এ <br/>
            <span className="text-brand-primary">১০০% সেল গ্যারান্টি</span>
          </h3>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8">
          <p className="text-gray-600 text-center mb-6 text-[15px] leading-relaxed">
            যদি আমাদের শর্ত মেনে কাজ করেন, তবে আমরা সেল গ্যারান্টি দিচ্ছি। বিস্তারিত জানতে আপনার WhatsApp নাম্বার দিন।
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                WhatsApp নাম্বার
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="017XXXXXXXX"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all outline-none bg-gray-50"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full py-3 flex items-center justify-center gap-2 text-[16px]"
            >
              <span>সাবমিট করুন</span>
              <Send className="w-4 h-4" />
            </Button>
          </form>
          
          <p className="text-center text-xs text-gray-400 mt-4">
            আপনার তথ্য আমাদের কাছে নিরাপদ থাকবে।
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadPopup;