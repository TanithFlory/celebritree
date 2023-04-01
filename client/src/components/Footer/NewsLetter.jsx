import React, { useRef, useState } from "react";
import api from "../../ApiService/api";
import styled from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";
import images from "../../constants/images";
import { FadeInWrapper } from "../UI/Wrapper/MotionWrappers";
const NewsLetterDesign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .newsletter {
    display: grid;
    grid-template-rows: 2.5fr 1fr;
    background-color: var(--black-color);
    width: clamp(150px, 100%, 250px);
    margin: 1rem 1rem 0;
    border: 3px solid var(--green-color);
    border-radius: 12px;
    overflow: hidden;
    & > div {
      background-color: var(--black-color);
    }
  }
  p {
    text-align: center;
    color: var(--white-color);
    padding: 5px;
  }
  form {
    display: flex;
  }
  input,
  input:focus {
    outline: none;
    height: 100%;
    width: 100%;
    color: var(--black-color);
    box-sizing: border-box;
    padding: 5px;
    &::placeholder {
      color: var(--black-color);
    }
  }
  form,
  input,
  input:focus {
    border: none;
    background-color: var(--white-color);
  }

  button {
    width: 50px;
    border: none;
    background-color: var(--white-color);
    &:hover {
      background-color: var(--black-color);
      svg {
        color: var(--white-color);
      }
    }
    svg {
      color: var(--black-color);
      transform: scale(3);
      cursor: pointer;
    }
  }
  .newsletter__status {
    display: flex;
    align-items: center;
    gap: 1rem;
    h3,
    p {
      color: var(--white-color);
    }
  }
`;

const NewsLetter = () => {
  const emailID = useRef(null);
  const [statusCode, setStatusCode] = useState(null);
  const subscribed = (e) => {
    e.preventDefault();
    const data = emailID.current.value;
    emailID.current.value = "";

    if (data.match(/^[\w-._]+@([\w-]{3,}\.)+[\w-]{2,4}$/)) {
      const start = Date.now();
      api
        .subscribe(data)

        .then((res) => {
          setStatusCode(res.request.status);
          const end = Date.now();
          setTimeout(() => {
            setStatusCode(null);
          }, 5000 + (start - end));
        })
        .catch((err) => console.log(err));
    } else {
      setStatusCode(true);
    }
  };
  return (
    <NewsLetterDesign>
      <div className="newsletter">
        <div>
          <p>
            Don't miss out and join our monthly news letter! Enter your email to
            get our updates!
          </p>
        </div>
        <form onSubmit={subscribed}>
          <input
            type="text"
            placeholder="Enter your email"
            required
            ref={emailID}
          ></input>
          <button onSubmit={subscribed}>
            <FiArrowUpRight />
          </button>
        </form>
      </div>
      <FadeInWrapper className="newsletter__status">
        {statusCode === 200 ? (
          <>
            <h3>Already a subscriber! </h3>
            <img src={images.CheckMark} alt="Checkmark" />
          </>
        ) : statusCode === 201 ? (
          <>
            <h3>Subscribed </h3>
            <img src={images.CheckMark} alt="Checkmark" />
          </>
        ) : (
          statusCode && (
            <>
              <p>Error, enter a valid E-mail ID. </p>
              <img src={images.Information} alt="Crossmark" />
            </>
          )
        )}
      </FadeInWrapper>
    </NewsLetterDesign>
  );
};

export default NewsLetter;
