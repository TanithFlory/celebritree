import axios from "axios";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../UI/Button/StyledButtons";
import Loading from "../UI/Status/Loading";
import { useState } from "react";
import StyledForm from "./StyledForm";

const ContactForm = () => {
  const [status, setStatus] = useState({
    success: false,
    loading: false,
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    setStatus({
      success: false,
      loading: true,
    });
    const response = await axios({
      method: "POST",
      url: "http://localhost:3001/contact",
      data: formData,
    });
    if (response) {
      reset();
      setStatus({
        success: true,
        loading: false,
      });
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <label>
            First Name <span>*</span>
          </label>
          <input
            type="text"
            placeholder="Enter first name"
            {...register("firstName", {
              required: true,
              maxLength: 12,
              minLength: 3,
              pattern: /(^[a-zA-Z]+$)/,
            })}
          />
          {errors.firstName && <h5>Enter a valid name. Only alphabets.</h5>}
        </div>
        <div>
          <label>
            Last Name <span>*</span>
          </label>
          <input
            type="text"
            placeholder="Enter second name"
            {...register("secondName", {
              required: true,
              maxLength: 12,
              minLength: 3,
              pattern: /(^[a-zA-Z]+$)/,
            })}
          />
          {errors.secondName && <h5>Enter a valid name. Only alphabets.</h5>}
        </div>
      </div>
      <div>
        <label>
          Email <span>*</span>
        </label>
        <input
          type="text"
          placeholder="Enter an Email"
          {...register("email", {
            required: true,
            maxLength: 30,
            pattern: /^[\w-._]+@([\w-]{3,}\.)+[\w-]{2,4}$/,
          })}
        />
        {errors.email && <h5>Please enter a valid E-mail.</h5>}
      </div>
      <div>
        <label>
          Message <span>*</span>
        </label>
        <textarea
          type="text"
          placeholder="Enter your message."
          {...register("message", {
            required: true,
            maxLength: 200,
            pattern: /^([\w\s\.\,]+)$/,
          })}
        />
        {errors.message && <h5>Message cannot have special characters.</h5>}
      </div>
      <PrimaryButton type="submit" backgroundColor="black" textColor="blue">
        Submit
      </PrimaryButton>
      {status.loading && <Loading type="Loading" />}
      {status.success && <Loading />}
    </StyledForm>
  );
};

export default ContactForm;
