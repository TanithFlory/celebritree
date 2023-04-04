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
  }

  @media screen and (max-width: 912px) {
    margin: 6rem 1rem 0;
    h1 {
      font-size: var(--fs-xxl);
    }
    .home__carousels {
      grid-template-columns: 1fr;
      margin-top: 0;
    }
    .carousel {
      img {
        max-width: 125px;
      }
      div {
        height: 123px;
      }
    }
  }
`;
export default SHome;
