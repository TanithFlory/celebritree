import React, { useState } from "react";
import { NameForm } from "./NameForm";
import { EmailForm } from "./EmailForm";
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
      <NameForm toggle={toggle} />
      <div>
        <span>Email Address</span>{" "}
        <span id="emailInput" onClick={(e) => toggler(e)}>
          {toggle.emailInput ? "Edit" : "Cancel"}
        </span>
      </div>
      <EmailForm toggle={toggle} />
    </>
  );
};

export default SettingsForm;
