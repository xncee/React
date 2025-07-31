import React, { createContext, useState, useContext, useEffect } from 'react';
import { themes } from '../styles/themes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const theme = isDark ? themes.dark : themes.light;

    // Inject CSS variables into the document root
    useEffect(() => {
        const root = document.documentElement;
        Object.entries(theme).forEach(([key, value]) => {
        root.style.setProperty(`--color-${key}`, value);
        });
    }, [theme]);

    const toggleTheme = () => setIsDark(prev => !prev);
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
        {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);