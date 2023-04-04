import styled from "styled-components";
import CarouselWrapper from "./Carousel";
import data from "./Dummydata";

const StyledDiv = styled.div`
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
  }

  @media screen and (max-width: 911px) and (min-width: 550px) {
    width: 60%;
    margin: auto;
  }
`;

const HorizontalCarousel = () => {
  return (
    <CarouselWrapper>
      {data.map((data) => {
        return (
          <StyledDiv key={data.id}>
            <img src={data.img} />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </StyledDiv>
        );
      })}
    </CarouselWrapper>
  );
};
export default HorizontalCarousel;
