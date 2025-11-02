
export default App;
import { useMemo, useState } from 'react';
import { useSettings, type Language } from './hooks/useSettings';
import './App.css';
import { ThemeProvider, CssBaseline, Box, Typography } from '@mui/material';
import { createCustomTheme } from './theme/customTheme';
import SettingsDialog from './components/SettingsDialog';
import AppHeader from './components/layout/AppHeader';
import KvnrValidator from './components/KvnrValidator';
import FooterPage from './pages/Footer';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import { translations } from './utils/translations';

type ViewType = 'main' | 'impressum' | 'datenschutz';

/**
 * Main Application Component
 *
 * Sets up the theme and language context, handles navigation between
 * main app, impressum, and privacy policy views.
 *
 * The root component of the German Health Insurance Validator app
 */
function App() {
  const { primaryColor, mode, language } = useSettings();
  const theme = useMemo(() => createCustomTheme(primaryColor, mode), [primaryColor, mode]);
  const t = translations[language as Language];
  const [currentView, setCurrentView] = useState<ViewType>('main');

  const renderContent = () => {
    switch (currentView) {
      case 'impressum':
        return <Impressum onBack={() => setCurrentView('main')} />;
      case 'datenschutz':
        return <Datenschutz onBack={() => setCurrentView('main')} />;
      case 'main':
      default:
        return (
          <>
            <AppHeader />
            <Box sx={{ maxWidth: 600, mx: 'auto' }}>
              <Typography 
                component="h1" 
                sx={{ 
                  mb: { xs: 4, sm: 6 },
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  fontWeight: 'bold',
                  lineHeight: 1.2
                }}
              >
                {t.app.title}
              </Typography>
              <KvnrValidator />
            </Box>
          </>
        );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SettingsDialog />
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', 
        bgcolor: 'background.default', 
        color: 'text.primary'
      }}>
        <Box sx={{ 
          flex: 1,
          textAlign: 'center',
          px: currentView === 'main' ? 2 : 0,
          py: currentView === 'main' ? 3 : 0
        }}>
          {renderContent()}
        </Box>
        
        <FooterPage 
          onImpressumClick={() => setCurrentView('impressum')}
          onDatenschutzClick={() => setCurrentView('datenschutz')}
        />
      </Box>
    </ThemeProvider>
  );
}