import styled from "styled-components";

const SVerticalCarousel = styled.div`
  position: relative;
  .carousel {
    display: grid;
    justify-content: center;
    gap: 1rem;
    color: var(--clr-white);
    overflow-y: hidden;
    max-height: 423px;
    margin-top: 14px;
    position: relative;
    scroll-behavior: smooth;
    img {
      max-height: 125px;
      max-width: 200px;
    }
    h3 {
      margin: 10px 0 0;
    }
    & > div:last-child {
      margin-bottom: 1rem;
    }
    & > div {
      display: flex;
      div {
        text-align: center;
        p {
          margin: 0;
        }
      }
    }
  }
  .buttons {
    display: flex;
    justify-content: center;
    background-image: linear-gradient(
      90deg,
      rgba(231, 54, 43, 0),
      rgb(255, 255, 255) 50%,
      rgba(255, 255, 255, 0)
    );
    content: "";
    height: 4px;
    width: 100%;
    background-color: transparent;
    max-width: 530px;
    margin: auto;
    cursor: pointer;
    button {
      position: absolute;
    }
    .up,
    .down {
      background-color: var(--clr-black);
      border: none;
      padding: 2px;
      cursor: pointer;
      svg {
        transform: scale(2);
        fill: var(--clr-white);
      }
    }
    .up {
      top: -8px;
    }
    .down {
      bottom: -12px;
    }
    &:hover {
      background-image: linear-gradient(
        90deg,
        rgba(231, 54, 43, 0),
        rgb(0 255 10) 50%,
        rgba(255, 255, 255, 0)
      );
      svg {
        fill: var(--clr-green);
      }
    }
  }
`;

export default SVerticalCarousel;
