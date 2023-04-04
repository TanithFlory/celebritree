import { useState } from "react";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../../../../UI/Button/StyledButtons";
import { useSelector } from "react-redux";
import axios from "axios";

export const EmailForm = (props) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({
    state: false,
    message: "",
  });
  const oldEmail = useSelector((state) => state.auth.email);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: oldEmail,
      userOtp: "",
    },
  });
  const emailSubmit = async (formData) => {
    formData.oldEmail = oldEmail;
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3001/user/change-email",
        data: formData,
      });
      if (response) {
        setSuccess(true);
      }
    } catch (err) {
      setError({
        state: true,
        message: err.response.data,
      });
    }
  };

  const otpSubmit = async (formData) => {
    formData.oldEmail = oldEmail;
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3001/user/verify-otp",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: formData,
      });
      if (response) {
        localStorage.setItem("accessToken", response.data);
        window.location.reload();
      }
    } catch (err) {
      setError({
        state: true,
        message: err.response.data,
      });
    }
  };

  const handleChange = () => {
    setError({
      message: "",
      state: false,
    });
  };
  return !success ? (
    <>
      <form onSubmit={handleSubmit(emailSubmit)}>
        <div>
          <input
            disabled={props.toggle.emailInput}
            type="text"
            className={!props.toggle.emailInput ? "input__enabled" : undefined}
            {...register("email", {
              required: true,
              maxLength: 30,
              pattern: /^[\w-._]+@([\w-]{3,}\.)+[\w-]{2,4}$/,
            })}
            onChange={handleChange}
          />
          {errors.email && <h5>Please enter a valid E-mail.</h5>}
        </div>
        <input
          disabled={props.toggle.emailInput}
          type="password"
          placeholder="Enter your password"
          className={!props.toggle.emailInput ? "input__enabled" : undefined}
          {...register("password", {
            required: true,
            maxLength: 30,
          })}
          onChange={handleChange}
        />
        {!props.toggle.emailInput && (
          <PrimaryButton backgroundColor="blue" textColor="white">
            Save
          </PrimaryButton>
        )}
      </form>
      {error.state && <h5>{error.message}</h5>}
    </>
  ) : (
    <form onSubmit={handleSubmit(otpSubmit)}>
      <div>
        <input
          disabled={props.toggle.emailInput}
          type="text"
          placeholder="Enter otp"
          className={!props.toggle.emailInput ? "input__enabled" : undefined}
          {...register("userOtp", {
            required: true,
            maxLength: 6,
            minLength: 6,
            pattern: /^[\d]+$/,
          })}
          onChange={handleChange}
        />
        {!error.state && <h5>Enter the otp sent to your new mail id.</h5>}
        {error.state && <h5>{error.message}</h5>}
      </div>
      <PrimaryButton backgroundColor="blue" textColor="white">
        Save
      </PrimaryButton>
    </form>
  );
};
