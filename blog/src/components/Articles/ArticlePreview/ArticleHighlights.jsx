import styled from "styled-components";
import { MdOutlineHighlight } from "react-icons/md";

const SArticleHighlights = styled.div`
  padding: 5px;
  text-align: center;
  div:not(:first-child, :last-child) {
    padding: 12px;
  }
  & > :first-child {
    display: flex;
    position: relative;
    text-align: center;
    span {
      margin: 0 auto;
      border: 2px solid var(--clr-orange);
      border-radius: 15px;
      overflow: hidden;
      div {
        z-index: 5;
        position: relative;
        background: black;
        padding: 10px;
      }
      &::after {
        content: "";
        width: 100%;
        height: 2px;
        background-image: var(--gradient-bl-or);
        position: absolute;
        top: 50%;
        right: 0;
      }
    }
  }
  & > :last-child {
    content: "";
    width: 100%;
    background-image: var(--gradient-bl-or);
    height: 2px;
    margin-top: 10px;
  }
  svg {
    fill: var(--clr-orange);
    transform: scale(1.5);
    margin-right: 10px;
  }
`;

const ArticleHighlights = (props) => {
  return (
    <SArticleHighlights>
      <div>
        <span>
          <div>Highlights</div>
        </span>
      </div>
      {props?.highlights?.map((data, index) => {
        return (
          <div key={`highlight-${index}`}>
            <MdOutlineHighlight />
            <span>{data}</span>
          </div>
        );
      })}

      <div />
    </SArticleHighlights>
  );
};

export default ArticleHighlights;
