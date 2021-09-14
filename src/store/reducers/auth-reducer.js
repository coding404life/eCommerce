import produce from "immer";

const initialState = {
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
};

const authReducer = (state = initialState, { type, payload }) =>
  produce(state, (draftState) => {
    //reducers
  });

export default authReducer;
