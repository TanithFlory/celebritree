import React from "react";
import "./About.scss";
import Socials from "./Socials/Socials";
import AboutContent from "./AboutContent";
const About = () => {
  return (
    <>
      <div className="about">
        <div>
          <h1>
            About <span>Celebritree</span>
          </h1>
        </div>
        <div>
          <Socials text="Follow for updates!"/>
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
