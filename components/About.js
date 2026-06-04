import { useApp } from "@/lib/AppContext";
import { useReveal } from "@/lib/useReveal";
import Icon from "./Icon";
import site from "@/data/site.json";

export default function About() {
  const { t, tx, lang } = useApp();
  const [ref, visible] = useReveal();
  const bn = lang === "bn";

  const points = [
    { en: "Licensed Carrying Contractor", bn: "লাইসেন্সপ্রাপ্ত ক্যারিয়িং কন্ট্রাক্টর" },
    { en: "Trade License: " + site.company.tradeLicense, bn: "ট্রেড লাইসেন্স: " + site.company.tradeLicense },
    { en: "Based in Narayanganj, serving nationwide", bn: "নারায়ণগঞ্জ ভিত্তিক, সারাদেশে সেবা" },
    { en: "Transparent pricing & safe handling", bn: "স্বচ্ছ মূল্য ও নিরাপদ ব্যবস্থাপনা" },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 bg-brand-green/10 text-brand-green dark:bg-brand-greenLight/15 dark:text-brand-greenLight ${bn ? "font-bangla" : ""}`}>
            {site.company.slogan}
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-5 ${bn ? "font-bangla" : "font-display"}`}>
            {t("aboutTitle")}
          </h2>
          <p className={`text-slate-600 dark:text-slate-300 leading-relaxed mb-4 ${bn ? "font-bangla" : ""}`}>{t("aboutP1")}</p>
          <p className={`text-slate-600 dark:text-slate-300 leading-relaxed mb-7 ${bn ? "font-bangla" : ""}`}>{t("aboutP2")}</p>
          <ul className="space-y-3">
            {points.map((p, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-brand-green/15 text-brand-green dark:text-brand-greenLight flex items-center justify-center shrink-0">
                  <Icon name="check" className="w-4 h-4" />
                </span>
                <span className={`text-slate-700 dark:text-slate-200 font-medium ${bn ? "font-bangla" : ""}`}>{bn ? p.bn : p.en}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`relative transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img src="/images/hero-3.svg" alt="ZSM fleet" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-5 border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-brand-yellow text-slate-900 flex items-center justify-center">
                <Icon name="truck" className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-slate-900 dark:text-white leading-none">{site.company.establishedYear}</div>
                <div className={`text-xs text-slate-500 dark:text-slate-400 ${bn ? "font-bangla" : ""}`}>{bn ? "প্রতিষ্ঠিত" : "Established"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
