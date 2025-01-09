/**
 * Global variables and helper functions
 */

/**
 * @param {string} csvContent the content of the CSV file.
 * @returns {string|null} the newline character used in the CSV file.
 */
function detectNewlineCharacter(csvContent)
{
  return /\r\n|\n|\r/.exec(csvContent)?.[0] ?? null;
}
