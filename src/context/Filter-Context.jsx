import { createContext, useContext, useReducer } from "react";
import reducerFunction from "../reducer/reducerFunction";

const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, {
    products: [],
    sortPrice: "",
    sortRating: "",
    sortCategory: {
      bySunglasses: false,
      byBarware: false,
      byGrooming: false,
      byFitness: false,
      byFootwear: false,
    },
    sliderPriceRange: 1500,
  });
  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider, useFilter };
