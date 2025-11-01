import { useState } from 'react';
import { appConfig } from '../config/appConfig';
import type { ReactNode } from 'react';
import type { SettingsContextType } from '../types/SettingsContextType';
import { SettingsContext, type Language, type Mode } from '../hooks/useSettings';

/**
 * Provides settings context to child components including theme configuration,
 * language preferences, and UI state management
 * 
 * @param children - The child components that will have access to the settings context
 * @returns JSX element wrapping children with SettingsContext.Provider
 */
export function SettingsProvider({ children }: { children: ReactNode }) {

    // State variables for settings dialog
    const [primaryColor, setPrimaryColor] = useState<string>(appConfig.defaultPrimaryColor);
    const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
    const [language, setLanguage] = useState<Language>(appConfig.defaultLanguage);
    const [mode, setMode] = useState<Mode>(appConfig.defaultMode);

    // Context value containing all settings and their setters
    const value: SettingsContextType = {
        primaryColor,
        setPrimaryColor,
        settingsOpen,
        setSettingsOpen,
        language,
        setLanguage,
        mode,
        setMode,
    };

    return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}
