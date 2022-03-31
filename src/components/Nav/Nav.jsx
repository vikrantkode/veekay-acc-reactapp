import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/Cart-Context";

function Nav() {

  const{itemsInCart} = useCart();

  return (
    <div className="header">
      <div className="header_name">
       <Link to="/" ><h3> Vee-Kay Accessories </h3></Link>
        <input className="input_box" type="text" placeholder="Enter text.." />
      </div>
      <div className="header_subcontents">
        <Link to="/loginpage">
          <button className="btn btn-primary">Login</button>
        </Link>

        <div className="badge_container">
          <div className="icon_badge">
            <Link to="/cartpage">
              <span className="material-icons-outlined icon">
                shopping_cart
              </span>
            </Link>
            <span className="badge_numbered">{itemsInCart.length}</span>
          </div>
          <div className="icon_badge">
            <Link to="/wishlist">
              <span className="material-icons-outlined icon">
                favorite_border
              </span>
            </Link>
            <span className="badge_numbered">1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
