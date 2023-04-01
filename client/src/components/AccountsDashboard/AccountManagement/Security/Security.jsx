import React, { useState } from "react";
import PasswordForm from "./PasswordForm";
import SSecurity from "./Security.styles";

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
        <PasswordForm toggle={disable} />
      </div>
    </SSecurity>
  );
};

export default Security;
