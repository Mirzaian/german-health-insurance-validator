/**
 * An object containing translations for supported languages
 * Use this to set or retrieve UI text in German ('de') and English ('en')
 */
export const translations = {
  de: {
    title: 'Deutscher KVNR Validator',
    openSettings: 'Einstellungen',
    settings: 'Einstellungen',
    primaryColor: 'Primärfarbe',
    primaryColorHelper: 'Hex-Farbcode eingeben (z.B. #1976d2)',
    apply: 'Übernehmen',
    cancel: 'Abbrechen',
    reset: 'Zurücksetzen',
    language: 'Sprache',
    german: 'Deutsch',
    english: 'Englisch',
    darkMode: 'Dunkler Modus',
    lightMode: 'Heller Modus',
  },
  en: {
    title: 'German Health Insurance Validator',
    openSettings: 'Settings',
    settings: 'Settings',
    primaryColor: 'Primary Color',
    primaryColorHelper: 'Enter a hex color code (e.g. #1976d2)',
    apply: 'Apply',
    cancel: 'Cancel',
    reset: 'Reset',
    language: 'Language',
    german: 'German',
    english: 'English',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
  },
} as const;

export type TranslationKey = keyof typeof translations['en'];
