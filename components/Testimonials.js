import { useApp } from "@/lib/AppContext";
import { useReveal } from "@/lib/useReveal";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import site from "@/data/site.json";

export default function Testimonials() {
  const { t, tx, lang } = useApp();
  const [ref, visible] = useReveal();
  const bn = lang === "bn";

  return (
    <section className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading eyebrow={t("testimonials")} title={t("testimonials")} subtitle={t("testimonialsSub")} />
        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {site.testimonials.map((tm, i) => (
            <div
              key={i}
              className={`relative p-7 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <Icon name="quote" className="w-10 h-10 text-brand-yellow mb-4" />
              <p className={`text-slate-600 dark:text-slate-200 leading-relaxed mb-6 ${bn ? "font-bangla" : ""}`}>
                “{tx(tm, "quote")}”
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-blue to-brand-green text-white flex items-center justify-center font-bold">
                  {tx(tm, "name").charAt(0)}
                </div>
                <div>
                  <div className={`font-bold text-slate-900 dark:text-white text-sm ${bn ? "font-bangla" : ""}`}>{tx(tm, "name")}</div>
                  <div className={`text-xs text-slate-500 dark:text-slate-400 ${bn ? "font-bangla" : ""}`}>{tx(tm, "role")}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
