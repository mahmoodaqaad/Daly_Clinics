import React from 'react';
import { Star } from 'lucide-react';

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <div className="flex" style={{color: '#f59e0b', marginBottom: '1rem'}}>
        {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
      </div>
      <p style={{fontSize: '1.125rem', marginBottom: '2rem', fontStyle: 'italic', flexGrow: 1}}>
        "{review.text}"
      </p>
      <div className="flex items-center gap-4">
        <div style={{width: '48px', height: '48px', backgroundColor: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontWeight: 'bold'}}>
          {review.name[0]}
        </div>
        <div>
          <h4 style={{fontSize: '0.9rem', fontWeight: 'bold'}}>{review.name}</h4>
          <p style={{fontSize: '0.75rem', color: 'var(--text-light)'}}>{review.date}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
