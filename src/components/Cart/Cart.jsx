import React from 'react'
import "./Cart.css"

function Cart({item,cardQtyHandler,removeFromCartHandler}) {
    console.log("cart card se",item)
    console.log(item.qty)
    console.log()
    return (
        // <div className="main_card_container">
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
                    <button className="btn btn-error">Move to Wishlist</button>
                </div>
            </div>

           
        // </div>


    )
}

export default Cart