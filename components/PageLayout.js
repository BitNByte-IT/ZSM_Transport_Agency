import Head from "next/head";
import Link from "next/link";
import { useApp } from "@/lib/AppContext";
import Footer from "./Footer";
import Icon from "./Icon";
import site from "@/data/site.json";

export default function PageLayout({ title, titleBn, children }) {
  const { t, lang, toggleLang, theme, toggleTheme, mounted } = useApp();
  const bn = lang === "bn";

  return (
    <>
      <Head>
        <title>{(bn ? titleBn : title) || title} — {site.company.name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* simple top bar */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src={theme === "dark" ? "/images/logo-dark.svg" : "/images/logo.svg"} alt={site.company.name} className="h-10 w-auto" />
          </Link>
          <div className="flex items-center gap-2">
            <button onClick={toggleLang} className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200">
              <Icon name="globe" className="w-4 h-4" />{mounted ? (bn ? "EN" : "বাংলা") : "বাংলা"}
            </button>
            <button onClick={toggleTheme} className="p-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200" aria-label="theme">
              {mounted && theme === "dark" ? <Icon name="sun" className="w-4 h-4" /> : <Icon name="moon" className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      <main className="bg-white dark:bg-slate-950 min-h-[70vh]">
        <div className="bg-gradient-to-r from-brand-blue to-brand-green py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h1 className={`text-3xl sm:text-4xl font-extrabold text-white ${bn ? "font-bangla" : "font-display"}`}>{bn ? titleBn : title}</h1>
          </div>
        </div>
        <article className={`max-w-4xl mx-auto px-4 sm:px-6 py-12 prose-content ${bn ? "font-bangla" : ""}`}>
          {children}
          <Link href="/" className={`inline-flex items-center gap-2 mt-10 px-5 py-3 rounded-xl font-bold bg-brand-yellow text-slate-900 hover:bg-brand-yellowDeep transition ${bn ? "font-bangla" : ""}`}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
            {t("backHome")}
          </Link>
        </article>
      </main>

      <Footer />

      <style jsx global>{`
        .prose-content h2 { font-size: 1.4rem; font-weight: 700; margin: 1.5rem 0 0.6rem; color: #0f172a; }
        .dark .prose-content h2 { color: #fff; }
        .prose-content p { color: #475569; line-height: 1.75; margin-bottom: 1rem; }
        .dark .prose-content p { color: #cbd5e1; }
        .prose-content ul { list-style: disc; padding-left: 1.25rem; color: #475569; margin-bottom: 1rem; }
        .dark .prose-content ul { color: #cbd5e1; }
        .prose-content li { margin-bottom: 0.4rem; }
      `}</style>
    </>
  );
}
