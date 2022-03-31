import React, { useEffect } from "react";
import "./ProductListing.css";
import axios from "axios";
import Sidebar from "../../components/Sidebar/Sidebar";
import Nav from "../../components/Nav/Nav";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useFilter } from "../../context/Filter-Context";

import {
  sortCategoryFunction,
  sortPriceFunction,
  sortRatingFunction,
  filterPriceRangeFunction,
} from "../../utility/utility";



const ProductListing = () => {
  const {
    state: { products, sortPrice, sortRating, sortCategory, sliderPriceRange },
    dispatch,
  } = useFilter();
 
  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get("api/products");
        dispatch({ type: "PROD_TO_LOAD", payload: resp.data.products });
      } catch (err) {
        alert(`Error from Server , ${err}`);
      }
    })();
  }, [dispatch]);

  let sortByPriceArr = products;
  sortByPriceArr = sortPriceFunction(products, sortPrice);
  let sortByRatingArr = sortRatingFunction(sortByPriceArr, sortRating);
  let sortByCategoryArr = sortCategoryFunction(sortByRatingArr, sortCategory);
  let filterByPriceRangeArr = filterPriceRangeFunction(
    sortByCategoryArr,
    sliderPriceRange
  );
  var filterArray = filterByPriceRangeArr;


  return (
    <div className="container_product">
      <Nav />
      <Sidebar />
      <div className="main_container_product">
        <h1 className="largest_header">All Products</h1>
        <div className="main_card_container">
          {filterArray.length !== 0 ? (
            filterArray.map((item) => (
              <ProductCard
                key={item._id}
                item={item}
              />
            ))
          ) : (
            <p>No Products data</p>
          )}
        </div>
      </div>
    </div>
  );
};

export { ProductListing };
