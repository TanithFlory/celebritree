import React, { useState } from "react";
import styled from "styled-components";
import faq from "./settingsFaq";
import SettingsForm from "./SettingsForm";
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  form {
    display: flex;
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
    margin: 1rem 0;
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
`;

const Settings = () => {
  const [toggle, setToggle] = useState({
    personalDetailsInput: true,
    emailInput: true,
    phoneInput: true,
  });
  const toggler = (e) => {
    const target = e.target.id;
    if (target === "emailInput") {
      setToggle((prevState) => {
        return {
          ...prevState,
          [target]: !toggle.emailInput,
        };
      });
    } else if (target === "phoneInput") {
      setToggle((prevState) => {
        return {
          ...prevState,
          [target]: !toggle.phoneInput,
        };
      });
    } else
      setToggle((prevState) => {
        return {
          ...prevState,
          [target]: !toggle.personalDetailsInput,
        };
      });
  };

  return (
    <MainWrapper>
      <SettingsForm />
      <div>
        <h2>Frequently Asked Questions</h2>
        {faq.map((data, index) => {
          return (
            <React.Fragment key={`faq-${index}`}>
              <h4>{data.question}</h4>
              <p>{data.answer}</p>
            </React.Fragment>
          );
        })}
      </div>
    </MainWrapper>
  );
};

export default Settings;
