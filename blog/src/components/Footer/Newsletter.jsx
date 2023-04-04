import styled from "styled-components";
import { motion } from "framer-motion";
const SNewsletter = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  position: relative;
  height: 60px;
  width: 100%;
  input,
  input:focus {
    height: 60px;
    max-width: 400px;
    padding-left: 160px;
    outline: none;
    border-radius: 30px;
    color: var(--clr-black);
    border: 1px solid var(--clr-green);
    box-sizing: border-box;
  }
  button {
    background-color: var(--clr-black);
    width: 220px;
    height: 50px;
    font-size: 1rem;
    font-weight: bold;
    color: var(--clr-white);
    cursor: pointer;
    border-radius: 7px;
    border: 2px solid var(--clr-orange);
    transition: 0.5s ease-in-out;
    transition: transform 0.3s;
    position: absolute;
    border-radius: 30px;
    width: 150px;
    margin: 5px;
    &:hover {
      transform: scale(1.01);
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
