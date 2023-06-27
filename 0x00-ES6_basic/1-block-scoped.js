/**
 * Represents the taskBlock function.
 * @param {boolean} trueOrFalse - A boolean value indicating true or false.
 * @return {Array} An array containing task and task2 values.
 */
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    const innerTask = true;
    const innerTask2 = false;

    task = innerTask;
    task2 = innerTask2;
  }

  return [task, task2];
}
