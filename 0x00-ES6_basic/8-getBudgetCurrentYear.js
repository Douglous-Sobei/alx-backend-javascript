/**
 * Returns a budget object for the current year with specified income, gdp, and capita.
 * @param {string} income - The income value.
 * @param {string} gdp - The GDP value.
 * @param {string} capita - The capita value.
 * @return {Object} The budget object for the current year.
 */
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  return budget;
}
