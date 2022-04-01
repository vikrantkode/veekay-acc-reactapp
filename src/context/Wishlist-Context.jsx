import { createContext, useContext, useState } from "react";
import axios from "axios"


const addToCartClickHandler = async (product, setItemsInCart, encodedToken, navigate) => {
   
    if(encodedToken){
      try {
        const cartItems = await axios.post( `/api/user/cart`, {product} ,
          { headers: { authorization: encodedToken } }
        );
        setItemsInCart(cartItems.data.cart)
      } catch (err) {
        alert("error from server", err)
      }  
    } else {
      navigate("/loginpage")
    }
};

const addToWishlistHandler = async (product,setItemsInWishlist,encodedToken,navigate) => {
    if(encodedToken){
      try {
        const resp = await axios.post(`/api/user/wishlist`,{product},
        { headers: { authorization: encodedToken }});
        setItemsInWishlist(resp.data.wishlist);
      }catch(err){
        alert("error from server", err)
      }
    } else {
      navigate("/loginpage")
    }
  }

const WishlistContext = createContext();

const Wishlistprovider = ({children}) =>{
    const [itemsInWishlist, setItemsInWishlist] = useState([]);
return(
    <WishlistContext.Provider value ={{itemsInWishlist, setItemsInWishlist}}>
        {children}
    </WishlistContext.Provider>
)
}


const useWishlist = () =>useContext(WishlistContext);

export {useWishlist, Wishlistprovider, addToCartClickHandler, addToWishlistHandler}