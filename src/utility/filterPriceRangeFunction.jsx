/**
 * @param {array} productList - Array of objects
 * @param {state} sliderPriceRange - user input values
 * @returns products of given range
 */

export const filterPriceRangeFunction = (productList, sliderPriceRange) => {
  return productList.filter((item) => item.price <= sliderPriceRange);
};
