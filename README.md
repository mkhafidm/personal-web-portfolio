# Mukhamad Khafid Maassobirin — Portfolio Website

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Made with Astro](https://img.shields.io/badge/Made%20with-Astro-ff5d01.svg?logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

A fast, responsive personal portfolio for an AI Engineer & Data Specialist, built with Astro, Tailwind CSS, and TypeScript.

![Portfolio Preview](src/assets/portfolio-preview.png)

## Features

- Modern, professional design with dark/light mode (dark by default, toggle remembers your choice)
- Multilingual structure — English (default) and Indonesian, both fully translated
- SEO meta tags, Open Graph, Twitter cards, structured data, and a sitemap
- Scroll animations (AOS) and GSAP micro-interactions
- Project showcase with a detail modal per project
- Legal pages (Imprint & Privacy Policy)
- Optimized static build with asset compression

## Tech Stack

- [Astro](https://astro.build/) — static site generator
- [Tailwind CSS](https://tailwindcss.com/) — utility-first CSS
- [GSAP](https://greensock.com/gsap/) — scroll/hover animations
- [AOS](https://michalsnik.github.io/aos/) — scroll-reveal animations
- [Preact](https://preactjs.com/) + [react-obfuscate](https://github.com/marcio/react-obfuscate) — client component (email obfuscation)

## Getting Started

### Prerequisites

- Node.js 16 or higher
- npm

### Installation

```bash
git clone https://github.com/mkhafidm/portfolio-website.git
cd portfolio-website
npm install
```

### Development

```bash
npm run dev
```

Open `http://localhost:4321`.

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/        # Navbar
│   ├── sections/      # Hero, About, Experience, Skills, Projects, Contact, FooterCTA, Footer
│   └── ui/            # Buttons, ThemeToggle, LanguageSwitcher
├── i18n/              # en.json, id.json (all UI text via t() helper)
├── layouts/           # Layout with head metadata, fonts, structured data
├── pages/             # Homepage, /id/, legal pages
├── scripts/           # Theme logic, scroll animations
├── styles/            # Global CSS
└── utils/             # me.ts (personal info), i18n.ts
public/
├── projects/          # Per-project image folders (hirco-rag, rag-query-router, cv-screening)
└── robots.txt
```

## Customization

### Personal Information

Edit `src/utils/me.ts`:
- Name, GitHub/LinkedIn usernames (short + URL helpers are derived)
- Email is Base64 encoded to discourage scraping. To update it, run `echo -n 'you@email.com' | base64` and paste the result into `email_base64_encoded`.

### Site Content & Translations

- UI text lives in `src/i18n/en.json` and `src/i18n/id.json`
- Add/rename a locale in `astro.config.mjs` (`i18n.locales`), then create the matching page under `src/pages/<locale>/`
- The Indonesian switch is temporarily hidden via `locales = ['en']` in `src/components/ui/LanguageSwitcher.astro` (re-enable with `['en', 'id']`)
- Project data lives in `src/components/sections/Projects.astro` — note the card data is duplicated (top-level `projects` array and the inline `PROJECTS` script array keep the site data-driven card/modal rendering in sync; update both)

### Theme Colors

Edit `tailwind.config.mjs`:

```js
colors: {
  primary: '#0A84FF',
  secondary: '#102039',
  highlightBlue: '#4AC1FF',
  neutral: {
    bg: '#F5F8FC',
    dark: '#0D1117',
  },
},
```

### Site URL

Update `site` in `astro.config.mjs` and the sitemap line in `public/robots.txt` to match your live domain (used for canonical URLs, hreflang, Open Graph, and the sitemap).

## Deployment

`netlify.toml` is configured for Netlify:

```
[build]
  publish = "dist"
  command = "npm run build"
```

Push to the main branch and Netlify will build and deploy automatically. DNS/SSL for a custom domain is handled in the Netlify dashboard. The site also builds anywhere (Vercel, GitHub Pages) since it is fully static.

## License

This project is licensed under the MIT License — see [LICENSE.md](LICENSE.md).