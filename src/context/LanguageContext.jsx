// ThemeContext.js
import React, { createContext, useState } from 'react';

// Create a context
const LanguageContext = createContext();

// Create a provider component
const ThemeProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = (active) => {
    setLanguage(active)
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { ThemeProvider, LanguageContext };
