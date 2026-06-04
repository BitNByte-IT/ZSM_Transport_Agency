import { useState, useEffect, useCallback } from "react";
import { useApp } from "@/lib/AppContext";
import Icon from "./Icon";
import site from "@/data/site.json";

export default function Hero() {
  const { tx, t, lang } = useApp();
  const slides = site.hero.slides;
  const [idx, setIdx] = useState(0);

  const next = useCallback(() => setIdx((i) => (i + 1) % slides.length), [slides.length]);
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-[100svh] min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}
        >
          <img src={slide.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/85 via-brand-blue/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
        <div className="max-w-2xl text-white pt-20">
          <div
            key={idx}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full bg-brand-yellow/90 text-slate-900 text-xs font-bold tracking-wide animate-fadeIn"
          >
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
         <span className={lang === "bn" ? "font-bangla" : "font-display"}>
  {lang === "bn" ? site.company.sloganBn : site.company.slogan}
  {" | "} 
  {lang === "bn" ? site.company.nameBn : site.company.name}
</span>
          </div>
          <h1
            key={`t-${idx}`}
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 animate-fadeUp ${lang === "bn" ? "font-bangla" : "font-display"}`}
          >
            {tx(slides[idx], "title")}
          </h1>
          <p
            key={`s-${idx}`}
            className={`text-lg sm:text-xl text-slate-100/90 mb-8 max-w-xl animate-fadeUp ${lang === "bn" ? "font-bangla" : ""}`}
            style={{ animationDelay: "0.15s", opacity: 0 }}
          >
            {tx(slides[idx], "subtitle")}
          </p>
          <div className="flex flex-wrap gap-4 animate-fadeUp" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <button
              onClick={() => scrollTo("contact")}
              className={`group flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold bg-brand-yellow text-slate-900 hover:bg-brand-yellowDeep transition-all hover:scale-105 shadow-xl ${lang === "bn" ? "font-bangla" : ""}`}
            >
              {t("getQuote")}
              <Icon name="arrow" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={`tel:${site.contact.phonePrimary}`}
              className={`flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold border-2 border-white/70 text-white hover:bg-white hover:text-brand-blue transition-all ${lang === "bn" ? "font-bangla" : ""}`}
            >
              <Icon name="phone" className="w-5 h-5" />
              {t("callNow")}
            </a>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur text-white transition hidden sm:block"
        aria-label="Previous"
      >
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur text-white transition hidden sm:block"
        aria-label="Next"
      >
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" /></svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-2.5 rounded-full transition-all ${i === idx ? "w-8 bg-brand-yellow" : "w-2.5 bg-white/50"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
