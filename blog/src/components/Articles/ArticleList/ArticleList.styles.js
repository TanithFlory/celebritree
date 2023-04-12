import styled from "styled-components";

const SArticle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 10px;
  margin-top: 1rem;
  a {
    text-decoration: none;
  }

  .article__card {
    display: grid;
    grid-template-rows: 200px 1fr;
    border-right: 3px solid rgb(255, 255, 255, 0.4);
    border-image: linear-gradient(rgba(0, 0, 0, 0), white, rgba(0, 0, 0, 0)) 0
      100 0;
    padding-right: 10px;
    background-color: rgb(220, 220, 220, 0.2);
    background-clip: content-box;
    height: 100%;
    & > div {
      overflow: hidden;
    }
    p {
      margin: 0;
      font-size: var(--fs-m);
    }
    img {
      min-height: 200px;
      max-height: 200px;
      width: 100%;
      transition: all 1s ease-in;
      transform-origin: left center;
      &:hover {
        transform: scale(1.05);
      }
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
    &:hover {
      background-color: rgb(220, 220, 220, 0.25);
    }
  }
  .no-border-right {
    border: 0;
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
    gap: 1rem;
    .article__card {
      border: 0;
      max-width: 350px;
      margin: auto;
    }
    * {
      --fs-m: 0.75rem;
    }
  }
  @media screen and (min-width: 1800px) {
    grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
    gap: 1.5rem;
    .article__card {
      padding-right: 1.5rem;
      grid-template-rows: 300px 1fr;
      img {
        min-height: 300px;
        max-height: 300px;
      }
      & > div:nth-child(2) {
        text-align: center;
      }
    }
  }
`;

export default SArticle;
