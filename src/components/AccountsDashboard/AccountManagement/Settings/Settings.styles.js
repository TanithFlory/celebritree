import styled from "styled-components";
const SSettings = styled.div`
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    gap: 1rem;
    input,
    input:focus {
      background-color: #fafafa;
      cursor: not-allowed;
      padding: 16px;
      width: 230px;
      outline: none;
      border: 1px solid var(--gray-color);
      border-radius: 3px;
    }
    .input__enabled,
    .input__enabled:focus {
      background-color: var(--white-color);
      cursor: pointer;
    }
  }
  button {
    width: 180px;
    aspect-ratio: 1/1;
  }

  & > div {
    margin: 1rem 0;
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
`;

export default SSettings;
