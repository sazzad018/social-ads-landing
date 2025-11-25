import React, { useState, useEffect } from 'react';
import { CheckCircle2, User, Phone, Facebook, Star } from 'lucide-react';
import { HERO_FEATURES, TRUST_TEXT, HERO_TITLE_PREFIX, FORM_TITLE, FORM_SUBTITLE } from '../constants';
import Button from './Button';

const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pageLink: ''
  });

  const [activeHeadline, setActiveHeadline] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Initial delay of 2 seconds before starting the rotation cycle
    const initialTimeout = setTimeout(() => {
       startRotation();
    }, 2000);

    let interval: ReturnType<typeof setInterval>;

    const startRotation = () => {
      // Rotate every 5 seconds after the first change
      setIsAnimating(true);
      setTimeout(() => {
        setActiveHeadline(1);
        setIsAnimating(false);
      }, 500);

      interval = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setActiveHeadline((prev) => (prev === 0 ? 1 : 0));
          setIsAnimating(false);
        }, 500);
      }, 5000);
    };

    return () => {
      clearTimeout(initialTimeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const adminNumber = "8801718205643";
    const text = `আমি ফ্রি কনসালটেন্সি নিতে চাই।\n\nনাম: ${formData.name}\nমোবাইল: ${formData.phone}\nপেজ লিংক: ${formData.pageLink}`;
    window.open(`https://wa.me/${adminNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative w-full overflow-hidden bg-gray-50/50 scroll-mt-24">
      {/* Top Gradient Overlay */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-purple-50/30 to-transparent pointer-events-none z-0" />

      {/* Grid Pattern with Mask */}
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
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-brand-primary rounded-full blur-3xl opacity-20 -z-10 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col space-y-6 lg:pr-8">
            <span className="inline-block py-1 px-3 rounded-full bg-purple-50 border border-purple-100 text-brand-secondary font-medium text-xs tracking-wide w-fit">
              {HERO_TITLE_PREFIX}
            </span>
            
            <div className="min-h-[220px] sm:min-h-[200px] lg:min-h-[240px] flex items-center">
              <h1 
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-secondary leading-tight transition-opacity duration-500 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
              >
                {activeHeadline === 0 ? (
                  <>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-secondary to-brand-primary">Facebook Marketing</span> + <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-secondary to-brand-primary">Website</span> + Ready Business <br />
                    Setup – <span className="text-gray-900">সব এক জায়গায়।</span>
                  </>
                ) : (
                  <>
                    <span className="block text-xl sm:text-2xl text-gray-600 font-medium mb-3 leading-snug">
                      আপনার বাজেট কি মাসে ২-৩ লক্ষ টাকা?
                    </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-purple-600 drop-shadow-sm">
                      দিচ্ছি সেল গ্যারান্টি!
                    </span> <br />
                    <span className="text-brand-secondary text-xl sm:text-2xl lg:text-3xl mt-2 block leading-snug">
                      তৈরি হবে <span className="text-brand-secondary border-b-4 border-brand-primary/40">জিরো থেকে প্রফিটেবল বিজনেস সিস্টেম</span>
                    </span>
                  </>
                )}
              </h1>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              আপনি এখানে এসেছেন মানে আপনার সেলস নিয়ে সমস্যা হচ্ছে। যদি প্রতিদিন লাখ টাকার প্রোডাক্ট বিক্রি করতে চান, তবে আপনাকে আমাদের গাইডলাইন এবং স্ট্র্যাটেজি ফলো করে কাজ করতে হবে।
            </p>

            {/* Feature List */}
            <div className="space-y-3 pt-2">
              {HERO_FEATURES.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-secondary flex-shrink-0" />
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
                 <div className="flex text-brand-primary mb-0.5">
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
                <h3 className="text-2xl font-bold text-brand-secondary mb-3">
                  {FORM_TITLE}
                </h3>
                <p className="text-gray-500 text-sm">
                  {FORM_SUBTITLE}
                </p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-brand-primary focus:border-transparent focus:bg-white transition-all outline-none"
                    placeholder="আপনার নাম"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-brand-primary focus:border-transparent focus:bg-white transition-all outline-none"
                    placeholder="আপনার মোবাইল নাম্বার"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Facebook className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="url"
                    name="pageLink"
                    value={formData.pageLink}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-brand-primary focus:border-transparent focus:bg-white transition-all outline-none"
                    placeholder="আপনার ফেসবুক পেজ লিংক"
                  />
                </div>

                <Button type="submit" className="w-full py-4 text-lg shadow-purple-200 hover:shadow-purple-300">
                  কনসালটেন্সি নিন
                </Button>
              </form>
            </div>
            
            {/* Decoratiive blur behind form */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-tr from-brand-primary/20 to-brand-secondary/5 rounded-2xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;