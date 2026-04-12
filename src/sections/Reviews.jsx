import React from 'react';
import { motion } from 'framer-motion';
import ReviewCard from '../components/ReviewCard';
import { reviews } from '../data/reviews';

const Reviews = () => {
  return (
    <section id="reviews" className="section">
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h2 style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>ماذا يقول مرضانا؟</h2>
          <p style={{color: 'var(--text-light)'}}>بناءً على أكثر من 65 تقييم حقيقي على Google</p>
        </div>

        <div className="grid md-grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
