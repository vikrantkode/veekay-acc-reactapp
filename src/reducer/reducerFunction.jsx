const reducerFunction = (state, action) => {
  switch (action.type) {
    case "PROD_TO_LOAD": {
      return { ...state, products: action.payload };
    }
    case "SORT_BY_PRICE": {
      return { ...state, sortPrice: action.payload };
    }
    case "SORT_BY_RATING": {
      return { ...state, sortRating: action.payload };
    }
    case "SUNGLASSES": {
      return {
        ...state,
        sortCategory: {
          ...state.sortCategory,
          bySunglasses: !state.sortCategory.bySunglasses,
        },
      };
    }
    case "BARWARE": {
      return {
        ...state,
        sortCategory: {
          ...state.sortCategory,
          byBarware: !state.sortCategory.byBarware,
        },
      };
    }
    case "GROOMING": {
      return {
        ...state,
        sortCategory: {
          ...state.sortCategory,
          byGrooming: !state.sortCategory.byGrooming,
        },
      };
    }
    case "FITNESS": {
      return {
        ...state,
        sortCategory: {
          ...state.sortCategory,
          byFitness: !state.sortCategory.byFitness,
        },
      };
    }
    case "FOOTWEAR": {
      return {
        ...state,
        sortCategory: {
          ...state.sortCategory,
          byFootwear: !state.sortCategory.byFootwear,
        },
      };
    }
    case "RANGE_PRICE_SLIDER": {
      return { ...state, sliderPriceRange: action.payload };
    }
    case "CLEAR": {
      return {
        ...state,
        sortPrice: "",
        sortRating: "",
        sortCategory: {
          bySunglasses: false,
          byBarware: false,
          byGrooming: false,
          byFitness: false,
          btFootwear: false,
        },
        sliderPriceRange: 500,
      };
    }
    default:
      return state;
  }
};

export default reducerFunction;
