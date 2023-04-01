import { authActions } from "./authSlice";
import axios from "axios";

export const postLogin = (login) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3001/api/login",
        data: login,
        withCredentials: true,
      });
      localStorage.setItem("accessToken", response.data);
      dispatch(authActions.login());
      window.location.reload();
    } catch (err) {
      throw err.response.data.message;
    }
  };
};
