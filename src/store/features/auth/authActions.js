import { authActions } from "./authSlice";
import axios from "axios";

export const postLogin = (login) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        url: "http://localhost:3001/api/login",
        data: login,
        withCredentials: true,
      })
        .then((response) => {
          localStorage.setItem("accessToken", response.data);
          dispatch(authActions.login());
          window.location.reload();
        })
        .catch((err) => {
          reject(err.response.data.message);
        });
    });
  };
};
