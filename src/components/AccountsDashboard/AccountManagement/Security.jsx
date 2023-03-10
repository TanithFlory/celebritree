import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../../UI/Button/StyledButtons";
const MainWrapper = styled.div`
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
      cursor: pointer;
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
const Security = () => {
  const toggler = () => {
    setDisable((prevState) => !prevState);
  };
  const [disable, setDisable] = useState(true);
  return (
    <MainWrapper>
      <div>
        <div>
          <span>Change Password</span>{" "}
          <span onClick={toggler}>{disable ? "Edit" : "Cancel"}</span>
        </div>
        <form>
          <input
            className={!disable ? "input__enabled" : undefined}
            type="password"
            placeholder="Current Password"
            disabled={disable}
          ></input>
          <input
            className={!disable ? "input__enabled" : undefined}
            type="password"
            placeholder="New Password"
            disabled={disable}
          ></input>
          <input
            className={!disable ? "input__enabled" : undefined}
            type="password"
            placeholder="Confirm Password"
            disabled={disable}
          ></input>
          <PrimaryButton backgroundColor="blue" textColor="white">
            Save
          </PrimaryButton>
        </form>
      </div>
    </MainWrapper>
  );
};

export default Security;
