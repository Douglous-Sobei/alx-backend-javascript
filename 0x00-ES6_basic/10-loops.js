/**
 * Appends a string to each value in the array.
 * @param {Array} array - The input array.
 * @param {string} appendString - The string to append.
 * @return {Array} The modified array with the string appended to each value.
 */
export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    value = appendString + value;
  }

  return array;
}
