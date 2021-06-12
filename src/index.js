import React from "react";
import ReactDOM from "react-dom";
import App from "./Container/App";
import { ProductProvider } from "./shared/context/ProductContext";
import { FilterProvider } from "./shared/context/FilterContext";

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
