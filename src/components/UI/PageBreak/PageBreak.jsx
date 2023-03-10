import images from "../../../constants/images";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: ${(props) => props.margin};
  display: flex;
  justify-content: center;
  img {
    width: 600px;
    height: 200px;
  }
`;

const PageBreak = (props) => {
  return (
    <StyledDiv margin={props.margin}>
      <img src={images.PageBreak}></img>
    </StyledDiv>
  );
};

export default PageBreak;
