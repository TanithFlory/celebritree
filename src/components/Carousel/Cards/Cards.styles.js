import styled from "styled-components";

export const SCards = styled.div`
  background-color: var(--secondary-color);
`;

export const StyledH1 = styled.h1`
  text-align: center;
  margin: auto;
  color: var(--black-color);
  font-size: ${(props) => `var(--fs-${props.fontSize})`};
  max-width: 750px;
  padding: ${(props) => props.padding};
  & > span {
    color: var(--green-color);
  }
`;
