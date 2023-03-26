import React, { useRef } from "react";
import cardDetails from "./cardDetails";
import { PrimaryButton } from "../../../components/UI/Button/StyledButtons";
import CardWrapper from "./CardWraps/CardWrapper";
import CardImg from "./CardWraps/CardImg";
import CardDetails from "./CardWraps/CardDetails";
import CardCarousel from "./CardCarousel";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { scrollActions } from "../../../store/features/scroll/scrollSlice";
import useOnScroll from "../../../CustomHooks/useOnScroll";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const StyledH1 = styled.h1`
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

const StyledDiv = styled.div`
  background-color: var(--secondary-color);
`;
const Cards = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const options = {
    threshold: 0.95,
  };
  const fullyVisible = useOnScroll(ref, options);
  useEffect(() => {
    if (fullyVisible) {
      dispatch(scrollActions.fullyVisible());
    }
    return () => {
      dispatch(scrollActions.partialVisible());
    };
  }, [fullyVisible, dispatch]);
  return (
    <StyledDiv ref={ref}>
      <StyledH1 fontSize="xxl" padding="2rem 0 0">
        <span>
          Growing a Greener World: <br />
        </span>{" "}
        Our Tree Carousel
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
                  <Link to="/coming-soon">
                    <PrimaryButton backgroundColor="black" textColor="green">
                      Contribute
                    </PrimaryButton>
                  </Link>
                </div>
              </CardDetails>
            </CardWrapper>
          );
        })}
      </CardCarousel>
      <StyledH1 fontSize="l" margin="auto" padding="0 0 2rem">
        We invite you to explore our carousel and learn more about the different
        types of trees we plan to plant. <br />
        <span>Together, we can grow a greener world!</span>
      </StyledH1>
    </StyledDiv>
  );
};

export default Cards;
