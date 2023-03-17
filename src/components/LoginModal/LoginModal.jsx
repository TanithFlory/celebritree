import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import "./LoginModal.scss";
import { postLogin } from "../../store/features/auth/authActions";
import { PrimaryButton } from "../UI/Button/StyledButtons";
import { MotionWrapper } from "../UI/Wrapper/MotionWrappers";
import { RiLockPasswordFill, RiAccountCircleFill } from "react-icons/ri";
import images from "../../constants/images";
const LoginModal = (props) => {
  const dispatch = useDispatch();

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
    dispatch(postLogin(loginData))
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        setError(err);
      });
  };

  const googleAuth = () => {
    axios({
      method: "GET",
      url: "http://localhost:3001/auth/google/login",
    })
      .then((res) => {
        var left = window.screen.width / 2 - (500 / 2 + 10);
        var top = window.screen.height / 2 - (600 / 2 + 50);
        const options = `width=${500},height=${600},resizable=yes,scrollbars=yes,top=${top},left=${left}`;
        window.open(res.data, "Google Sign-In", options);
      })
      .catch((err) => console.log(err));
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
          <p> {error}</p>
          <a href="/signup">Forgot Password?</a>
          <PrimaryButton backgroundColor="green" textColor="black">
            Login
          </PrimaryButton>
          <div className="border__or">
            <h1>OR</h1>
          </div>
        </form>
        <div className="login__auths">
          <button onClick={googleAuth}>
            <img src={images.Google} alt="Google" />
          </button>
          <button>
            <img src={images.Facebook} alt="fb" />
          </button>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default LoginModal;
