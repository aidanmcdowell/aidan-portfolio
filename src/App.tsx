import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { BentoGrid } from './components/BentoGrid';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#090a0f] text-zinc-100 flex flex-col relative grid-bg">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <MetricsBar />
        <BentoGrid />
        <TechStack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
