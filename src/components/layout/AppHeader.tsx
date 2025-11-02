import { Box, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSettings, type Language } from '../../hooks/useSettings';
import { translations } from '../../utils/translations';

interface AppHeaderProps {
  showBackButton?: boolean;
  onBackClick?: () => void;
}

/**
 * Application Header Component
 * 
 * Displays the settings button in the top-right corner of the app.
 * Optionally shows a back button on the left side.
 */
export default function AppHeader({ showBackButton = false, onBackClick }: AppHeaderProps) {
  const { language, setSettingsOpen } = useSettings();
  const t = translations[language as Language];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
      <Box>
        {showBackButton && onBackClick && (
          <Button 
            startIcon={<ArrowBackIcon />}
            onClick={onBackClick}
            variant="outlined"
            aria-label={t.app.backToApp}
          >
            {t.app.backToApp}
          </Button>
        )}
      </Box>
      <Button 
        variant="outlined" 
        onClick={() => setSettingsOpen(true)}
        aria-label={t.settings.openSettings}
      >
        {t.settings.openSettings}
      </Button>
    </Box>
  );
}