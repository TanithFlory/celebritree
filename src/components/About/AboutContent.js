import React from "react";
import images from "../../constants/images";

const AboutContent = () => {
  const content = [
    {
      id: 1,
      content:
        "We believe that everyone deserves access to healthy andsustainable food, regardless of their economiccircumstances.",
    },
    {
      id: 2,
      content:
        "We also recognize the urgent need to address climate changeand its devastating effects on our planet.",
    },
    {
      id: 3,
      content:
        "We believe that everyone has a role to play in creating a better world, and we invite you to join us in our mission.",
    },
  ];

  return content.map((data) => {
    return (
      <div key={data.id}>
        <img src={images.EarthRotate} alt="Earth" />
        <li>{data.content}</li>
      </div>
    );
  });
};

export default AboutContent;
