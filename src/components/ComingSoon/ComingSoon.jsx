import { PrimaryButton } from "../UI/Button/StyledButtons";
import SComingSoon from "./ComingSoon.styles";

const ComingSoon = () => {
  return (
    <SComingSoon>
      <div>
        <h3>Coming Soon!</h3>
        <h1>Get notified when we launch.</h1>
        <form>
          <input type="text" placeholder="Enter Email-ID" />
          <PrimaryButton type="submit" backgroundColor="black" textColor="blue">
            Notify Me
          </PrimaryButton>
        </form>
      </div>
    </SComingSoon>
  );
};

export default ComingSoon;
