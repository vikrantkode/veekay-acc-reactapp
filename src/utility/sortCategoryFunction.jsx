/**
 * @param {array} productList - An Array of objects
 * @param {state} sortCategory - gets product based on category
 * @returns products of selected categories
 */

export const sortCategoryFunction = (productList, sortCategory) => {
  let filterProdArr = [];
  if (
    !sortCategory.bySunglasses &&
    !sortCategory.byBarware &&
    !sortCategory.byGrooming &&
    !sortCategory.byFitness &&
    !sortCategory.byFootwear
  ) {
    return productList;
  }
  if (sortCategory.bySunglasses) {
    filterProdArr.push(
      ...productList.filter((product) => product.categoryName === "sunglasses")
    );
  }

  if (sortCategory.byBarware) {
    filterProdArr.push(
      ...productList.filter((product) => product.categoryName === "barware")
    );
  }
  if (sortCategory.byGrooming) {
    filterProdArr.push(
      ...productList.filter((product) => product.categoryName === "grooming")
    );
  }

  if (sortCategory.byFitness) {
    filterProdArr.push(
      ...productList.filter((product) => product.categoryName === "fitness")
    );
  }

  if (sortCategory.byFootwear) {
    filterProdArr.push(
      ...productList.filter((product) => product.categoryName === "footwear")
    );
  }

  return filterProdArr;
};
