import React, { createContext, useState, useContext } from 'react';

// Tema üçün konteks yaradılır
const ThemeContext = createContext();

// ThemeProvider komponenti
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // İlkin tema: light

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Tema məlumatına asanlıqla giriş imkanı üçün Hook
export const useTheme = () => useContext(ThemeContext);
