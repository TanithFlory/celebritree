import { useEffect } from "react";
import useInView from "../../CustomHooks/useInView";

const useOnAnimation = (
  socialsRef,
  socialControls,
  contentRef,
  contentControls
) => {
  const options = {
    rootMargin: "-160px 0px 0px 0px",
  };
  const contentVisible = useInView(contentRef, options);
  const socialVisible = useInView(socialsRef, options);

  useEffect(() => {
    if (contentVisible) {
      contentControls.start({
        opacity: 1,
        transition: {
          duration: 1.6,
          ease: "easeIn",
          delay: 0.5,
        },
      });
    }
    if (socialVisible) {
      socialControls.start({
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: "easeIn",
        },
      });
    }
  }, [contentVisible, contentControls, socialVisible, socialControls]);
};

export default useOnAnimation;
