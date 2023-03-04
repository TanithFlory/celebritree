import React from "react";
import cardDetails from "./cardDetails";
import CustomButton from "../../UI/Button/CustomButton";
import CardWrapper from "../../UI/Wrapper/CardWraps/CardWrapper";
import CardImg from "../../UI/Wrapper/CardWraps/CardImg";
import CardDetails from "../../UI/Wrapper/CardWraps/CardDetails";
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
                  <CustomButton
                    backgroundColor="var(--green-color)"
                    textColor="var(--black-color)"
                  >
                    Read More
                  </CustomButton>
                  <CustomButton
                    backgroundColor="var(--black-color)"
                    textColor="var(--white-color)"
                  >
                    Contribute
                  </CustomButton>
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
