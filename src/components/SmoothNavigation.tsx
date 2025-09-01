import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { User, GraduationCap, Briefcase, TrendingUp, Database, Mail } from 'lucide-react';
import { useTranslation } from "@/hooks/useTranslation";

type TranslationKey = 'home' | 'about' | 'education' | 'experience' | 'skills' | 'projects' | 'contact';

interface NavItem {
  id: string;
  labelKey: TranslationKey;
  icon: React.ComponentType<any>;
}

const navItems: NavItem[] = [
  { id: 'hero', labelKey: 'home', icon: User },
  { id: 'about', labelKey: 'about', icon: User },
  { id: 'education', labelKey: 'education', icon: GraduationCap },
  { id: 'experience', labelKey: 'experience', icon: Briefcase },
  { id: 'skills', labelKey: 'skills', icon: TrendingUp },
  { id: 'projects', labelKey: 'projects', icon: Database },
  { id: 'contact', labelKey: 'contact', icon: Mail },
];

export const SmoothNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // Show navigation after initial load
    const timer = setTimeout(() => setIsVisible(true), 1000);
    
    // Intersection Observer for section detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.1, 0.3, 0.7],
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    // Observe all sections
    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - (sectionId === 'hero' ? 0 : 80);
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={cn(
        "fixed right-6 top-1/2 -translate-y-1/2 z-50 transition-all duration-700 ease-out",
        isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
      )}
    >
      <div className="bg-background/20 backdrop-blur-md border border-primary/20 rounded-2xl p-2 shadow-elegant">
        <div className="flex flex-col gap-1">
          {navItems.map(({ id, labelKey, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={cn(
                "group relative flex items-center gap-3 p-3 rounded-xl transition-all duration-300",
                "hover:bg-primary/10 hover:scale-105",
                activeSection === id
                  ? "bg-primary/20 text-primary-light shadow-glow scale-105"
                  : "text-white/60 hover:text-white"
              )}
              title={t(labelKey)}
            >
              {/* Icon */}
              <Icon 
                className={cn(
                  "h-5 w-5 transition-all duration-300",
                  activeSection === id ? "scale-110 text-primary-light" : "group-hover:scale-110"
                )} 
              />
              
              {/* Label - appears on hover */}
              <span 
                className={cn(
                  "absolute left-full ml-4 px-3 py-2 bg-background/90 backdrop-blur-sm",
                  "border border-primary/20 rounded-lg shadow-elegant text-sm font-medium",
                  "transition-all duration-300 pointer-events-none whitespace-nowrap",
                  "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0",
                  activeSection === id ? "text-primary-light" : "text-white"
                )}
              >
                {t(labelKey)}
                {/* Arrow */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-background/90 border-l border-b border-primary/20 rotate-45"></div>
              </span>

              {/* Active indicator */}
              {activeSection === id && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-xl animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="mt-3 pt-3 border-t border-primary/20">
          <div className="w-full bg-white/10 rounded-full h-1">
            <div 
              className="h-1 bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-500 ease-out"
              style={{ 
                width: `${((navItems.findIndex(item => item.id === activeSection) + 1) / navItems.length) * 100}%` 
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};