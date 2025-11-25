
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import Process from './components/Process';
import MarketingSolution from './components/MarketingSolution';
import FakeOrderPrevention from './components/FakeOrderPrevention';
import WebsiteSolution from './components/WebsiteSolution';
import Packages from './components/Packages';
import BusinessLossPrevention from './components/BusinessLossPrevention';
import SuccessStories from './components/SuccessStories';
import Testimonials from './components/Testimonials';
import Founder from './components/Founder';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import LeadPopup from './components/LeadPopup';
import BusinessPlanPopup from './components/BusinessPlanPopup';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Stats />
        <Process />
        <MarketingSolution />
        <FakeOrderPrevention />
        <WebsiteSolution />
        <Packages />
        <BusinessLossPrevention />
        <SuccessStories />
        <Testimonials />
        <Founder />
        <Team />
        <FAQ />
      </main>
      <Footer />
      <LeadPopup />
      <BusinessPlanPopup />
    </div>
  );
};

export default App;
