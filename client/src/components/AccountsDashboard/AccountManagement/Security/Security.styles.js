import styled from "styled-components";

const SSecurity = styled.div`
  display: flex;
  flex-direction: column;

  button {
    width: 180px;
    aspect-ratio: 1/1;
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem;
    & > div {
      margin: 1rem 0;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      & > span {
        font-size: var(--fs-l);
        padding-right: 1rem;
      }
      & > span:nth-child(2) {
        font-size: var(--fs-xs);
        color: var(--blue-color);
        cursor: pointer;
      }
    }
  }
`;

export default SSecurity;
