import styled from "styled-components";

const NewUserBtn = styled.button`
  background-color: transparent;
  border: 2px solid green;
  color: var(--white-color);
  width: 100px;
  height: 40px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  transition: 0.5s ease-in-out;
  &:hover {
    cursor: pointer;
    color: var(--primary-color);
    transform: scale(1.10);
    svg {
      transform: scale(1);
      fill: var(--primary-color);
    }
  }
`;

export default NewUserBtn;
