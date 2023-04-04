import styled from "styled-components";

const Pagebreak = styled.hr`
  background-image: linear-gradient(
    90deg,
    rgba(1, 1, 1),
    rgb(0 255 10) 50%,
    rgba(1, 1, 1)
  );
  margin: ${(props) => props.margin};
  width: 100%;
  height: 2px;
  border: 0;
`;

export default Pagebreak;
