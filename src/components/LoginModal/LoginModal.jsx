import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./LoginModal.scss";
import { postLogin } from "../../store/features/auth/authActions";
import { PrimaryButton } from "../UI/Button/StyledButtons";
import { MotionWrapper } from "../UI/Wrapper/MotionWrappers";
import { RiLockPasswordFill, RiAccountCircleFill } from "react-icons/ri";
import images from "../../constants/images";
const LoginModal = (props) => {
  const loginStatus = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(true);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    setError(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(postLogin(loginData));
    setError(true);
  };

  return (
    <MotionWrapper
      className="login__modal-backdrop"
      onClick={(e) =>
        e.target.className === "login__modal-backdrop" && props.toggle()
      }
    >
      <div className="login__modal">
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
          {error && <p> {props.loginStatus.statusMessage}</p>}
          <a href="/signup">Forgot Password?</a>
          <PrimaryButton backgroundColor="green" textColor="black">
            Login
          </PrimaryButton>
          <div className="border__or">
            <h1>OR</h1>
          </div>
          <div className="login__auths">
            <img src={images.Google} alt="Google" />
            <img src={images.Facebook} alt="fb" />
          </div>
        </form>
      </div>
    </MotionWrapper>
  );
};

export default LoginModal;
