import React from "react";
import Data from "./ContributionDummy";
import styled from "styled-components";

const OrderCard = styled.div`
  border: 3px solid black;
  padding: 6px;
  h1 {
    text-align: center;
    margin-top: 0;
    span {
      color: var(--green-color);
    }
  }
  img {
    width: 150px;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }
  h2 {
    margin: 0;
  }
  & > div {
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
    }
  }
  span {
    text-align: center;
  }
`;

const Contributions = () => {
  return (
    <OrderCard>
      <h1>
        Your <span>Contributions</span>
      </h1>
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
