import styled from "styled-components";

const SSecurity = styled.div`
  display: flex;
  flex-direction: column;
  form {
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
  }
  button {
    width: 180px;
    aspect-ratio: 1/1;
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem;
    & > div {
      margin: 1rem 0;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      & > span {
        font-size: var(--fs-l);
        padding-right: 1rem;
      }
      & > span:nth-child(2) {
        font-size: var(--fs-xs);
        color: var(--blue-color);
        cursor: pointer;
      }
    }
  }
`;

export default SSecurity;
