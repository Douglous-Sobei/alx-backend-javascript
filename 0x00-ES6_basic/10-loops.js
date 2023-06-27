/**
 * Appends a specified string to each value in an array.
 * @param {Array} array - The input array.
 * @param {string} appendString - The string to append to each array value.
 * @return {Array} The new array with the appended string.
 */
export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];

  for (const value of array) {
    newArray.push(appendString + value);
  }

  return newArray;
}
