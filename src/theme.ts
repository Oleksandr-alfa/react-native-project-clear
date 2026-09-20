import { createContext } from "react";


export type ThemeContextType = {
  theme: 'light' | 'dark';
  setTheme: (value: 'light' | 'dark') => void;
};

export const ThemeView = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
});

