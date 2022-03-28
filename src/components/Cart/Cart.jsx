import React from 'react'
import "./Cart.css"

function Cart() {
    return (
        <div className="main_card_container">
            <div className="card_container">
                <div className="card_wrapper">
                    <img className="card_image" src="./Assets/card.jpg" alt="cart_product" />
                    <span className="card_badge">New</span>
                </div>
                <div className="card_info">
                    <div className="card_title">Men's Premium Wallet</div>
                </div>
                <div className="card_price">
                    <span className="selling_price">₹599</span>
                    <small className="cost_price">₹1199</small>
                    <small className="discount">50% off</small>
                </div>
                <div className="quantity">
                    <p className="cart_quantity">Quantity: </p>
                    <button className="quantity_decrease">-</button>
                    <input className="quantity_box" type="text" />
                    <button className="quantity_increase">+</button>
                </div>
                <div className="btn_container">
                    <button className="btn btn-success">Remove from Cart</button>
                    <button className="btn btn-error">Move to Wishlist</button>
                </div>
            </div>

            <div className="card_container card_checkout">
                <h3 className="large_heading">Price Details</h3>
                <hr />
                <div className="price_details">
                    <ul className="list">
                        <li className="normal_list">Price (2 Items): <span>₹1100</span></li>
                        <li className="normal_list">Discount:<span>- ₹100</span></li>
                        <li className="normal_list">Delivery Charges :  <span>₹00</span></li>
                    </ul>
                </div>
                <hr />
                <h3 className="large_heading">Total Price:  <span>₹1000</span></h3>
                <hr />
                <p>You saved ₹1200 on this order</p>
                <hr />
                <div className="btn_container">
                    <button className="btn btn-default">Place Order</button>
                </div>
            </div>
        </div>


    )
}

export default Cart