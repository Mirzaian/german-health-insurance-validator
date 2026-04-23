import { Box, Typography, Card, CardContent } from '@mui/material';
import { useSettings, type Language } from '../hooks/useSettings';
import { translations } from '../utils/translations';
import AppHeader from './layout/AppHeader';

interface PrivacyPolicyProps {
  onBack: () => void;
}

/**
 * Privacy Policy (Datenschutz) Component
 * 
 */
export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  const { language } = useSettings();
  const t = translations[language as Language];

  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh', 
      bgcolor: 'background.default', 
      color: 'text.primary',
      textAlign: 'center',
      px: 2,
      py: 3
    }}>
      <AppHeader showBackButton onBackClick={onBack} />
      
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
          {t.legal.datenschutz}
        </Typography>
        
        <Card 
          sx={{ 
            mb: 4, 
            boxShadow: 3,
            borderRadius: 2,
            overflow: 'hidden'
          }}
        >
          <CardContent sx={{ 
            p: { xs: 3, sm: 4 }, 
            '&:last-child': { pb: { xs: 3, sm: 4 } },
            textAlign: 'left'
          }}>
        <Box component="article">
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            1. {t.legal.privacyAtGlance}
          </Typography>

          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2, fontWeight: 'bold' }}>
            {t.legal.generalInfo}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {t.legal.generalInfoText}
          </Typography>

          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2, fontWeight: 'bold' }}>
            {t.legal.dataCollection}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>{t.legal.noKvnrStorage}:</strong> {t.legal.noKvnrStorageText}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>{t.legal.localSettings}:</strong> {t.legal.localSettingsText}
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            2. {t.legal.hosting}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {t.legal.hostingText}
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            3. {t.legal.mandatoryInfo}
          </Typography>

          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2, fontWeight: 'bold' }}>
            {t.legal.dataProtection}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {t.legal.dataProtectionText}
          </Typography>

          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2, fontWeight: 'bold' }}>
            {t.legal.responsibleParty}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {t.legal.responsiblePartyText}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Kevin Mirzaian</strong><br />
            An der Gehrengasse 51<br />
            64319 Pfungstadt<br />
            Deutschland<br />
            E-Mail: kevin@mirzaian.de
          </Typography>

          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2, fontWeight: 'bold' }}>
            {t.legal.noDpo}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {t.legal.noDpoText}
          </Typography>

          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2, fontWeight: 'bold' }}>
            {t.legal.sslEncryption}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {t.legal.sslEncryptionText}
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            4. {t.legal.dataCollectionWebsite}
          </Typography>

          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2, fontWeight: 'bold' }}>
            {t.legal.serverLogFiles}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {t.legal.serverLogFilesText}
          </Typography>
          <Typography component="div" variant="body1" sx={{ mb: 2 }}>
            {t.legal.serverLogFilesList.split('\n').map((line, index, arr) => (
              <span key={index}>
                {line}
                {index < arr.length - 1 && <br />}
              </span>
            ))}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {t.legal.serverLogFilesRetention}
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            5. {t.legal.yourRights}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {t.legal.yourRightsText}
          </Typography>

          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2, fontWeight: 'bold' }}>
            {t.legal.complaintRight}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {t.legal.complaintRightText}
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            6. {t.legal.openSourceLicensing}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {t.legal.openSourceInfo}.
          </Typography>

          <Typography variant="body2" sx={{ mt: 4, color: 'text.secondary', fontStyle: 'italic' }}>
            {t.legal.lastUpdated}
          </Typography>
        </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}