import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h2 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>خدمات متكاملة لرعايتكم</h2>
          <div style={{width: '80px', height: '4px', background: 'var(--cta)', margin: '0 auto', borderRadius: '2px'}}></div>
        </div>

        <div className="grid md-grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
