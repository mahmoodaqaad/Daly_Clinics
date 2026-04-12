import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Phone } from 'lucide-react';

const EmergencyCTA = () => {
  return (
    <section style={{backgroundColor: 'rgba(250, 240, 202, 0.4)', padding: '4rem 0'}}>
      <div className="container">
        <div className="emergency-banner">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Clock style={{marginBottom: '1.5rem', color: 'var(--accent)'}} size={48} />
            <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem'}}>هل تعاني من ألم مفاجئ؟</h2>
            <p style={{fontSize: '1.25rem', marginBottom: '2.5rem', opacity: '0.9', maxWidth: '700px', margin: '0 auto 2.5rem'}}>
              نحن جاهزون لاستشارتكم في حالات طوارئ الأسنان على مدار الساعة. لا تتردد بالاتصال بنا فوراً.
            </p>
            <a href="tel:+962790000000" className="btn-cta" style={{fontSize: '1.25rem', padding: '1rem 3rem'}}>
              <Phone size={24} />
              اتصال طارئ
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyCTA;
