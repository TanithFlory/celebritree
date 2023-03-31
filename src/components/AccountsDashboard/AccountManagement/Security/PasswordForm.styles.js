import styled from "styled-components";
const SPasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  input,
  input:focus {
    background-color: #fafafa;
    cursor: not-allowed;
    padding: 16px;
    width: 230px;
    outline: none;
    border: 1px solid var(--gray-color);
    border-radius: 3px;
  }
  .input__enabled,
  .input__enabled:focus {
    background-color: var(--white-color);
    cursor: text;
  }
  h5 {
    color: red;
    margin: 0;
  }
  .otp__input {
    position: relative;
    & > button {
      position: absolute;
      width: 40%;
      height: 85%;
      inset: 3px 5px auto auto;
      &:hover {
        transform: scale(1);
      }
    }
    .button__disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .button__enabled {
      opacity: 1;
      cursor: pointer;
      &:hover {
        background-color: var(--green-color);
      }
    }
  }
`;
export default SPasswordForm;
