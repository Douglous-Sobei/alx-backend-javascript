/**
 * Appends a string to each value in the array.
 * @param {Array} array - The input array.
 * @param {string} appendString - The string to append.
 * @return {Array} The modified array with the string appended to each value.
 */
export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    const idx = array.indexOf(value);
    array[idx] = appendString + value; // eslint-disable-line no-param-reassign
  }

  return array;
}
