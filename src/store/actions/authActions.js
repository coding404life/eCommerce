import { authTypes } from "../action-types/authTypes";

//login handler
export const login = (token, expirationTime) => {
  return {
    type: authTypes.LOGIN_HANDLER,
    payload: { token, expirationTime },
  };
};

export const logout = () => {
  return {
    type: authTypes.LOGOUT_HANDLER,
  };
};

export const setLoginState = (loginState) => {
  return {
    type: authTypes.LOGIN_STATE_HANDLER,
    payload: loginState,
  };
};
