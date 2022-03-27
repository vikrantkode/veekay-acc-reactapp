import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter} from "react-router-dom";
import {FilterProvider} from "./context/Filter-Context"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    < BrowserRouter >
      <FilterProvider> 
          <App /> 
      </FilterProvider>
    </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById("root")
);
