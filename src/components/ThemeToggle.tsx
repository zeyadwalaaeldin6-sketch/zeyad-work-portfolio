import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  onThemeChange?: (theme: 'light' | 'dark') => void;
}

export const ThemeToggle = ({ onThemeChange }: ThemeToggleProps) => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    
    setCurrentTheme(initialTheme);
    updateTheme(initialTheme);
  }, []);

  const updateTheme = (theme: 'light' | 'dark') => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
    onThemeChange?.(theme);
  };

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    updateTheme(newTheme);
  };

  return (
    <div className="fixed top-6 left-6 z-50">
      <button
        onClick={toggleTheme}
        className={cn(
          "group relative flex items-center gap-3 px-4 py-2.5 rounded-full",
          "bg-background/20 backdrop-blur-md border border-primary/20",
          "shadow-elegant hover:shadow-glow transition-all duration-300",
          "hover:bg-primary/10 hover:scale-105",
          "text-white hover:text-primary-light"
        )}
      >
        {/* Theme Icons */}
        <div className="relative w-4 h-4">
          <Sun 
            className={cn(
              "h-4 w-4 absolute transition-all duration-300",
              currentTheme === 'light' 
                ? "rotate-0 scale-100 opacity-100" 
                : "rotate-90 scale-0 opacity-0"
            )} 
          />
          <Moon 
            className={cn(
              "h-4 w-4 absolute transition-all duration-300",
              currentTheme === 'dark' 
                ? "rotate-0 scale-100 opacity-100" 
                : "-rotate-90 scale-0 opacity-0"
            )} 
          />
        </div>
        
        {/* Theme Toggle */}
        <div className="flex items-center gap-1 text-sm font-medium">
          <span 
            className={cn(
              "transition-all duration-300",
              currentTheme === 'light' 
                ? "text-primary-light scale-110" 
                : "text-white/60 hover:text-white/80"
            )}
          >
            L
          </span>
          <span className="text-white/40">/</span>
          <span 
            className={cn(
              "transition-all duration-300",
              currentTheme === 'dark' 
                ? "text-primary-light scale-110" 
                : "text-white/60 hover:text-white/80"
            )}
          >
            D
          </span>
        </div>

        {/* Active Theme Indicator */}
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
        {currentTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-background/90 border-l border-t border-primary/20 rotate-45" />
      </div>
    </div>
  );
};