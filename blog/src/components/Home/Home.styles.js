import styled from "styled-components";

const SHome = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr;
  margin: 6rem 6rem 0;
  h1 {
    text-align: center;
    font-size: var(--fs-custom);
    margin: 0;
  }
  .home__carousels {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin: 1rem 0 0;
    place-content: center;
    .react-multiple-carousel__arrow,
    .react-multiple-carousel__arrow {
      background: rgba(255, 255, 255, 0.6);
      &::before {
        color: var(--clr-black);
        font-weight: 700;
      }
      &:hover {
        background: rgba(255, 255, 255, 0.3);
      }
    }
    .react-multi-carousel-item {
      a {
        text-decoration: none;
      }
      &:hover {
        box-shadow: 0 -8px 8px -8px cyan, 0 8px 8px -8px cyan;
      }
    }
  }

  @media screen and (max-width: 1023px) {
    margin: 6rem 1rem 0;

    .home__carousels {
      grid-template-columns: 1fr;
      margin-top: 0;
    }
    * {
      --fs-l: 1rem;
      --fs-m: 0.75rem;
      --fs-custom: 2.5rem;
      --fs-s: 0.65rem;
    }
  }
  @media screen and (max-width: 310px) {
    margin: 6rem 0 0;
  }
`;
export default SHome;
