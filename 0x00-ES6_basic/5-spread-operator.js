/**
 * Concatenates two arrays and each character of a string.
 * @param {Array} array1 - The first array.
 * @param {Array} array2 - The second array.
 * @param {string} string - The string to concatenate.
 * @return {Array} The concatenated array.
 */
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
