import "./LoginModal.scss";
import CustomButton from "../UI/Button/CustomButton";
import MotionWrapper from "../UI/Wrapper/MotionWrapper";
import { RiLockPasswordFill, RiAccountCircleFill } from "react-icons/ri";
import images from "../../constants/images";
const LoginModal = () => {
  return (
    <MotionWrapper delay="0.1" className="login__modal-backdrop">
      <div className="login__modal">
        <form>
          <h2>Sign In</h2>
          <label>Email ID</label>
          <div className="login__inputs">
            <RiAccountCircleFill /> <input type="text"></input>
          </div>
          <label>Password</label>
          <div className="login__inputs">
            <RiLockPasswordFill /> <input type="password"></input>
          </div>
          <a href="/signup">Forgot Password?</a>
          <CustomButton
            backgroundColor="var(--green-color)"
            textColor="var(--black-color)"
          >
            Login
          </CustomButton>
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
