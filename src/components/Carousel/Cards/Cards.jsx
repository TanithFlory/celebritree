import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import cardDetails from "./cardDetails";
import { PrimaryButton } from "../../../components/UI/Button/StyledButtons";
import CardWrapper from "./CardWrapper.styles";
import CardImg from "./CardImg.styles";
import CardCarousel from "../CarouselWrapper/CardCarousel";
import CardDetails from "./CardDetails.styles";
import { Link } from "react-router-dom";
import { SCards, StyledH1 } from "./Cards.styles";
import useOnAnimation from "./useOnAnimation.cards";

const Cards = () => {
  const [cardRef, setCardRef] = useState();
  const [headingRef, setHeadingRef] = useState();
  const [subHeadingRef, setSubHeadingRef] = useState();

  const carouselControls = useAnimation();
  const headingControls = useAnimation();
  const subHeadingControls = useAnimation();

  useOnAnimation(
    cardRef,
    headingRef,
    subHeadingRef,
    carouselControls,
    headingControls,
    subHeadingControls
  );

  return (
    <SCards>
      <StyledH1
        animate={headingControls}
        initial={{ opacity: 0 }}
        ref={setHeadingRef}
        fontSize="xxl"
        padding="2rem 0 0"
      >
        <span>
          Growing a Greener World: <br />
        </span>
        Our Tree Carousel
      </StyledH1>
      <motion.div
        ref={setCardRef}
        animate={carouselControls}
        initial={{ opacity: 0 }}
      >
        <CardCarousel>
          {cardDetails.map((data, index) => {
            return (
              <CardWrapper key={data.id}>
                <CardImg backgroundIndex={index}>
                  <img src={data.img} alt="tree" />
                </CardImg>
                <CardDetails backgroundIndex={index + 2}>
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
      </motion.div>
      <StyledH1
        ref={setSubHeadingRef}
        initial={{ opacity: 0 }}
        animate={subHeadingControls}
        fontSize="l"
        margin="auto"
        padding="0 0 2rem"
      >
        We invite you to explore our carousel and learn more about the different
        types of trees we plan to plant. <br />
        <span>Together, we can grow a greener world!</span>
      </StyledH1>
    </SCards>
  );
};

export default Cards;
