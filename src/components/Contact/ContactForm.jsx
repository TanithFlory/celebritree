import styled from "styled-components";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../UI/Button/StyledButtons";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  input,
  textarea,
  input text:focus {
    height: 35px;
    width: 260px;
    border-radius: 5px;
    outline: none;
    border: solid var(--blue-color);
    border-width: 1px 1px thick;
    font-size: 1rem;
  }
  textarea {
    height: 60px;
  }
  h2 {
    margin-bottom: 0;
  }
`;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <StyledForm>
      <h2>Send us a Message.</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          {...register("fName", {
            required: true,
            maxLength: 12,
            minLength: 3,
            pattern: /(^[a-zA-Z]+$)/,
          })}
        />
        {errors.fName && (
          <h5>Enter a valid name, without white spaces, numbers or symbols</h5>
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
        <textarea
          type="text"
          placeholder="Enter your message."
          {...register("textarea", {
            required: true,
            maxLength: 200,
            pattern: /([A-Z \s \.]+)\w+/,
          })}
        />
        {errors.textarea && <h5>Cannot exceed 200 characters.</h5>}
      </div>
      <PrimaryButton type="submit" backgroundColor="black" textColor="blue">
        Submit
      </PrimaryButton>
    </StyledForm>
  );
};

export default ContactForm;
