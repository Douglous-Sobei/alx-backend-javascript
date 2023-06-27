import getBudgetObject from './7-getBudgetObject.js';

/**
 * Returns the full budget object with additional methods for income conversion.
 * @param {number} income - The income value.
 * @param {number} gdp - The GDP value.
 * @param {number} capita - The capita value.
 * @return {Object} The full budget object.
 */
export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);

  /**
   * Converts the income value to dollars.
   * @param {number} income - The income value.
   * @return {string} The income value in dollars.
   */
  function getIncomeInDollars(income) {
    return `$${income}`;
  }

  /**
   * Converts the income value to euros.
   * @param {number} income - The income value.
   * @return {string} The income value in euros.
   */
  function getIncomeInEuros(income) {
    return `${income} euros`;
  }

  const fullBudget = {
    ...budget,
    getIncomeInDollars,
    getIncomeInEuros,
  };

  return fullBudget;
}
