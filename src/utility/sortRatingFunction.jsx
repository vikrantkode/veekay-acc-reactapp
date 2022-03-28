/**
 * @param {array} productList - An Array of onjects
 * @param {state} sortRating - condition
 * @returns {array} - sorted array by ratings
 */

export const sortRatingFunction = (productList, sortRating) => {
    if (sortRating === "4_AND_ABOVE")
        return productList.filter((item) => item.rating > 4)
    if (sortRating === "3_AND_ABOVE")
        return productList.filter((item) => item.rating > 3)
    if (sortRating === "2_AND_ABOVE")
        return productList.filter((item) => item.rating > 2)
    if (sortRating === "1_AND_ABOVE")
        return productList.filter((item) => item.rating > 1)
    else
        return productList
}

