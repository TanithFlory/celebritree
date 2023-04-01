import styled from "styled-components";
const SNavigation = styled.div`
  display: grid;
  grid-template-rows: 10% 1fr;
  gap: 1rem;

  & > div {
    background-color: var(--white-color);
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 6px;
    h2 {
      text-align: center;
      margin: 0;
      padding: 10px;
      span {
        text-align: center;
        color: var(--white-color);
        text-shadow: 0 0 3px var(--blue-color), 0 0 3px var(--blue-color),
          0 0 3px var(--blue-color), 0 0 3px var(--blue-color);
      }
    }
  }
  ul {
    padding: 1rem;
    div:not(:last-child) {
      border-bottom: 1px solid var(--gray-color);
    }
    h3 {
      text-align: center;
    }
  }
  li {
    list-style: none;
    & > a {
      text-decoration: none;
      cursor: pointer;
      div {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        border: 1px solid var(--green-color);
        border-radius: 6px;
        padding: 3px 12px;
        img {
          width: 45px;
          aspect-ratio: 1/1;
        }
        h4 {
          font-size: var(--fs-s);
          margin: 0;
          flex: 1;
          text-align: center;
          color: var(--black-color);
        }
      }
    }
  }
`;
export default SNavigation;
