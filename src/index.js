import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
//Redux Setup
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../src/store/reducers/index";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
