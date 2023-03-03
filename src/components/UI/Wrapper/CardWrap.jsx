import styled from "styled-components";

export const CardWrap = styled.div`
  display: grid;
  grid-template-rows: minmax(100px, 1fr) 2fr;
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 350px;
  border: 3px solid white;
  border-radius: 6px;
  margin: 30px 50px;
`;
const colours = [
  "#72FFD5",
  "#9FC1FF",
  "#ADC0EA",
  "#99D9FF",
  "#A3D0E7",
  "#FEC6E3",
  "#FED7AE",
  "#FE97A2",
  "#ADC0EA",
  "#9FC1FF",
  "#99D9FF",
  "#FE97A2",
  "#FEC6E3",
  "#72FFD5",
  "#A3D0E7",
  "#FED7AE",
];
export const CardImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    colours[props.backgroundIndex].replace(/["]+/g, "")};
  & > img {
    position: relative;
    top: 38%;
    width: 125px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid var(--white-color);
  }
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white-color);
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
    & > button {
      width: 100px;
      aspect-ratio: 1/1;
    }
  }
`;
