import React from "react";
import Navbar from "../NavBar/Navbar";
import CustomButton from "../UI/Button/CustomButton";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { RiAccountPinCircleLine } from "react-icons/ri";
import "./Signup.scss";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <RiAccountPinCircleLine />
            <h1>Let's get started! </h1>
            <div className="sign__form-userInfo">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  {...register("fName", {
                    required: true,
                    maxLength: 12,
                    minLength: 3,
                    pattern: /(^[a-zA-Z]+$)/,
                  })}
                />
                {errors.fName && (
                  <h5>
                    Enter a valid name, without white spaces, numbers or symbols
                  </h5>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Second Name"
                  {...register("sName", {
                    required: true,
                    maxLength: 12,
                    pattern: /(^[a-zA-Z]+$)/,
                  })}
                />
                {errors.sName && (
                  <h5>
                    Enter a valid name, without white spaces, numbers or
                    symbols.
                  </h5>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    maxLength: 18,
                    pattern: /^[\w-\.\_]+@([\w-]{3,}\.)+[\w-]{2,4}$/,
                  })}
                />
                {errors.email && <h5>Please enter a valid E-mail.</h5>}
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  minLength={6}
                  {...register("password", {
                    required: true,
                    maxLength: 16,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{6,}$/,
                  })}
                />
                {errors.password&&<h5>Password must contain one symbol and an uppercase.</h5>}
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: true,
                    maxLength: 16,
                  })}
                />
                {watch("confirmPassword") !== watch("password") && (
                  <h5>Password doesn't match</h5>
                )}
              </div>
            </div>
            <Link to="/home">Need help?</Link>
            <CustomButton
              onClick={() => handleSubmit}
              backgroundColor="var(--black-color)"
              textColor="var(--white-color)"
            >
              Register
            </CustomButton>
            <div className="signup__oldUser">
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
