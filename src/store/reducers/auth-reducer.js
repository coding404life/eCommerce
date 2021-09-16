import produce from "immer";
import { authTypes } from "../action-types/authTypes";

const initialState = {
  token: "",
  isLoggedIn: false,
  logoutTimer: null,
};

const authReducer = (state = initialState, { type, payload }) =>
  produce(state, (draftState) => {
    switch (type) {
      case authTypes.LOGIN_HANDLER:
        draftState.token = payload.token;
        draftState.isLoggedIn = !!payload.token;
        localStorage.setItem("token", payload.token);
        localStorage.setItem("expirationTime", payload.expirationTime);

        console.log("idtoken is " + draftState.isLoggedIn);
        return;
      case authTypes.LOGOUT_HANDLER:
        draftState.isLoggedIn = payload;
        localStorage.removeItem("token");
        localStorage.removeItem("expirationTime");

        return;
      default:
        return draftState;
    }
  });

export default authReducer;
