import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CardCarousel.scss";
const CardCarousel = ({ children }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1750 },
      items: 4,
    },
    miniDesktop: {
      breakpoint: { max: 1750, min: 1024 },
      items: 3,
      partialVisibilityGutter: 10,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 15,
    },
    mobile: {
      breakpoint: { max: 620, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <Carousel
      ssr={true}
      draggable={false}
      partialVisible
      itemClass="image-item"
      responsive={responsive}
      infinite={true}
    >
      {children}
    </Carousel>
  );
};

export default CardCarousel;
