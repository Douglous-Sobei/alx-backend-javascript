/**
 * Iterate through the report object and return every employee name in a string,
 * separated by '|'.
 * @param {Object} reportWithIterator - The report object with an iterator.
 * @return {string} The employee names separated by '|'.
 */
export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const department of reportWithIterator) {
    for (const employee of department) {
      result += employee + '|';
    }
  }

  // Remove the trailing '|' character
  result = result.slice(0, -1);

  return result;
}
