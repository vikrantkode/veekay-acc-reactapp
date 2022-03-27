/**
 * @param {array} productList - Array of objects 
 * @param {state} sortPrice - condition
 * @returns - sorted array of objects
 */

export const sortPriceFunction = (productList, sortPrice) => {

    if (sortPrice === "lowToHigh") 
      return [...productList].sort((item1, item2) => item1.price - item2.price);
    if (sortPrice === "highToLow") 
      return [...productList].sort((item1, item2) => item2.price - item1.price);
    else 
      return productList;
    
  };
  