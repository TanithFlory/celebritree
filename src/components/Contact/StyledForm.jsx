import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 10px;
  margin-right: 10px;
  & > div:first-child {
    flex-direction: row;
  }
  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    label {
      padding-left: 5px;
      span {
        color: var(--aqi-red);
      }
    }
    h5 {
      margin: 0;
      color: var(--aqi-red);
      max-width: 200px;
    }
  }
  input,
  textarea,
  input text:focus {
    height: 35px;
    width: 100%;
    padding-left: 5px;
    border-radius: 5px;
    outline: none;
    border: solid var(--blue-color);
    border-width: 0 0 thick;
    font-size: 1rem;
    background-color: var(--primary-color);
    color: var(--white-color);
    resize: none;
    &::placeholder {
      color: #aeafb4;
    }
  }
  textarea {
    height: 60px;
  }
  h2 {
    margin-bottom: 0;
  }
`;

export default StyledForm;
