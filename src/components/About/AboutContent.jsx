import React from "react";
import images from "../../constants/images";

const AboutContent = () => {
  const content = [
    {
      content:
        "We believe that everyone deserves access to healthy and sustainable food, regardless of their economic circumstances.",
    },
    {
      content:
        "We also recognize the urgent need to address climate changeand its devastating effects on our planet.",
    },
    {
      content:
        "We believe that everyone has a role to play in creating a better world, and we invite you to join us in our mission.",
    },
  ];

  return content.map((data,index) => {
    return (
      <div key={`content-${index}`}>
        <img src={images.EarthRotate} alt="Earth" />
        <li>{data.content}</li>
      </div>
    );
  });
};

export default AboutContent;
