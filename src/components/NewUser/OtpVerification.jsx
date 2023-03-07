import React, { useRef, useState } from "react";
import axios from "axios";
import { PrimaryButton } from "../UI/Button/StyledButtons";
import { RiMailCheckFill } from "react-icons/ri";

const OtpVerification = (props) => {
  const otp = useRef();
  const [state, setState] = useState({
    status: false,
    message: "",
  });
  const otpSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: props.email,
      otp: otp.current.value,
    };
    axios({
      method: "POST",
      url: "http://localhost:3001/api/verify-otp",
      data: formData,
    })
      .then(() => alert("okay"))
      .catch((err) => {
        setState({
          status: true,
          message: err.response.data.message,
        });
      });
  };
  return (
    <form onSubmit={otpSubmit} className="otpVerification">
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
      {state.status && <h5>{state.message}</h5>}
      <PrimaryButton type="submit" backgroundColor="black" textColor="white">
        VERIFY
      </PrimaryButton>
      <PrimaryButton
      type="reset"
        backgroundColor="white"
        textColor="black"
        onClick={() =>
          axios({
            method: "POST",
            url: "http://localhost:3001/api/resend-otp",
            data: {email:props.email},
          })
        }
      >
        RESEND
      </PrimaryButton>
    </form>
  );
};

export default OtpVerification;
