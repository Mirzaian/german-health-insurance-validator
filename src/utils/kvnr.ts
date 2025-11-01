import { isValidKVNR } from 'kvnr-utils';

/**
 * Validates a German health insurance number (KVNR) using the kvnr-utils library
 * 
 * @param kvnr - The KVNR string to validate
 * @returns boolean - true if valid, false if invalid
 */
export function checkKvnr(kvnr: string): boolean {
	return isValidKVNR(kvnr);
}
