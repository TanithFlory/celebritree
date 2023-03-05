import React from "react";
import cardDetails from "./cardDetails";
import { PrimaryButton } from "../../../components/UI/Button/StyledButtons";
import CardWrapper from "./CardWraps/CardWrapper";
import CardImg from "./CardWraps/CardImg";
import CardDetails from "./CardWraps/CardDetails";
import CardCarousel from "./CardCarousel";

const Cards = () => {
  return (
    <>
      <CardCarousel>
        {cardDetails.map((data) => {
          return (
            <CardWrapper key={data.id}>
              <CardImg backgroundIndex = {Math.floor(Math.random(0,14)*14)}>
                <img src={data.img} alt="tree" />
              </CardImg>
              <CardDetails backgroundIndex = {Math.floor(Math.random(0,14)*14)}>
                <h1>{data.title}</h1>
                <p>{data.desc}</p>
                <div>
                  <PrimaryButton
                    backgroundColor="var(--green-color)"
                    textColor="var(--black-color)"
                  >
                    Read More
                  </PrimaryButton>
                  <PrimaryButton
                    backgroundColor="var(--black-color)"
                    textColor="var(--white-color)"
                  >
                    Contribute
                  </PrimaryButton>
                </div>
              </CardDetails>
            </CardWrapper>
          );
        })}
      </CardCarousel>
    </>
  );
};

export default Cards;
