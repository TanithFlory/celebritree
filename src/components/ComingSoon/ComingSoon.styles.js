import styled from "styled-components";
import ComingSoonBG from "../../assets/comingsoonbg.jpeg";

const SComingSoon = styled.div`
  color: var(--white-color);
  background-image: url(${ComingSoonBG});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  img {
    position: absolute;
    width: 100%;
    height: 100vh;
  }

  div {
    background-image: linear-gradient(
      to left,
      rgb(0, 66, 166, 0.7),
      rgb(0, 95, 181, 0.7),
      rgb(0, 118, 183, 0.7),
      rgb(0, 139, 179, 0.7),
      rgb(0, 158, 172, 0.7)
    );
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    z-index: 5;
    position: absolute;
    top: 30%;
    width: 100%;
    h1,
    h3 {
      margin: 0;
      text-align: center;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    position: relative;
    height: 60px;
    width: 100%;
    input,
    input:focus {
      height: 60px;
      padding-left: 10px;
      outline: none;
      border: 2px solid var(--blue-color);
      border-radius: 30px;
      white-space: pre-line;
    }
    button {
      position: absolute;
      border-radius: 30px;
      width: 150px;
      margin: 5px;
      right: 0;
      &:hover {
        transform: scale(1.01);
      }
    }
  }
`;
export default SComingSoon;
