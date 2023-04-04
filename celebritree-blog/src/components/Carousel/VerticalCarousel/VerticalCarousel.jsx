import dataz from "./Dummydata";
import SVerticalCarousel from "./Carousel.styles";
import { useEffect, useState } from "react";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";

const VerticalCarousel = () => {
  const [carouselRef, setCarouselRef] = useState();
  const [disable, setDisable] = useState(false);
  let interval;
  const scroll = (type) => {
    clearInterval(interval);
    setDisable(true);
    const { offsetHeight, scrollTop, scrollHeight } = carouselRef;
    if (type === "down") {
      if (offsetHeight + scrollTop >= scrollHeight) {
        return carouselRef.scrollTo(0, 0);
      }
      carouselRef.scrollBy({ top: 141, behavior: "smooth" });
    } else {
      if (Math.floor(scrollTop) === 0) {
        return carouselRef.scrollTo(0, scrollHeight);
      }
      carouselRef.scrollBy({ top: -141, behavior: "smooth" });
    }
  };

  useEffect(() => {
    interval = setInterval(() => {
      scroll("down");
    }, 5000);
    const interval2 = setTimeout(() => {
      setDisable(false);
    }, 400);
    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, [scroll, disable]);
  return (
    <SVerticalCarousel>
      <div className="buttons" onClick={() => (disable ? null : scroll("up"))}>
        <button className="up">
          <FaChevronCircleUp />
        </button>
      </div>
      <div ref={setCarouselRef} className="carousel">
        {dataz.map((data) => {
          return (
            <div key={data.id}>
              <img src={data.img} />
              <div>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="buttons"
        onClick={() => (disable ? null : scroll("down"))}
      >
        <button className="down">
          <FaChevronCircleDown />
        </button>
      </div>
    </SVerticalCarousel>
  );
};
export default VerticalCarousel;
