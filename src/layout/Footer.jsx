import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="grid md-grid-cols-4 gap-12">
          <div style={{gridColumn: 'span 2'}}>
            <div className="flex items-center gap-2" style={{marginBottom: '1.5rem'}}>
              <div style={{width: '40px', height: '40px', backgroundColor: 'white', color: 'var(--primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.25rem'}}>D</div>
              <span className="brand" style={{fontSize: '1.5rem'}}>عيادات دالي لطب الأسنان</span>
            </div>
            <p style={{opacity: '0.7', maxWidth: '400px', marginBottom: '2rem'}}>
              نحن ملتزمون بتقديم أعلى مستويات الرعاية الصحية لأسنانكم باستخدام أحدث التقنيات وبأيدي أمهر الأطباء في الأردن.
            </p>
            <div className="flex gap-4">
              <a href="#" style={{width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><MessageCircle size={20} /></a>
              <a href="#" style={{width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Phone size={20} /></a>
            </div>
          </div>

          <div>
            <h4 style={{fontSize: '1.125rem', marginBottom: '1.5rem'}}>روابط سريعة</h4>
            <ul className="flex flex-col gap-4" style={{opacity: '0.7'}}>
              <li><a href="#home">عن العيادة</a></li>
              <li><a href="#services">خدماتنا</a></li>
              <li><a href="#reviews">آراء المرضى</a></li>
              <li><a href="#contact">اتصل بنا</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{fontSize: '1.125rem', marginBottom: '1.5rem'}}>تواصل معنا</h4>
            <ul className="flex flex-col gap-4" style={{opacity: '0.7'}}>
              <li>عمّان، الأردن - شارع مكة</li>
              <li className="en" dir="ltr">+970 599 923 041</li>
              <li>mahmmodaqaad@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} عيادات دالي لطب الأسنان. جميع الحقوق محفوظة.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
