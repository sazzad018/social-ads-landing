import React from 'react';
import { TEAM_DATA } from '../constants';

const Team: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-4">
            {TEAM_DATA.title}
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed">
            {TEAM_DATA.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_DATA.members.map((member, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/80 via-transparent to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-bold mb-0.5">{member.name}</h3>
                    <p className="text-brand-primary text-sm font-medium">{member.role}</p>
                </div>
              </div>
              
              <div className="p-5 bg-gray-50/50">
                <div className="flex justify-between items-center text-center divide-x divide-gray-200">
                   <div className="flex-1 px-2">
                      <div className="font-bold text-brand-secondary text-lg">{member.experience}</div>
                      <div className="text-[12px] text-gray-500">অভিজ্ঞতা</div>
                   </div>
                   <div className="flex-1 px-2">
                      <div className="font-bold text-brand-primary text-lg">{member.projects}</div>
                      <div className="text-[12px] text-gray-500">প্রজেক্ট</div>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;