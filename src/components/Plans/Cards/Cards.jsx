import React from "react";
import cardDetails from "./cardDetails";
import { PrimaryButton } from "../../../components/UI/Button/StyledButtons";
import CardWrapper from "./CardWraps/CardWrapper";
import CardImg from "./CardWraps/CardImg";
import CardDetails from "./CardWraps/CardDetails";
import CardCarousel from "./CardCarousel";
import styled from "styled-components";

const StyledH1 = styled.h1`
  text-align: center;
  margin: ${(props) => props.margin};
  color: var(--white-color);
  font-size: ${(props) => `var(--fs-${props.fontSize})`};
  max-width: 750px;
  & > span {
    color: var(--green-color);
  }
`;

const Cards = () => {
  return (
    <>
      <StyledH1 fontSize="xxl" margin="1rem auto 0">
        <span>Growing a Greener World: <br/></span> Our Tree Carousel
      </StyledH1>
      <CardCarousel>
        {cardDetails.map((data) => {
          return (
            <CardWrapper key={data.id}>
              <CardImg backgroundIndex={Math.floor(Math.random(0, 14) * 14)}>
                <img src={data.img} alt="tree" />
              </CardImg>
              <CardDetails
                backgroundIndex={Math.floor(Math.random(0, 14) * 14)}
              >
                <h1>{data.title}</h1>
                <p>{data.desc}</p>
                <div>
                  <PrimaryButton backgroundColor="green" textColor="black">
                    Read More
                  </PrimaryButton>
                  <PrimaryButton backgroundColor="black" textColor="green">
                    Contribute
                  </PrimaryButton>
                </div>
              </CardDetails>
            </CardWrapper>
          );
        })}
      </CardCarousel>
      <StyledH1 fontSize="l" margin="auto auto 1rem">
        We invite you to explore our carousel and learn more about the different
        types of trees we plan to plant.{" "}<br/>
        <span>Together, we can grow a greener world!</span>
      </StyledH1>
    </>
  );
};

export default Cards;
