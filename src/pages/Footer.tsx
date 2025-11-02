import { Box } from '@mui/material';
import FooterBadgesGrid from '../components/layout/footer/FooterBadgesGrid';
import FooterLegal from '../components/layout/footer/FooterLegal';

interface FooterPageProps {
  onImpressumClick?: () => void;
  onDatenschutzClick?: () => void;
}

/**
 * Footer Page Component
 * 
 * Main footer layout with background effects and organized sub-components
 */
export default function FooterPage({ onImpressumClick, onDatenschutzClick }: FooterPageProps) {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: { xs: 3, sm: 4 },
        px: 2,
        borderTop: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
      }}
      role="contentinfo"
    >
      {/* Container that respects the root max-width */}
      <Box
        sx={{
          maxWidth: '1280px',
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        {/* Badges Grid */}
        <FooterBadgesGrid />

        {/* Legal Section */}
        <FooterLegal 
          onImpressumClick={onImpressumClick}
          onDatenschutzClick={onDatenschutzClick}
        />
      </Box>
    </Box>
  );
}