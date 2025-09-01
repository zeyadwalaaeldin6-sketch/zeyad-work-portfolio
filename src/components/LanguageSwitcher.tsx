import { useState } from 'react';
import { Globe } from 'lucide-react';
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  onLanguageChange?: (language: 'en' | 'ar') => void;
}

export const LanguageSwitcher = ({ onLanguageChange }: LanguageSwitcherProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'ar'>('en');

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    setCurrentLanguage(newLanguage);
    onLanguageChange?.(newLanguage);
    
    // Update document direction and lang attribute
    document.documentElement.setAttribute('dir', newLanguage === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', newLanguage === 'ar' ? 'ar' : 'en');
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={toggleLanguage}
        className={cn(
          "group relative flex items-center gap-3 px-4 py-2.5 rounded-full",
          "bg-background/20 backdrop-blur-md border border-primary/20",
          "shadow-elegant hover:shadow-glow transition-all duration-300",
          "hover:bg-primary/10 hover:scale-105",
          "text-white hover:text-primary-light"
        )}
      >
        {/* Globe Icon */}
        <Globe className="h-4 w-4 transition-transform group-hover:rotate-12" />
        
        {/* Language Toggle */}
        <div className="flex items-center gap-1 text-sm font-medium">
          <span 
            className={cn(
              "transition-all duration-300",
              currentLanguage === 'en' 
                ? "text-primary-light scale-110" 
                : "text-white/60 hover:text-white/80"
            )}
          >
            EN
          </span>
          <span className="text-white/40">/</span>
          <span 
            className={cn(
              "transition-all duration-300",
              currentLanguage === 'ar' 
                ? "text-primary-light scale-110" 
                : "text-white/60 hover:text-white/80"
            )}
          >
            AR
          </span>
        </div>

        {/* Active Language Indicator */}
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            "animate-pulse"
          )}
        />
      </button>

      {/* Tooltip */}
      <div 
        className={cn(
          "absolute top-full mt-2 left-1/2 -translate-x-1/2",
          "px-3 py-1.5 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-lg",
          "text-xs text-white/80 shadow-elegant whitespace-nowrap",
          "opacity-0 group-hover:opacity-100 transition-all duration-300",
          "transform translate-y-2 group-hover:translate-y-0 pointer-events-none"
        )}
      >
        {currentLanguage === 'en' ? 'Switch to Arabic' : 'Switch to English'}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-background/90 border-l border-t border-primary/20 rotate-45" />
      </div>
    </div>
  );
};