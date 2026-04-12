import React from 'react';
import { Calendar, MessageCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <header id="home" className="hero">
      <div className="container grid md-grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            عيادة <span className="gradient-text">دالي لطب الأسنان</span> <br />
            عناية فائقة وابتسامة مثالية
          </h1>
          <p className="hero-p">
            نقدم لكم في عيادات دالي أحدث تقنيات طب الأسنان بإشراف طاقم طبي متميز. تخصصنا في حالات الطوارئ والتجميل لنبقي ابتسامتكم دائماً في أبهى صورها.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="btn-cta">
              <Calendar size={20} />
              احجز موعدك الآن
            </a>
            <a href="https://wa.me/962790000000" target="_blank" className="btn-primary" style={{backgroundColor: '#25D366'}}>
              <MessageCircle size={20} />
              واتساب
            </a>
          </div>
          
          <div className="flex items-center gap-6" style={{marginTop: '3rem'}}>
            <div className="flex items-center gap-2">
              <div className="flex" style={{color: '#f59e0b'}}>
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <span style={{fontWeight: 'bold', fontSize: '1.25rem'}}>4.6</span>
            </div>
            <div style={{height: '24px', width: '1px', backgroundColor: '#cbd5e1'}}></div>
            <p style={{color: 'var(--text-light)', fontWeight: '500'}}>أكثر من 65 تقييماً على Google</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md-flex justify-center md-hidden"
        >
          <div className="hero-img-container">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
              alt="Clinic Interior" 
              style={{width: '100%', height: 'auto', display: 'block'}}
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
