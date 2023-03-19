import React from "react";
import images from "../../../constants/images";
import "./Socials.scss";
const Socials = (props) => {
  return (
    <div className="about__socials">
      <img src={images.logo} alt="logo" />
      <div>
        <div>
          {" "}
          {[images.Facebook, images.Instagram, images.Twitter].map((icon) => {
            return <img src={icon} alt="SocialIcon" key={icon} />;
          })}
        </div>
        <div>
          <img src={images.Arrow} alt="arrow"></img>
          <h2>
            {props.text} <div></div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Socials;
