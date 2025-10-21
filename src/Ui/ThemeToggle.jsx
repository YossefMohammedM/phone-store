import { createContext, useEffect, useState } from "react";

const ThemeModeContext = createContext();

function ThemeModeProvider({ children }) {
  const [themeMode, setThemeMode] = useState(() => {
    if (typeof window === "undefined") return false;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    const systemPrefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return systemPrefersDark ? "dark" : "light";
  });
  useEffect(() => {
    localStorage.setItem("theme", themeMode);
    if (themeMode === "system") {
      const systemPrefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.body.setAttribute(
        "data-theme",
        systemPrefersDark ? "dark" : "light"
      );
    } else {
      document.body.setAttribute("data-theme", themeMode);
    }
  }, [themeMode]);
  return (
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
}

export { ThemeModeContext, ThemeModeProvider };
