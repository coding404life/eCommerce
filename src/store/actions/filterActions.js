import { filterTypes } from "../action-types/filterTypes";

export const inputValue = (inputText) => {
  return {
    type: filterTypes.FILTER_INPUT,
    payload: inputText,
  };
};
