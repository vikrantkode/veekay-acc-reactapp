import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    // <div className="main_card_container">
    <div className="card_container">
      <div className="card_wrapper">
        <img className="card_image" src={product.image} alt="product" />
        <span className="card_badge">New</span>
      </div>
      <div className="card_info">
        <div className="card_title">{product.title}</div>
        <small className="card_rating">
          <span className="material-icons-outlined">star_purple500</span>
          {product.rating}
        </small>
      </div>
      <div className="card_price">
        <span className="selling_price">{product.price}</span>
        <small className="cost_price">{product.original_price}</small>
        <small className="discount">{product.discount}</small>
      </div>
      <div className="btn_container">
        <button className="btn btn-success">Add To Cart</button>
        <button className="btn btn-error">Wishlist</button>
      </div>
    </div>

    // </div>
  );
}

export default ProductCard;
