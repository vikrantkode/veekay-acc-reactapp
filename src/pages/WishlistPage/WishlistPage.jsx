import React from "react";
import "./WishlistPage.css"
import Nav from "../../components/Nav/Nav"
import WishlistCard from "../../components/WishlistCard/WishlistCard"
import { useWishlist } from "../../context/Wishlist-Context";
import axios from "axios";
import { useAuth } from "../../context/Auth-Context";


const WishlistPage = () => {
  const {itemsInWishlist, setItemsInWishlist} = useWishlist();
  const {state: { encodedToken },} = useAuth();

  const removeFromWishlistHandler = async (productId) => {
    try{
      const resp = await axios.delete(`/api/user/wishlist/${productId}`,
      { headers: { authorization: encodedToken }})
      console.log(resp.data.wishlist)
      setItemsInWishlist(resp.data.wishlist);
    }catch(err){
      alert ("Error from server",err)
    }
    
  }
  return(
  <div className="container_wishlist">
        <Nav />
          <div className="main_wishlist_container">
              <h1 className="largest_header">My Wishlist..</h1>
              <div className="main_card_container">
                {itemsInWishlist.map((item)=><WishlistCard key ={item._id} item={item}  removeFromWishlistHandler ={removeFromWishlistHandler}/>)}
              </div>
          </div>
  </div>
  )
};

export { WishlistPage };
