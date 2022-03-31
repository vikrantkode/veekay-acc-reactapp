import React from "react";
import "./CartPage.css";
import Nav from "../../components/Nav/Nav";
import Cart from "../../components/Cart/Cart";
import axios from "axios";

import { useAuth } from "../../context/Auth-Context";
import { useCart } from "../../context/Cart-Context";
import PriceCart from "../../components/Cart/PriceCart";

const CartPage = () => {
  const {
    state: { encodedToken },
  } = useAuth();
  const { itemsInCart, setItemsInCart } = useCart();
  console.log("cart page se", itemsInCart);

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
      console.log("qty handler se", resp.data.cart);
      setItemsInCart(resp.data.cart);
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromCartHandler = async (productId) => {
    try{
      const resp = await axios.delete(`/api/user/cart/${productId}`,
      { headers: { authorization: encodedToken }} )
      console.log(resp)
      setItemsInCart(resp.data.cart);
    }catch(err){
      console.log("remove cart handler se",err)
    }
  }

  return (
    <div className="container_cart">
      <Nav />
        
      <div className="main_container_cart">
        <h1 className="largest_header header_position">Cart</h1>
        <section className="cart_price">
        
          <section >
          {itemsInCart.map((item) => (
          <Cart key={item._id} item={item} cardQtyHandler={cardQtyHandler} removeFromCartHandler={removeFromCartHandler}/>
          
        ))}
          </section>
          {itemsInCart.length >=1 ? <PriceCart /> : <h3 className="header_position">Your Cart Is Empty...!</h3>} 
        </section>
        
       
      </div>
    </div>
  );
};

export { CartPage };
