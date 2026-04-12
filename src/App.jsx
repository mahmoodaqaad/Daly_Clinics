import React from 'react';
import Navbar from './layout/Navbar';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Services from './sections/Services';
import EmergencyCTA from './sections/EmergencyCTA';
import Reviews from './sections/Reviews';
import Contact from './sections/Contact';
import Footer from './layout/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <EmergencyCTA />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
