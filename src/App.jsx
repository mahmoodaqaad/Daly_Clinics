import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Calendar, 
  Clock, 
  MapPin, 
  Star, 
  Menu, 
  X, 
  ShieldCheck, 
  Sparkles, 
  Stethoscope, 
  Activity, 
  HeartPulse,
  ChevronLeft
} from 'lucide-react';
import {  AnimatePresence } from 'framer-motion';

const services = [
  {
    title: "طب الأسنان الطارئ",
    description: "عناية فورية لآلام الأسنان المفاجئة والحوادث على مدار الساعة.",
    icon: <Activity size={32} />,
  },
  {
    title: "تنظيف وتبييض الأسنان",
    description: "ابتسامة ناصعة البياض مع أحدث تقنيات التنظيف والتبييض الاحترافي.",
    icon: <Sparkles size={32} />,
  },
  {
    title: "زراعة والتركيبات",
    description: "استعادة وظيفة وجمال أسنانك مع أفضل خامات الزرعات والتركيبات.",
    icon: <ShieldCheck size={32} />,
  },
  {
    title: "تقويم الأسنان",
    description: "حلول تقويمية متطورة للأطفال والبالغين للحصول على ابتسامة مثالية.",
    icon: <Stethoscope size={32} />,
  },
  {
    title: "تجميل الأسنان",
    description: "ابتسامة هوليود وفينير مخصص لتحسين مظهر أسنانك بشكل طبيعي.",
    icon: <HeartPulse size={32} />,
  }
];

const reviews = [
  {
    name: "أحمد العبادي",
    rating: 5,
    text: "تجربة ممتازة جداً، العيادة قمة في الرقي والنظافة. الكادر الطبي محترف جداً وخاصة في الحالات الطارئة.",
    date: "قبل شهر"
  },
  {
    name: "سارة محمود",
    rating: 5,
    text: "أفضل عيادة أسنان في عمان، دقة في المواعيد وتعامل راقي جداً. شكراً جزيلاً للطاقم.",
    date: "قبل أسبوعين"
  },
  {
    name: "محمد خالد",
    rating: 4,
    text: "نظافة فائقة واهتمام بالتفاصيل. شعرت بالراحة التامة خلال فترة العلاج.",
    date: "قبل 3 أشهر"
  }
];

function App() {
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
    <div className="app-wrapper">
      {/* Navigation */}
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
            <a href="tel:+962787155903" className="btn-primary">
              <Phone size={18} />
              <span className="en">+962 7 8715 5903</span>
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
                <a href="tel:+962787155903" className="btn-cta justify-center mt-12">
                  <Phone size={24} />
                  إتصل الآن
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
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
              <a href="https://wa.me/962787155903" target="_blank" className="btn-primary" style={{backgroundColor: '#25D366'}}>
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

      {/* Stats Section */}
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

      {/* Services */}
      <section id="services" className="section">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>خدمات متكاملة لرعايتكم</h2>
            <div style={{width: '80px', height: '4px', background: 'var(--cta)', margin: '0 auto', borderRadius: '2px'}}></div>
          </div>

          <div className="grid md-grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
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
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
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
              <a href="tel:+962787155903" className="btn-cta" style={{fontSize: '1.25rem', padding: '1rem 3rem'}}>
                <Phone size={24} />
                اتصال طارئ
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews */}
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
                className="review-card"
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
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
                    <p style={{color: 'var(--text-light)'}}>عمّان، الأردن - WWCF+GGC</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="icon-box" style={{marginBottom: 0, width: '56px', height: '56px'}}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{fontSize: '1.25rem'}}>رقم الهاتف</h4>
                    <p className="en" style={{color: 'var(--text-light)'}} dir="ltr">+962 7 8715 5903</p>
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

      {/* Footer */}
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
                <li>WWCF+GGC، عمّان</li>
                <li className="en" dir="ltr">+962 7 8715 5903</li>
                <li>info@dali-dental.com</li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            全 {new Date().getFullYear()} عيادات دالي لطب الأسنان. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
