import React from 'react';
import { SUCCESS_STORIES_DATA } from '../constants';

const SuccessStories: React.FC = () => {
  return (
    <section id="case-studies" className="py-16 lg:py-24 bg-white border-t border-gray-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-4">
            {SUCCESS_STORIES_DATA.title}
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed">
            {SUCCESS_STORIES_DATA.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {SUCCESS_STORIES_DATA.stories.map((story, index) => (
             <div key={index} className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-brand-secondary mb-6">{story.name}</h3>

                <div className="mb-5">
                   <h4 className="text-brand-primary font-bold mb-2 text-[15px]">সমস্যা ছিল</h4>
                   <p className="text-gray-600 text-sm leading-relaxed">{story.problem}</p>
                </div>

                <div className="mb-8">
                   <h4 className="text-brand-primary font-bold mb-2 text-[15px]">সমাধান করা হয়েছে</h4>
                   <p className="text-gray-600 text-sm leading-relaxed">{story.solution}</p>
                </div>

                <div className="border-t border-gray-100 pt-6">
                   <h4 className="font-bold text-gray-900 mb-4 text-[15px]">ফলাফল</h4>
                   <div className="grid grid-cols-3 gap-2 text-center">
                      {story.results.map((result, idx) => (
                        <div key={idx}>
                           <div className="text-brand-secondary font-bold text-xl lg:text-2xl mb-1">{result.value}</div>
                           <div className="text-gray-500 text-[10px] leading-tight font-medium">{result.label}</div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;