import React, { useRef, useState } from "react";
import axios from "axios";
import { PrimaryButton } from "../UI/Button/StyledButtons";
import { RiMailCheckFill } from "react-icons/ri";
import Loading from "../UI/Status/Loading";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/features/auth/authSlice";

const OtpVerification = (props) => {
  const otp = useRef();
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();
  const otpSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email: props.email,
      otp: otp.current.value,
    };
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3001/api/verify-otp",
        data: formData,
      });
      setStatus("");
      setSuccess(true);

      localStorage.setItem("accessToken", response.data);
      dispatch(authActions.login());
      setTimeout(() => {
        window.location.replace("/");
      }, 500);
    } catch (err) {
      setStatus(err.response.data.message);
    }
  };
  return (
    <form onSubmit={otpSubmit} className="otpVerification">
      <PrimaryButton
        type="reset"
        backgroundColor="black"
        textColor="white"
        onClick={() => props.setOnSuccess(false)}
      >
        Back
      </PrimaryButton>
      <RiMailCheckFill />
      <label>Please enter the 6 digits otp sent to {props.email}</label>
      <input
        ref={otp}
        type="text"
        placeholder="OTP"
        maxLength={6}
        minLength={6}
        required
      />
      <h5>{status}</h5>
      <PrimaryButton type="submit" backgroundColor="black" textColor="white">
        VERIFY
      </PrimaryButton>
      <PrimaryButton
        type="reset"
        backgroundColor="white"
        textColor="black"
        onClick={() => {
          setStatus("");
          axios({
            method: "POST",
            url: "http://localhost:3001/api/resend-otp",
            data: { email: props.email },
          })
            .then(() => {
              setStatus("OTP Sent!");
            })
            .catch((err) => {
              setStatus(err.response.data);
            });
        }}
      >
        RESEND
      </PrimaryButton>
      {success && <Loading width="50px" />}
    </form>
  );
};

export default OtpVerification;
