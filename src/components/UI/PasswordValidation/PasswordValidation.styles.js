import styled from "styled-components";

const SPasswordValidation = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  div {
    margin-bottom: 5px;
    div {
      display: flex;
      align-items: center;
      gap: 5px;
      border-radius: 1px;
      background-color: rgb(255, 15, 15, 0.1);
      padding: 3px;
      span {
        color: red;
      }
      svg {
        transform: scale(1.05);
      }
      .cross path {
        fill: red;
      }
      .check path {
        fill: green;
      }
    }
  }
  .validated {
    background-color: rgb(0, 228, 110, 0.1);
    span {
      color: green;
    }
  }
`;

export default SPasswordValidation;
