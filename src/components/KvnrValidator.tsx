import {
  TextField,
  Card,
  CardContent,
  Alert,
  Button,
  Stack,
  Box,
  Fade,
  IconButton,
  InputAdornment,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useSettings, type Language } from '../hooks/useSettings';
import { translations } from '../utils/translations';
import { useKvnrValidation } from '../hooks/useKvnrValidation';

/**
 * KVNR Validator Component
 * 
 * Provides a complete KVNR validation interface with input field,
 * validation buttons, and result feedback. Uses the useKvnrValidation
 * hook for all validation logic and state management.
 * Fully accessible with proper ARIA attributes and semantic markup.
 */
export default function KvnrValidator() {
  const { language } = useSettings();
  const t = translations[language as Language];

  const {
    kvnrInput,
    validationResult,
    isValidating,
    handleValidation,
    handleClear,
    handleInputChange,
  } = useKvnrValidation();

  // Unique IDs for accessibility
  const kvnrInputId = 'kvnr-input';
  const kvnrFormId = 'kvnr-validation-form';
  const resultRegionId = 'kvnr-result-region';
  const submitButtonId = 'kvnr-submit-button';
  const clearButtonId = 'kvnr-clear-button';

  /**
   * Prevents default form submission and triggers validation
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleValidation();
  };

  return (
    <Card 
      sx={{ 
        mb: 4, 
        boxShadow: 3,
        borderRadius: 2,
        overflow: 'hidden'
      }}
      role="region"
      aria-label={`${t.validation.kvnrLabel} validation form`}
    >
      <CardContent sx={{ 
        p: { xs: 3, sm: 4 }, 
        '&:last-child': { pb: { xs: 3, sm: 4 } }
      }}>
        <Box 
          component="form" 
          id={kvnrFormId}
          onSubmit={handleSubmit} 
          noValidate
          aria-label={`${t.validation.validate} ${t.validation.kvnrLabel}`}
        >
          <Stack spacing={{ xs: 2.5, sm: 3 }}>
            <TextField
              id={kvnrInputId}
              fullWidth
              label={t.validation.kvnrLabel}
              placeholder={t.validation.kvnrPlaceholder}
              helperText={t.validation.kvnrHelper}
              value={kvnrInput}
              onChange={handleInputChange}
              slotProps={{
                htmlInput: {
                  maxLength: 10,
                  style: { textTransform: 'uppercase' },
                  'aria-describedby': `${kvnrInputId}-helper-text ${resultRegionId}`,
                  'aria-required': true,
                  'aria-invalid': validationResult === 'invalid' ? true : undefined,
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      id={clearButtonId}
                      aria-label={`${t.validation.clear} ${t.validation.kvnrLabel} input`}
                      onClick={handleClear}
                      edge="end"
                      size="small"
                      disabled={!kvnrInput}
                      sx={{
                        opacity: kvnrInput ? 1 : 0.3,
                        transition: 'all 0.2s ease-in-out',
                        visibility: 'visible',
                      }}
                    >
                      <ClearIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              autoFocus
              error={validationResult === 'invalid'}
            />

            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              width: '100%',
              pt: 1 
            }}>
              <Button
                id={submitButtonId}
                type="submit"
                variant="contained"
                disabled={!kvnrInput.trim() || isValidating}
                sx={{ 
                  minWidth: { xs: 140, sm: 160 }, 
                  py: { xs: 1.2, sm: 1.5 },
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  fontWeight: 600
                }}
                aria-label={isValidating ? `${t.validation.validate} in progress` : `${t.validation.validate} ${t.validation.kvnrLabel}`}
              >
                {isValidating ? 'Validating...' : t.validation.validate}
              </Button>
            </Box>

            {/* Validation results */}
            <Box 
              id={resultRegionId}
              sx={{ 
                mt: { xs: 2.5, sm: 3 },
                minHeight: validationResult ? 'auto' : '60px',
                display: 'flex',
                alignItems: 'center'
              }}
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              <Fade in={validationResult !== null} timeout={300}>
                <Box sx={{ width: '100%' }}>
                  {validationResult === 'valid' && (
                    <Alert 
                      severity="success" 
                      sx={{ 
                        textAlign: 'left',
                        '& .MuiAlert-message': {
                          fontSize: { xs: '0.875rem', sm: '1rem' }
                        }
                      }}
                      role="alert"
                    >
                      {t.validation.validKvnr}
                    </Alert>
                  )}
                  {(validationResult === 'invalid' || validationResult === 'error') && (
                    <Alert 
                      severity="error" 
                      sx={{ 
                        textAlign: 'left',
                        '& .MuiAlert-message': {
                          fontSize: { xs: '0.875rem', sm: '1rem' }
                        }
                      }}
                      role="alert"
                    >
                      {t.validation.invalidKvnr}
                    </Alert>
                  )}
                </Box>
              </Fade>
            </Box>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}