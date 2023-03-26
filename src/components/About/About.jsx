import React, { useRef } from "react";
import "./About.scss";
import Socials from "./Socials/Socials";
import AboutContent from "./AboutContent";
import useOnScroll from "../../CustomHooks/useOnScroll";
import { scrollActions } from "../../store/features/scroll/scrollSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const About = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const options = {
    threshold: 0.90,
  };

  const fullyVisible = useOnScroll(ref, options);
  useEffect(() => {
    if (fullyVisible) {
      dispatch(scrollActions.fullyVisible());
    }
    return () => {
      dispatch(scrollActions.partialVisible());
    };
  }, [fullyVisible]);
  return (
    <>
      <div className="about" ref={ref}>
        <div>
          <h1>
            About <span>Celebritree</span>
          </h1>
        </div>
        <div>
          <Socials text="Follow for updates!" />
          <div className="about__content">
            <h1>
              Welcome to <span>Celebritree</span>, a non-profit organization
              dedicated to fighting both global starvation and climate change.
            </h1>
            <div>
              <ul>
                <AboutContent />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
