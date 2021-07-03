import React from "react";
import ReactDOM from "react-dom";
import App from "./Container/App";
//Redux Setup
import { FilterProvider } from "./shared/context/FilterContext";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../src/shared/store/reducers/index";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </FilterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
