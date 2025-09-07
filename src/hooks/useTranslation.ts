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
    
    // Social Media & Links
    email: 'Email',
    linkedin: 'LinkedIn',
    whatsapp: 'WhatsApp',
    github: 'GitHub',
    
    // Work Experience
    jobRole1: 'Data Analysis Trainee',
    jobCompany1: 'DEPI Program, Ministry of Communications and Information Technology',
    jobRole2: 'Financial Inclusion and Risk Management Intern',
    jobCompany2: 'Commercial International Bank Egypt (CIB)',
    jobRole3: 'Accounting Intern',
    jobCompany3: 'Arab African International Bank (AAIB)',
    jobRole4: 'Delegate of Economics and Banking (Volunteer)',
    jobCompany4: 'SBS Student Activity',
    
    // Skills
    dataAnalysisSkill: 'Data Analysis',
    financialAnalysisSkill: 'Financial Analysis',
    excelSkill: 'Excel',
    communicationSkill: 'Communication',
    presentationSkill: 'Presentation Skills',
    teamworkSkill: 'Teamwork',
    attentionToDetailSkill: 'Attention to Detail',
    
    // Projects
    project1Title: 'UK Train Data Analysis',
    project1Desc: 'Analyzed UK train station data to identify performance bottlenecks, passenger flow patterns, and provided strategic insights and solutions to optimize railway operations and improve passenger experience.',
    project2Title: 'Canadian Superstore Sales Analysis',
    project2Desc: 'Conducted comprehensive analysis of Canadian superstore sales data across multiple provinces, identifying seasonal trends, product performance patterns, and regional sales variations.',
    project3Title: 'Budget vs Actual Financial Analysis',
    project3Desc: 'Performed detailed variance analysis comparing company budgeted forecasts against actual financial performance, identifying cost overruns and savings opportunities.',
    project4Title: 'Sales Data Analysis',
    project4Desc: 'Extracted insights and trends to support strategic decision-making through comprehensive sales performance evaluation.',
    project5Title: 'Financial Performance Analysis',
    project5Desc: 'Evaluated key financial metrics to assess company performance and identify growth opportunities.',
    project6Title: 'Premier League Players Data Analysis',
    project6Desc: 'Explored player statistics and performance patterns through advanced data visualization and statistical modeling.',
    project7Title: 'Customer Segmentation Analysis',
    project7Desc: 'Developed comprehensive customer classification models using RFM analysis and clustering algorithms to optimize marketing strategies and improve customer retention rates.'
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
    
    // Social Media & Links
    email: 'البريد الإلكتروني',
    linkedin: 'لينكد إن',
    whatsapp: 'واتساب',
    github: 'جيت هاب',
    
    // Work Experience
    jobRole1: 'متدرب تحليل بيانات',
    jobCompany1: 'برنامج DEPI، وزارة الاتصالات وتكنولوجيا المعلومات',
    jobRole2: 'متدرب الشمول المالي وإدارة المخاطر',
    jobCompany2: 'البنك التجاري الدولي (CIB)',
    jobRole3: 'متدرب محاسبة',
    jobCompany3: 'البنك العربي الأفريقي الدولي (AAIB)',
    jobRole4: 'مُمثل الاقتصاد والمصارف (تطوع)',
    jobCompany4: 'نشاط الطلاب SBS',
    
    // Skills
    dataAnalysisSkill: 'تحليل البيانات',
    financialAnalysisSkill: 'التحليل المالي',
    excelSkill: 'اكسيل',
    communicationSkill: 'مهارات التواصل',
    presentationSkill: 'مهارات العرض',
    teamworkSkill: 'العمل الجماعي',
    attentionToDetailSkill: 'الاهتمام بالتفاصيل',
    
    // Projects
    project1Title: 'تحليل بيانات القطارات البريطانية',
    project1Desc: 'تحليل شامل لبيانات محطات القطارات البريطانية لتحديد نقاط الاختناق في الأداء وأنماط تدفق الركاب، مع تقديم رؤى استراتيجية وحلول لتحسين عمليات السكك الحديدية.',
    project2Title: 'تحليل مبيعات المتاجر الكندية',
    project2Desc: 'تحليل شامل لبيانات مبيعات المتاجر الكندية عبر مقاطعات متعددة، وتحديد الاتجاهات الموسمية وأنماط أداء المنتجات والتباينات الإقليمية في المبيعات.',
    project3Title: 'تحليل الميزانية مقابل الأداء الفعلي',
    project3Desc: 'تحليل تباين مفصل لمقارنة التوقعات المالية المخططة مع الأداء المالي الفعلي، وتحديد تجاوزات التكاليف وفرص التوفير.',
    project4Title: 'تحليل بيانات المبيعات',
    project4Desc: 'استخراج الرؤى والاتجاهات لدعم اتخاذ القرارات الاستراتيجية من خلال التقييم الشامل لأداء المبيعات.',
    project5Title: 'تحليل الأداء المالي',
    project5Desc: 'تقييم المؤشرات المالية الرئيسية لتقييم أداء الشركة وتحديد فرص النمو.',
    project6Title: 'تحليل بيانات لاعبي الدوري الإنجليزي',
    project6Desc: 'استكشاف إحصائيات اللاعبين وأنماط الأداء من خلال التصور المتقدم للبيانات والنمذجة الإحصائية.',
    project7Title: 'تحليل تجميع العملاء',
    project7Desc: 'تطوير نماذج تصنيف شاملة للعملاء باستخدام تحليل RFM وخوارزميات التجميع لتحسين الاستراتيجيات التسويقية ومعدلات الاحتفاظ بالعملاء.'
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