import axios from "axios";
import images from "../../../constants/images";
import SAuthDiv from "./GoogleLogin.styles";
const GoogleLogin = (props) => {
  const googleAuth = () => {
    axios({
      method: "GET",
      url: "http://localhost:3001/auth/google/login",
    })
      .then((res) => {
        var left = window.screen.width / 2 - (500 / 2 + 10);
        var top = window.screen.height / 2 - (600 / 2 + 50);
        const options = `width=${500},height=${600},resizable=yes,scrollbars=yes,top=${top},left=${left}`;
        window.open(res.data, "Google Sign-In", options);
        const tokenHandler = (event) => {
          localStorage.setItem("accessToken", event.data);
          window.removeEventListener("message", tokenHandler);
          window.location.replace("/");
        };
        window.addEventListener("message", tokenHandler);
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
