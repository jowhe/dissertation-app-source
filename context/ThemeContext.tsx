"use client"

import React, {createContext, useContext, useState, useEffect} from 'react';
import { ThemeContextType } from '@/lib/types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  const [isDark, setDark] = useState(false);
  const [isLight, setLight] = useState(false);
  const [isLarge, setLarge] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if(theme === 'dark'){
      enableDark()
    }else if(theme === 'light'){
      enableLight()
    }
  }, []);

  const enableDark = () => {
    document.documentElement.classList.add('dark');
    setDark(true);
    setLight(false);
  }

  const enableLight = () =>{
    document.documentElement.classList.remove('dark');
    setLight(true);
    setDark(false);
  };

  const enableLarge = () =>{
    if(isLarge){ document.documentElement.classList.remove('text-xl'); setLarge(false) }
    else { document.documentElement.classList.add('text-xl'); setLarge(true) }
  }

  return (
    <ThemeContext.Provider value={{isDark, enableDark, isLight, enableLight, isLarge, enableLarge}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () =>{
  const context = useContext(ThemeContext); if(!context) throw new Error('useTheme must be within a ThemeProvider'); return context;
}