import styled from "styled-components";
const CardWrapper = styled.div`
  display: grid;
  grid-template-rows: minmax(100px, 1fr) 2fr;
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 350px;
  border: 3px solid var(--black-color);
  border-radius: 6px;
  margin: 30px 50px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
  & > div {
    border-radius: 6px;
  }
`;

export default CardWrapper;
