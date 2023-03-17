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
          dispatch(authActions.login(response.data));
          resolve(true);
        })
        .catch((err) => {
          reject(err.response.data.message);
        });
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    axios({
      method: "POST",
      withCredentials: true,
      url: "http://localhost:3001/api/logout",
    })
      .then(() => {
        dispatch(authActions.logout());
      })
      .catch((err) => console.log(err));
  };
};
