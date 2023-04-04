import styled from "styled-components";

const SArticle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 1rem;
  a {
    text-decoration: none;
  }
  .article__card {
    display: grid;
    grid-template-rows: 1fr 1fr;
    max-height: 350px;
    border-right: 3px solid rgb(255, 255, 255, 0.4);
    border-image: linear-gradient(rgba(0, 0, 0, 0), white, rgba(0, 0, 0, 0)) 0
      100 0;
    p {
      margin: 0;
      font-size: var(--fs-m);
    }
    img {
      min-height: 180px;
      width: 100%;
    }
    h4 {
      font-size: var(--fs-m);
      color: var(--clr-green);
      margin: 0;
    }
    & > div:nth-child(2) {
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 10px;
    }
  }
  @media screen and (max-width: 1084px) {
    grid-template-columns: repeat(2, 1fr);
    & > div {
      max-height: 500px;
      grid-template-rows: 30% 1fr;
    }
    & > :nth-child(even) {
      div {
        border: 0;
      }
    }
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    .article__card {
      border: 0;
    }
    * {
      --fs-m: 0.75rem;
    }
  }
`;

export default SArticle;
