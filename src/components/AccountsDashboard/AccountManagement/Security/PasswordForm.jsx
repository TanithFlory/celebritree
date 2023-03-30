import { useForm } from "react-hook-form";
import { PrimaryButton } from "../../../UI/Button/StyledButtons";
import PasswordValidation from "../../../UI/PasswordValidation/PasswordValidation";
const PasswordForm = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const submitHandler = () => {};
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
      <PrimaryButton backgroundColor="blue" textColor="white">
        Save
      </PrimaryButton>
    </form>
  );
};

export default PasswordForm;
