import React from 'react'
import "./WishlistCard.css"
import { addToCartClickHandler } from "../../context/Wishlist-Context";
import { useCart } from '../../context/Cart-Context';
import { useAuth } from '../../context/Auth-Context';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

function WishlistCard({item, removeFromWishlistHandler }) {
    const {itemsInCart,setItemsInCart} = useCart();
    const {state:{encodedToken}} = useAuth();
    const navigate = useNavigate();

    const cardQtyHandler = async (productId, type) => {
        try {
          const resp = await axios.post(
            `/api/user/cart/${productId}`,
            {
              action: {
                type: type,
              },
            },
            { headers: { authorization: encodedToken } }
          );
          setItemsInCart(resp.data.cart);
        } catch (err) {
          alert(`Error from server",${err}`);
        }
      };
  return (
        <div className="card_container">
            <div className="card_wrapper">
                <img className="card_image" src={item.image} alt="wishlist_product"/>
                <span className="card_badge">New</span>
            </div>
            <div className="card_info">
                <div className="card_title">{item.title}</div>
                <small className="card_rating"><span className="material-icons-outlined">
                        star_purple500
                    </span>5</small>
                    <button className="dismiss wishlist_btn"><span className="material-icons-outlined wishlist_icon">
                        favorite
                    </span></button>
            </div>
            <div className="card_price">
                <span className="selling_price">₹{item.price}</span>
                <small className="cost_price">₹{item.original_price}</small>
                <small className="discount">{item.discount}% off</small>
            </div>
            <div className="btn_container">
            {itemsInCart.some((e)=>e._id === item._id) ? 
                <button className="btn btn-success" onClick={()=>cardQtyHandler(item._id,"increment")}>Add To Card</button> :<button className="btn btn-success"
                        onClick={()=>addToCartClickHandler(item , setItemsInCart, encodedToken, navigate)}>Add to Cart</button>}
                 
                 <button className="btn btn-error" onClick={()=>removeFromWishlistHandler(item._id)}>Remove from Wishlist</button>
            </div>
        </div>      
  )
}

export default WishlistCard