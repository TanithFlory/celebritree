import styled from "styled-components";
import { motion } from "framer-motion";
const SNewsletter = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  position: relative;
  height: 60px;
  width: 100%;
  input,
  input:focus {
    height: 60px;
    padding-left: 160px;
    outline: none;
    border-radius: 30px;
    color: var(--clr-black);
    border: 1px solid var(--clr-green);
    box-sizing: border-box;
  }
  button {
    background-color: var(--clr-black);
    width: 150px;
    height: 50px;
    font-size: 1rem;
    font-weight: bold;
    color: var(--clr-white);
    cursor: pointer;
    border: 2px solid var(--clr-orange);
    transition: 0.5s ease-in-out;
    transition: transform 0.3s;
    position: absolute;
    border-radius: 30px;
    margin: 5px;
    &:hover {
      transform: scale(1.01);
    }
  }
  @media screen and (max-width: 376px) {
    max-width: 280px;
    input,
    input:focus {
      padding-left: 120px;
    }
    button {
      width: 110px;
    }
  }
`;

const Newsletter = () => {
  return (
    <SNewsletter>
      <motion.input
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: "100%" }}
        transition={{ type: "ease", stiffness: 100, duration: 1 }}
        type="text"
        placeholder="Enter Email-ID"
      />
      <button type="submit">Subscribe</button>
    </SNewsletter>
  );
};

export default Newsletter;
