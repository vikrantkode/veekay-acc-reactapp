import React from "react";
import { useFilter } from "../../context/Filter-Context";
import "./Sidebar.css";

function Sidebar() {
  const {
    state: { sortPrice, sortRating, sortCategory, sliderPriceRange },
    dispatch,
  } = useFilter();

  const { bySunglasses, byBarware, byGrooming, byFitness, byFootwear } =
    sortCategory;

  return (
    <aside className="sidebar_container">
      <div className="sidebar_box space_between">
        <h3 className="large_heading">Filter</h3>
        <span className="filter" onClick={() => dispatch({ type: "CLEAR" })}>
          Clear Filter
        </span>
      </div>

      <div className="sidebar_box sidebar_slider">
        <h3 className="large_heading">Price</h3>
        <p className="sidebar_price_range space_between">
          <span className="min_price">250</span>
          <span className="max_price">{sliderPriceRange}</span>
        </p>
        <input
          className="input_range"
          type="range"
          min={250}
          max={1500}
          value={sliderPriceRange}
          step={250}
          onChange={(e) =>
            dispatch({ type: "RANGE_PRICE_SLIDER", payload: e.target.value })
          }
        />
      </div>

      <div className="sidebar_box ">
        <h3 className="large_heading">Category</h3>
        <ul className="list">
          <li className="normal_list">
            <label>
              <input
                className="checkbox_list"
                type="checkbox"
                onChange={() => dispatch({ type: "SUNGLASSES" })}
                checked={bySunglasses}
              />
              Sunglasses
            </label>
          </li>
          <li className="normal_list">
            <label>
              <input
                className="checkbox_list"
                type="checkbox"
                onChange={() => dispatch({ type: "BARWARE" })}
                checked={byBarware}
              />
              Barware
            </label>
          </li>
          <li className="normal_list">
            <label>
              <input
                className="checkbox_list"
                type="checkbox"
                onChange={() => dispatch({ type: "GROOMING" })}
                checked={byGrooming}
              />
              Grooming
            </label>
          </li>
          <li className="normal_list">
            <label>
              <input
                className="checkbox_list"
                type="checkbox"
                onChange={() => dispatch({ type: "FITNESS" })}
                checked={byFitness}
              />
              Fitness
            </label>
          </li>
          <li className="normal_list">
            <label>
              <input
                className="checkbox_list"
                type="checkbox"
                onChange={() => dispatch({ type: "FOOTWEAR" })}
                checked={byFootwear}
              />
              Footwear
            </label>
          </li>
        </ul>

        <h3 className="large_heading">Rating</h3>
        <ul className="list">
          <li className="normal_list">
            <label>
              <input
                className="checkbox_list"
                type="radio"
                name="rating"
                onChange={() =>
                  dispatch({ type: "SORT_BY_RATING", payload: "4_AND_ABOVE" })
                }
                checked={sortRating === "4_AND_ABOVE"}
              />
              4 Stars & Above
            </label>
          </li>
          <li className="normal_list">
            <label>
              <input
                className="checkbox_list"
                type="radio"
                name="rating"
                onChange={() =>
                  dispatch({ type: "SORT_BY_RATING", payload: "3_AND_ABOVE" })
                }
                checked={sortRating === "3_AND_ABOVE"}
              />
              3 Stars & Above
            </label>
          </li>
          <li className="normal_list">
            <label>
              <input
                className="checkbox_list"
                type="radio"
                name="rating"
                onChange={() =>
                  dispatch({ type: "SORT_BY_RATING", payload: "2_AND_ABOVE" })
                }
                checked={sortRating === "2_AND_ABOVE"}
              />
              2 Stars & Above
            </label>
          </li>
          <li className="normal_list">
            <label>
              <input
                className="checkbox_list"
                type="radio"
                name="rating"
                onChange={() =>
                  dispatch({ type: "SORT_BY_RATING", payload: "1_AND_ABOVE" })
                }
                checked={sortRating === "1_AND_ABOVE"}
              />
              1 Stars & Above
            </label>
          </li>
        </ul>

        <h3 className="large_heading">Sort By</h3>
        <ul className="list">
          <li className="normal_list">
            <label>
              <input
                className="checkbox_list"
                type="radio"
                name="sort"
                onChange={() =>
                  dispatch({ type: "SORT_BY_PRICE", payload: "lowToHigh" })
                }
                checked={sortPrice === "lowToHigh"}
              />
              Price - Low To High
            </label>
          </li>
          <li className="normal_list">
            <label>
              <input
                className="checkbox_list"
                type="radio"
                name="sort"
                onChange={() =>
                  dispatch({ type: "SORT_BY_PRICE", payload: "highToLow" })
                }
                checked={sortPrice === "highToLow"}
              />
              Price - High To Low
            </label>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
