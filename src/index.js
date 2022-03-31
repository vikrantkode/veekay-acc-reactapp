import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter} from "react-router-dom";
import {FilterProvider} from "./context/Filter-Context"
import { AuthProvider } from "./context/Auth-Context";
import { CartProvider } from "./context/Cart-Context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    < BrowserRouter >
      <AuthProvider>
        <CartProvider>
            <FilterProvider> 
                <App /> 
            </FilterProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById("root")
);
