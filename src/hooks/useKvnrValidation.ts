import { useState, useCallback } from 'react';
import { checkKvnr } from '../utils/kvnr';

export type ValidationResult = 'valid' | 'invalid' | 'error' | 'format-error' | null;

/**
 * Validates KVNR format in real-time
 * Checks if input starts with a letter and follows the basic pattern
 */
function validateKvnrFormat(input: string): boolean {
  if (input.length === 0) return true; // Empty is OK
  if (input.length === 1) return /^[A-Z]$/.test(input); // First char must be letter
  if (input.length <= 10) {
    // Check pattern: Letter + digits
    return /^[A-Z][0-9]*$/.test(input);
  }
  return false; // Too long
}

/**
 * Custom hook for KVNR validation logic
 * 
 * Provides state management and handlers for KVNR validation
 * Encapsulates all validation logic, input handling, and error management
 * 
 * @returns Object containing validation state and handlers
 */
export function useKvnrValidation() {
  const [kvnrInput, setKvnrInput] = useState('');
  const [validationResult, setValidationResult] = useState<ValidationResult>(null);
  const [isValidating, setIsValidating] = useState(false);

  /**
   * Handles the validation of the entered KVNR
   * Uses the checkKvnr utility function and handles exceptions
   */
  const handleValidation = useCallback(async () => {
    if (!kvnrInput.trim()) return;

    setIsValidating(true);
    setValidationResult(null);

    try {
      // Add a small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const isValid = checkKvnr(kvnrInput.trim().toUpperCase());
      setValidationResult(isValid ? 'valid' : 'invalid');
    } catch (error) {
      console.error('Error validating KVNR:', error);
      setValidationResult('error');
    } finally {
      setIsValidating(false);
    }
  }, [kvnrInput]);

  /**
   * Clears the input field and validation result
   */
  const handleClear = useCallback(() => {
    setKvnrInput('');
    setValidationResult(null);
  }, []);

  /**
   * Handles input change and normalizes the input to uppercase
   * Also performs real-time format validation
   */
  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toUpperCase();
    setKvnrInput(value);
    
    // Real-time format validation
    if (value.length > 0 && !validateKvnrFormat(value)) {
      setValidationResult('format-error');
    } else {
      setValidationResult(null);
    }
  }, []);

  return {
    kvnrInput,
    validationResult,
    isValidating,
    handleValidation,
    handleClear,
    handleInputChange,
  };
}