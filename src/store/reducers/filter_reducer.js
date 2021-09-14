// reducer only change the state by dispatching the function
import { filterTypes } from "../action-types/filterTypes";
import produce from "immer";

const scrollTop = () => window.scrollTo(0, 470);

const initalState = {
  products: [],
  filteredProducts: [],
  name: "",
  category: "",
  company: "",
  color: [],
  price: 500000,
};

const result = (data, curState) => {
  return data.filter((item) => {
    return (
      item.name.includes(curState.name) &&
      item.category.includes(curState.category) &&
      item.company.includes(curState.company) &&
      item.colors.some((color) => curState.color.includes(color)) &&
      item.price <= curState.price
    );
  });
};

const filterReducer = (state = initalState, { type, payload }) =>
  produce(state, (draftState) => {
    switch (type) {
      case filterTypes.FILTER_PRODUCTS:
        draftState.products = payload;
        draftState.filteredProducts = payload;
        break;
      case filterTypes.FILTER_INPUT:
        draftState.name = payload;
        draftState.filteredProducts = result(draftState.products, draftState);
        break;
      case filterTypes.FILTER_CATEGORY:
        draftState.category = payload;
        draftState.filteredProducts = result(draftState.products, draftState);
        scrollTop();
        break;
      case filterTypes.FILTER_COMPANY:
        draftState.company = payload;
        draftState.filteredProducts = result(draftState.products, draftState);
        scrollTop();
        break;
      case filterTypes.FILTER_PRICE:
        draftState.price = payload;
        draftState.filteredProducts = result(draftState.products, draftState);
        scrollTop();
        break;
      case filterTypes.FILTER_COLOR:
        draftState.color = payload;
        draftState.filteredProducts = result(draftState.products, draftState);
        break;
      case filterTypes.CLEAR_FILTER:
        draftState.name = initalState.name;
        draftState.category = initalState.category;
        draftState.company = initalState.company;
        draftState.color = payload;
        draftState.price = initalState.price;
        draftState.filteredProducts = result(draftState.products, draftState);
        break;
      default:
        break;
    }
  });

export default filterReducer;
