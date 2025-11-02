/**
 * Translations for the German Health Insurance Validator app
 * Supports German ('de') and English ('en') locales
 * 
 * Structure:
 * - app: General app UI elements (title, navigation, etc.)
 * - settings: Settings dialog texts
 * - validation: KVNR validation form and results
 * - legal: Legal pages (impressum, privacy policy)
 * - footer: Footer navigation and links
 */
export const translations = {
  de: {
    // App General
    app: {
      title: 'Deutsche KVNR Validator',
      backToApp: 'Zurück',
    },
    
    // Settings
    settings: {
      openSettings: 'Einstellungen',
      settings: 'Einstellungen',
      primaryColor: 'Primärfarbe',
      primaryColorHelper: 'Hex-Farbcode eingeben (z.B. #1976d2)',
      apply: 'Übernehmen',
      cancel: 'Abbrechen',
      reset: 'Zurücksetzen',
      language: 'Sprache',
      german: 'Deutsch',
      english: 'Englisch',
      darkMode: 'Dunkler Modus',
      lightMode: 'Heller Modus',
    },
    
    // Validation
    validation: {
      kvnrLabel: 'Krankenversichertennummer (KVNR)',
      kvnrPlaceholder: 'z.B. A123456789',
      kvnrHelper: 'Format: Buchstabe + 8 Ziffern + Prüfziffer',
      validate: 'Validieren',
      clear: 'Löschen',
      validKvnr: 'KVNR ist gültig',
      invalidKvnr: 'KVNR ist ungültig',
      formatError: 'Ungültiges Format. Es muss mit einem Buchstaben beginnen',
      validationError: 'Fehler bei der Validierung',
    },
    
    // Legal
    legal: {
      impressum: 'Impressum',
      datenschutz: 'Datenschutz',
      openSourceInfo: 'Diese Anwendung ist Open Source und unter der MIT-Lizenz veröffentlicht',
      lastUpdated: 'Stand: November 2025',
      
      // Impressum texts
      impressumTitle: 'Impressum',
      legalInfoTmg: 'Angaben gemäß § 5 TMG',
      contact: 'Kontakt',
      responsibleContent: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
      disclaimer: 'Haftungsausschluss',
      liabilityContent: 'Haftung für Inhalte',
      liabilityContentText: 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.',
      liabilityLinks: 'Haftung für Links',
      liabilityLinksText: 'Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
      copyright: 'Urheberrecht',
      copyrightText: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',

      // Datenschutz texts
      privacyTitle: 'Datenschutzerklärung',
      privacyAtGlance: 'Datenschutz auf einen Blick',
      generalInfo: 'Allgemeine Hinweise',
      generalInfoText: 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Diese Anwendung ist ein reines Frontend-Tool zur KVNR-Validierung und speichert keine Ihrer eingegebenen Daten dauerhaft.',
      dataCollection: 'Datenerfassung auf dieser Website',
      noKvnrStorage: 'Keine Speicherung von KVNR-Daten',
      noKvnrStorageText: 'Alle von Ihnen eingegebenen Krankenversichertennummern werden ausschließlich lokal in Ihrem Browser verarbeitet und nicht an Server übertragen oder gespeichert.',
      localSettings: 'Lokale Einstellungen',
      localSettingsText: 'Ihre Sprach- und Theme-Einstellungen werden nur lokal in Ihrem Browser gespeichert (localStorage) und nicht übertragen.',
      hosting: 'Hosting und Content Delivery Networks',
      hostingText: 'Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.',
      mandatoryInfo: 'Allgemeine Hinweise und Pflichtinformationen',
      dataProtection: 'Datenschutz',
      dataProtectionText: 'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzbestimmungen sowie dieser Datenschutzerklärung.',
      responsibleParty: 'Hinweis zur verantwortlichen Stelle',
      responsiblePartyText: 'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:',
      dataCollectionWebsite: 'Datenerfassung auf dieser Website',
      serverLogFiles: 'Server-Log-Dateien',
      serverLogFilesText: 'Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:',
      serverLogFilesList: '• Browsertyp und Browserversion\n• verwendetes Betriebssystem\n• Referrer URL\n• Hostname des zugreifenden Rechners\n• Uhrzeit der Serveranfrage\n• IP-Adresse',
      yourRights: 'Ihre Rechte',
      yourRightsText: 'Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.',
      openSourceLicensing: 'Open Source Software und Lizenzierung',
    },
    
    // Footer
    footer: {
      copyright: '© 2025 KVNR Validator. Alle Rechte vorbehalten.',
      github: 'GitHub',
      sourceCode: 'Quellcode',
    },
  },
  en: {
    // App General
    app: {
      title: 'German Health Insurance Validator',
      backToApp: 'Back',
    },
    
    // Settings
    settings: {
      openSettings: 'Settings',
      settings: 'Settings',
      primaryColor: 'Primary Color',
      primaryColorHelper: 'Enter a hex color code (e.g. #1976d2)',
      apply: 'Apply',
      cancel: 'Cancel',
      reset: 'Reset',
      language: 'Language',
      german: 'German',
      english: 'English',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
    },
    
    // Validation
    validation: {
      kvnrLabel: 'Health Insurance Number (KVNR)',
      kvnrPlaceholder: 'e.g. A123456789',
      kvnrHelper: 'Format: Letter + 8 digits + check digit',
      validate: 'Validate',
      clear: 'Clear',
      validKvnr: 'KVNR is valid',
      invalidKvnr: 'KVNR is invalid',
      formatError: 'Invalid format - must start with a letter',
      validationError: 'Validation error',
    },
    
    // Legal
    legal: {
      impressum: 'Legal Notice',
      datenschutz: 'Privacy Policy',
      openSourceInfo: 'This application is Open Source and released under the MIT License',
      lastUpdated: 'Last updated: November 2025',
      
      // Impressum texts
      impressumTitle: 'Legal Notice',
      legalInfoTmg: 'Information according to § 5 TMG (German Telemedia Act)',
      contact: 'Contact',
      responsibleContent: 'Responsible for content according to § 55 para. 2 RStV',
      disclaimer: 'Disclaimer',
      liabilityContent: 'Liability for Content',
      liabilityContentText: 'The contents of our pages have been created with the utmost care. However, we cannot guarantee the accuracy, completeness and timeliness of the content. As service providers, we are liable for our own content on these pages according to general laws pursuant to Section 7, Para. 1 TMG.',
      liabilityLinks: 'Liability for Links',
      liabilityLinksText: 'Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these foreign contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages.',
      copyright: 'Copyright',
      copyrightText: 'The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, or any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator.',

      // Datenschutz texts
      privacyTitle: 'Privacy Policy',
      privacyAtGlance: 'Data Protection at a Glance',
      generalInfo: 'General Information',
      generalInfoText: 'The following gives a simple overview of what happens to your personal information when you visit our website. Personal information is any data with which you could be personally identified.',
      dataCollection: 'Data Collection on Our Website',
      noKvnrStorage: 'Who is responsible for the data collection on this website?',
      noKvnrStorageText: 'The data processing on this website is carried out by the website operator. You can find their contact details in the legal notice on this website.',
      localSettings: 'Local Storage',
      localSettingsText: 'This application uses your browser\'s local storage to save your preferences (theme and language settings). This data remains on your device and is not transmitted to any external servers.',
      hosting: 'General Information and Mandatory Information',
      hostingText: '',
      mandatoryInfo: 'General Information and Mandatory Information',
      dataProtection: 'Data Protection',
      dataProtectionText: 'The operators of this website take the protection of your personal data very seriously. We treat your personal data as confidential and in accordance with the statutory data protection regulations and this privacy policy.',
      responsibleParty: '',
      responsiblePartyText: '',
      dataCollectionWebsite: 'Data Collection on Our Website',
      serverLogFiles: 'Server Log Files',
      serverLogFilesText: 'The website provider automatically collects and stores information that your browser automatically transmits to us in "server log files". This application runs locally in your browser and does not transmit any health insurance numbers or personal data to external servers.',
      serverLogFilesList: '',
      yourRights: 'Your Rights',
      yourRightsText: 'You have the right to receive information about the origin, recipient, and purpose of your stored personal data at any time without charge. Since this application processes all data locally, no personal data is stored on external servers.',
      openSourceLicensing: 'Open Source Software and Licensing',
    },
    
    // Footer
    footer: {
      copyright: '© 2025 KVNR Validator. All rights reserved.',
      github: 'GitHub',
      sourceCode: 'Source Code',
    },
  },
} as const;

// Type definitions for better TypeScript support
export type TranslationStructure = typeof translations['en'];
export type AppTranslations = TranslationStructure['app'];
export type SettingsTranslations = TranslationStructure['settings'];
export type ValidationTranslations = TranslationStructure['validation'];
export type LegalTranslations = TranslationStructure['legal'];
export type FooterTranslations = TranslationStructure['footer'];
