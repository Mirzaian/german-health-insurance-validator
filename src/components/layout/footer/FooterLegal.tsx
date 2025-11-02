import { Box, Typography, Link, Stack } from '@mui/material';
import { useSettings, type Language } from '../../../hooks/useSettings';
import { translations } from '../../../utils/translations';

interface FooterLegalProps {
  onImpressumClick?: () => void;
  onDatenschutzClick?: () => void;
}

/**
 * Footer Legal Section Component
 * 
 * Legal links and copyright information
 */
export default function FooterLegal({ onImpressumClick, onDatenschutzClick }: FooterLegalProps) {
  const { language } = useSettings();
  const t = translations[language as Language];

  return (
    <Box
      sx={{
        borderTop: '1px solid',
        borderColor: 'divider',
        pt: { xs: 3, sm: 4 },
        textAlign: 'center',
      }}
    >
      {/* Legal Links */}
      <Stack 
        direction="row" 
        spacing={{ xs: 4, sm: 6 }}
        justifyContent="center"
        divider={
          <Box
            sx={{
              width: '2px',
              height: '2px',
              borderRadius: '50%',
              bgcolor: 'text.secondary',
              opacity: 0.3,
            }}
          />
        }
        sx={{ mb: { xs: 2, sm: 3 } }}
      >
        <Link
          component="button"
          onClick={onImpressumClick}
          sx={{
            color: 'text.secondary',
            fontSize: { xs: '0.875rem', sm: '1rem' },
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            border: 'none',
            background: 'none',
            padding: '6px 12px',
            borderRadius: '12px',
            position: 'relative',
            '&:hover': {
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              backgroundImage: 'none',
              transform: 'translateY(-1px)',
            },
          }}
        >
          {t.legal.impressum}
        </Link>
        
        <Link
          component="button"
          onClick={onDatenschutzClick}
          sx={{
            color: 'text.secondary',
            fontSize: { xs: '0.875rem', sm: '1rem' },
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            border: 'none',
            background: 'none',
            padding: '6px 12px',
            borderRadius: '12px',
            '&:hover': {
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              backgroundImage: 'none',
              transform: 'translateY(-1px)',
            },
          }}
        >
          {t.legal.datenschutz}
        </Link>
      </Stack>

      {/* Copyright and Version Row */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        {/* Copyright - Left */}
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            fontSize: { xs: '0.8rem', sm: '0.875rem' },
            opacity: 0.6,
            fontWeight: 400,
            letterSpacing: '0.5px',
            fontStyle: 'italic',
            transition: 'all 0.3s ease',
            '&:hover': {
              opacity: 0.9,
              letterSpacing: '1px',
            },
          }}
        >
          {t.footer.copyright}
        </Typography>

        {/* Version - Right */}
        <Link
          href="https://github.com/Mirzaian/german-health-insurance-validator/releases/tag/v1.2.0"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: 'text.secondary',
            fontSize: { xs: '0.75rem', sm: '0.8rem' },
            fontWeight: 500,
            textDecoration: 'none',
            opacity: 0.5,
            transition: 'all 0.3s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.5,
            padding: '4px 8px',
            borderRadius: '8px',
            border: '1px solid',
            borderColor: 'transparent',
            '&:hover': {
              opacity: 0.8,
              borderColor: 'primary.main',
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              transform: 'translateY(-1px)',
            },
          }}
        >
          v1.2.0
        </Link>
      </Box>
    </Box>
  );
}