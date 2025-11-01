import { useState, useCallback } from 'react';
import { checkKvnr } from '../utils/kvnr';

export type ValidationResult = 'valid' | 'invalid' | 'error' | null;

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
   */
  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toUpperCase();
    setKvnrInput(value);
    setValidationResult(null);
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