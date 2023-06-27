/**
 * Returns a budget object with specified income, gdp, and capita.
 * @param {string} income - The income value.
 * @param {string} gdp - The GDP value.
 * @param {string} capita - The capita value.
 * @return {Object} The budget object.
 */
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
