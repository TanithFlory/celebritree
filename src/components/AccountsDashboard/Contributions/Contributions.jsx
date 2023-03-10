import React from "react";
import Data from "./ContributionDummy";
import styled from "styled-components";
import images from "../../../constants/images";
const OrderCard = styled.div`
  border: 3px solid black;
  padding: 6px;
  h1,
  h2 {
    text-align: center;
    margin: 0;
    padding-inline:10px;
    span {
      color: var(--green-color);
    }
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom:1rem;
    img{
      width:80px;
      aspect-ratio:1/1;
    }
  }
  & > div:not(:first-child) {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    padding: 15px;
    border-radius: 16px;
    border: 1px solid gray;
    background-color: var(--white-color);
    margin-bottom: 16px;
    cursor: pointer;
    &:hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 150px;
        aspect-ratio: 1/1;
        border-radius: 50%;
      }
    }
  }
  span {
    text-align: center;
  }
`;

const Contributions = () => {
  return (
    <OrderCard>
      <div>
        <img src={images.Confetti} alt="Confetti" />
        <h1>
          Your <span>Contributions</span>
        </h1>
        <img src={images.ContributionTree} alt="Confetti" />
      </div>
      {Data.map((data, index) => {
        return (
          <div key={`order-${index}`}>
            <div>
              <img src={data.img} />
              <h2>{data.title}</h2>
            </div>
            <div>
              <h3>{data.price}</h3>
            </div>
            <div>
              <h3>Contributed on: {data.date}</h3>
              <span>Thank you for your contribution. We appreciate it!</span>
            </div>
          </div>
        );
      })}
    </OrderCard>
  );
};

export default Contributions;
