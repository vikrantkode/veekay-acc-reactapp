import {Routes, Route} from "react-router-dom"
import {Homepage} from "./pages/Homepage/Homepage"
import { ProductListing } from "./pages/ProductListing/ProductListing"
import { WishlistPage } from "./pages/WishlistPage/WishlistPage"
import { CartPage } from "./pages/CartPage/CartPage"
import { LoginPage } from "./pages/LoginPage/LoginPage"
import { SignupPage } from "./pages/SignupPage/SignupPage"
import Mockman from "mockman-js"

function App() {
 return ( 
  <div className = "App" >
    <Routes>
      <Route path = "/"element = {<Homepage/>}/> 
      <Route path = "/mock" element = {<Mockman />}/> 
      <Route path = "/product"element = {<ProductListing />}/>
      <Route path = "/wishlist" element = {<WishlistPage />}/> 
      <Route path = "/cartpage" element = {<CartPage />}/> 
      <Route path = "/loginpage" element = {<LoginPage />}/>
      {/* <Route path = "/signuppage" element = {<SignupPage />}/> */}
     </Routes> 
  </div>
 )
}

export default App;