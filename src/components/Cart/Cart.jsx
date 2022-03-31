import React from 'react'
import "./Cart.css"
import { useAuth } from "../../context/Auth-Context";
import { Link, useNavigate } from "react-router-dom";
import { useWishlist, addToWishlistHandler } from "../../context/Wishlist-Context";



function Cart({item,cardQtyHandler,removeFromCartHandler}) {

    
    const {itemsInWishlist,setItemsInWishlist} = useWishlist();
    const {state:{encodedToken}} = useAuth();
    const navigate = useNavigate();
    return (
            <div className="card_container">
                <div className="card_wrapper">
                    <img className="card_image" src={item.image} alt="cart_product" />
                    <span className="card_badge">New</span>
                </div>
                <div className="card_info">
                    <div className="card_title">{item.title}</div>
                </div>
                <div className="card_price">
                    <span className="selling_price">₹{item.price}</span>
                    <small className="cost_price">₹{item.original_price}</small>
                    <small className="discount">{item.discount}% off</small>
                </div>
                <div className="quantity">
                    <p className="cart_quantity">Quantity: </p>
                    {item.qty === 1 ? 
                    <button disabled="true" className="quantity_decrease" 
                        onClick={()=>cardQtyHandler(item._id,"decrement")}>-</button> : 
                    <button className="quantity_decrease" 
                        onClick={()=>cardQtyHandler(item._id,"decrement")}>-</button>}  
                    
                    <span className="quantity_box" type="text" >{item.qty}</span>
                    <button className="quantity_increase" 
                        onClick={()=>cardQtyHandler(item._id,"increment")}>+</button>
                </div>
                <div className="btn_container">
                    <button className="btn btn-success" 
                            onClick={()=>removeFromCartHandler(item._id)}>Remove from Cart</button>

                    {itemsInWishlist.some((e)=>e._id === item._id) ? <Link to="/wishlist"><button className="btn btn-error">Go To Wishlist</button></Link> :  
                    <button className="btn btn-error"  onClick={()=>addToWishlistHandler(item,setItemsInWishlist,encodedToken,navigate)}>Add to Wishlist</button>}
                   
                </div>
            </div>
    )
}

export default Cart