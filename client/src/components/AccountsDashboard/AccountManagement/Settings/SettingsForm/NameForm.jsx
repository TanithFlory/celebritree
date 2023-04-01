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
  } = useForm({
    defaultValues: {
      firstName,
      lastName,
    },
  });
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
