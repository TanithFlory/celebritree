import { useState, useEffect } from "react";
import { RxCheckCircled, RxCrossCircled } from "react-icons/rx";
import SPasswordValidation from "./PasswordValidation.styles";

const PasswordValidation = (props) => {
  console.log(props.password);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);

  useEffect(() => {
    const regexNumber = /\d/;
    const regexUppercase = /[A-Z]/;
    const regexLowercase = /[a-z]/;
    const regexSymbol = /[\W_]/;

    setHasNumber(regexNumber.test(props.password));
    setHasUppercase(regexUppercase.test(props.password));
    setHasLowercase(regexLowercase.test(props.password || ""));
    setHasSymbol(regexSymbol.test(props.password));
  }, [props.password]);

  return (
    <SPasswordValidation>
      <div>
        <div className={hasLowercase ? "validated" : undefined}>
          {!hasLowercase && <RxCrossCircled className="cross" />}
          {hasLowercase && <RxCheckCircled className="check" />}
          <span>One Lowercase</span>
        </div>
        <div className={hasUppercase ? "validated" : undefined}>
          {!hasUppercase && <RxCrossCircled className="cross" />}
          {hasUppercase && <RxCheckCircled className="check" />}
          <span>One Uppercase</span>
        </div>
      </div>
      <div>
        <div className={hasNumber ? "validated" : undefined}>
          {!hasNumber && <RxCrossCircled className="cross" />}
          {hasNumber && <RxCheckCircled className="check" />}
          <span>One Number</span>
        </div>
        <div className={hasSymbol ? "validated" : undefined}>
          {!hasSymbol && <RxCrossCircled className="cross" />}
          {hasSymbol && <RxCheckCircled className="check" />}
          <span>One Symbol</span>
        </div>
      </div>
    </SPasswordValidation>
  );
};

export default PasswordValidation;
