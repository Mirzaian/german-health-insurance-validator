import { createTheme } from "@mui/material";
import type { Mode } from "../hooks/useSettings";
import { appConfig } from '../config/appConfig';

/**
 * Creates and returns a custom Material UI theme with the specified primary color and mode
 * This function sets the custom theme configuration, allowing you to define the primary color
 * and choose between light or dark mode for the application
 *
 * @param primaryColor - The main color to use for the theme's primary palette
 * @param mode - The color mode for the theme, typically 'light' or 'dark'
 * @returns A Material UI theme object configured with the provided options
 */
export function createCustomTheme(primaryColor: string, mode: Mode) {
	return createTheme({
		palette: {
			mode,
			primary: { main: primaryColor || appConfig.defaultPrimaryColor },
		},
	});
}