export default function Icon({ name, className = "w-6 h-6" }) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
  };
  switch (name) {
    case "truck":
      return (
        <svg {...common}><path d="M1 3h13v13H1z"/><path d="M14 8h4l3 3v5h-7z"/><circle cx="6" cy="18.5" r="1.8"/><circle cx="17.5" cy="18.5" r="1.8"/></svg>
      );
    case "box":
      return (
        <svg {...common}><path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M3 7l9 5 9-5"/><path d="M12 12v10"/></svg>
      );
    case "warehouse":
      return (
        <svg {...common}><path d="M3 21V8l9-5 9 5v13"/><path d="M7 21v-7h10v7"/><path d="M7 14h10"/></svg>
      );
    case "bolt":
      return (
        <svg {...common}><path d="M13 2L4 14h6l-1 8 9-12h-6z"/></svg>
      );
    case "support":
      return (
        <svg {...common}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M9 10h.01M12 10h.01M15 10h.01"/></svg>
      );
    case "map":
      return (
        <svg {...common}><path d="M9 3L3 6v15l6-3 6 3 6-3V3l-6 3z"/><path d="M9 3v15M15 6v15"/></svg>
      );
    case "gps":
      return (
        <svg {...common}><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
      );
    case "clock":
      return (
        <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
      );
    case "phone":
      return (
        <svg {...common}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>
      );
    case "mail":
      return (
        <svg {...common}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7 10-7"/></svg>
      );
    case "pin":
      return (
        <svg {...common}><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5 31 31 0 0 0 .6 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.4 12 31 31 0 0 0 23 7.5zM9.8 15.3V8.7l5.7 3.3z"/></svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5V8h3zM6.5 6.7a1.8 1.8 0 1 1 0-3.5 1.8 1.8 0 0 1 0 3.5zM19 19h-3v-5.6c0-1.4-.5-2.3-1.7-2.3a1.9 1.9 0 0 0-1.7 1.3 2.4 2.4 0 0 0-.1.9V19h-3V8h3v1.3a3 3 0 0 1 2.7-1.5c2 0 3.5 1.3 3.5 4.1z"/></svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9s-.5-.2-.6.2-.7.9-.9 1.1-.3.2-.6.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.5-.5a2 2 0 0 0 .3-.5.5.5 0 0 0 0-.5c0-.2-.6-1.5-.9-2s-.4-.5-.6-.5h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.3 5.3 5.3 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4c.6.3 1.1.5 1.5.6a3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 18.3a8.3 8.3 0 0 1-4.2-1.2l-.3-.2-2.9.8.8-2.8-.2-.3A8.3 8.3 0 1 1 12 20.3z"/></svg>
      );
    case "globe":
      return (
        <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/></svg>
      );
    case "sun":
      return (
        <svg {...common}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
      );
    case "moon":
      return (
        <svg {...common}><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>
      );
    case "check":
      return (
        <svg {...common}><path d="M20 6L9 17l-5-5"/></svg>
      );
    case "arrow":
      return (
        <svg {...common}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      );
    case "quote":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M7 7h4v6c0 2.2-1.8 4-4 4v-2a2 2 0 0 0 2-2H7zm8 0h4v6c0 2.2-1.8 4-4 4v-2a2 2 0 0 0 2-2h-2z"/></svg>
      );
    default:
      return null;
  }
}
