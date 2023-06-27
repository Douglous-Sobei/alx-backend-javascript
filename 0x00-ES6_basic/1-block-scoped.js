/**
 * Represents the taskBlock function.
 * @param {boolean} trueOrFalse - A boolean value indicating true or false.
 * @return {Array} An array containing task and task2 values.
 */
export default function taskBlock(trueOrFalse) {
  if (trueOrFalse) {
    const innerTask = true;
    const innerTask2 = false;

    return [innerTask, innerTask2];
  }

  return [false, true];
}
