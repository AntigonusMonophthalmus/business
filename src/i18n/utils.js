import cs from './cs.json';
import en from './en.json';
import { site } from '../site.config.js';

export const defaultLang = site.defaultLang;

export const languages = {
  cs: 'Čeština',
  en: 'English',
};

const translations = { cs, en };

export function getTranslations(lang = defaultLang) {
  return translations[lang] ?? translations[defaultLang];
}

export function getAlternateLangPath(currentPath, targetLang) {
  const withoutLang = currentPath.replace(/^\/en(?=\/|$)/, '') || '/';
  if (targetLang === 'en') {
    return withoutLang === '/' ? '/en/' : `/en${withoutLang}`;
  }
  return withoutLang;
}