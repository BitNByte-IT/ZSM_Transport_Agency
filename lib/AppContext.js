import { createContext, useContext, useEffect, useState } from "react";
import translations from "@/data/translations.json";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = typeof window !== "undefined" ? localStorage.getItem("zsm-lang") : null;
    const savedTheme = typeof window !== "undefined" ? localStorage.getItem("zsm-theme") : null;
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedLang) setLang(savedLang);
    if (savedTheme) setTheme(savedTheme);
    else if (prefersDark) setTheme("dark");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("zsm-theme", theme);
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("zsm-lang", lang);
    document.documentElement.lang = lang === "bn" ? "bn" : "en";
  }, [lang, mounted]);

  const toggleLang = () => setLang((p) => (p === "en" ? "bn" : "en"));
  const toggleTheme = () => setTheme((p) => (p === "light" ? "dark" : "light"));

  // translation helper for static UI strings
  const t = (key) => translations[lang]?.[key] ?? translations.en[key] ?? key;

  // picks the right field from a data object based on language
  // e.g. tx(service, "title") -> service.titleBn (bn) or service.title (en)
  const tx = (obj, field) => {
    if (!obj) return "";
    if (lang === "bn") {
      const bnKey = field + "Bn";
      return obj[bnKey] ?? obj[field] ?? "";
    }
    return obj[field] ?? "";
  };

  return (
    <AppContext.Provider value={{ lang, setLang, toggleLang, theme, toggleTheme, t, tx, mounted }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
