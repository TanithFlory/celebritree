import React from "react";
import cardDetails from "./cardDetails";
import CustomButton from "../../UI/Button/CustomButton";
import { CardWrap, CardImg, CardDetails } from "../../UI/Wrapper/CardWrap";
import CardCarousel1 from "./CardCarousel";

const Cards = () => {
  return (
    <>
      <CardCarousel1>
        {cardDetails.map((data) => {
          return (
            <CardWrap key={data.id}>
              <CardImg backgroundIndex = {Math.floor(Math.random(0,5)*14)}>
                <img src={data.img} alt="tree" />
              </CardImg>
              <CardDetails>
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
            </CardWrap>
          );
        })}
      </CardCarousel1>
    </>
  );
};

export default Cards;
