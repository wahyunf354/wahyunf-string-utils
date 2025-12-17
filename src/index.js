/**
 * Capitalize string
 * @param {string} text
 * @returns {string}
 */
function capitalize(text) {
  if (typeof text !== "string") {
    throw new Error("Input harus string");
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Reverse string
 * @param {string} text
 * @returns {string}
 */
function reverse(text) {
  return text.split("").reverse().join("");
}

/**
 * Check if string is palindrome
 * @param {string} text
 * @returns {boolean}
 */
function isPalindrome(text) {
  return text === reverse(text);
}

/**
 * Truncate string if longer than length
 * @param {string} text
 * @param {number} length
 * @returns {string}
 */
function truncate(text, length) {
  if (typeof text !== "string") {
    throw new Error("Input harus string");
  }
  if (typeof length !== "number") {
    throw new Error("Panjang harus number");
  }
  if (length < 0) {
    throw new Error("Panjang tidak boleh negatif");
  }
  if (text.length <= length) {
    return text;
  }
  return text.slice(0, length) + "...";
}

/**
 * Mengubah string menjadi camelCase
 * @param {string} text
 * @returns {string}
 */
function camelCase(text) {
  if (typeof text !== "string") {
    throw new Error("Input harus string");
  }
  return text.toLowerCase().replace(/\s+(.)/g, (_, char) => char.toUpperCase());
}

/**
 * Mengubah string menjadi snake_case
 * @param {string} text
 * @returns {string}
 */
function snakeCase(text) {
  if (typeof text !== "string") {
    throw new Error("Input harus string");
  }
  return text.toLowerCase().replace(/\s+/g, "_");
}

/**
 * Mengubah string menjadi kebab-case
 * @param {string} text
 * @returns {string}
 */
function kebabCase(text) {
  if (typeof text !== "string") {
    throw new Error("Input harus string");
  }
  return text.toLowerCase().replace(/\s+/g, "-");
}

/**
 * Menghapus spasi di awal dan akhir, serta menormalkan multiple spaces menjadi 1 spasi
 * @param {string} text
 * @returns {string}
 */
function trimAll(text) {
  if (typeof text !== "string") {
    throw new Error("Input harus string");
  }
  return text.trim().replace(/\s+/g, " ");
}

/**
 * Mengubah string menjadi slug
 * @param {string} text
 * @returns {string}
 */
function slugify(text) {
  if (typeof text !== "string") {
    throw new Error("Input harus string");
  }
  return text
    .toLowerCase()
    .replace(/([a-z])([0-9])/g, "$1-$2")
    .replace(/([0-9])([a-z])/g, "$1-$2")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

module.exports = {
  capitalize,
  reverse,
  isPalindrome,
  truncate,
  camelCase,
  snakeCase,
  kebabCase,
  trimAll,
  slugify,
};
