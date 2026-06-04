import { useApp } from "@/lib/AppContext";
import { useReveal } from "@/lib/useReveal";

export default function SectionHeading({ eyebrow, title, subtitle, light = false }) {
  const { lang } = useApp();
  const [ref, visible] = useReveal();
  const bn = lang === "bn";
  return (
    <div ref={ref} className="text-center max-w-2xl mx-auto mb-12">
      {eyebrow && (
        <span
          className={`inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 transition-all duration-700 ${
            light ? "bg-white/15 text-brand-yellow" : "bg-brand-green/10 text-brand-green dark:bg-brand-greenLight/15 dark:text-brand-greenLight"
          } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${bn ? "font-bangla" : ""}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-extrabold mb-3 transition-all duration-700 delay-75 ${
          light ? "text-white" : "text-slate-900 dark:text-white"
        } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${bn ? "font-bangla" : "font-display"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg transition-all duration-700 delay-150 ${
            light ? "text-slate-200" : "text-slate-600 dark:text-slate-300"
          } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${bn ? "font-bangla" : ""}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mx-auto mt-5 h-1 rounded-full bg-gradient-to-r from-brand-green via-brand-blueLight to-brand-yellow transition-all duration-700 delay-200 ${
          visible ? "w-24 opacity-100" : "w-0 opacity-0"
        }`}
      />
    </div>
  );
}
