import { formatHexColor } from '../utils/color';
import { translations } from '../utils/translations';
import { useTheme } from "@mui/material/styles";
import { Box, Typography, TextField, Button, ToggleButtonGroup, ToggleButton, FormControlLabel, Switch, Dialog, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { useSettings, type Language } from "../hooks/useSettings";
import { appConfig } from '../config/appConfig';

function SettingsDialog() {
    const { primaryColor, setPrimaryColor, settingsOpen, setSettingsOpen, language, setLanguage, mode, setMode } = useSettings();
    const [changed, setChanged] = useState(false);
    const [inputPrimary, setInputPrimary] = useState(primaryColor);
    const theme = useTheme();
    const t = translations[language as Language];

    // Unique IDs for accessibility
    const dialogId = 'settings-dialog';
    const primaryColorInputId = 'primary-color-input';
    const languageGroupId = 'language-toggle-group';
    const darkModeToggleId = 'dark-mode-toggle';
    const applyButtonId = 'apply-settings-button';
    const cancelButtonId = 'cancel-settings-button';
    const resetButtonId = 'reset-settings-button';

    // Add # to color-input if missing
    const handlePrimaryInput = (val: string) => {
        setInputPrimary(formatHexColor(val));
        setChanged(true);
    };

    // Sync input field with context if reset
    if (inputPrimary !== primaryColor && !changed) setInputPrimary(primaryColor);

    const handleApply = () => {
        setPrimaryColor(inputPrimary);
        setSettingsOpen(false);
        setChanged(true);
    };
    
    const handleReset = () => {
        setPrimaryColor(appConfig.defaultPrimaryColor);
        setInputPrimary(appConfig.defaultPrimaryColor);
        setChanged(false);
    };

    const handleCancel = () => {
        // Revert input field to current context value (discard changes)
        setInputPrimary(primaryColor);
        setChanged(false);
    };

    return (
        <Dialog 
            open={settingsOpen} 
            onClose={() => setSettingsOpen(false)} 
            maxWidth="xs" 
            fullWidth
            id={dialogId}
            aria-labelledby="settings-dialog-title"
            aria-describedby="settings-dialog-description"
        >
            <DialogTitle 
                id="settings-dialog-title"
                sx={{ m: 0, p: 2, textAlign: 'center', position: 'relative' }}
            >
                {t.settings.settings}
                <IconButton
                    aria-label={`Close ${t.settings.settings} dialog`}
                    onClick={() => setSettingsOpen(false)}
                    sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <Box
                id="settings-dialog-description"
                role="form"
                aria-label="Application settings form"
                sx={{
                    bgcolor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    p: 4,
                    pt: 2,
                    borderRadius: 2,
                    minWidth: 320,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {/* Primary Color Section */}
                <Box 
                    component="fieldset" 
                    sx={{ border: 'none', p: 0, m: 0, width: '100%' }}
                    role="group"
                    aria-labelledby="primary-color-legend"
                >
                    <Typography 
                        id="primary-color-legend"
                        component="legend" 
                        variant="subtitle1" 
                        sx={{ mb: 2}}
                    >
                        {t.settings.primaryColor}
                    </Typography>
                    <TextField
                        id={primaryColorInputId}
                        value={inputPrimary}
                        onChange={e => handlePrimaryInput(e.target.value)}
                        helperText={t.settings.primaryColorHelper}
                        fullWidth
                        inputProps={{
                            'aria-describedby': `${primaryColorInputId}-helper-text`,
                            'aria-label': `${t.settings.primaryColor} - ${t.settings.primaryColorHelper}`,
                        }}
                    />
                    <Box 
                        sx={{ mt: 1, display: 'flex', gap: 2, justifyContent: 'center', alignItems: 'center', width: '100%' }}
                        role="group"
                        aria-label="Primary color actions"
                    >
                        <Button 
                            id={applyButtonId}
                            variant="contained" 
                            onClick={handleApply}
                            aria-label={`${t.settings.apply} primary color changes`}
                        >
                            {t.settings.apply}
                        </Button>
                        {changed && (
                            <Button 
                                id={cancelButtonId}
                                variant="outlined" 
                                onClick={handleCancel}
                                aria-label={`${t.settings.cancel} primary color changes`}
                            >
                                {t.settings.cancel}
                            </Button>
                        )}
                        {primaryColor !== appConfig.defaultPrimaryColor && changed && (
                            <Button 
                                id={resetButtonId}
                                variant="text" 
                                color="secondary" 
                                onClick={handleReset}
                                aria-label={`${t.settings.reset} primary color to default`}
                            >
                                {t.settings.reset}
                            </Button>
                        )}
                    </Box>
                </Box>

                {/* Language Selection Section */}
                <Box 
                    component="fieldset"
                    sx={{ border: 'none', p: 0, m: 0, mt: 3, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    role="group"
                    aria-labelledby="language-legend"
                >
                    <Typography 
                        id="language-legend"
                        component="legend"
                        variant="subtitle1" 
                        gutterBottom
                    >
                        {t.settings.language}
                    </Typography>
                    <ToggleButtonGroup
                        id={languageGroupId}
                        value={language}
                        exclusive
                        onChange={(_, val) => val && setLanguage(val)}
                        size="small"
                        color="primary"
                        aria-labelledby="language-legend"
                        aria-describedby="language-description"
                    >
                        <ToggleButton 
                            value="de"
                            aria-label={`Select German language`}
                            aria-pressed={language === 'de'}
                        >
                            {t.settings.german}
                        </ToggleButton>
                        <ToggleButton 
                            value="en"
                            aria-label={`Select English language`}
                            aria-pressed={language === 'en'}
                        >
                            {t.settings.english}
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <Typography 
                        id="language-description"
                        variant="caption"
                        sx={{ mt: 1, textAlign: 'center', display: 'none' }}
                    >
                        Choose your preferred language for the application
                    </Typography>
                </Box>

                {/* Dark Mode Section */}
                <Box 
                    component="fieldset"
                    sx={{ border: 'none', p: 0, m: 0, mt: 3, width: '100%', display: 'flex', justifyContent: 'center' }}
                    role="group"
                    aria-labelledby="theme-legend"
                >
                    <Typography 
                        id="theme-legend"
                        component="legend"
                        sx={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }}
                    >
                        Theme mode selection
                    </Typography>
                    <FormControlLabel
                        control={
                            <Switch 
                                id={darkModeToggleId}
                                checked={mode === 'dark'} 
                                onChange={(_, checked) => setMode(checked ? 'dark' : 'light')}
                                inputProps={{
                                    'aria-describedby': 'theme-mode-description',
                                    'aria-label': `Toggle between dark and light mode. Currently ${mode} mode.`
                                }}
                            />
                        }
                        label={mode === 'dark' ? t.settings.darkMode : t.settings.lightMode}
                        aria-labelledby="theme-legend"
                    />
                    <Typography 
                        id="theme-mode-description"
                        sx={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }}
                    >
                        Toggle between dark and light theme modes
                    </Typography>
                </Box>
            </Box>
        </Dialog>
    );
}

export default SettingsDialog;
