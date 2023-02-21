import styled from "styled-components";

const BlackButton = styled.button`
 background-color:var(--green-color);
 width: 220px;
 height:50px;
 border-radius: 7px;
  font-size: 1rem;
  font-weight: bold;
  color: var(--white-color);
  cursor: pointer;
  transition: 0.5s ease-in-out;
  transition: transform 0.3s;
  &:hover {
    background-color: ;
    border: 2px solid var(--white-color);
    transform: scale(1.05);
  }
`;

export default BlackButton;