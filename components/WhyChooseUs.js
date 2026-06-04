import { useApp } from "@/lib/AppContext";
import { useReveal } from "@/lib/useReveal";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import site from "@/data/site.json";

export default function WhyChooseUs() {
  const { t, tx, lang } = useApp();
  const [ref, visible] = useReveal();
  const [sref, svisible] = useReveal();
  const bn = lang === "bn";

  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading eyebrow={t("whyChoose")} title={t("whyChoose")} subtitle={t("whyChooseSub")} />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {site.whyChooseUs.map((w, i) => (
            <div
              key={i}
              className={`text-center p-7 rounded-2xl bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-100 dark:border-slate-700 hover:border-brand-green/40 transition-all duration-500 ${
                visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mx-auto w-16 h-16 rounded-2xl bg-brand-green/10 dark:bg-brand-greenLight/15 text-brand-green dark:text-brand-greenLight flex items-center justify-center mb-4 animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                <Icon name={w.icon} className="w-8 h-8" />
              </div>
              <h3 className={`text-lg font-bold text-slate-900 dark:text-white mb-1.5 ${bn ? "font-bangla" : ""}`}>{tx(w, "title")}</h3>
              <p className={`text-sm text-slate-600 dark:text-slate-300 ${bn ? "font-bangla" : ""}`}>{tx(w, "desc")}</p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div ref={sref} className="rounded-3xl bg-gradient-to-r from-brand-blue via-brand-blueLight to-brand-green p-8 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {site.stats.map((stat, i) => (
              <div
                key={i}
                className={`text-center text-white transition-all duration-700 ${svisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="text-4xl sm:text-5xl font-extrabold mb-1 drop-shadow">   {bn ? stat.valueBn : stat.value}</div>
                <div className={`text-sm font-medium text-white/90 ${bn ? "font-bangla" : ""}`}>{tx(stat, "label")}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
