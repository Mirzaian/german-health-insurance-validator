import type { Language, Mode } from '../hooks/useSettings';

/**
 * Represents the context type for settings.
 * Provides properties and setter functions for managing UI preferences such as color, language, mode, and settings panel state
 *
 * @property primaryColor - The primary color used in the web app
 * @property setPrimaryColor - Function to update the primary color
 * @property settingsOpen - Indicates whether the settings panel is open
 * @property setSettingsOpen - Function to toggle the settings panel state
 * @property language - The currently selected language
 * @property setLanguage - Function to update the language
 * @property mode - The current mode (e.g., light or dark)
 * @property setMode - Function to update the mode
 */
export interface SettingsContextType {
    primaryColor: string;
    setPrimaryColor: (color: string) => void;
    settingsOpen: boolean;
    setSettingsOpen: (open: boolean) => void;
    language: Language;
    setLanguage: (lang: Language) => void;
    mode: Mode;
    setMode: (mode: Mode) => void;
}
