import { useApp } from "@/lib/AppContext";
import { useReveal } from "@/lib/useReveal";
import SectionHeading from "./SectionHeading";
import site from "@/data/site.json";

export default function Clients() {
  const { t, tx, lang } = useApp();
  const [ref, visible] = useReveal();
  const bn = lang === "bn";

  return (
    <section className="py-20 sm:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading eyebrow={t("")} title={t("ourClients")} subtitle={t("clientsSub")} />

        <div ref={ref} className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-4">
          {site.clients.map((c, i) => (
            <div
              key={i}
              className={`group flex flex-col items-center gap-5 p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-500 w-full sm:w-72 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Logo image area */}
              <div className="w-full h-28 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-700/50 overflow-hidden border border-slate-100 dark:border-slate-600 group-hover:border-brand-yellow/50 transition-colors">
                <img
                  src={c.logo}
                  alt={tx(c, "name")}
                  className="max-h-20 max-w-[200px] object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  className="hidden w-full h-full items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="text-3xl font-extrabold text-slate-300 dark:text-slate-500 tracking-tight">
                    {tx(c, "name").charAt(0)}
                  </span>
                </div>
              </div>

              {/* Company name */}
              <div className="text-center">
                <p className={`text-lg font-bold text-slate-800 dark:text-white ${bn ? "font-bangla" : ""}`}>
                  {tx(c, "name")}
                </p>
                <p className={`text-xs text-slate-500 dark:text-slate-400 mt-1 ${bn ? "font-bangla" : ""}`}>
                  {bn ? "বিশ্বস্ত গ্রাহক" : "Trusted Client"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
