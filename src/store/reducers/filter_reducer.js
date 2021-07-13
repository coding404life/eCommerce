// reducer only change the state by dispatching the function
import { filterTypes } from "../action-types/filterTypes";
import produce from "immer";

const initalState = {
  inputValue: "",
  company: "",
  category: "",
};
const filterReducer = (state = { value: "" }, { type, payload }) =>
  produce(state, (draftState) => {
    switch (type) {
      case filterTypes.FILTER_INPUT:
        draftState.value = payload;
        console.log(payload);
        break;
      default:
        break;
    }
  });

export default filterReducer;
