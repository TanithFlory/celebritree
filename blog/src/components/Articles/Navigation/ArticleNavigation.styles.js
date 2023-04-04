import styled from "styled-components";

const SNavigation = styled.div`
  margin-top: 10px;
  & > div:first-child {
    display: flex;
    gap: 1rem;
    list-style: none;
    a {
      display: flex;
      gap: 5px;
      align-items: center;
      font-size: var(--fs-m);
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
    }
    a:hover,
    .active {
      background-color: var(--clr-white);
      color: var(--clr-black);
      svg {
        fill: var(--clr-black);
      }
    }
  }
`;

export default SNavigation;
