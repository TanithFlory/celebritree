import React, { useRef } from "react";
import Navbar from "../NavBar/Navbar";
import Header from "../Header/Header";
import Body from "../Body/Body";
import useOnScroll from "../../CustomHooks/useOnScroll";
import ScrollContext from "../../constants/scroll-context";
const Home = () => {
  const ref = useRef();
  const options = { rootMargin: "-300px" };
  const visible = useOnScroll(ref, options);
  return (
    <>
      <ScrollContext.Provider
        value={{
          isVisible: visible,
        }}
      >
        <Navbar />
      </ScrollContext.Provider>
      <Header />
      <div ref={ref}>
        <Body />
      </div>
    </>
  );
};

export default Home;
