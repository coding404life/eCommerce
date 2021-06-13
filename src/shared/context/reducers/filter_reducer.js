// reducer only change the state by dispatching the function

import { FILTER_INPUT } from "../actions";

const filterReducer = (state, action) => {
  switch (action.type) {
    case FILTER_INPUT:
      return {
        inputText: action.payload,
      };
    default:
      throw new Error();
  }
};

export default filterReducer;
