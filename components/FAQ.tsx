import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_DATA } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-4">
            {FAQ_DATA.title}
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed">
             {FAQ_DATA.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.items.map((item, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 ${
                openIndex === index ? 'bg-purple-50/50 ring-1 ring-purple-100' : 'bg-white'
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-bold text-[16px] pr-4 ${openIndex === index ? 'text-brand-primary' : 'text-gray-900'}`}>
                  {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-5 pt-0">
                  <p className="text-gray-600 text-[15px] leading-relaxed border-t border-gray-100 pt-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;