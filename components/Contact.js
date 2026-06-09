import { useState } from "react";
import { useApp } from "@/lib/AppContext";
import { useReveal } from "@/lib/useReveal";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import site from "@/data/site.json";

export default function Contact() {
  const { t, tx, lang } = useApp();
  const [ref, visible] = useReveal();
  const [mapRef, mapVisible] = useReveal();
  const bn = lang === "bn";

  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", category: "", message: "" });
  const [status, setStatus] = useState("idle");

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      setForm({ name: "", phone: "", email: "", service: "", category: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputCls =
    "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition";

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading eyebrow={t("getQuote")} title={t("contactTitle")} subtitle={t("contactSub")} />

        {/* Form + Info row */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Form */}
          <div className={`bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-7 sm:p-9 border border-slate-100 dark:border-slate-700 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="name" value={form.name} onChange={onChange} required placeholder={t("formName")} className={`${inputCls} ${bn ? "font-bangla" : ""}`} />
                <input name="phone" value={form.phone} onChange={onChange} required placeholder={t("formPhone")} className={`${inputCls} ${bn ? "font-bangla" : ""}`} />
              </div>
              <input type="email" name="email" value={form.email} onChange={onChange} placeholder={t("formEmail")} className={`${inputCls} ${bn ? "font-bangla" : ""}`} />
              <select name="service" value={form.service} onChange={onChange} required className={`${inputCls} ${bn ? "font-bangla" : ""}`}>
                <option value="">{t("selectService")}</option>
                {site.services.map((s, i) => (
                  <option key={i} value={tx(s, "title")}>{tx(s, "title")}</option>
                ))}
              </select>
              <select name="category" value={form.category} onChange={onChange} required className={`${inputCls} ${bn ? "font-bangla" : ""}`}>
                <option value="">{t("selectCategory")}</option>
                {site.productCategories.map((cat, i) => (
                  <option key={i} value={tx(cat, "name")}>{tx(cat, "name")}</option>
                ))}
              </select>
              <textarea name="message" value={form.message} onChange={onChange} rows={4} placeholder={t("formMessage")} className={`${inputCls} resize-none ${bn ? "font-bangla" : ""}`} />

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold bg-brand-blue text-white hover:bg-brand-blueLight disabled:opacity-60 transition-all hover:scale-[1.01] shadow-lg ${bn ? "font-bangla" : ""}`}
              >
                {status === "sending" ? t("formSending") : t("formSubmit")}
                {status !== "sending" && <Icon name="telegram" className="w-5 h-5" />}
              </button>

              {status === "success" && (
                <p className={`text-sm font-medium text-brand-green bg-brand-green/10 rounded-xl px-4 py-3 ${bn ? "font-bangla" : ""}`}>{t("formSuccess")}</p>
              )}
              {status === "error" && (
                <p className={`text-sm font-medium text-red-600 bg-red-50 dark:bg-red-900/20 rounded-xl px-4 py-3 ${bn ? "font-bangla" : ""}`}>{t("formError")}</p>
              )}
            </form>
          </div>

          {/* Contact info + working hours */}
          <div className={`space-y-5 transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <a href={`tel:${site.contact.phonePrimary}`} className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-md transition">
              <span className="w-11 h-11 rounded-xl bg-brand-green/15 text-brand-green dark:text-brand-greenLight flex items-center justify-center shrink-0"><Icon name="phone" className="w-5 h-5" /></span>
              <span>
                <span className={`block text-xs text-slate-500 dark:text-slate-400 ${bn ? "font-bangla" : ""}`}>{t("callUs")}</span>
                <span className="block font-bold text-slate-900 dark:text-white">{site.contact.phonePrimaryDisplay}, {site.contact.phoneSecondaryDisplay}</span>
              </span>
            </a>
            <a href={`mailto:${site.contact.email}`} className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-md transition">
              <span className="w-11 h-11 rounded-xl bg-brand-blue/15 text-brand-blue dark:text-brand-blueLight flex items-center justify-center shrink-0"><Icon name="mail" className="w-5 h-5" /></span>
              <span className="min-w-0">
                <span className={`block text-xs text-slate-500 dark:text-slate-400 ${bn ? "font-bangla" : ""}`}>{t("emailUs")}</span>
                <span className="block font-bold text-slate-900 dark:text-white truncate">{site.contact.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
              <span className="w-11 h-11 rounded-xl bg-brand-yellow/25 text-brand-yellowDeep flex items-center justify-center shrink-0"><Icon name="pin" className="w-5 h-5" /></span>
              <span>
                <span className={`block text-xs text-slate-500 dark:text-slate-400 ${bn ? "font-bangla" : ""}`}>{t("visitUs")}</span>
                <span className={`block font-semibold text-sm text-slate-900 dark:text-white ${bn ? "font-bangla" : ""}`}>{bn ? site.contact.addressBn : site.contact.address}</span>
              </span>
            </div>

            {/* Working hours */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
              <h4 className={`flex items-center gap-2 font-bold text-slate-900 dark:text-white mb-3 ${bn ? "font-bangla" : ""}`}>
                <Icon name="clock" className="w-5 h-5 text-brand-green" /> {t("workingHours")}
              </h4>
              <ul className="space-y-2">
                {site.workingHours.map((h, i) => (
                  <li key={i} className="flex justify-between text-sm">
                    <span className={`text-slate-600 dark:text-slate-300 ${bn ? "font-bangla" : ""}`}>{tx(h, "day")}</span>
                    <span className={`font-semibold text-slate-900 dark:text-white ${bn ? "font-bangla" : ""}`}>{tx(h, "time")}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Full-width map below */}
        <div
          ref={mapRef}
          className={`rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-700 ${mapVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ height: "420px" }}
        >
          <iframe
            src={site.contact.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ZSM Transport Agency location"
          />
        </div>
      </div>
    </section>
  );
}
