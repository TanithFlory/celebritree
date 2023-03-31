import styled from "styled-components";
const colours = [
  "#72FFD5",
  "#9FC1FF",
  "#ADC0EA",
  "#99D9FF",
  "#A3D0E7",
  "#FEC6E3",
  "#FED7AE",
  "#FE97A2",
];
const CardImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => colours[props.backgroundIndex]};
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
export default CardImg;
