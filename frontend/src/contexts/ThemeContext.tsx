"use client";
import { ReactNode, createContext, useState } from "react";
import { light, dark } from "@/styles/theme";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";

type ThemeOptionTypes = "light" | "dark";

interface ToggleThemeContextProps {
  toggleTheme: () => void;
  theme: ThemeOptionTypes;
}

export const ThemeContext = createContext({} as ToggleThemeContextProps);

interface ToggleThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ToggleThemeProviderProps) {
  const [theme, setTheme] = useState(light);
  const [selectedTheme, setSelectedTheme] = useState<ThemeOptionTypes>("light");

  function toggleTheme() {
    if (selectedTheme == "light") {
      setTheme(dark);
      setSelectedTheme("dark");
    } else {
      setTheme(light);
      setSelectedTheme("light");
    }
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme: selectedTheme }}>
      <ThemeProviderStyled theme={theme}>{children}</ThemeProviderStyled>
    </ThemeContext.Provider>
  );
}
