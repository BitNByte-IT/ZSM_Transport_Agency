import Link from "next/link";
import { useApp } from "@/lib/AppContext";
import Icon from "./Icon";
import site from "@/data/site.json";

export default function Footer() {
  const { t, tx, lang } = useApp();
  const bn = lang === "bn";

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    ...site.nav.map((n) => ({ type: "scroll", id: n.id, label: tx(n, "label") })),
  ];
  const pageLinks = [
    { href: "/help-support", label: t("helpSupport") },
    { href: "/privacy-policy", label: t("privacyPolicy") },
    { href: "/terms-conditions", label: t("termsConditions") },
  ];

  const socialLinks = [
    { href: site.social.facebook, icon: "facebook", label: "Facebook" },
    { href: site.social.whatsapp, icon: "whatsapp", label: "WhatsApp" },
    { href: site.social.google, icon: "google", label: "Google Business" },
  ];

  const currentYear = new Date().getFullYear();

const toBanglaNumber = (num) =>
  num.toString().replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-3">
        {/* Left: logo + slogan + contact */}
        <div>
          <img src="/images/logo-dark.svg" alt={site.company.name} className="h-12 w-auto mb-4" />
          <p className={`text-brand-yellow font-semibold mb-3 ${bn ? "font-bangla" : ""}`}>
            {bn ? site.company.sloganBn : site.company.slogan}
          </p>
          <p className={`text-sm text-slate-400 leading-relaxed mb-4 ${bn ? "font-bangla" : ""}`}>
            {bn ? site.contact.addressBn : site.contact.address}
          </p>
          <div className="space-y-1.5 text-sm">
            <a href={`tel:${site.contact.phonePrimary}`} className="flex items-center gap-2 hover:text-white transition">
              <Icon name="phone" className="w-4 h-4 text-brand-green" /> {site.contact.phonePrimaryDisplay}
            </a>
            <a href={`mailto:${site.contact.email}`} className="flex items-center gap-2 hover:text-white transition">
              <Icon name="mail" className="w-4 h-4 text-brand-blueLight" /> {site.contact.email}
            </a>
              <a
                href={`https://${site.proprietor.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Icon name="globe" className="w-4 h-4 text-brand-blueLight" />
                <span>{site.proprietor.website}</span>
              </a>
          </div>
        </div>

        {/* Center: quick links */}
        <div className="md:text-center">
          <h4 className={`font-bold text-white mb-4 ${bn ? "font-bangla" : ""}`}>{t("quickLinks")}</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l, i) => (
              <li key={i}>
                <button onClick={() => scrollTo(l.id)} className={`hover:text-brand-yellow transition ${bn ? "font-bangla" : ""}`}>{l.label}</button>
              </li>
            ))}
            {pageLinks.map((l, i) => (
              <li key={`p-${i}`}>
                <Link href={l.href} className={`hover:text-brand-yellow transition ${bn ? "font-bangla" : ""}`}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: social links */}
        <div className="md:text-right">
          <h4 className={`font-bold text-white mb-4 ${bn ? "font-bangla" : ""}`}>{t("followUs")}</h4>
          <div className="flex gap-3 md:justify-end">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.href || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-brand-blue text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110"
                aria-label={s.label}
              >
                <Icon name={s.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          {/* <span className={bn ? "font-bangla" : ""}>© {new Date().getFullYear()} {t("rightsReserved")}.</span> */}
          <span className={bn ? "font-bangla" : ""}>
  © {bn ? toBanglaNumber(currentYear) : currentYear} {t("rightsReserved")}.
</span>
   
          <a
  href="https://bitnbyteit.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block"
>
  <span className="font-semibold bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
    {t("poweredBy")}
  </span>
</a>
        </div>
      </div>
    </footer>
  );
}
