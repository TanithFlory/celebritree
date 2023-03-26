import React, { useEffect, useRef } from "react";
import Cards from "../Plans/Cards/Cards";
import About from "../About/About";
import { useDispatch } from "react-redux";
import useOnScroll from "../../CustomHooks/useOnScroll";
import { scrollActions } from "../../store/features/scroll/scrollSlice";
const Body = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const options = {
    threshold: 0.15,
  };
  const partialVisible = useOnScroll(ref, options);
  useEffect(() => {
    if (partialVisible) {
      dispatch(scrollActions.partialVisible());
    }
    return () => {
      console.log("chaling")
      dispatch(scrollActions.notVisible());
    };
  }, [partialVisible]);
  return (
    <main ref={ref}>
      <Cards />
      <About />
    </main>
  );
};

export default Body;
