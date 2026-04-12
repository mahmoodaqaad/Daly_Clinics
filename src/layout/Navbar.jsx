import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import {  AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'glass-nav' : 'nav-padding'}`}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="logo-box">D</div>
          <span className="brand" style={{fontSize: '1.25rem', color: 'var(--primary)'}}>عيادات دالي</span>
        </div>

        {/* Desktop Menu */}
        <div className="nav-links md-flex">
          <a href="#home">الرئيسية</a>
          <a href="#services">خدماتنا</a>
          <a href="#reviews">آراء المرضى</a>
          <a href="#contact">اتصل بنا</a>
        </div>

        <div className="md-flex items-center gap-4">
          <a href="tel:+962790000000" className="btn-primary">
            <Phone size={18} />
            <span className="en">+962 7 9000 0000</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="hidden" style={{display: isMenuOpen ? 'none' : 'block'}} onClick={() => setIsMenuOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="hidden"
            style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'white', zIndex: 1100, display: 'flex', flexDirection: 'column', padding: '2rem'}}
          >
            <div className="flex justify-between items-center mb-12">
              <span className="brand text-xl">عيادات دالي</span>
              <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-6 text-2xl font-bold">
              <a href="#home" onClick={() => setIsMenuOpen(false)}>الرئيسية</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)}>خدماتنا</a>
              <a href="#reviews" onClick={() => setIsMenuOpen(false)}>آراء المرضى</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>اتصل بنا</a>
              <a href="tel:+962790000000" className="btn-cta justify-center mt-12">
                <Phone size={24} />
                إتصل الآن
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
