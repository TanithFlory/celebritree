import styled from "styled-components";
import { motion } from "framer-motion";
const SArticlePreview = styled(motion.div)`
  margin: 7rem 10rem 0;
  img {
    height: 100%;
    width: 100%;
    max-height: 750px;
    border-radius: 15px;
  }
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
    font-size: var(--fs-xxl);
  }
  .article__content {
    margin-top: 2rem;
    p {
      font-weight: 100;
    }
    h3,
    p {
      padding: 0 60px;
      font-size: var(--fs-m);
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
  }
  @media screen and (min-width: 1800px) {
    img {
      max-height: 1000px;
    }
  }
`;

export default SArticlePreview;
