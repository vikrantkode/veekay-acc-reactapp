import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/Cart-Context";
import { useWishlist } from "../../context/Wishlist-Context";
import { useAuth } from "../../context/Auth-Context";

function Nav() {
  const { state,dispatch } = useAuth();
  const { isLoggedIn, user } = state;
  console.log(user)
  const { itemsInCart } = useCart();
  const { itemsInWishlist } = useWishlist();
  const logoutClickHandler = () =>{
    localStorage.clear();
    dispatch({type: 'LOGOUT'})
    window.location.reload(true);
  }

  return (
    <div className="header">
      <div className="header_name">
       <Link to="/" ><h3 className="text_style"> Vee-Kay Accessories </h3></Link>
        {/* <input className="input_box" type="text" placeholder="Enter text.." /> */}
      </div>
      <div className="header_subcontents">
      {isLoggedIn ? 
      <Link to="/loginpage">
      <button className="btn btn-default" id="btn-style" onClick={logoutClickHandler}>Logout</button>
      </Link> :
      <Link to="/loginpage">
        <button className="btn btn-default" id="btn-style">Login</button>
      </Link>}

        <div className="badge_container">
          <div className="icon_badge">
            <Link to="/cartpage">
              <span className="material-icons-outlined icon text_style">
                shopping_cart
              </span>
            </Link>
            <span className="badge_numbered">{itemsInCart.length}</span>
          </div>
          <div className="icon_badge">
            <Link to="/wishlist">
              <span className="material-icons-outlined icon text_style">
                favorite_border
              </span>
            </Link>
            <span className="badge_numbered">{itemsInWishlist.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
