import cardDetails from "./cardDetails";
import { PrimaryButton } from "../../../components/UI/Button/StyledButtons";
import CardWrapper from "./CardWraps/CardWrapper.styles";
import CardImg from "./CardWraps/CardImg.styles";
import CardDetails from "./CardWraps/CardDetails.styles";
import CardCarousel from "./CardCarousel";
import { Link } from "react-router-dom";
import { SCards, StyledH1 } from "./Cards.styles";
const Cards = () => {
  return (
    <SCards>
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
    </SCards>
  );
};

export default Cards;
