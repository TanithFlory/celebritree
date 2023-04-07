import { useEffect } from "react";
import useInView from "../../CustomHooks/useInView";

const useOnAnimation = (footerRef, fadeInControl) => {
  const options = {
    rootMargin: "-150px 0px 0px 0px",
    threshold: 0.2,
  };

  const footerVisible = useInView(footerRef, options);
  useEffect(() => {
    if (footerVisible) {
      fadeInControl.start((i) => ({
        opacity: 1,
        transition: { duration: 0.8, delay: i * 0.5 },
      }));
    }
  }, [footerVisible, fadeInControl]);
};

export default useOnAnimation;
