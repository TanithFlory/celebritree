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
    rootMargin: "-160px",
  };
  const cardVisible = useInView(cardRef, options);
  const headingVisible = useInView(headingRef, options);
  const subHeadingVisible = useInView(subHeadingRef, {
    rootMargin: "0px",
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
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeIn",
        },
      });
    }
    if (subHeadingVisible) {
      subHeadingControls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeIn",
        },
      });
    }
    return () => {
      if (!cardRef) {
        carouselControls.set({
          opacity: 0,
        });
      }
      if (!headingRef) {
        headingControls.set({
          opacity: 0,
          y: -80,
        });
      }
      if (!subHeadingRef) {
        subHeadingControls.set({
          opacity: 0,
          y: 80,
        });
      }
    };
  }, [
    cardRef,
    cardVisible,
    carouselControls,
    headingRef,
    headingVisible,
    headingControls,
    subHeadingRef,
    subHeadingVisible,
    subHeadingControls,
  ]);
};

export default useOnAnimation;
