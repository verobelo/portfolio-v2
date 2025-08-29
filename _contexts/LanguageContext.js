'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  function handleLanguageToggle() {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
  }

  return (
    <LanguageContext.Provider value={{ language, handleLanguageToggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageToggle() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageToggle must be used within a LanguageProvider');
  }
  return context;
}
