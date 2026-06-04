# ZSM Transport Agency — Website

A modern, single-page **Next.js (JavaScript)** website for **ZSM Transport Agency** (Carrying Contractor, Narayanganj). Covered-van & truck logistics. Bilingual (English / বাংলা), dark + light mode, Tailwind CSS, animated, with a working SMTP contact form.

---

## ✨ Features

- **Single-page layout** with smooth-scroll navbar (Home, Services, Fleet, About, Process, Contact)
- **3 extra pages**: Help & Support, Privacy Policy, Terms & Conditions
- **Hero image slider** with auto-advance + Call Now / Get Quote buttons
- Sections: Services, Why Choose Us, Stats, Fleet, About, Process, Testimonials, **Our Clients** marquee, Contact
- **Dark mode + Light mode** (auto-detects system, remembers choice)
- **Full Bangla ⇄ English toggle** — every label & content block switches language
- **All content in `data/site.json`** — edit once, changes everywhere
- **Working contact form** → sends email via free Gmail SMTP
- Working hours, **Google Map embed**, Facebook/WhatsApp/social links
- Footer: logo + slogan (left), quick links (center), social (right), copyright bar (© left, "Powered By BitNByte IT" right)
- Floating WhatsApp + Call buttons
- Custom ZSM logo, favicon, and vehicle illustrations (SVG — swap with real photos anytime)
- Brand colors from the Bangladeshi transport market: **green, blue, yellow**

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Set up email (optional for local UI testing)
cp .env.local.example .env.local
#   then edit .env.local with your Gmail + App Password

# 3. Run the dev server
npm run dev
#   open http://localhost:3000

# 4. Production build
npm run build && npm start
```

> The contact form works even **without** SMTP configured during development — it just logs the submission to the console and returns success. Add real credentials in `.env.local` to actually send emails.

---

## 📧 Free Email (SMTP) Setup — Gmail

1. Enable **2-Step Verification** on the Gmail account.
2. Visit **Google Account → Security → App passwords**.
3. Create an app password for **Mail**, copy the 16-character code.
4. In `.env.local`:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=zsmtransportagency@gmail.com
   SMTP_PASS=the_16_char_app_password
   MAIL_TO=zsmtransportagency@gmail.com
   ```
Form submissions will arrive in the `MAIL_TO` inbox.

*(Other free options that work the same way: Brevo, Mailtrap, Zoho — just change `SMTP_HOST`/`SMTP_PORT`/credentials.)*

---

## ✏️ Editing Content

Almost everything lives in **two files** — no need to touch components:

| File | What it controls |
|------|------------------|
| `data/site.json` | Company info, phone, email, address, **working hours**, **Google Map**, **Facebook & social links**, hero slides, services, fleet, process, testimonials, clients, stats |
| `data/translations.json` | All fixed UI labels (buttons, headings) in English + Bangla |

Each content item has an English field (e.g. `title`) and a Bangla field (e.g. `titleBn`). The language toggle picks the right one automatically.

### Change the phone number / map / Facebook
Edit `data/site.json` → `contact.phonePrimary`, `contact.mapEmbed`, `social.facebook`.

### Swap illustrations for real photos
Replace the files in `public/images/` (keep the same filenames), or update the `image` paths in `data/site.json`.

---

## 🎨 Brand Colors (in `tailwind.config.js`)

| Token | Hex |
|-------|-----|
| `brand-green` | `#1E6F3C` |
| `brand-blue` | `#0D47A1` |
| `brand-yellow` | `#FFC107` |

---

## 📁 Structure

```
zsm-transport/
├── data/                 # ← edit content here
│   ├── site.json
│   └── translations.json
├── components/           # UI sections
├── lib/                  # language/theme context + hooks
├── pages/
│   ├── index.js          # single-page site
│   ├── help-support.js
│   ├── privacy-policy.js
│   ├── terms-conditions.js
│   └── api/contact.js    # SMTP email handler
├── public/images/        # logo, favicon, vehicle art
└── styles/globals.css
```

---

© ZSM Transport Agency · Powered By BitNByte IT
