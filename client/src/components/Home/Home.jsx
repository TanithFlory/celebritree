import React, { useEffect } from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import { scrollActions } from "../../store/features/scroll/scrollSlice";
import { useDispatch } from "react-redux";
import { scrollTop } from "../Utils/scrolls";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    scrollTop();
    dispatch(scrollActions.notVisible());
    console.log(process.env.REACT_APP_API_BASE_URL);
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
