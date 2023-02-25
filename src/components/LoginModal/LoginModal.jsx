import "./LoginModal.scss";
import CustomButton from "../UI/Button/CustomButton";
import { RiLockPasswordFill, RiAccountCircleFill } from "react-icons/ri";
import { motion } from "framer-motion";
import images from "../../constants/images";
const LoginModal = () => {
  const body = document.querySelector("body");
  body.classList.add("overflow")
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      ease: [0, 0.71, 0.2, 1.01],
    }}
    className="login__modal-backdrop"
  >
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
          <a href="#">Forgot Password?</a>
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
    </motion.div>
  );
};

export default LoginModal;
