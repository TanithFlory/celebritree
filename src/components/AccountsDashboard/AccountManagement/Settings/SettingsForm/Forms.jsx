import { useForm } from "react-hook-form";
import { PrimaryButton } from "../../../../UI/Button/StyledButtons";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../../../../store/features/auth/authSlice";
import axios from "axios";

export const NameForm = (props) => {
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth);
  const { firstName, lastName } = authStatus;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = async (formData) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios({
        method: "POST",
        url: "http://localhost:3001/user/change-name",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: formData,
      });
      localStorage.setItem("accessToken", response.data);
      window.location.reload();
    } catch (err) {
      if (err.response.status === 401) {
        dispatch(authActions.logout());
        localStorage.removeItem("accessToken");
        window.location.reload();
      }
    }
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <input
          type="text"
          placeholder={firstName}
          disabled={props.toggle.personalDetailsInput}
          className={
            !props.toggle.personalDetailsInput ? "input__enabled" : undefined
          }
          {...register("firstName", {
            required: true,
            maxLength: 18,
            minLength: 3,
            pattern: /(^[a-zA-Z]+$)/,
          })}
        />
        {errors.firstName && (
          <h5>Enter a valid name, without white spaces, numbers or symbols</h5>
        )}
      </div>
      <div>
        <input
          placeholder={lastName}
          disabled={props.toggle.personalDetailsInput}
          type="text"
          className={
            !props.toggle.personalDetailsInput ? "input__enabled" : undefined
          }
          {...register("lastName", {
            required: true,
            maxLength: 18,
            pattern: /(^[a-zA-Z]+$)/,
          })}
        />
        {errors.lastName && (
          <h5>Enter a valid name, without white spaces, numbers or symbols</h5>
        )}
      </div>
      {!props.toggle.personalDetailsInput && (
        <PrimaryButton backgroundColor="blue" textColor="white">
          Save
        </PrimaryButton>
      )}
    </form>
  );
};

export const EmailForm = (props) => {
  const email = useSelector((state) => state.auth.email);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = async (formData) => {
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input
        disabled={props.toggle.emailInput}
        type="text"
        placeholder={email}
        className={!props.toggle.emailInput ? "input__enabled" : undefined}
        {...register("email", {
          required: true,
          maxLength: 30,
          pattern: /^[\w-._]+@([\w-]{3,}\.)+[\w-]{2,4}$/,
        })}
      />
      {errors.email && <h5>Please enter a valid E-mail.</h5>}
      {!props.toggle.emailInput && (
        <PrimaryButton backgroundColor="blue" textColor="white">
          Save
        </PrimaryButton>
      )}
    </form>
  );
};
