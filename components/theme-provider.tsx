"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { ThemeProviderProps } from "next-themes/dist/types";
import { type ReactNode } from "react";

interface CustomThemeProviderProps extends ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({
  children,
  ...props
}: CustomThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
