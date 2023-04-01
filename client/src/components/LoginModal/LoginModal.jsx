import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./LoginModal.scss";
import { postLogin } from "../../store/features/auth/authActions";
import { PrimaryButton } from "../UI/Button/StyledButtons";
import { MotionWrapper } from "../UI/Wrapper/MotionWrappers";
import { RiLockPasswordFill, RiAccountCircleFill } from "react-icons/ri";
import GoogleLogin from "./GoogleLogin/GoogleLogin";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
const LoginModal = (props) => {
  const dispatch = useDispatch();
  const [forgotPass, setForgotPass] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const changeHandler = (e) => {
    setError("");
    const { name, value } = e.target;
    setLoginData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setError("");
    dispatch(postLogin(loginData)).catch((err) => {
      setError(err);
    });
  };

  return (
    <MotionWrapper
      className="login__modal-backdrop"
      onClick={(e) =>
        e.target.className === "login__modal-backdrop" && props?.toggle()
      }
    >
      {!forgotPass && (
        <div className="login__modal-form login__modal">
          <form onSubmit={submitHandler}>
            <h2>Sign In</h2>
            <label>Email ID</label>
            <div className="login__inputs">
              <RiAccountCircleFill />{" "}
              <input
                type="text"
                onChange={changeHandler}
                name="email"
                value={loginData.email}
              ></input>
            </div>
            <label>Password</label>
            <div className="login__inputs">
              <RiLockPasswordFill />{" "}
              <input
                type="password"
                onChange={changeHandler}
                name="password"
                value={loginData.password}
              ></input>
            </div>
            <p> {error}</p>
            <a onClick={() => setForgotPass(true)}>Forgot Password?</a>
            <PrimaryButton backgroundColor="green" textColor="black">
              Login
            </PrimaryButton>
            <div className="border__or">
              <h1>OR</h1>
            </div>
          </form>
          <GoogleLogin />
        </div>
      )}
      {forgotPass && (
        <div className="forgot__password">
          <h2>Reset Password</h2>
          <ForgotPassword />
        </div>
      )}
    </MotionWrapper>
  );
};

export default LoginModal;
