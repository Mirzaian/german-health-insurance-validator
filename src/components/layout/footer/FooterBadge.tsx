import { Box, Typography, Link } from '@mui/material';

interface BadgeData {
  label: string;
  sublabel: string;
  color: string;
  href: string;
  icon: string | React.ReactNode;
  gradient: string;
}

interface FooterBadgeProps {
  badge: BadgeData;
  index: number;
}

/**
 * Individual Footer Badge Component
 * 
 * Animated card with hover effects for external links
 */
export default function FooterBadge({ badge, index }: FooterBadgeProps) {
  return (
    <Link
      href={badge.href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ 
        textDecoration: 'none',
        display: 'block',
      }}
    >
      <Box
        sx={{
          p: { xs: 2, sm: 2.5 },
          borderRadius: '16px',
          border: '1px solid',
          borderColor: 'divider',
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
          animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
          '@keyframes slideUp': {
            from: { opacity: 0, transform: 'translateY(20px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
          '&:hover': {
            transform: 'translateY(-4px)',
            borderColor: badge.color,
            boxShadow: `0 8px 32px ${badge.color}20, 0 4px 16px ${badge.color}10`,
            '& .badge-icon': {
              transform: 'scale(1.1) rotate(5deg)',
            },
            '& .badge-label': {
              color: badge.color,
            },
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
          }}
        >
          <Box
            className="badge-icon"
            sx={{
              fontSize: typeof badge.icon === 'string' ? { xs: '20px', sm: '24px' } : 'inherit',
              height: { xs: '24px', sm: '28px' },
              width: { xs: '24px', sm: '28px' },
              mb: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transition: 'transform 0.3s ease',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
              mx: 'auto',
            }}
          >
            {badge.icon}
          </Box>
          <Typography
            className="badge-label"
            sx={{
              fontWeight: 600,
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              color: 'text.primary',
              mb: 0.5,
              transition: 'color 0.3s ease',
              lineHeight: 1.2,
            }}
          >
            {badge.label}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.7rem', sm: '0.75rem' },
              color: 'text.secondary',
              opacity: 0.7,
              lineHeight: 1,
            }}
          >
            {badge.sublabel}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}