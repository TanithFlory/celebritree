import { useState } from "react";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../../../UI/Button/StyledButtons";
import PasswordValidation from "../../../UI/PasswordValidation/PasswordValidation";
import { useSelector } from "react-redux";
import axios from "axios";
import SPasswordForm from "./PasswordForm.styles";
const PasswordForm = (props) => {
  const email = useSelector((state) => state.auth.email) || props.email;
  const [status, setStatus] = useState();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitHandler = async (formData) => {
    formData.email = email;
    setStatus("");
    try {
      await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_BASE_URL}/user/change-password`,
        data: formData,
      });
      setError("");
      setStatus("Successful");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      setError(err.response.data);
    }
  };
  const otpHandler = async () => {
    setStatus("");
    setError("");
    try {
      await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_BASE_URL}/resend-otp`,
        data: {
          email,
        },
      });
      setStatus("OTP Sent!");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <SPasswordForm onSubmit={handleSubmit(submitHandler)}>
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
      {errors.password && (
        <h5>Must be atleast 6 characters. The checks below must qualify.</h5>
      )}
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
      {status && <h5>{status}</h5>}
      {error && <h5>{error}</h5>}
      {!props.toggle && (
        <PrimaryButton backgroundColor="blue" textColor="white" type="submit">
          Save
        </PrimaryButton>
      )}
    </SPasswordForm>
  );
};

export default PasswordForm;
