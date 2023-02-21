import styled from "styled-components";

const WhiteButton = styled.button`
 background-color:var(--white-color);
 width: 220px;
 height:50px;
 border-radius: 7px;
  font-size: 1rem;
  font-weight: bold;
  color: var(--black-color);
  cursor: pointer;
  transition: 0.5s ease-in-out;
  transition: transform 0.3s;
  &:hover {
    background-color: ;
    border: 2px solid var(--black-color);
    transform: scale(1.05);
  }
`;

export default WhiteButton;