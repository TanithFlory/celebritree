import React from "react";
import "./About.scss";
import images from "../../constants/images";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about__earth-img">
        <img src={images.Earth} alt="earth" />
        </div>
        <div className="about__socials" >
          <img src={images.logo} alt="logo"/>
          <div className="about__socials-links">
            {[images.Facebook,images.Instagram,images.Twitter].map((icon)=>{
                return <img src={icon} alt="SocialIcon" key={icon}/>
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
