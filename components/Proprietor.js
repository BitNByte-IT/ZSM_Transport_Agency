import { useApp } from "@/lib/AppContext";
import { useReveal } from "@/lib/useReveal";
import Icon from "./Icon";
import site from "@/data/site.json";

export default function Proprietor() {
  const { t, lang } = useApp();
  const [ref, visible] = useReveal();
  const bn = lang === "bn";
  const p = site.proprietor;

  return (
    <section id="proprietor" className="py-20 sm:py-28 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 bg-brand-blue/10 text-brand-blue dark:bg-brand-blueLight/15 dark:text-brand-blueLight ${bn ? "font-bangla" : ""}`}>
            {t("proprietorSection")}
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 ${bn ? "font-bangla" : "font-display"}`}>
            {t("proprietorTitle")}
          </h2>
          <p className={`text-slate-500 dark:text-slate-400 max-w-xl mx-auto ${bn ? "font-bangla" : ""}`}>
            {t("proprietorSub")}
          </p>
        </div>

        {/* Proprietor card */}
        <div
          ref={ref}
          className={`max-w-3xl mx-auto bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-xl overflow-hidden transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center gap-0">
            {/* Photo column */}
            <div className="relative w-full md:w-64 shrink-0 flex flex-col items-center justify-center p-8 md:p-10 bg-gradient-to-br from-brand-blue/10 via-brand-green/10 to-transparent md:min-h-[360px]">
              {/* Photo area */}
              <div className="relative">
                <div className="w-44 h-44 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
                  />
                  {/* Placeholder shown when no image */}
                  <div className="hidden w-full h-full flex-col items-center justify-center gap-2 text-slate-400 dark:text-slate-500">
                    <Icon name="person" className="w-16 h-16" />
                    <span className="text-xs text-center leading-tight px-2">Photo<br />Coming Soon</span>
                  </div>
                </div>

                {/* CEO badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-brand-yellow text-slate-900 text-xs font-extrabold shadow-lg whitespace-nowrap tracking-wide">
                  CEO
                </div>
              </div>

              {/* Decorative ring */}
              <div className="absolute top-6 left-6 w-16 h-16 rounded-full border-2 border-brand-blue/10 dark:border-brand-blueLight/10 opacity-60" />
              <div className="absolute bottom-8 right-6 w-10 h-10 rounded-full border-2 border-brand-green/20 dark:border-brand-greenLight/20 opacity-60" />
            </div>

            {/* Info column */}
            <div className="flex-1 p-8 md:p-10 md:pl-6">
              <div className="mb-6">
                <h3 className={`text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-1.5 ${bn ? "font-bangla" : "font-display"}`}>
                  {bn ? p.nameBn : p.name}
                </h3>
                <p className={`text-brand-blue dark:text-brand-blueLight font-semibold mb-4 ${bn ? "font-bangla" : ""}`}>
                  {bn ? p.designationBn : p.designation}
                </p>
                <p className={`text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base ${bn ? "font-bangla" : ""}`}>
                  {bn ? p.bioBn : p.bio}
                </p>
              </div>

              {/* Key details */}
              <div className="space-y-2.5 pt-5 border-t border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-brand-green/15 text-brand-green dark:text-brand-greenLight flex items-center justify-center shrink-0">
                    <Icon name="check" className="w-4 h-4" />
                  </span>
                  <span className={`text-sm font-medium text-slate-700 dark:text-slate-200 ${bn ? "font-bangla" : ""}`}>
                    {bn ? "প্রতিষ্ঠাতা ও স্বত্বাধিকারী" : "Founder & Owner"} - {bn ? site.company.nameBn : site.company.name}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-brand-green/15 text-brand-green dark:text-brand-greenLight flex items-center justify-center shrink-0">
                    <Icon name="check" className="w-4 h-4" />
                  </span>
                  <span className={`text-sm font-medium text-slate-700 dark:text-slate-200 ${bn ? "font-bangla" : ""}`}>
                    {bn ? "ট্রেড লাইসেন্স: " : "Trade License: "}{site.company.tradeLicense}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-brand-green/15 text-brand-green dark:text-brand-greenLight flex items-center justify-center shrink-0">
                    <Icon name="check" className="w-4 h-4" />
                  </span>
                  <span className={`text-sm font-medium text-slate-700 dark:text-slate-200 ${bn ? "font-bangla" : ""}`}>
                    {bn ? "প্রতিষ্ঠিত: " : "Established: "}{ bn ? `${site.company.establishedYearBn}`: `${site.company.establishedYear}`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
