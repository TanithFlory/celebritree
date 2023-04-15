import axios from "axios";
import images from "../../../constants/images";
import SAuthDiv from "./GoogleLogin.styles";
const GoogleLogin = (props) => {
  const googleAuth = () => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_BASE_URL}/auth/google/login`,
    })
      .then((res) => {
        const left = window.screen.width / 2 - (500 / 2 + 10);
        const top = window.screen.height / 2 - (600 / 2 + 50);
        window.location.href = res.data;
      })
      .catch((err) => console.log(err));
  };
  return (
    <SAuthDiv>
      <div onClick={googleAuth}>
        <img src={images.Google} alt="Google" />
        <div>Sign {props.text || "in"} with Google</div>
      </div>
    </SAuthDiv>
  );
};

export default GoogleLogin;
