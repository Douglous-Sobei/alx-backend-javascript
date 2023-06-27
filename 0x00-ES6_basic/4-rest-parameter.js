/**
 * Returns the number of arguments passed to the function.
 * @param {...*} args - The arguments passed to the function.
 * @return {number} The number of arguments.
 */
export default function returnHowManyArguments(...args) {
  return args.length;
}
