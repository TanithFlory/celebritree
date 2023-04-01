import { useEffect } from "react";
import useInView from "../../../CustomHooks/useInView";

const useOnAnimation = (
  cardRef,
  headingRef,
  subHeadingRef,
  carouselControls,
  headingControls,
  subHeadingControls
) => {
  const options = {
    rootMargin: "-160px 0px 0px 0px",
  };
  const cardVisible = useInView(cardRef, options);
  const headingVisible = useInView(headingRef, options);
  const subHeadingVisible = useInView(subHeadingRef, {
    rootMargin: "-15px 0px 0px 0px",
  });
  useEffect(() => {
    if (cardVisible) {
      carouselControls.start({
        opacity: 1,
        transition: {
          duration: 1.2,
          ease: "easeIn",
        },
      });
    }
    if (headingVisible) {
      headingControls.start({
        opacity: 1,
        translateY: 0,
        transition: {
          duration: 0.6,
          ease: "easeIn",
        },
      });
    }
    if (subHeadingVisible) {
      subHeadingControls.start({
        opacity: 1,
        translateY: 0,
        transition: {
          duration: 0.6,
          ease: "easeIn",
        },
      });
    }
  }, [
    cardVisible,
    carouselControls,
    headingVisible,
    headingControls,
    subHeadingVisible,
    subHeadingControls,
  ]);
};

export default useOnAnimation;
