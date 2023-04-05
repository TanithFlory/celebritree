import { useEffect } from "react";
import useInView from "../../CustomHooks/useInView";

const useOnAnimation = (linksRef, fadeInControl) => {
  const options = {
    rootMargin: "-150px 0px 0px 0px",
    threshold: 0.2,
  };

  const linksVisible = useInView(linksRef, options);
  useEffect(() => {
    console.log(linksVisible);
    if (linksVisible) {
      fadeInControl.start((i) => ({
        opacity: 1,
        transition: { duration: 0.8, delay: i * 0.5 },
      }));
    }
  }, [linksVisible, fadeInControl]);
};

export default useOnAnimation;
