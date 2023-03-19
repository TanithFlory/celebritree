import styled from "styled-components";
import images from "../../../constants/images";
const LoadingImg = styled.img`
  width: ${(props) => props.width};
  aspect-ratio: 1/1;
`;

const Loading = (props) => {
  return (
    <LoadingImg
      width={props.width}
      src={props.type === "Loading" ? images.Loading : images.Success}
    />
  );
};
export default Loading;
