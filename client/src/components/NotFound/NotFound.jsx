import styled from "styled-components";
import NotFoundBG from "../../assets/NotFoundBG.jpg";
import { Link } from "react-router-dom";

const SNotFound = styled.div`
  background-image: url(${NotFoundBG});
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #dfe0e2;
    background-color: rgb(0, 0, 0, 0.4);
    padding: 10px;
    border-radius: 5px;
    h1 {
      font-size: 4rem;
      height: 100%;
      margin: 0;
    }
    h3 {
      max-width: 500px;
      text-align: center;
      margin: 0;
    }
    a {
      text-decoration: none;
      position: relative;
      span {
        color: var(--secondary-color);
        &::after {
          content: "";
          width: 47px;
          height: 2px;
          background-color: var(--secondary-color);
          position: absolute;
          inset: auto auto 0 0;
        }
      }
    }
  }
`;

const NotFound = () => {
  return (
    <SNotFound>
      <div>
        <h1>404</h1>
        <h3>
          Oops, looks like I've blown something up (or maybe not). Rest assured,
          I'm working to fix it as quickly as possible!
        </h3>

        <h3>
          Click here to go back to{" "}
          <Link to="/">
            <span>Home</span>{" "}
          </Link>
          page.
        </h3>
      </div>
    </SNotFound>
  );
};

export default NotFound;
