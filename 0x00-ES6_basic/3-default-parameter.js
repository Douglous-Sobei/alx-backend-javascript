/**
 * Represents the getSumOfHoods function.
 * @param {number} initialNumber - The initial number.
 * @param {number} [expansion1989=89] - The expansion in 1989.
 * @param {number} [expansion2019=19] - The expansion in 2019.
 * @return {number} The sum of the initial number, expansion1989, and expansion2019.
 */
export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}
