import React from 'react';
import { Phone, MapPin, Facebook, Instagram, Globe, MessageCircle } from 'lucide-react';
import { FOOTER_DATA, CONSULTATION_CTA_DATA } from '../constants';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F3F6F8] relative pt-40 pb-10">
       
       {/* CTA Box - Floating Top */}
       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4">
          <div className="bg-[#0B1120] rounded-2xl p-8 md:p-12 text-center shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {CONSULTATION_CTA_DATA.title}
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-8">
                {CONSULTATION_CTA_DATA.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="w-full sm:w-auto px-8 py-3 text-base">
                  {CONSULTATION_CTA_DATA.primaryButton}
                </Button>
                <button className="w-full sm:w-auto px-8 py-3 rounded-md font-semibold text-white border border-gray-600 hover:bg-gray-800 transition-colors text-base">
                  {CONSULTATION_CTA_DATA.secondaryButton}
                </button>
              </div>
          </div>
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              SocialAds <span className="text-orange-600">Expert</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {FOOTER_DATA.about.description}
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded bg-gray-200 hover:bg-blue-600 hover:text-white text-gray-500 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded bg-gray-200 hover:bg-green-500 hover:text-white text-gray-500 transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded bg-gray-200 hover:bg-gray-800 hover:text-white text-gray-500 transition-all">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">গুরুত্বপূর্ণ লিংক</h4>
            <ul className="space-y-3">
              {FOOTER_DATA.links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-gray-500 hover:text-orange-600 text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">যোগাযোগ</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-pink-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-500 text-sm">{FOOTER_DATA.contact.address}</span>
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-500 text-sm">WhatsApp: {FOOTER_DATA.contact.whatsapp}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright - Optional based on screenshot, keeping it minimal if needed, or implicit */}
      </div>
    </footer>
  );
};

export default Footer;