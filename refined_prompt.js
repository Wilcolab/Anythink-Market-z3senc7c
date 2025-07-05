/**
 * Converts a given string to camelCase.
 *
 * - Removes special characters except letters and numbers.
 * - Splits the input by spaces, underscores, or hyphens.
 * - Preserves acronyms (all uppercase, length > 1) by converting the first word to lowercase and subsequent acronyms to capitalized form.
 * - Throws an error if the input is null, not a string, or empty/whitespace.
 *
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} The camelCase version of the input string.
 * @throws {Error} If the input is null, not a string, or empty/whitespace.
 *
 * @example
 * toCamelCase('first name'); // returns 'firstName'
 * toCamelCase(' LAST_NAME '); // returns 'lastName'
 * toCamelCase('API_KEY'); // returns 'apiKey'
 * toCamelCase('user id 123'); // returns 'userId123'
 */
 
/**
 * Converts a given string to dot.case.
 *
 * - Removes special characters except letters and numbers.
 * - Splits the input by spaces, underscores, or hyphens.
 * - Converts all words to lowercase and joins them with dots.
 * - Throws an error if the input is null, not a string, or empty/whitespace.
 *
 * @param {string} input - The string to convert to dot.case.
 * @returns {string} The dot.case version of the input string.
 * @throws {Error} If the input is null, not a string, or empty/whitespace.
 *
 * @example
 * toDotCase('first name'); // returns 'first.name'
 * toDotCase(' LAST_NAME '); // returns 'last.name'
 * toDotCase('API_KEY'); // returns 'api.key'
 * toDotCase('user id 123'); // returns 'user.id.123'
 */
function toCamelCase(input) {
    if (input === null || typeof input !== 'string' || input.trim() === '') {
        throw new Error('\x1b[41m\x1b[37m Error: Invalid input \x1b[0m');
    }

    // Remove special characters except letters and numbers, split by spaces/underscores/hyphens
    const words = input
        .replace(/[^a-zA-Z0-9 ]+/g, ' ')
        .split(/[\s_-]+/)
        .filter(Boolean);

    if (words.length === 0) {
        throw new Error('\x1b[41m\x1b[37m Error: Invalid input \x1b[0m');
    }

    return words
        .map((word, idx) => {
            // Preserve acronyms (all uppercase, length > 1)
            if (word.length > 1 && /^[A-Z0-9]+$/.test(word)) {
                return idx === 0
                    ? word.toLowerCase()
                    : word[0] + word.slice(1).toLowerCase();
            }
            // Normal camelCase transformation
            return idx === 0
                ? word.toLowerCase()
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
try {
    console.log(toCamelCase('first name')); // firstName
    console.log(toCamelCase(' LAST_NAME ')); // lastName
    console.log(toCamelCase('API_KEY')); // apiKey
    console.log(toCamelCase('user id 123')); // userId123
    console.log(toCamelCase('')); // Throws error
} catch (e) {
    console.error(e.message);
}


function toDotCase(input) {
    if (input === null || typeof input !== 'string' || input.trim() === '') {
        throw new Error('\x1b[41m\x1b[37m Error: Invalid input \x1b[0m');
    }

    // Remove special characters except letters and numbers, split by spaces/underscores/hyphens
    const words = input
        .replace(/[^a-zA-Z0-9 ]+/g, ' ')
        .split(/[\s_-]+/)
        .filter(Boolean);

    if (words.length === 0) {
        throw new Error('\x1b[41m\x1b[37m Error: Invalid input \x1b[0m');
    }

    return words.map(word => word.toLowerCase()).join('.');
}

// Example usage:
try {
    console.log(toDotCase('first name')); // first.name
    console.log(toDotCase(' LAST_NAME ')); // last.name
    console.log(toDotCase('API_KEY')); // api.key
    console.log(toDotCase('user id 123')); // user.id.123
    console.log(toDotCase('')); // Throws error
} catch (e) {
    console.error(e.message);
}

