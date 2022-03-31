import React from "react";
import "./Cart.css"
import { useCart } from "../../context/Cart-Context";

const PriceCart = () => {

  const {itemsInCart} = useCart();
  const totalAmount = (amount,currentItem) => {
    amount = amount + currentItem.qty * currentItem.original_price ;
    return amount
  }
  const totalAmountOfCart = itemsInCart.reduce(totalAmount,0);

  const totalDiscount = (discount,currentItem) => {
    discount = discount + 
               currentItem.qty * currentItem.original_price - currentItem.qty * currentItem.price;
    return discount
  }

  const totalDiscountOfCart = itemsInCart.reduce(totalDiscount,0)

  const totalPriceOfCart = totalAmountOfCart - totalDiscountOfCart;

  return (
    <div className="card_container card_checkout">
      <h3 className="large_heading">Price Details</h3>
      <hr />
      <div className="price_details">
        <ul className="list">
          <li className="normal_list_cart">
            Price ({itemsInCart.length} Items): <span>₹{totalAmountOfCart}</span>
          </li>
          <li className="normal_list_cart">
            Discount:<span>- ₹{totalDiscountOfCart}</span>
          </li>
          <li className="normal_list_cart">
            Delivery Charges : <span>₹ 00</span>
          </li>
        </ul>
      </div>
      <hr />
      <h3 className="large_heading">
        Total Price: <span>₹ {totalPriceOfCart}</span>
      </h3>
      <hr />
      <p>You saved ₹{totalDiscountOfCart} on this order</p>
      <hr />
      <div className="btn_container">
        <button className="btn btn-default">Place Order</button>
      </div>
    </div>
  );
};

export default PriceCart;
