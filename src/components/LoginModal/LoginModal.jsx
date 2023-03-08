import { useState } from "react";
import "./LoginModal.scss";
import axios from "axios";
import { PrimaryButton } from "../UI/Button/StyledButtons";
import { MotionWrapper } from "../UI/Wrapper/MotionWrappers";
import { RiLockPasswordFill, RiAccountCircleFill } from "react-icons/ri";
import images from "../../constants/images";
const LoginModal = (props) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLogin((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3001/api/login",
      data: login,
    }).then((res) => {});
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
              value={login.email}
            ></input>
          </div>
          <label>Password</label>
          <div className="login__inputs">
            <RiLockPasswordFill />{" "}
            <input
              type="password"
              onChange={changeHandler}
              name="password"
              value={login.password}
            ></input>
          </div>
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
