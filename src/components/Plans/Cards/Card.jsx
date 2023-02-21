import React from "react";
import "./Card.scss";
import CardInfo from "./CardInfo";
import WhiteButton from "../../UI/Button/WhiteButton";
import GreenLongButton from "../../UI/Button/GreenLongButton";
const Card = () => {
  return (
    <>
      {CardInfo.map((data) => {
        return (
          <div
            className={data.id===2?"card cardSpecific":"card"}
            key={data.id}
          >
            <div className="card__header">
            {data.id===2 ? <h1>Popular!</h1>:null}
              <h3>{data.title}</h3>
              <h1>{data.price}</h1>
              <h4>{data.desc}</h4>
            </div>
            <img src={data.img} alt="tree" />

            <div className="card__buttons">
              <GreenLongButton id="greenBtn">Contribute</GreenLongButton>
              <WhiteButton>Know More!</WhiteButton>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
