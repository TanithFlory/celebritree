import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import useInView from "../../../CustomHooks/useInView";
import cardDetails from "./cardDetails";
import { PrimaryButton } from "../../../components/UI/Button/StyledButtons";
import CardWrapper from "./CardWrapper.styles";
import CardImg from "./CardImg.styles";
import CardCarousel from "../CarouselWrapper/CardCarousel";
import CardDetails from "./CardDetails.styles";
import { Link } from "react-router-dom";
import { SCards, StyledH1 } from "./Cards.styles";

const Cards = () => {
  const carouselControls = useAnimation();
  const headingControls = useAnimation();
  const [cardRef, setCardRef] = useState(null);
  const options = {
    rootMargin: "-160px",
  };
  const cardVisible = useInView(cardRef, options);
  // const headingVisible = useInView(headingRef, options);
  useEffect(() => {
    if (cardVisible) {
      carouselControls.start({
        opacity: 1,
        transition: {
          duration: 1,
          ease: "easeIn",
        },
      });
    }
    return () => {
      if (cardRef) {
        carouselControls.set({
          opacity: 0,
        });
      }
    };
  }, [carouselControls, cardVisible, cardRef]);

  return (
    <SCards>
      <StyledH1
        animate={headingControls}
        initial={{ opacity: 0 }}
        // ref={headingRef}
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
      </motion.div>
      <StyledH1 fontSize="l" margin="auto" padding="0 0 2rem">
        We invite you to explore our carousel and learn more about the different
        types of trees we plan to plant. <br />
        <span>Together, we can grow a greener world!</span>
      </StyledH1>
    </SCards>
  );
};

export default Cards;
