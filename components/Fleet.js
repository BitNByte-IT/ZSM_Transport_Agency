import { useApp } from "@/lib/AppContext";
import { useReveal } from "@/lib/useReveal";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import site from "@/data/site.json";

export default function Fleet() {
  const { t, tx, lang } = useApp();
  const [ref, visible] = useReveal();
  const bn = lang === "bn";

  return (
    <section id="fleet" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading eyebrow={t("ourFleet")} title={t("ourFleet")} subtitle={t("fleetSub")} />
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {site.fleet.map((v, i) => (
            <div
              key={i}
              className={`group rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[3/2] bg-slate-100 dark:bg-slate-700">
                <img src={v.image} alt={tx(v, "name")} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-brand-yellow text-slate-900 text-xs font-bold shadow">
                  {tx(v, "capacity")}
                </span>
              </div>
              <div className="p-5">
                <h3 className={`text-lg font-bold text-slate-900 dark:text-white mb-1.5 ${bn ? "font-bangla" : ""}`}>{tx(v, "name")}</h3>
                <p className={`flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-300 ${bn ? "font-bangla" : ""}`}>
                  <Icon name="check" className="w-4 h-4 text-brand-green shrink-0" />
                  {tx(v, "feature")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
