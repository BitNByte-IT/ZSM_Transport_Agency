import { useState, useEffect } from "react";
import Link from "next/link";
import { useApp } from "@/lib/AppContext";
import Icon from "./Icon";
import site from "@/data/site.json";

export default function Navbar() {
  const { lang, toggleLang, theme, toggleTheme, tx, t, mounted } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        <button onClick={() => goTo("home")} className="flex items-center shrink-0" aria-label="Home">
          <img
            src={scrolled && theme !== "dark" ? "/images/logo.svg" : "/images/logo-dark.svg"}
            alt={site.company.name}
            className="h-10 sm:h-11 w-auto"
          />
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {site.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                scrolled
                  ? "text-slate-700 dark:text-slate-200 hover:text-brand-blue hover:bg-brand-blue/10 dark:hover:text-white dark:hover:bg-white/10"
                  : "text-white hover:text-brand-yellow hover:bg-white/15"
              } ${lang === "bn" ? "font-bangla" : ""}`}
            >
              {tx(item, "label")}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold border transition-all hover:scale-105 ${
              scrolled
                ? "border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200"
                : "border-white/40 text-white"
            }`}
            aria-label="Toggle language"
          >
            <Icon name="globe" className="w-4 h-4" />
            {mounted ? (lang === "en" ? "বাংলা" : "EN") : "বাংলা"}
          </button>

          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg border transition-all hover:scale-105 ${
              scrolled
                ? "border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200"
                : "border-white/40 text-white"
            }`}
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? <Icon name="sun" className="w-4 h-4" /> : <Icon name="moon" className="w-4 h-4" />}
          </button>

          <a
            href={`tel:${site.contact.phonePrimary}`}
            className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold bg-brand-yellow text-slate-900 hover:bg-brand-yellowDeep transition-all hover:scale-105 shadow ${lang === "bn" ? "font-bangla" : ""}`}
          >
            <Icon name="phone" className="w-4 h-4" />
            {t("callNow")}
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-slate-700 dark:text-slate-200" : "text-white"}`}
            aria-label="Menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 mt-2" : "max-h-0"
        }`}
      >
        <nav className="mx-4 rounded-2xl bg-white dark:bg-slate-800 shadow-xl p-3 flex flex-col gap-1">
          {site.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className={`text-left px-4 py-3 rounded-xl font-semibold text-slate-700 dark:text-slate-200 hover:bg-brand-blue/10 ${lang === "bn" ? "font-bangla" : ""}`}
            >
              {tx(item, "label")}
            </button>
          ))}
          <a
            href={`tel:${site.contact.phonePrimary}`}
            className={`mt-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold bg-brand-yellow text-slate-900 ${lang === "bn" ? "font-bangla" : ""}`}
          >
            <Icon name="phone" className="w-4 h-4" />
            {t("callNow")}
          </a>
        </nav>
      </div>
    </header>
  );
}
