import { useState } from 'react';
import { appConfig } from '../config/appConfig';
import type { ReactNode } from 'react';
import type { SettingsContextType } from '../types/SettingsContextType';

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

import { createContext, useContext } from 'react';


// Supported languages
export type Language = 'de' | 'en';
// Supported theme modes
export type Mode = 'light' | 'dark';


// Create context with undefined as default (to detect missing provider)
export const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

/**
 * Custom hook to access settings context
 * Throws error if context is not found (i.e., provider is missing)
 */
export function useSettings() {
    const ctx = useContext(SettingsContext);
    if (!ctx) throw new Error('SettingsContext not found');
    return ctx;
}
