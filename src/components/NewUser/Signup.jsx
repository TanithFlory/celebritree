import React from "react";
import Navbar from "../NavBar/Navbar";
import images from "../../constants/images";
import CustomButton from "../UI/Button/CustomButton";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { motion } from "framer-motion";
import "./Signup.scss";

const Signup = () => {

  const visible = true;
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="signup"
      >
        <div className="signup__form">
          <form>
            <RiAccountPinCircleLine />
            <h1>Let's get started! </h1>
            <div className="sign__form-userInfo">
              <div>
                <input type="text" placeholder="Name" required/>
                {visible && (
                  <h5>Enter a valid name, name can contain only alphabets.</h5>
                )}
              </div>
              <div>
                <input type="text" placeholder="Email" required/>
                {visible && <h5>Please enter a valid E-mail.</h5>}
              </div>
              <div>
                <input type="password" placeholder="Password" required/>
                {visible && <h5>Enter a valid 10 digits phone number.</h5>}
              </div>
              <div>
                <input type="password" placeholder="Confirm Password" required/>
                {visible && <h5>Password doesn't match.</h5>}
              </div>
            </div>
            <a href="/home">Need help?</a>
            <CustomButton
              formAction="submit"
              backgroundColor="var(--black-color)"
              textColor="var(--white-color)"
            >
              Register
            </CustomButton>
            <div>
              Already an user? <a href="/home">Sign in.</a>
            </div>
          </form>
          <div className="signup__img">
            <img src={images.signupImg} alt="welcome" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Signup;
