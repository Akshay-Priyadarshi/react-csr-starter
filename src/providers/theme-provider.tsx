import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";
type ThemeClass = "light" | "dark";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  themeClass?: ThemeClass;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  themeClass: "light",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  );
  const [themeClass, setThemeClass] = useState<ThemeClass>();

  useEffect(() => {
    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Function to handle theme changes
    const updateTheme = () => {
      root.classList.remove("light", "dark");

      if (theme === "system") {
        const systemTheme = mediaQuery.matches ? "dark" : "light";
        root.classList.add(systemTheme);
        setThemeClass(systemTheme);
        return;
      }

      setThemeClass(theme);
      root.classList.add(theme);
    };

    // Initial theme setup
    updateTheme();

    // Listen for system theme changes
    const listener = (event: MediaQueryListEvent) => {
      if (theme === "system") {
        const systemTheme = event.matches ? "dark" : "light";
        root.classList.remove("light", "dark");
        root.classList.add(systemTheme);
        setThemeClass(systemTheme);
      }
    };

    mediaQuery.addEventListener("change", listener);

    // Cleanup
    return () => mediaQuery.removeEventListener("change", listener);
  }, [theme]);

  const value = {
    theme,
    themeClass: themeClass,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext {...props} value={value}>
      {children}
    </ThemeProviderContext>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
