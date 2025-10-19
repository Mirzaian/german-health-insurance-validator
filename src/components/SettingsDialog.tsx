import { formatHexColor } from '../utils/color';
import { translations } from '../utils/translations';
import { useTheme } from "@mui/material/styles";
import { Box, Typography, TextField, Button, ToggleButtonGroup, ToggleButton, FormControlLabel, Switch, Dialog, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { useSettings } from "../context/SettingsContext";
import { appConfig } from '../config/appConfig';

function SettingsDialog() {
    const { primaryColor, setPrimaryColor, settingsOpen, setSettingsOpen, language, setLanguage, mode, setMode } = useSettings();
    const [changed, setChanged] = useState(false);
    const [inputPrimary, setInputPrimary] = useState(primaryColor);
    const theme = useTheme();
    const t = translations[language];

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
    return (
        <Dialog open={settingsOpen} onClose={() => setSettingsOpen(false)} maxWidth="xs" fullWidth>
            <DialogTitle sx={{ m: 0, p: 2, textAlign: 'center', position: 'relative' }}>
                {t.settings}
                <IconButton
                    aria-label="close"
                    onClick={() => setSettingsOpen(false)}
                    sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <Box
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
                <TextField
                    label={t.primaryColor}
                    value={inputPrimary}
                    onChange={e => handlePrimaryInput(e.target.value)}
                    helperText={t.primaryColorHelper}
                    fullWidth
                />
                <Box sx={{ mt: 1, display: 'flex', gap: 2, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <Button variant="contained" onClick={handleApply}>{t.apply}</Button>
                    {changed && (
                        <Button variant="outlined" onClick={() => {
                            setPrimaryColor(appConfig.defaultPrimaryColor);
                            setInputPrimary(appConfig.defaultPrimaryColor);
                            setChanged(false);
                        }}>{t.cancel}</Button>
                    )}
                    {primaryColor !== appConfig.defaultPrimaryColor && changed && (
                        <Button variant="text" color="secondary" onClick={handleReset}>{t.reset}</Button>
                    )}
                </Box>
                <Box sx={{ mt: 3, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="subtitle1" gutterBottom>{t.language}</Typography>
                    <ToggleButtonGroup
                        value={language}
                        exclusive
                        onChange={(_, val) => val && setLanguage(val)}
                        size="small"
                        color="primary"
                        aria-label="language toggle"
                    >
                        <ToggleButton value="de">{t.german}</ToggleButton>
                        <ToggleButton value="en">{t.english}</ToggleButton>
                    </ToggleButtonGroup>
                </Box>
                <Box sx={{ mt: 3, width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <FormControlLabel
                        control={<Switch checked={mode === 'dark'} onChange={(_, checked) => setMode(checked ? 'dark' : 'light')} />}
                        label={mode === 'dark' ? t.darkMode : t.lightMode}
                    />
                </Box>
            </Box>
        </Dialog>
    );
}

export default SettingsDialog;
