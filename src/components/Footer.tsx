import { Box, Typography, Link, Stack } from '@mui/material';
import { useSettings, type Language } from '../hooks/useSettings';
import { translations } from '../utils/translations';

interface FooterProps {
  onImpressumClick?: () => void;
  onDatenschutzClick?: () => void;
  onGithubClick?: () => void;
}

/**
 * Footer Component
 * 
 * Displays copyright information, legal links and other footer content.
 * Responsive design with proper typography scaling.
 */
export default function Footer({ onImpressumClick, onDatenschutzClick, onGithubClick }: FooterProps) {
  const { language } = useSettings();
  const t = translations[language as Language];

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: { xs: 2, sm: 3 },
        px: 2,
        textAlign: 'center',
        borderTop: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        position: 'relative',
        bottom: 0,
      }}
      role="contentinfo"
      aria-label="Footer with copyright and legal information"
    >
      <Stack spacing={{ xs: 1, sm: 1.5 }} alignItems="center">
        {/* Legal Links */}
        <Stack 
          direction="row" 
          spacing={{ xs: 2, sm: 3 }} 
          divider={
            <Typography 
              sx={{ 
                color: 'text.secondary', 
                opacity: 0.5,
                fontSize: { xs: '0.75rem', sm: '0.875rem' }
              }}
            >
              •
            </Typography>
          }
        >
          <Link
            component="button"
            onClick={onImpressumClick}
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              textDecoration: 'underline',
              textDecorationColor: 'transparent',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                textDecorationColor: 'text.secondary',
                color: 'text.primary',
              },
              cursor: 'pointer',
              border: 'none',
              background: 'none',
              padding: 0,
            }}
            aria-label={`Open ${t.legal.impressum}`}
          >
            {t.legal.impressum}
          </Link>
          
          <Link
            component="button"
            onClick={onDatenschutzClick}
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              textDecoration: 'underline',
              textDecorationColor: 'transparent',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                textDecorationColor: 'text.secondary',
                color: 'text.primary',
              },
              cursor: 'pointer',
              border: 'none',
              background: 'none',
              padding: 0,
            }}
            aria-label={`Open ${t.legal.datenschutz}`}
          >
            {t.legal.datenschutz}
          </Link>
          
          <Link
            component="button"
            onClick={onGithubClick}
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              textDecoration: 'underline',
              textDecorationColor: 'transparent',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                textDecorationColor: 'text.secondary',
                color: 'text.primary',
              },
              cursor: 'pointer',
              border: 'none',
              background: 'none',
              padding: 0,
            }}
            aria-label={`Open ${t.footer.github} repository`}
          >
            {t.footer.github}
          </Link>
        </Stack>

        {/* Copyright */}
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            opacity: 0.8,
            userSelect: 'none',
          }}
        >
          {t.footer.copyright}
        </Typography>
      </Stack>
    </Box>
  );
}