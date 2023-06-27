/**
 * Represents the taskBlock function.
 * @param {boolean} trueOrFalse - A boolean value indicating true or false.
 * @return {Array} An array containing task and task2 values.
 */
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
