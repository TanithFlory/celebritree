import React from "react";
import { useState } from "react";
import SSecurity from "./SSecurity";
import { PrimaryButton } from "../../../UI/Button/StyledButtons";

const Security = () => {
  const toggler = () => {
    setDisable((prevState) => !prevState);
  };
  const [disable, setDisable] = useState(true);
  return (
    <SSecurity>
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
    </SSecurity>
  );
};

export default Security;
