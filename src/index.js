import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, CartProvider, FilterProvider, Wishlistprovider } from "./context/context"
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    < BrowserRouter >
      <AuthProvider>
        <Wishlistprovider>
          <CartProvider>
              <FilterProvider> 
                  <App /> 
              </FilterProvider>
          </CartProvider>
        </Wishlistprovider>
      </AuthProvider>
    </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById("root")
);
