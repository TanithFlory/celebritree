import React, { useEffect } from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";
import { scrollTop } from "../Utils/scrolls";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    scrollTop();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default Home;
