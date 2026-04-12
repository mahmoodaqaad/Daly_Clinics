import React from 'react';

const Stats = () => {
  return (
    <section className="stats-bar">
      <div className="container grid grid-cols-4 gap-8">
        <div className="stat-item" style={{textAlign: 'center'}}>
          <h3>+٥٠٠٠</h3>
          <p>مريض سعيد</p>
        </div>
        <div className="stat-item" style={{textAlign: 'center'}}>
          <h3>+١٥</h3>
          <p>سنة خبرة</p>
        </div>
        <div className="stat-item" style={{textAlign: 'center'}}>
          <h3>٢٤/٧</h3>
          <p>طوارئ</p>
        </div>
        <div className="stat-item" style={{textAlign: 'center'}}>
          <h3>١٠٠٪</h3>
          <p>جودة طبية</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
