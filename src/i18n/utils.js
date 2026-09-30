import cs from './cs.json';
import en from './en.json';

export const defaultLang = 'cs';

export const languages = {
  cs: 'Čeština',
  en: 'English',
};

const translations = { cs, en };

export function getTranslations(lang = defaultLang) {
  return translations[lang] ?? translations[defaultLang];
}

/**
 * Given a pathname and a target language, return the equivalent path in that
 * language. Assumes slugs are identical across languages (e.g. /kontakt and
 * /en/kontakt). If we later want translated slugs (/sluzby vs /en/services),
 * this becomes a lookup table instead.
 */
export function getAlternateLangPath(currentPath, targetLang) {
  const withoutLang = currentPath.replace(/^\/en(?=\/|$)/, '') || '/';
  if (targetLang === 'en') {
    return withoutLang === '/' ? '/en/' : `/en${withoutLang}`;
  }
  return withoutLang;
}