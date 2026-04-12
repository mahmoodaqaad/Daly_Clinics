import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Stethoscope, 
  Activity, 
  HeartPulse 
} from 'lucide-react';

export const services = [
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
