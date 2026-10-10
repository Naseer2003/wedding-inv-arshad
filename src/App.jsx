import { useState } from 'react';
import WelcomeEnvelope from './components/WelcomeEnvelope';
import PetalsCanvas from './components/PetalsCanvas';
import Hero from './components/Hero';
import CoupleSection from './components/CoupleSection';
import Events from './components/Events';
import VenueSection from './components/VenueSection';
import Celebration from './components/Celebration';
import ServicesContact from './components/ServicesContact';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import './App.css';

function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [petalsEnabled, setPetalsEnabled] = useState(true);

  return (
    <div className="wedding-app-wrapper">
      {/* 1. Opening Royal Envelope Gate */}
      <WelcomeEnvelope
        isOpen={isEnvelopeOpen}
        onOpen={() => setIsEnvelopeOpen(true)}
      />

      {/* 2. Interactive Background Falling Petals & Sparkles Canvas */}
      <PetalsCanvas enabled={petalsEnabled} />

      {/* Main Website Content */}
      <main className={`wedding-main-body ${isEnvelopeOpen ? 'revealed' : ''}`}>
        <Hero
          onOpenEnvelope={() => setIsEnvelopeOpen(false)}
          petalsEnabled={petalsEnabled}
          onTogglePetals={() => setPetalsEnabled(!petalsEnabled)}
        />

        <div className="site-content-container">
          {/* Couple & Parents Showcase */}
          <CoupleSection />

          {/* Auspicious Events & Ceremonies */}
          <Events />

          {/* Venues, Route Guide & Map Navigation */}
          <VenueSection />

          {/* Form-free Celebration & Petal Shower */}
          <Celebration />

          {/* Services & Contact Section - Just above Footer */}
          <ServicesContact />
        </div>

        <Footer />
        <MobileNav />
      </main>
    </div>
  );
}

export default App;
