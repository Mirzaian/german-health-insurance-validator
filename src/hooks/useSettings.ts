import { createContext, useContext } from 'react';
import type { SettingsContextType } from '../types/SettingsContextType';

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
export function useSettings(): SettingsContextType {
    const ctx = useContext(SettingsContext);
    if (!ctx) throw new Error('SettingsContext not found');
    return ctx;
}