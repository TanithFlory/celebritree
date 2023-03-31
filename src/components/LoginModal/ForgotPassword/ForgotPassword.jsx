import { useRef, useState } from "react";
import PasswordForm from "../../AccountsDashboard/AccountManagement/Security/PasswordForm";
import { PrimaryButton } from "../../UI/Button/StyledButtons";

const ForgotPassword = () => {
  const [form, setForm] = useState(false);
  const [error, setError] = useState();
  const ref = useRef();
  const handleForm = (e) => {
    e.preventDefault();
    setError(" ");
    const regex = /^[\w-._]+@([\w-]{3,}\.)+[\w-]{2,4}$/;
    if (!regex.test(ref.current.value)) {
      return setError("Enter a valid email");
    }
    setForm(true);
  };
  return (
    <>
      {!form && (
        <div className="login__modal-form">
          <form>
            <label>Email</label>
            <input
              ref={ref}
              type="text"
              placeholder="Enter your email"
              onChange={() => setError("")}
            />
            {error && <h5>{error}</h5>}
            <PrimaryButton
              backgroundColor="green"
              textColor="black"
              onClick={handleForm}
            >
              Next
            </PrimaryButton>
          </form>
        </div>
      )}
      {form && <PasswordForm email={ref?.current?.value} />}
    </>
  );
};

export default ForgotPassword;
