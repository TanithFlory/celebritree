import styled from "styled-components";

const SItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: var(--clr-white);
  height: 410px;
  img {
    height: 305px;
    width: 100%;
  }
  h3,
  p {
    margin: 10px 0 0;
    text-align: center;
    color: var(--clr-green);
  }

  @media screen and (max-width: 911px) and (min-width: 550px) {
    width: 60%;
    margin: auto;
  }
`;

export default SItem;
