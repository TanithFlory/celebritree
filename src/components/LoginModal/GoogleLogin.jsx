import axios from "axios";
import images from "../../constants/images";
import styled from "styled-components";
import { redirect } from "react-router-dom";
const AuthDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 5px;
  & > div {
    display: grid;
    grid-auto-flow: column;
    background-color: transparent;
    border: 1px solid #4285f4;
    border-radius: 2px;
    cursor: pointer;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    &:hover {
      box-shadow: 0 0 3px 3px rgba(66, 133, 244, 0.3);
    }
    div {
      background-color: #4285f4;
      color: var(--white-color);
      display: flex;
      align-items: center;
      padding-inline: 15px;
    }
  }
  img {
    height: 25px;
    aspect-ratio: 1/1;
    cursor: pointer;
    padding: 10px;
  }
`;

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
    <AuthDiv>
      <div onClick={googleAuth}>
        <img src={images.Google} alt="Google" />
        <div>Sign {props.text || "in"} with Google</div>
      </div>
    </AuthDiv>
  );
};

export default GoogleLogin;
