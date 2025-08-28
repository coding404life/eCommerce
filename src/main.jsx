import { StrictMode, Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./store/reducers/index";
import thunk from "redux-thunk";
import Splash from "./shared/components/Splash/Splash";

const App = lazy(() => import("./App/App"));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Splash />}>
        <App />
      </Suspense>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
