import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CardCarousel.scss";
const CardCarousel = ({ children }) => {
  const responsive = {
    largeDesktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 4,
      partialVisibilityGutter: 15,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1124 },
      items: 3,
      partialVisibilityGutter: 11,
    },
    tablet: {
      breakpoint: { max: 1124, min: 640 },
      items: 2,
      partialVisibilityGutter: 13,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
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
