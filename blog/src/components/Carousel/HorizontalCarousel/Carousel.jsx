import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselWrapper = ({ children }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    phone: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive} infinite={true}>
      {children}
    </Carousel>
  );
};

export default CarouselWrapper;
