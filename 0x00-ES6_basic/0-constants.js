/**
 * Represents the taskFirst function.
 * @return {string} The task string.
 */
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

/**
   * Represents the getLast function.
   * @return {string} The string indicating "is okay".
   */
export function getLast() {
  return ' is okay';
}

/**
   * Represents the taskNext function.
   * @return {string} The combination string.
   */
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
