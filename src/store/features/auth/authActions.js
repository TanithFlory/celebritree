import { authActions } from "./authSlice";
import axios from "axios";

export const postLogin = (login) => {
  return (dispatch) => {
    (async () => {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3001/api/login",
        data: login,
        withCredentials: true,
      });
      if (response.data.token) {
        dispatch(authActions.login());
      } else {
        dispatch(authActions.loginFailed(response.data.message));
      }
    })();
  };
};

export const authorization = () => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:3001/api/authenticated",
      });
      dispatch(authActions.login(response.data.firstName));
      return true;
    } catch (err) {
      console.log(err.response?.data.message);
      dispatch(authActions.loginFailed());
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    (async () => {
      await axios({
        method: "POST",
        url: "http://localhost:3001/api/logout",
      }).then(() => {
        dispatch(authActions.logout());
      });
    })();
  };
};
