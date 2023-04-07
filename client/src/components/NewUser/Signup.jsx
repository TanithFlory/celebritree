import React, { useEffect, useState } from "react";
import { PrimaryButton } from "../UI/Button/StyledButtons";
import Footer from "../Footer/Footer";
import OtpVerification from "./OtpVerification";
import { MotionWrapper } from "../UI/Wrapper/MotionWrappers";
import images from "../../constants/images";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RiAccountPinCircleLine } from "react-icons/ri";
import GoogleLogin from "../LoginModal/GoogleLogin/GoogleLogin";
import Loading from "../UI/Status/Loading";
import "./Signup.scss";
import PasswordValidation from "../UI/PasswordValidation/PasswordValidation";
import { useOnLogged } from "../../CustomHooks/useOnLogged";
import { scrollTop } from "../Utils/scrolls";

const Signup = () => {
  useOnLogged();

  useEffect(() => {
    scrollTop();
  });
  const [onSuccess, setOnSuccess] = useState();
  const [loading, setLoading] = useState(false);
  const [onFailureMessage, setOnFailureMessage] = useState("");
  const [email, setEmail] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (formData) => {
    setOnFailureMessage("");
    setEmail(formData.email);
    setLoading(true);
    try {
      await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_BASE_URL}/signup`,
        data: formData,
      });
      setLoading(false);
      setOnSuccess(true);
    } catch (err) {
      setLoading(false);
      if (err.message === "Network Error") {
        setOnFailureMessage(err.message);
      } else {
        setOnFailureMessage(err.response.data.message);
      }
    }
  };

  return (
    <>
      <MotionWrapper className="signup">
        <div className="signup__form">
          {!onSuccess && (
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
                      maxLength: 18,
                      minLength: 3,
                      pattern: /(^[a-zA-Z]+$)/,
                    })}
                  />
                  {errors.fName && (
                    <h5>
                      Enter a valid name, without white spaces, numbers or
                      symbols
                    </h5>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Second Name"
                    {...register("sName", {
                      required: true,
                      maxLength: 18,
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
                      maxLength: 30,
                      pattern: /^[\w-._]+@([\w-]{3,}\.)+[\w-]{2,4}$/,
                    })}
                  />
                  {errors.email && <h5>Please enter a valid E-mail.</h5>}
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: true,
                      maxLength: 16,
                      minLength: 6,
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\w\W]{6,}$/,
                    })}
                  />
                  {errors.password && (
                    <h5>
                      Must be atleast 6 characters. The checks below must
                      qualify.
                    </h5>
                  )}
                </div>
                <PasswordValidation password={watch("password")} />

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
              {loading ? (
                <Loading type="Loading" width="30px" />
              ) : (
                <h5>{onFailureMessage}</h5>
              )}
              <PrimaryButton
                onClick={() => handleSubmit}
                backgroundColor="black"
                textColor="white"
              >
                Register
              </PrimaryButton>
              <div className="signup__oldUser">
                Already an user? <Link to="/login">Sign in.</Link>
              </div>
              <GoogleLogin text="up" />
            </form>
          )}
          {onSuccess && (
            <OtpVerification email={email} setOnSuccess={setOnSuccess} />
          )}
          <div className="signup__img">
            <img src={images.signupImg} alt="welcome" />
          </div>
        </div>
      </MotionWrapper>
      <Footer />
    </>
  );
};

export default Signup;
