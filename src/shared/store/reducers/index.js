import { combineReducers } from "redux";
import cartReducer from "./cart_reducer";
import filterReducer from "./filter_reducer";

const reducers = combineReducers({
  cartReducer,
  filterReducer,
});

export default reducers;
