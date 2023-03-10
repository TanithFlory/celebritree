import React from "react";
import Cards from "../Plans/Cards/Cards";
import About from "../About/About";
import PageBreak from "../UI/PageBreak/PageBreak";
const Body = () => {
  return (
    <>
      <PageBreak margin="3rem 0 0"/>
      <Cards />
      <PageBreak margin="0 0 3rem"/>
      <About />
      <PageBreak margin="0 0 3rem"/>
    </>
  );
};

export default Body;
