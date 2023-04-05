import { PrimaryButton } from "../UI/Button/StyledButtons";
import SComingSoon from "./ComingSoon.styles";
import Newsletter from "../Footer/NewsLetter/NewsLetter";
const ComingSoon = () => {
  return (
    <SComingSoon>
      <div>
        <h3>Coming Soon!</h3>
        <h1>Get notified when we launch.</h1>
        <Newsletter />
      </div>
    </SComingSoon>
  );
};

export default ComingSoon;
