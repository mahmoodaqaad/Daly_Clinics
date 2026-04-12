import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{backgroundColor: 'white'}}>
      <div className="container">
        <div className="contact-grid">
          <div>
            <h2 style={{fontSize: '3rem', marginBottom: '2.5rem'}}>يسعدنا تواصلكم <br /> وحجز مواعيدكم</h2>
            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="icon-box" style={{marginBottom: 0, width: '56px', height: '56px'}}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{fontSize: '1.25rem'}}>موقعنا</h4>
                  <p style={{color: 'var(--text-light)'}}>عمّان، الأردن - شارع مكة</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="icon-box" style={{marginBottom: 0, width: '56px', height: '56px'}}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{fontSize: '1.25rem'}}>رقم الهاتف</h4>
                  <p className="en" style={{color: 'var(--text-light)'}} dir="ltr">+962 7 9000 0000</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="icon-box" style={{marginBottom: 0, width: '56px', height: '56px'}}>
                  <Clock size={24} />
                </div>
                <div>
                  <h4 style={{fontSize: '1.25rem'}}>ساعات العمل</h4>
                  <p style={{color: 'var(--text-light)'}}>يومياً من الساعة ٩ صباحاً - ٩ مساءً</p>
                  <p style={{color: 'var(--cta)', fontWeight: 'bold', marginTop: '0.25rem', fontSize: '0.9rem'}}>خدمة الطوارئ متوفرة ٢٤/٧</p>
                </div>
              </div>
            </div>
          </div>

          <div className="form-container">
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label style={{display: 'block', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>الأسم بالكامل</label>
                  <input type="text" className="input-field" placeholder="أحمد..." />
                </div>
                <div>
                  <label style={{display: 'block', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>رقم الهاتف</label>
                  <input type="tel" className="input-field" placeholder="٠٧٨..." />
                </div>
              </div>
              <div>
                <label style={{display: 'block', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>الخدمة المطلوبة</label>
                <select className="input-field">
                  <option>اختر الخدمة...</option>
                  <option>طب أسنان طارئ</option>
                  <option>تنظيف وتبييض</option>
                  <option>زراعة أسنان</option>
                  <option>تقويم أسنان</option>
                </select>
              </div>
              <div>
                <label style={{display: 'block', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>رسالة إضافية</label>
                <textarea className="input-field" style={{height: '120px'}} placeholder="اكتب رسالتك هنا..."></textarea>
              </div>
              <button type="submit" className="btn-cta justify-center" style={{padding: '1.25rem'}}>
                إرسال الطلب وحجز موعد
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
