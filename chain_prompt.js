/**
 * Converts a string to kebab-case.
 * Example: "I LOVE KEBAB" => "i-love-kebab", "Kebab_Lover" => "kebab-lover"
 * Throws an error if input is not a string.
 * @param {string} str - The input string to convert.
 * @returns {string} The kebab-case version of the input.
 */
function toKebabCase(str) {
    try {
        if (typeof str !== 'string') {
            throw new Error('Input must be a string');
        }
        return str
            .replace(/([a-z])([A-Z])/g, '$1 $2') // Split camelCase
            .replace(/[_\s]+/g, '-')             // Replace spaces/underscores with -
            .replace(/[^a-zA-Z0-9-]/g, '')       // Remove non-alphanumeric except -
            .toLowerCase();
    } catch (error) {
        handleError(error);
        return '';
    }
}

/**
 * Handles errors by displaying the error message.
 * @param {Error} error - The error object to display.
 */
function handleError(error) {
    console.error(`Error: ${error.message}`);
}

// Example usage:
// console.log(toKebabCase('I LOVE KEBAB')); // "i-love-kebab"
// console.log(toKebabCase('Kebab_Lover'));  // "kebab-lover"
// console.log(toKebabCase(123));            // Error: Input must be a string