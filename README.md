# Foundry & Co. — Responsive Business Landing Page

A fully responsive landing page for **Foundry & Co.**, a fictional digital
brand and web studio. Built with plain HTML, CSS, and JavaScript — no
frameworks, no build step, no dependencies beyond two Google Fonts.

## Live Preview

Open `index.html` directly in a browser, or serve the folder locally:

```bash
# Python
python3 -m http.server 5500

# Node
npx serve .
```

Then visit `http://localhost:5500`.

## Project Structure

```
foundry-landing/
├── index.html          # Page markup — nav, hero, services, about, contact, footer
├── css/
│   └── styles.css       # Design tokens, layout, components, responsive breakpoints
├── js/
│   └── script.js         # Mobile nav toggle, sticky nav shadow, form validation
├── screenshots/
│   ├── desktop-full-page.png
│   ├── mobile-hero.png
│   ├── services-section.png
│   └── contact-form.png
└── README.md
```

## Features

### Design
- Two-typeface system: **Fraunces** (display serif, headings) + **Inter** (body/UI)
- Custom color palette defined as CSS variables (ink, paper, cobalt, coral, slate)
- Consistent 8-step spacing scale and shared border-radius/shadow tokens
- Inline SVG icons for services and hero stat cards — no external image assets required

### Sections
| Section | Contents |
|---|---|
| **Navigation** | Logo, Home/Services/About/Contact links, primary CTA, sticky on scroll |
| **Hero** | Headline, supporting copy, primary + secondary CTA, stat row, layered visual cards |
| **Services** | 6 service cards with icon, title, and short description |
| **About** | Studio story, credibility list, client testimonial |
| **Contact** | Name, email, phone (optional), message textarea, submit button |
| **Footer** | Brand, quick links, copyright |

### Responsiveness
- Breakpoints at **1024px**, **768px**, and **480px**
- Hamburger menu replaces the nav links below 768px, with animated icon and slide-down panel
- Services grid collapses 3 → 2 → 1 columns
- Hero visual cards hide on the smallest screens to keep the layout uncluttered
- All buttons and form fields have a minimum 48px touch target

### Form Validation
- **HTML5 attributes:** `required`, `type="email"`, `pattern`, `minlength`
- **JavaScript:** live inline error messages on blur/input, focuses the first invalid
  field on submit, shows a success confirmation message on valid submit
- No backend is wired up — submission is simulated client-side. Connect the
  `form` submit handler in `js/script.js` to your endpoint of choice (e.g.
  Formspree, a serverless function, or your own API) to make it live.

## Customization

| To change... | Edit... |
|---|---|
| Colors | `:root` variables at the top of `css/styles.css` |
| Fonts | `<link>` tag in `index.html` `<head>` + `--font-display` / `--font-body` |
| Copy / services / testimonial | Directly in `index.html` |
| Form endpoint | `contact__form` submit handler in `js/script.js` |

## Browser Support

Tested in current versions of Chrome, Firefox, Safari, and Edge. Uses
standard flexbox/grid and CSS custom properties — no polyfills required for
modern browsers.

## Screenshots

Add the following to `screenshots/` before publishing the repo:

1. **desktop-full-page.png** — full page at ≥1280px width
2. **mobile-hero.png** — hero section at ≤480px width
3. **services-section.png** — services grid at desktop width
4. **contact-form.png** — contact form, ideally showing a validation state

## License

Free to use and adapt for personal or commercial projects.
