import { Box } from '@mui/material';
import FooterBadge from './FooterBadge';
import { NpmIcon } from '../../../assets/icons/NpmIcon';
import { GitHubIcon } from '../../../assets/icons/GitHubIcon';

interface BadgeData {
  label: string;
  sublabel: string;
  color: string;
  href: string;
  icon: string | React.ReactNode;
  gradient: string;
}

/**
 * Footer Badges Grid Component
 * 
 * Grid layout for all project badges with responsive design
 */
export default function FooterBadgesGrid() {
  const badges: BadgeData[] = [
    {
      label: 'NPM Package',
      sublabel: 'kvnr-utils',
      color: '#CB3837',
      href: 'https://www.npmjs.com/package/kvnr-utils',
      icon: '📦',
      gradient: 'linear-gradient(135deg, #CB3837 0%, #E85A4F 100%)'
    },
    {
      label: 'GitHub Package', 
      sublabel: '@mirzaian/kvnr-utils',
      color: '#24292f',
      href: 'https://github.com/Mirzaian/kvnr-utils/pkgs/npm/kvnr-utils',
      icon: <NpmIcon />,
      gradient: 'linear-gradient(135deg, #24292f 0%, #4C566A 100%)'
    },
    {
      label: 'GitHub Repository',
      sublabel: 'Source Code',
      color: '#2E7D32',
      href: 'https://github.com/Mirzaian/german-health-insurance-validator',
      icon: <GitHubIcon />,
      gradient: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)'
    }
  ];

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(3, 1fr)' },
        gap: { xs: 2, sm: 3 },
        mb: { xs: 4, sm: 5 },
        justifyContent: 'center',
      }}
    >
      {badges.map((badge, index) => (
        <FooterBadge
          key={index}
          badge={badge}
          index={index}
        />
      ))}
    </Box>
  );
}