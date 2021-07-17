// reducer only change the state by dispatching the function
import { filterTypes } from "../action-types/filterTypes";
import produce from "immer";

const initalState = {
  allProducts: [],
  name: "",
  category: "",
  company: "",
  price: [],
};

const filterReducer = (state = initalState, { type, payload }) =>
  produce(state, (draftState) => {
    switch (type) {
      case filterTypes.FILTER_PRODUCTS:
        draftState.allProducts = payload;
        console.log(state);
        break;
      case filterTypes.FILTER_INPUT:
        draftState.name = payload;
        break;
      case filterTypes.FILTER_CATEGORY:
        draftState.category = payload;
        break;
      case filterTypes.FILTER_COMPANY:
        draftState.company = payload;
        break;
      case filterTypes.FILTER_PRICE:
        draftState.price = payload;
        break;
      default:
        break;
    }
  });

export default filterReducer;
