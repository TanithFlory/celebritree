import styled from "styled-components";

const SItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: var(--clr-white);
  height: 500px;
  img {
    height: 400px;
    width: 100%;
    object-fit: cover;
  }
  h3 {
    color: var(--clr-green);
  }
  h3,
  p {
    margin: 10px 0 0;
    text-align: center;
  }

  @media screen and (max-width: 912px) and (min-width: 550px) {
    width: 60%;
    margin: auto;
  }
  @media screen and (min-width: 2000px) {
    height: 700px;
    img {
      height: 600px;
    }
  }
`;

export default SItem;
