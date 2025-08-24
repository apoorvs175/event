import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import EventInfoSection from './components/EventInfoSection';
import EntryConditionsSection from './components/EntryConditionsSection';
import DownloadSection from './components/DownloadSection';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <EventInfoSection />
        <EntryConditionsSection />
        <DownloadSection />
      </main>
    </div>
  );
}

export default App;