import styled from "styled-components";

const SVerticalCarousel = styled.div`
  position: relative;
  .carousel {
    display: grid;
    justify-content: center;
    gap: 1rem;
    color: var(--clr-white);
    overflow-y: hidden;
    max-height: 552px;
    padding-top: 14px;
    position: relative;
    scroll-behavior: smooth;
    img {
      max-width: 220px;
      height: 166px;
    }
    h3 {
      font-size: var(--fs-m);
      margin: 0 0 5px 0;
      color: var(--clr-green);
    }

    & > a:last-child {
      margin-bottom: 1rem;
    }
    a {
      text-decoration: none;
      height: 168px;
      div {
        display: flex;
        margin: auto;
        div {
          padding: 5px;
          text-align: center;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 500px;
          p {
            margin: 0;
            font-size: calc(var(--fs-s) + 0.15rem);
          }
        }
      }
      &:hover {
        box-shadow: 0 -8px 8px -8px cyan, 0 8px 8px -8px cyan;
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
    position: relative;
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
  @media screen and (max-width: 440px) {
    .carousel {
      img {
        width: 130px;
        object-fit: contain;
      }
    }
  }
  @media screen and (min-width: 2000px) {
    transform: scale(1.25);
    margin-top: 5rem;
  }
`;

export default SVerticalCarousel;
