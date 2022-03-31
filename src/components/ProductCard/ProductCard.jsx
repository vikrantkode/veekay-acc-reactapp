import React from "react";
import "./ProductCard.css";
import {useCart} from "../../context/Cart-Context"
import axios from "axios";
import { useAuth } from "../../context/Auth-Context";
import { Link, useNavigate } from "react-router-dom";


function ProductCard({ item }) {

  const {itemsInCart,setItemsInCart} = useCart();
  const {state:{encodedToken}} = useAuth();
  const navigate = useNavigate();

    const addToCartClickHandler = async (product) => {
      console.log("clicked here",product)
    
      if(encodedToken){
        try {
          const cartItems = await axios.post( `/api/user/cart`, {product} ,
            { headers: { authorization: encodedToken } }
          );
          setItemsInCart(cartItems.data.cart)
        } catch (err) {
          console.log(err)
        }  
      } else {
        navigate("/loginpage")
      }
  };


  return (
    <div className="card_container">
      <div className="card_wrapper">
        <img className="card_image" src={item.image} alt="product" />
        <span className="card_badge">New</span>
      </div>
      <div className="card_info">
        <div className="card_title">{item.title}</div>
        <small className="card_rating">
          <span className="material-icons-outlined">star_purple500</span>
          {item.rating}
        </small>
      </div>
      <div className="card_price">
        <span className="selling_price">₹{item.price}</span>
        <small className="cost_price">₹{item.original_price}</small>
        <small className="discount">{item.discount}</small>
      </div>
      <div className="btn_container">
        {itemsInCart.some((e)=>e._id === item._id) ? 
            <Link to= "/cartpage"> <button className="btn btn-success">Go To Cart</button> </Link> :  <button className="btn btn-success" 
                onClick={()=>addToCartClickHandler(item)}>Add To Cart</button>}
        <button className="btn btn-error">Wishlist</button>
      </div>
    </div>

  );
}

export default ProductCard;
