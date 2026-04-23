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
      lastUpdated: 'Stand: April 2026',
      
      // Impressum texts
      impressumTitle: 'Impressum',
      legalInfoTmg: 'Angaben gemäß § 5 TMG',
      contact: 'Kontakt',
      responsibleContent: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV',
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
      localSettings: 'Lokale Einstellungen (localStorage)',
      localSettingsText: 'Ihre Sprach- und Theme-Einstellungen werden ausschließlich lokal in Ihrem Browser im localStorage gespeichert. Es werden keine Cookies und keine Tracking- oder Analyse-Tools eingesetzt. Die Speicherung erfolgt auf Grundlage von § 25 Abs. 2 Nr. 2 TTDSG, da sie für die vom Nutzer ausdrücklich gewünschte Funktion (Beibehaltung der Spracheinstellung und des Farbthemas) unbedingt erforderlich ist.',
      hosting: 'Hosting (GitHub Pages)',
      hostingText: 'Diese Website wird über GitHub Pages gehostet, einem Dienst der GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. Beim Aufruf der Seite werden technisch notwendige Daten (insbesondere IP-Adresse, Browsertyp und -version, Betriebssystem, Referrer-URL, Zugriffszeit) automatisch an Server von GitHub übermittelt und in Server-Log-Dateien verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und stabilen Bereitstellung der Website). Da GitHub Daten auch in den USA verarbeiten kann, stützt sich der Drittlandtransfer auf das EU-US Data Privacy Framework sowie ergänzend auf Standardvertragsklauseln. Weitere Informationen finden Sie in der Datenschutzerklärung von GitHub: https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement',
      mandatoryInfo: 'Allgemeine Hinweise und Pflichtinformationen',
      dataProtection: 'Datenschutz',
      dataProtectionText: 'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzbestimmungen sowie dieser Datenschutzerklärung.',
      responsibleParty: 'Hinweis zur verantwortlichen Stelle',
      responsiblePartyText: 'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:',
      dataCollectionWebsite: 'Datenerfassung auf dieser Website',
      serverLogFiles: 'Server-Log-Dateien',
      serverLogFilesText: 'Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:',
      serverLogFilesList: '• Browsertyp und Browserversion\n• verwendetes Betriebssystem\n• Referrer URL\n• Hostname des zugreifenden Rechners\n• Uhrzeit der Serveranfrage\n• IP-Adresse',
      serverLogFilesRetention: 'Diese Daten werden auf den Systemen von GitHub gespeichert; auf die Speicherdauer haben wir als Betreiber keinen Einfluss. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird durch uns nicht vorgenommen.',
      yourRights: 'Ihre Rechte',
      yourRightsText: 'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO). Sie haben außerdem ein Recht auf Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie ein Widerspruchsrecht (Art. 21 DSGVO). Da diese Anwendung sämtliche Eingaben (insbesondere KVNRs) ausschließlich lokal in Ihrem Browser verarbeitet, werden hierzu keine personenbezogenen Daten bei uns gespeichert.',
      complaintRight: 'Beschwerderecht bei der Aufsichtsbehörde',
      complaintRightText: 'Im Falle von Verstößen gegen die DSGVO steht Ihnen ein Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthalts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes. Für den Verantwortlichen ist der Hessische Beauftragte für Datenschutz und Informationsfreiheit zuständig.',
      noDpo: 'Datenschutzbeauftragter',
      noDpoText: 'Aufgrund der Art und des Umfangs der Datenverarbeitung ist die Bestellung eines Datenschutzbeauftragten gesetzlich nicht erforderlich.',
      sslEncryption: 'SSL-/TLS-Verschlüsselung',
      sslEncryptionText: 'Diese Seite nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und am Schloss-Symbol in Ihrer Browserzeile.',
      openSourceLicensing: 'Open Source Software und Lizenzierung',
    },
    
    // Footer
    footer: {
      copyright: '© 2026 KVNR Validator. Alle Rechte vorbehalten.',
      github: 'GitHub',
      sourceCode: 'Quellcode',
      homepage: 'Webseite',
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
      lastUpdated: 'Last updated: April 2026',
      
      // Impressum texts
      impressumTitle: 'Legal Notice',
      legalInfoTmg: 'Information according to § 5 TMG (German Telemedia Act)',
      contact: 'Contact',
      responsibleContent: 'Responsible for content according to § 18 para. 2 MStV (German Interstate Media Treaty)',
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
      generalInfoText: 'The following provides a simple overview of what happens to your personal data when you visit this website. This application is a pure frontend tool for KVNR validation and does not permanently store any of the data you enter.',
      dataCollection: 'Data Collection on This Website',
      noKvnrStorage: 'No Storage of KVNR Data',
      noKvnrStorageText: 'All health insurance numbers you enter are processed exclusively locally in your browser. They are never transmitted to or stored on any server.',
      localSettings: 'Local Settings (localStorage)',
      localSettingsText: 'Your language and theme preferences are stored exclusively in your browser\'s localStorage. No cookies and no tracking or analytics tools are used. This storage is based on Section 25 (2) No. 2 TTDSG, as it is strictly necessary to provide the functionality (language and theme preferences) explicitly requested by the user.',
      hosting: 'Hosting (GitHub Pages)',
      hostingText: 'This website is hosted on GitHub Pages, a service provided by GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. When you access the site, technically necessary data (in particular your IP address, browser type and version, operating system, referrer URL, and access time) are automatically transmitted to GitHub\'s servers and processed in server log files. The legal basis is Art. 6 (1) lit. f GDPR (legitimate interest in the secure and stable provision of the website). As GitHub may also process data in the USA, the third-country transfer is based on the EU-US Data Privacy Framework and, additionally, on standard contractual clauses. For details, see GitHub\'s privacy policy: https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement',
      mandatoryInfo: 'General Information and Mandatory Information',
      dataProtection: 'Data Protection',
      dataProtectionText: 'The operators of this website take the protection of your personal data very seriously. We treat your personal data as confidential and in accordance with the statutory data protection regulations and this privacy policy.',
      responsibleParty: 'Information About the Controller',
      responsiblePartyText: 'The controller responsible for data processing on this website is:',
      dataCollectionWebsite: 'Data Collection on This Website',
      serverLogFiles: 'Server Log Files',
      serverLogFilesText: 'The hosting provider (GitHub) automatically collects and stores information in so-called server log files which your browser transmits to us automatically. These are:',
      serverLogFilesList: '• Browser type and browser version\n• Operating system used\n• Referrer URL\n• Hostname of the accessing computer\n• Time of the server request\n• IP address',
      serverLogFilesRetention: 'These data are stored on GitHub\'s systems; we as the operator have no influence on the retention period. We do not merge these data with other data sources.',
      yourRights: 'Your Rights',
      yourRightsText: 'You have the right at any time to receive free information about the origin, recipients, and purpose of your stored personal data (Art. 15 GDPR). You also have the right to rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20), and a right to object (Art. 21 GDPR). Since this application processes all entries (in particular KVNRs) exclusively locally in your browser, we do not store any personal data in this regard.',
      complaintRight: 'Right to Lodge a Complaint with a Supervisory Authority',
      complaintRightText: 'In the event of breaches of the GDPR, you have the right to lodge a complaint with a supervisory authority, in particular in the Member State of your habitual residence, place of work, or the place of the alleged infringement. The competent authority for the controller is the Hessian Commissioner for Data Protection and Freedom of Information.',
      noDpo: 'Data Protection Officer',
      noDpoText: 'Due to the nature and scope of the data processing, the appointment of a data protection officer is not legally required.',
      sslEncryption: 'SSL/TLS Encryption',
      sslEncryptionText: 'For security reasons, this site uses SSL/TLS encryption. You can recognise an encrypted connection by the address bar of your browser changing from "http://" to "https://" and by the lock icon in your browser bar.',
      openSourceLicensing: 'Open Source Software and Licensing',
    },
    
    // Footer
    footer: {
      copyright: '© 2026 KVNR Validator. All rights reserved.',
      github: 'GitHub',
      sourceCode: 'Source Code',
      homepage: 'Homepage',
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
