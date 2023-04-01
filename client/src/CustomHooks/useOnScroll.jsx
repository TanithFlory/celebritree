import { useState, useEffect } from "react";
import { scrollActions } from "../store/features/scroll/scrollSlice";
import { useDispatch } from "react-redux";

const useOnScroll = (ref, options) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  useEffect(() => {
    if (!visible) {
      dispatch(scrollActions.partialVisible());
    }

    return () => {
      dispatch(scrollActions.notVisible());
    };
  }, [dispatch, visible]);

  return visible;
};

export default useOnScroll;
