import React, { createContext, useCallback, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { dark, light } from '../styles/themes';

interface ITheme {
  toggleTheme(): void;
  currenTheme: typeof dark | typeof light;
}

const ThemeContext = createContext({} as ITheme);

export const AppThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme.title]);

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
