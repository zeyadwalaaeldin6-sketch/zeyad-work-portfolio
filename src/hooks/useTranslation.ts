import { useState } from 'react';

export type Language = 'en' | 'ar';

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    education: 'Education',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    
    // Hero Section
    dataAnalyst: 'Data Analyst',
    name: 'Zeyad Walaaeldin Ahmed',
    heroDescription: 'I help organizations transform data into clarity—turning numbers into insights and insights into confident, strategic decisions.',
    contactMe: 'Contact Me',
    
    // About Section
    aboutTitle: 'About Me',
    aboutText1: 'My journey in data analysis began with a passion for numbers and statistics, seeking to uncover patterns that reveal valuable insights. I discovered the perfect blend of problem-solving, attention to detail, and creative thinking that this field demands. As I mastered tools like Excel and Power BI, I developed a keen interest in transforming raw data into clear, compelling visualizations that tell meaningful stories.',
    aboutText2: 'Over time, my focus evolved beyond simply creating reports to understanding how data can drive strategic decision-making. I take pride in bridging the gap between complex datasets and actionable insights, helping stakeholders make informed choices with confidence.',
    aboutText3: 'Now, as an emerging data analyst, I am committed to transforming intricate information into clear, strategic insights that empower individuals and organizations to make better, more informed decisions.',
    
    // Education Section
    educationTitle: 'Education',
    faculty: 'Faculty of Commerce',
    university: 'Georgia State University Joint Program with Cairo University',
    
    // Experience Section
    experienceTitle: 'Professional Journey',
    current: '🚀 Current',
    internship: '💼 Internship',
    volunteer: '🤝 Volunteer',
    
    // Skills Section
    skillsTitle: 'Skills',
    technicalSkills: 'Technical Skills',
    softSkills: 'Soft Skills',
    
    // Projects Section
    projectsTitle: 'Featured Projects',
    featuredProject: 'Featured Project',
    
    // Contact Section
    contactTitle: 'Let\'s Connect',
    contactSubtitle: 'Ready to turn your data into actionable insights?',
    contactDescription: 'Whether you\'re looking to optimize operations, understand customer behavior, or make data-driven decisions, I\'m here to help transform your numbers into strategic advantages.',
    getInTouch: 'Get In Touch',
    
    // Ratings Section
    ratingsTitle: 'Rate My Work',
    ratingsDescription: 'Share your experience working with me'
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'نبذة عني',
    education: 'التعليم',
    experience: 'الخبرة',
    skills: 'المهارات',
    projects: 'المشاريع',
    contact: 'التواصل',
    
    // Hero Section
    dataAnalyst: 'محلل بيانات',
    name: 'زياد ولاء الدين أحمد',
    heroDescription: 'أساعد المؤسسات على تحويل البيانات إلى وضوح—تحويل الأرقام إلى رؤى والرؤى إلى قرارات استراتيجية واثقة.',
    contactMe: 'تواصل معي',
    
    // About Section
    aboutTitle: 'نبذة عني',
    aboutText1: 'بدأت رحلتي في تحليل البيانات بشغف للأرقام والإحصائيات، ساعياً لاكتشاف الأنماط التي تكشف عن رؤى قيمة. اكتشفت المزج المثالي بين حل المشكلات والاهتمام بالتفاصيل والتفكير الإبداعي الذي يتطلبه هذا المجال. عندما أتقنت أدوات مثل Excel و Power BI، طورت اهتماماً عميقاً بتحويل البيانات الخام إلى تصورات واضحة ومقنعة تحكي قصصاً ذات مغزى.',
    aboutText2: 'مع مرور الوقت، تطور تركيزي من مجرد إنشاء التقارير إلى فهم كيف يمكن للبيانات أن تقود اتخاذ القرارات الاستراتيجية. أفتخر بسد الفجوة بين مجموعات البيانات المعقدة والرؤى القابلة للتنفيذ، مما يساعد أصحاب المصلحة على اتخاذ خيارات مدروسة بثقة.',
    aboutText3: 'الآن، كمحلل بيانات ناشئ، أنا ملتزم بتحويل المعلومات المعقدة إلى رؤى استراتيجية واضحة تمكن الأفراد والمؤسسات من اتخاذ قرارات أفضل وأكثر استنارة.',
    
    // Education Section
    educationTitle: 'التعليم',
    faculty: 'كلية التجارة',
    university: 'برنامج مشترك بين جامعة جورجيا الحكومية وجامعة القاهرة',
    
    // Experience Section
    experienceTitle: 'الرحلة المهنية',
    current: '🚀 حالي',
    internship: '💼 تدريب',
    volunteer: '🤝 تطوع',
    
    // Skills Section
    skillsTitle: 'المهارات',
    technicalSkills: 'المهارات التقنية',
    softSkills: 'المهارات الشخصية',
    
    // Projects Section
    projectsTitle: 'المشاريع المميزة',
    featuredProject: 'مشروع مميز',
    
    // Contact Section
    contactTitle: 'لنتواصل',
    contactSubtitle: 'مستعد لتحويل بياناتك إلى رؤى قابلة للتنفيذ؟',
    contactDescription: 'سواء كنت تتطلع لتحسين العمليات، أو فهم سلوك العملاء، أو اتخاذ قرارات مدفوعة بالبيانات، أنا هنا لمساعدتك في تحويل أرقامك إلى مزايا استراتيجية.',
    getInTouch: 'ابدأ التواصل',
    
    // Ratings Section
    ratingsTitle: 'قيم عملي',
    ratingsDescription: 'شارك تجربتك في العمل معي'
  }
};

export const useTranslation = () => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key] || key;
  };

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return {
    language,
    t,
    changeLanguage,
    isRTL: language === 'ar'
  };
};