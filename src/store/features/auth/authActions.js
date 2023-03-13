import { authActions } from "./authSlice";
import axios from "axios";

const postLogin = (login) => {
  return (dispatch) => {
    (async () => {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3001/api/login",
        data: login,
      });
      if (response.data.token) {
        dispatch(authActions.login());
      } else {
        dispatch(authActions.loginFailed(response.data.message));
      }
    })();
  };
};

export default postLogin;
