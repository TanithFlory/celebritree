import React, { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Body from "../Body/Body";
import useOnScroll from "../../CustomHooks/useOnScroll";
const Home = () => {
  const ref = useRef();
  const options = { rootMargin: "-300px" };
  const visible = useOnScroll(ref, options);
  return (
    <>
      <Navbar bgColor={visible} />
      <Header />
      <div ref={ref}>
        <Body />
      </div>
    </>
  );
};

export default Home;
