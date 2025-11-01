function calculateLuhnCheckDigit(numberString: string) {
	const numberSum = [...numberString].reduce((sum, n, index) => {
		const multipler = index % 2 === 0 ? 1 : 2;
		const multipliedNumber = Number(n) * multipler;
		const crossTotal = [...`${multipliedNumber}`].reduce((sum, n) => sum + Number(n), 0);
		return sum + crossTotal;
	}, 0);
	return numberSum % 10;
}

function validateLuhn(numberString: string, checkDigit: number) {
	const calculatedCheckDigit = calculateLuhnCheckDigit(numberString);
	return calculatedCheckDigit === checkDigit;
}

export function checkKvnr(kvnr: string) {
	// Regex: Letter + 8 digits + check digit
	const kvnrMatch = kvnr.match(/^([A-Z])([\d]{8})([\d])$/);

	// Invalid format
	if (!kvnrMatch) return false;

	const letter = kvnrMatch[1];
	const numberPart = kvnrMatch[2];
	const checkDigit = Number.parseInt(kvnrMatch[3], 10);

	// Convert the first letter to a two-digit number (A = 01, B = 02, ..., Z = 26)
	const letterValue = `0${letter.charCodeAt(0) - 64}`.slice(-2);

	// Form the 10-digit base number
	const baseNumber = letterValue + numberPart;

	return validateLuhn(baseNumber, checkDigit);
}
