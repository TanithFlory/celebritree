import React, { useState } from "react";
import { PrimaryButton } from "../../../UI/Button/StyledButtons";
const SettingsForm = () => {
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
    <>
      <div>
        <span>Personal Details</span>{" "}
        <span id="personalDetailsInput" onClick={(e) => toggler(e)}>
          {toggle.personalDetailsInput ? "Edit" : "Cancel"}
        </span>
      </div>
      <form>
        <input
          disabled={toggle.personalDetailsInput}
          type="text"
          placeholder=""
          className={
            !toggle.personalDetailsInput ? "input__enabled" : undefined
          }
        ></input>
        <input
          disabled={toggle.personalDetailsInput}
          type="text"
          placeholder=""
          className={
            !toggle.personalDetailsInput ? "input__enabled" : undefined
          }
        ></input>
        <PrimaryButton backgroundColor="blue" textColor="white">
          Save
        </PrimaryButton>
      </form>
      <div>
        <span>Email Address</span>{" "}
        <span id="emailInput" onClick={(e) => toggler(e)}>
          {toggle.emailInput ? "Edit" : "Cancel"}
        </span>
      </div>
      <form>
        <input
          disabled={toggle.emailInput}
          type="text"
          placeholder=""
          className={!toggle.emailInput ? "input__enabled" : undefined}
        ></input>
        <PrimaryButton backgroundColor="blue" textColor="white">
          Save
        </PrimaryButton>
      </form>
      <div>
        <span>Mobile Number</span>{" "}
        <span id="phoneInput" onClick={(e) => toggler(e)}>
          {toggle.phoneInput ? "Edit" : "Cancel"}
        </span>
      </div>
      <form>
        <input
          disabled={toggle.phoneInput}
          type="text"
          placeholder=""
          className={!toggle.phoneInput ? "input__enabled" : undefined}
        ></input>
        <PrimaryButton backgroundColor="blue" textColor="white">
          Save
        </PrimaryButton>
      </form>
    </>
  );
};

export default SettingsForm;
