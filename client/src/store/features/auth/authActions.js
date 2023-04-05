import { authActions } from "./authSlice";
import axios from "axios";

export const postLogin = (login) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_BASE_URL}/api/login`,
        data: login,
        withCredentials: true,
      });
      localStorage.setItem("accessToken", response.data);
      dispatch(authActions.login());
      window.location.reload();
    } catch (err) {
      throw err.response?.data.message || err.message;
    }
  };
};
