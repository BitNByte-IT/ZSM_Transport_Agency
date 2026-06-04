import { useApp } from "@/lib/AppContext";
import { useReveal } from "@/lib/useReveal";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import site from "@/data/site.json";

export default function Services() {
  const { t, tx, lang } = useApp();
  const [ref, visible] = useReveal();
  const bn = lang === "bn";

  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand-blue/5 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-brand-green/5 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading eyebrow='' title={t("ourServices")} subtitle={t("servicesSub")} />
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {site.services.map((s, i) => (
            <div
              key={i}
              className={`group relative p-7 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute top-0 left-7 -translate-y-1/2 w-14 h-14 rounded-xl bg-gradient-to-br from-brand-blue to-brand-blueLight text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Icon name={s.icon} className="w-7 h-7" />
              </div>
              <h3 className={`mt-6 text-xl font-bold text-slate-900 dark:text-white mb-2 ${bn ? "font-bangla" : ""}`}>
                {tx(s, "title")}
              </h3>
              <p className={`text-sm text-slate-600 dark:text-slate-300 leading-relaxed ${bn ? "font-bangla" : ""}`}>
                {tx(s, "desc")}
              </p>
              <div className="mt-4 h-1 w-0 group-hover:w-full bg-brand-yellow rounded-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
