import React from "react";
import "./Card.scss";
import cardDetails from "./cardDetails";
import CustomButton from "../../UI/Button/CustomButton";
const Card = () => {
  return (
    <>
      {cardDetails.map((data) => {
        return (
          <div
            className={data.id === 2 ? "card cardSpecific" : "card"}
            key={data.id}
          >
            <div className="card__header">
              {data.id === 2 ? <h1>Popular!</h1> : null}
              <h3>{data.title}</h3>
              <h4>{data.desc}</h4>
            </div>
            <img src={data.img} alt="tree" />

            <div className="card__buttons">
              <CustomButton
                id="contributeBtn"
                backgroundColor="var(--green-color)"
                textColor="var(--white-color)"
              >
                Contribute
              </CustomButton>
              <CustomButton
                id="knowMoreBtn"
                backgroundColor="var(--white-color)"
                textColor="var(--black-color)"
              >
                Know More!
              </CustomButton>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
