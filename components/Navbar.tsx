import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import Button from './Button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Handle "top" scroll for logo or empty href
    if (href === '#' || href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#" 
              className="text-2xl font-bold text-brand-secondary cursor-pointer" 
              onClick={(e) => handleScroll(e, '#')}
            >
              SocialAds <span className="text-brand-primary">Expert</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-600 hover:text-brand-primary font-medium transition-colors text-[15px]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>
              <Button>আলোচনা করুন</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-gray-500 hover:text-gray-700 p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-brand-primary" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg animate-in slide-in-from-top-5">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-purple-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, '#contact')}
                className="block w-full"
              >
                <Button className="w-full justify-center">আলোচনা করুন</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;