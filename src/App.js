import {Routes, Route} from "react-router-dom"
import { Homepage, ProductListing, WishlistPage, CartPage, LoginPage } from "./pages/pages"
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
     </Routes> 
  </div>
 )
}

export default App;