/**
 * Ensures a string is formatted as a hex color with a leading #
 * Removes duplicate # characters and adds one if needed
 */
export function formatHexColor(input: string): string {
  return '#' + input.replace(/^#+/, '');
}
