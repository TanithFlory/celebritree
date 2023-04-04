import styled from "styled-components";

const SArticlePreview = styled.div`
  margin: 7rem 10rem 0;

  h1 {
    font-size: var(--fs-xxl);
    margin: 0;
    background: var(--gradient-bl-or);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
  h1,
  h4 {
    text-align: center;
  }
  .article__content {
    margin-top: 2rem;
    p {
      font-weight: 100;
    }
    h3,
    p {
      padding: 0 60px;
      font-size: var(--fs-l);
    }
    h4 {
      margin: 0 0 1rem;
    }
    h3 {
      text-decoration: underline;
      text-underline-offset: 5px;
      &::before {
        display: block;
        content: "";
        width: 100%;
        height: 2px;
        border: 0;
        background-image: linear-gradient(
          90deg,
          rgba(1, 1, 1),
          rgb(0 255 10) 50%,
          rgba(1, 1, 1)
        );
        margin-bottom: 1rem;
      }
    }
    h3 + p::after {
      display: block;
      content: "";
      width: 100%;
      height: 2px;
      border: 0;
      background-image: linear-gradient(
        90deg,
        rgba(1, 1, 1),
        rgb(0 255 10) 50%,
        rgba(1, 1, 1)
      );
      margin-top: 1rem;
    }
  }
  @media screen and (max-width: 1096px) {
    .article__content {
      p,
      h3 {
        padding: 0;
      }
    }
    p,
    h3 {
      padding: 0;
    }
  }
  @media screen and (max-width: 912px) {
    margin: 7rem 1rem 0px;
    * {
      --fs-l: 1rem;
      --fs-xxl: 2rem;
    }
  }
`;

export default SArticlePreview;
