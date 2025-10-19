
export default App;
import { useMemo } from 'react';
import { useSettings, type Language } from './context/SettingsContext';
import './App.css';
import { ThemeProvider, CssBaseline, Button, Box, Typography } from '@mui/material';
import { createCustomTheme } from './theme/customTheme';
import SettingsDialog from './components/SettingsDialog';
import { translations } from './utils/translations';

/**
 * Main application component.
 *
 * Sets up the theme and language context, renders the settings dialog
 * and displays the main UI including a button to open settings and the app title
 *
 * The root component of the German Health Insurance Validator app
 */
function App() {
  const { primaryColor, mode, language, setSettingsOpen } = useSettings();
  const theme = useMemo(() => createCustomTheme(primaryColor, mode), [primaryColor, mode]);
  const t = translations[language as Language];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SettingsDialog />
      <Box sx={{ textAlign: 'center', minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <Button variant="outlined" onClick={() => setSettingsOpen(true)}>{t.openSettings}</Button>
        </Box>
        <Typography variant="h3" sx={{ mt: 4 }}>{t.title}</Typography>
      </Box>
    </ThemeProvider>
  );
}