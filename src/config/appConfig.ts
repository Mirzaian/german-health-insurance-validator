import type { Language, Mode } from '../context/SettingsContext';

/**
 * Application configuration object containing default settings
 *
 * @property defaultLanguage - The default language used in the web app
 * @property defaultMode - The default UI mode (e.g., 'light' or 'dark')
 * @property defaultPrimaryColor - The default primary color for the web app's theme
 */
export const appConfig: {
  defaultLanguage: Language;
  defaultMode: Mode;
  defaultPrimaryColor: string;
} = {
  defaultLanguage: 'de',
  defaultMode: 'light',
  defaultPrimaryColor: '#1976d2',
};
