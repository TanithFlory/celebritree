import styled from "styled-components";

export const PrimaryButton = styled.button`
  background-color: var(--${(props) => props.backgroundColor}-color);
  width: 220px;
  height: 50px;
  font-size: 1rem;
  font-weight: bold;
  color: var(--${(props) => props.textColor}-color);
  cursor: pointer;
  border-radius: 7px;
  border:2px solid var(--${(props) => props.textColor}-color);
  transition: 0.5s ease-in-out;
  transition: transform 0.3s;
  &:hover {
    border: 2px solid var(--${(props) => props.textColor}-color);
    transform: scale(1.05);
  }
`;

export const NewUserButton = styled.button`
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
    transform: scale(1.1);
    svg {
      transform: scale(1);
      fill: var(--primary-color);
    }
  }
`;



