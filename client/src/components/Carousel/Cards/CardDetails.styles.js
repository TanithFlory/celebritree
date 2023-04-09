import styled from "styled-components";

const colours = [
  "#F8EFBA",
  "#9AECDB",
  "#F7ECD0",
  "#FFFFFF",
  "#F6EAAE",
  "#E8FFC6",
  "#E4FFF6",
  "#F7ECD0",
  "#FFFFFF",
];

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => colours[props.backgroundIndex]};
  & > h1 {
    margin: 0;
    padding-top: 55px;
    text-align: center;
    font-size: var(--fs-l);
  }
  & > p {
    padding-inline: 15px;
    text-align: center;
  }
  & > div {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: flex-end;
    gap: 1rem;
    padding: 5px;

    button {
      width: 100px;
      aspect-ratio: 1/1;
    }
  }
  a {
    text-decoration: none;
  }
`;
export default CardDetails;
