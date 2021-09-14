import produce from "immer";
import { authTypes } from "../action-types/authTypes";

const initialState = {
  token: "",
  isLoggedIn: false,
  logoutTimer: null,
};
// const calculateRemainingTime = (expirationTime) => expirationTime - Date.now();

const authReducer = (state = initialState, { type, payload }) =>
  produce(state, (draftState) => {
    switch (type) {
      case authTypes.LOGIN_HANDLER:
        draftState.token = payload.token;
        draftState.isLoggedIn = !!payload.token;
        localStorage.setItem("token", payload.token);
        localStorage.setItem("expirationTime", payload.expirationTime);
        // const remainingTime = calculateRemainingTime(payload.expirationTime);
        // draftState.logoutTimer = setTimeout(logoutHandler, remainingTime);

        console.log("idtoken is " + draftState.isLoggedIn);
        return;
      case authTypes.LOGOUT_HANDLER:
        draftState.isLoggedIn = payload;
        localStorage.removeItem("token");
        localStorage.removeItem("expirationTime");

        if (draftState.logoutTimer) {
          clearTimeout(draftState.logoutTimer);
        }
        return;
      default:
        return draftState;
    }
  });

export default authReducer;
