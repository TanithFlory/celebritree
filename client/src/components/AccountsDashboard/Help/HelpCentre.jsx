import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  h1{
    font-size:var(--fs-xxl);
    span{
      color:var(--green-color);
    }
    border-bottom:1px solid var(--brown-color);
  }
  
  p{
    font-size:var(--fs-m);
  }
`;

const HelpCentre = () => {
  return (
    <>
      <StyledDiv>
        <h1><span>Help</span> Centre</h1>
        <p>
          Welcome to our Help Center! We're here to help you with any questions
          or issues you may have. Please select a topic below to get started.
        </p>
        <div>
          <h2>Why don't you currently accept contributions or donations?</h2>
          <p>
            We appreciate your interest in supporting our mission to plant trees
            and fight against climate change. However, at this time, we do not
            accept contributions or donations as we are still in the process of
            identifying suitable locations to plant trees and establishing
            partnerships with local organizations to ensure the sustainability
            of our planting efforts. Rest assured that we are working hard to
            make this possible, and we hope to start accepting contributions and
            donations soon. In the meantime, we encourage you to spread the word
            about our organization and mission to your friends and family who
            may be interested in supporting us in the future. Thank you for your
            understanding and support.
          </p>
        </div>
        <div>
          <h2>Contact Us</h2>
          <p>
            If you can't find the answer to your question in our Help Center,
            please don't hesitate to contact us. You can reach us by email at
            help@celebritree.com.
          </p>
        </div>
      </StyledDiv>
    </>
  );
};

export default HelpCentre;
