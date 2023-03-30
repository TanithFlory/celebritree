import { useState } from "react";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../../../UI/Button/StyledButtons";
import PasswordValidation from "../../../UI/PasswordValidation/PasswordValidation";
import { useSelector } from "react-redux";
import axios from "axios";
const PasswordForm = (props) => {
  const email = useSelector((state) => state.auth.email);
  const [status, setStatus] = useState();
  const [error, setError] = useState({
    status: false,
    message: "",
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitHandler = async (formData) => {
    const token = localStorage.getItem("accessToken");
    setStatus("");
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3001/user/change-password",
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStatus("Successful");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      setError({
        state: true,
        message: err.response.data,
      });
    }
  };
  const otpHandler = async () => {
    setStatus("");
    try {
      await axios({
        method: "POST",
        url: "http://localhost:3001/api/resend-otp",
        data: {
          email,
        },
      });
      setStatus("OTP Sent!");
    } catch (err) {
      setError({
        state: true,
        message: err.response.data,
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input
        type="password"
        placeholder="Password"
        className={!props.toggle ? "input__enabled" : undefined}
        disabled={props.toggle}
        {...register("password", {
          required: true,
          maxLength: 16,
          minLength: 6,
          pattern:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\w\W]{6,}$/,
        })}
      />

      <input
        type="password"
        placeholder="Confirm Password"
        className={!props.toggle ? "input__enabled" : undefined}
        disabled={props.toggle}
        {...register("confirmPassword", {
          required: true,
          maxLength: 16,
        })}
      />
      {watch("confirmPassword") !== watch("password") && (
        <h5>Password doesn't match</h5>
      )}
      <PasswordValidation password={watch("password")} />
      <div className="otp__input">
        <input
          type="text"
          placeholder="Enter otp"
          className={!props.toggle ? "input__enabled" : undefined}
          disabled={props.toggle}
          {...register("userOtp", {
            required: true,
            maxLength: 6,
            minLength: 6,
          })}
        />
        <PrimaryButton
          backgroundColor="blue"
          textColor="white"
          type="button"
          className={!props.toggle ? "button__enabled" : "button__disabled"}
          onClick={otpHandler}
        >
          Send Otp
        </PrimaryButton>
      </div>
      {!error.state && <h5>{status}</h5>}
      {error.state && <h5>{error.message}</h5>}
      {!props.toggle && (
        <PrimaryButton backgroundColor="blue" textColor="white" type="submit">
          Save
        </PrimaryButton>
      )}
    </form>
  );
};

export default PasswordForm;
