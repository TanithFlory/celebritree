import React, { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import useOnScroll from "../../CustomHooks/useOnScroll";
import "./Home.scss";
const Home = () => {
  const ref = useRef();
  const options = { threshold: 0.2 };
  const visible = useOnScroll(ref, options);
  return (
    <>
      <Navbar bgColor={visible} />
      <div className="Home">
      <Header id="header"/>
      <div id="body" ref={ref}>
        <Body />
      </div>
      <Footer id="footer"/>
      </div>
    </>
  );
};

export default Home;
