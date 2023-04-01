import { useEffect } from "react";
import useInView from "../../CustomHooks/useInView";

const useOnAnimation = (
  socialsRef,
  socialControls,
  contentRef,
  contentControls
) => {
  const options = {
    rootMargin: "30px 0px 0px 0px",
    threshold: 0.2,
  };
  const contentVisible = useInView(contentRef, options);
  const socialVisible = useInView(socialsRef, options);

  useEffect(() => {
    if (contentVisible) {
      contentControls.start({
        opacity: 1,
        transition: {
          duration: 1.3,
          ease: "easeIn",
        },
      });
    }
    if (socialVisible) {
      socialControls.start({
        opacity: 1,
        transition: {
          duration: 1,
          ease: "easeIn",
        },
      });
    }
  }, [contentVisible, contentControls, socialVisible, socialControls]);
};

export default useOnAnimation;
