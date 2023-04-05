import styled from "styled-components";
const SNewsletter = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  position: relative;
  height: 60px;
  input,
  input:focus {
    height: 60px;
    padding-left: 120px;
    outline: none;
    border-radius: 30px;
    color: var(--clr-black);
    border: 1px solid var(--clr-green);
    box-sizing: border-box;
  }
  button {
    width: 110px;
    height: 54px;
    margin: 3px;
    font-size: var(--fs-s);
    font-weight: bold;
    cursor: pointer;
    position: absolute;
    border-radius: 30px;
    &:hover {
      transform: scale(1.01);
      background: var(--secondary-color);
      color: var(--primary-color);
    }
  }
`;
export default SNewsletter;
