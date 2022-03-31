import React from "react";
import "./ProductCard.css";
import {useCart} from "../../context/Cart-Context"
import { useAuth } from "../../context/Auth-Context";
import { Link, useNavigate } from "react-router-dom";
import { useWishlist, addToCartClickHandler, addToWishlistHandler } from "../../context/Wishlist-Context";



function ProductCard({ item }) {

  const {itemsInCart,setItemsInCart} = useCart();
  const {itemsInWishlist, setItemsInWishlist} = useWishlist();
  const {state:{encodedToken}} = useAuth();
  const navigate = useNavigate();

    // const addToCartClickHandler = async (product) => {
    //   if(encodedToken){
    //     try {
    //       const cartItems = await axios.post( `/api/user/cart`, {product} ,
    //         { headers: { authorization: encodedToken } }
    //       );
    //       setItemsInCart(cartItems.data.cart)
    //     } catch (err) {
    //       alert("error from server", err)
    //     }  
    //   } else {
    //     navigate("/loginpage")
    //   }
    // };

    // const addToWishlistHandler = async (product) => {
    //   if(encodedToken){
    //     try {
    //       const resp = await axios.post(`/api/user/wishlist`,{product},
    //       { headers: { authorization: encodedToken }});
    //       setItemsInWishlist(resp.data.wishlist);
    //     }catch(err){
    //       alert("error from server", err)
    //     }
    //   } else {
    //     navigate("/loginpage")
    //   }
    // }
  
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
                onClick={()=>addToCartClickHandler(item , setItemsInCart, encodedToken, navigate)}>Add To Cart</button>}

        {itemsInWishlist.some((e)=>e._id === item._id)?
            <Link to="/wishlist">
              <button className="btn btn-error">Go To Wishlist</button>
              </Link> : 
            <button className="btn btn-error" onClick={()=>addToWishlistHandler(item,setItemsInWishlist,encodedToken,navigate)}>Add To Wishlist</button>}         
      </div>
    </div>

  );
}

export default ProductCard;
