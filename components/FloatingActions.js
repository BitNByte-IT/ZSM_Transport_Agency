import { useApp } from "@/lib/AppContext";
import Icon from "./Icon";
import site from "@/data/site.json";

export default function FloatingActions() {
  const { mounted } = useApp();
  if (!mounted) return null;
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={site.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 p-3.5 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform animate-float"
        aria-label="WhatsApp"
      >
        <Icon name="whatsapp" className="w-6 h-6" />
      </a>
      <a
        href={`tel:${site.contact.phonePrimary}`}
        className="w-13 h-13 p-3.5 rounded-full bg-brand-blue text-white shadow-lg hover:scale-110 transition-transform"
        aria-label="Call now"
      >
        <Icon name="phone" className="w-6 h-6" />
      </a>
    </div>
  );
}
