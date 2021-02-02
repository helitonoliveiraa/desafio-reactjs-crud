import React, { createContext, useCallback, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { dark, light } from '../styles/themes';

interface ITheme {
  toggleTheme(): void;
  currenTheme: typeof dark | typeof light;
}

const ThemeContext = createContext({} as ITheme);

export const AppThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const loadedTheme = localStorage.getItem('@theme:');

    if (loadedTheme) {
      return JSON.parse(loadedTheme);
    }

    return light;
  });

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);

    if (theme.title === 'light') {
      localStorage.setItem('@theme:', JSON.stringify(dark));
    } else {
      localStorage.setItem('@theme:', JSON.stringify(light));
    }
  }, [theme]);

  const currenTheme = theme;

  return (
    <ThemeContext.Provider value={{ toggleTheme, currenTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useTheme(): ITheme {
  const context = useContext(ThemeContext);

  return context;
}
