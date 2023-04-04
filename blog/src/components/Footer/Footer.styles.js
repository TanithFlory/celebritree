import styled from "styled-components";
const SFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 1rem;
  min-height: 200px;
  & > :nth-child(2) {
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
      transform: scale(2);
      cursor: pointer;
      &:hover {
        fill: var(--clr-cyan);
      }
    }
    & > :nth-child(2) {
      display: flex;
      gap: 2rem;
    }
  }
  & > :last-child {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  img {
    width: 100px;
    aspect-ratio: 1/1;
  }
  a {
    text-decoration: none;
  }
`;
export default SFooter;
