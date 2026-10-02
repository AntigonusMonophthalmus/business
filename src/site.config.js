export const site = {
  // Identity
  name: 'Kadeřnictví u Nováků',
  legalName: 'Kadeřnictví u Nováků s.r.o.',

  // Contact
  phone: '+420 123 456 789',
  email: 'info@example.cz',

  // Address
  street: 'Ulice 123',
  city: '779 00 Olomouc',

  // Czech business registration
  ico: '12345678',
  dic: 'CZ12345678',

  // Site URL — used for canonical links, sitemap, OG tags (Polish step)
  url: 'https://example.cz',

  // Default language — must match a key in src/i18n/utils.js
  defaultLang: 'cs',

  // Contact form
  form: {
    // Set to false and fill formspreeId when this goes live for a real client
    demoMode: true,
    formspreeId: 'YOUR_FORM_ID',
  },
    // Privacy & cookies
  privacy: {
    // Set to true only if you add analytics. If false, no cookie banner appears.
    analytics: false,
    // URL of the analytics script to load on consent. Leave empty when analytics: false.
    // Works with Plausible, Fathom, Simple Analytics, Umami, etc.
    analyticsScript: '',
  },
};