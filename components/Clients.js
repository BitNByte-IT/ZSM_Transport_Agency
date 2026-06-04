import { useApp } from "@/lib/AppContext";
import SectionHeading from "./SectionHeading";
import site from "@/data/site.json";

export default function Clients() {
  const { t, tx, lang } = useApp();
  const bn = lang === "bn";
  const items = [...site.clients, ...site.clients]; // duplicate for seamless loop

  return (
    <section className="py-20 sm:py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading eyebrow={t("ourClients")} title={t("ourClients")} subtitle={t("clientsSub")} />
      </div>
      <div className="relative">
        <div className="flex gap-5 w-max animate-marquee hover:[animation-play-state:paused]">
          {items.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-7 py-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 min-w-[230px]"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-yellow to-brand-yellowDeep text-slate-900 flex items-center justify-center font-extrabold text-lg shrink-0">
                {tx(c, "name").charAt(0)}
              </div>
              <span className={`font-bold text-slate-700 dark:text-slate-200 ${bn ? "font-bangla" : ""}`}>{tx(c, "name")}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
