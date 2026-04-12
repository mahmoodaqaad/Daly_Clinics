import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="service-card"
    >
      <div className="icon-box">
        {service.icon}
      </div>
      <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>{service.title}</h3>
      <p style={{color: 'var(--text-light)', marginBottom: '1.5rem'}}>
        {service.description}
      </p>
      <a href="#contact" style={{color: 'var(--primary)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
        تعرف على المزيد
        <ChevronLeft size={16} />
      </a>
    </motion.div>
  );
};

export default ServiceCard;
