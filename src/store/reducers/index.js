import { combineReducers } from "redux";
import cartReducer from "./cart_reducer";
import filterReducer from "./filter_reducer";
import authReducer from "./auth-reducer";

const reducers = combineReducers({
  cartReducer,
  filterReducer,
  authReducer,
});

export default reducers;
