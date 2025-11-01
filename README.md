# German Health Insurance Validator (KVNR)

A modern, accessible web application for validating German health insurance numbers (Krankenversichertennummer - KVNR) with full compliance to German legal requirements.

![React](https://img.shields.io/badge/React-19.1.1-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)
![Material-UI](https://img.shields.io/badge/Material--UI-7.3.4-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF.svg)

## Features

- ** Accurate KVNR Validation**: Implements the official Luhn algorithm for German health insurance number validation
- ** Bilingual Support**: Available in German and English
- ** Customizable Theming**: Light/dark mode with customizable primary colors
- ** Full Accessibility**: WCAG compliant with proper ARIA attributes and screen reader support
- ** Responsive Design**: Optimized for mobile, tablet, and desktop devices
- ** Modern Tech Stack**: Built with React 19, TypeScript, and Material-UI v7

## What is a KVNR?

A **Krankenversichertennummer (KVNR)** is the German health insurance number format:
- **Format**: `Letter + 8 digits + 1 check digit` (e.g., `A123456789`)
- **Validation**: Uses the Luhn algorithm for checksum verification
- **Purpose**: Unique identifier for German health insurance members

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Mirzaian/german-health-insurance-validator.git
cd german-health-insurance-validator

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the application.

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── components/           # React components
│   ├── KvnrValidator.tsx     # Main validation form
│   ├── AppHeader.tsx         # Navigation header
│   ├── SettingsDialog.tsx    # Theme & language settings
│   ├── Footer.tsx            # Footer with legal links
│   ├── Impressum.tsx         # Legal notice (German law)
│   └── Datenschutz.tsx       # Privacy policy (GDPR)
├── hooks/                # Custom React hooks
│   ├── useSettings.ts        # Settings context hook
│   └── useKvnrValidation.ts  # Validation logic hook
├── utils/                # Utility functions
│   ├── kvnr.ts              # KVNR validation algorithm
│   ├── translations.ts       # i18n translations
│   └── color.ts             # Color utilities
├── context/              # React context providers
├── theme/                # Material-UI theme configuration
├── types/                # TypeScript type definitions
└── config/               # Application configuration
```

## Technical Implementation

### KVNR Validation Algorithm

The validation follows the official German specification:

1. **Format Check**: Validates `^[A-Z][0-9]{8}[0-9]$` pattern
2. **Letter Conversion**: Maps A-Z to 01-26
3. **Luhn Algorithm**: Calculates and verifies checksum
4. **Result**: Returns boolean validation result

```typescript
export function checkKvnr(kvnr: string): boolean {
  // Implementation details in src/utils/kvnr.ts
}
```

### Accessibility Features

- **ARIA Labels**: Comprehensive labeling for screen readers
- **Focus Management**: Proper keyboard navigation
- **Color Contrast**: WCAG AA compliant color schemes
- **Semantic HTML**: Proper use of forms, headings, and landmarks
- **Live Regions**: Real-time validation feedback

### Internationalization

Supports German and English with structured translation files:

```typescript
export const translations = {
  de: { /* German translations */ },
  en: { /* English translations */ }
};
```

## Customization

### Theme Configuration

The application supports:
- **Color Schemes**: Light and dark mode
- **Primary Colors**: Customizable via hex input
- **Responsive Breakpoints**: Mobile-first design
- **Material-UI v7**: Latest component library

### Settings Persistence

User preferences are automatically saved to localStorage:
- Theme mode (light/dark)
- Primary color
- Language preference

## Legal Compliance

### German Legal Requirements
- **Impressum**: Required legal notice per German law (§5 TMG)
- **Privacy Policy**: GDPR compliant data protection notice
- **Accessibility**: Follows German BITV 2.0 standards

### Data Protection
- **No Data Collection**: No personal data is stored or transmitted
- **Local Processing**: All validation happens client-side
- **Privacy by Design**: No cookies, no tracking, no external requests

## Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build  
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm run format   # Format code with Biome
```

### Code Quality

- **TypeScript**: Full type safety
- **ESLint**: Code linting with React hooks rules
- **Biome**: Code formatting
- **Strict Mode**: React strict mode enabled

## Deployment

The application is optimized for static hosting:

- **Vite Build**: Optimized production bundles
- **Asset Optimization**: Automatic code splitting
- **Base Path Support**: Configurable for subdirectory deployment

### Environment Configuration

Update `vite.config.ts` for your deployment path:

```typescript
export default defineConfig({
  base: '/your-path/', // For subdirectory deployment
  // base: '/',        // For root domain deployment
});
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **German Health Insurance System**: For the KVNR specification
- **Material-UI Team**: For the excellent component library
- **React Team**: For the amazing framework
- **Vite Team**: For the lightning-fast build tool

## Contact
<p align="center">
  &emsp;
  <a href="https://www.mirzaian.de" target="_blank"> 
    <img alt="mirzaian.de" src="https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white">
  </a>
  &emsp; 
  <a href="https://github.com/Mirzaian" target="_blank"> 
    <img alt="GitHub" src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white">
  </a>
  &emsp; 
  <a href="https://www.discord.com/users/223528935705673728" target="_blank"> 
    <img alt="Discord" src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">
  </a> 
    &emsp;
  <a href="https://www.linkedin.com/in/kevin-mirzaian" target="_blank"> 
    <img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
  </a>
</p>
