import { Box, Typography, Card, CardContent } from '@mui/material';
import { useSettings, type Language } from '../hooks/useSettings';
import { translations } from '../utils/translations';
import AppHeader from './layout/AppHeader';

interface ImpressumProps {
  onBack: () => void;
}

/**
 * Impressum (Legal Notice) Component
 * 
 */
export default function Impressum({ onBack }: ImpressumProps) {
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
          {t.legal.impressum}
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
        {language === 'de' ? (
          <Box component="article">
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              {t.legal.legalInfoTmg}
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 2 }}>
              <strong>Kevin Mirzaian</strong><br />
              An der Gehrengasse 51<br />
              64319 Pfungstadt<br />
              Deutschland
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              {t.legal.contact}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              E-Mail: kevin@mirzaian.de<br />
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              {t.legal.responsibleContent}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Kevin Mirzaian<br />
              An der Gehrengasse 51<br />
              64319 Pfungstadt
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              {t.legal.disclaimer}
            </Typography>
            
            <Typography variant="subtitle1" gutterBottom sx={{ mt: 2, fontWeight: 'bold' }}>
              {t.legal.liabilityContent}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {t.legal.liabilityContentText}
            </Typography>

            <Typography variant="subtitle1" gutterBottom sx={{ mt: 2, fontWeight: 'bold' }}>
              {t.legal.liabilityLinks}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {t.legal.liabilityLinksText}
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              {t.legal.copyright}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {t.legal.copyrightText}
            </Typography>

            <Typography variant="body2" sx={{ mt: 4, color: 'text.secondary', fontStyle: 'italic' }}>
              {t.legal.lastUpdated}
            </Typography>
          </Box>
        ) : (
          <Box component="article">
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              {t.legal.legalInfoTmg}
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 2 }}>
              <strong>Kevin Mirzaian</strong><br />
              An der Gehrengasse 51<br />
              64319 Pfungstadt<br />
              Deutschland
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              {t.legal.contact}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              E-Mail: kevin@mirzaian.de<br />

            </Typography>

            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              {t.legal.responsibleContent}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Kevin Mirzaian<br />
              An der Gehrengasse 51<br />
              64319 Pfungstadt
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              {t.legal.disclaimer}
            </Typography>
            
            <Typography variant="subtitle1" gutterBottom sx={{ mt: 2, fontWeight: 'bold' }}>
              {t.legal.liabilityContent}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {t.legal.liabilityContentText}
            </Typography>

            <Typography variant="subtitle1" gutterBottom sx={{ mt: 2, fontWeight: 'bold' }}>
              {t.legal.liabilityLinks}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {t.legal.liabilityLinksText}
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              {t.legal.copyright}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {t.legal.copyrightText}
            </Typography>

            <Typography variant="body2" sx={{ mt: 4, color: 'text.secondary', fontStyle: 'italic' }}>
              {t.legal.lastUpdated}
            </Typography>
          </Box>
        )}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}