import styled from "styled-components";
const SAuthDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 5px;
  & > div {
    display: grid;
    grid-auto-flow: column;
    background-color: transparent;
    border: 1px solid #4285f4;
    border-radius: 2px;
    cursor: pointer;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    &:hover {
      box-shadow: 0 0 3px 3px rgba(66, 133, 244, 0.3);
    }
    div {
      background-color: #4285f4;
      color: var(--white-color);
      display: flex;
      align-items: center;
      padding-inline: 15px;
    }
  }
  img {
    height: 25px;
    aspect-ratio: 1/1;
    cursor: pointer;
    padding: 10px;
  }
`;
export default SAuthDiv;
