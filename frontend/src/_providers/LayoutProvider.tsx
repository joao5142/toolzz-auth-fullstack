"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";

import { GlobalStyles } from "@/styles/globalStyles";
import StyledComponentsRegistryProvider from "./StyledComponentsRegistryProvider";

export default function LayoutProvider({ children }: PropsWithChildren) {
  return (
    <StyledComponentsRegistryProvider>
      <ThemeProvider>
        {children}
        <GlobalStyles />
      </ThemeProvider>
    </StyledComponentsRegistryProvider>
  );
}
