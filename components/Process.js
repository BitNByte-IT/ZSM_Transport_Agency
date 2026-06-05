import { useApp } from "@/lib/AppContext";
import { useReveal } from "@/lib/useReveal";
import SectionHeading from "./SectionHeading";
import site from "@/data/site.json";

export default function Process() {
  const { t, tx, lang } = useApp();
  const [ref, visible] = useReveal();
  const bn = lang === "bn";

  return (
    <section id="process" className="py-20 sm:py-28 bg-gradient-to-b from-brand-blue to-[#082a5e] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading eyebrow={t("")} title={t("process")} subtitle={t("processSub")} light />
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {site.process.map((p, i) => (
            <div
              key={i}
              className={`relative transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 text-center hover:bg-white/15 transition-colors h-full">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-brand-yellow text-slate-900 flex items-center justify-center text-2xl font-extrabold mb-4 shadow-lg">
                  {p.step}
                </div>
                <h3 className={`text-xl font-bold text-white mb-2 ${bn ? "font-bangla" : ""}`}>{tx(p, "title")}</h3>
                <p className={`text-sm text-slate-200 ${bn ? "font-bangla" : ""}`}>{tx(p, "desc")}</p>
              </div>
              {i < site.process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 z-10 text-brand-yellow">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
