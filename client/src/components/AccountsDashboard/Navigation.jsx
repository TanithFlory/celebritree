import React from "react";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SNavigation from "./SNavigation";
const Navigation = () => {
  const userName = useSelector((state) => state.auth.firstName);
  const navLinks = [
    {
      title: "Account Management",
      label1: "Settings",
      label2: "Security",
      icon1: images.Settings,
      icon2: images.Security,
    },
    {
      title: "Contributions",
      label1: "My Contributions",
      icon1: images.Contributions,
    },
    {
      title: "Help",
      label1: "Help-Centre",
      // label2: "FAQ",
      icon1: images.Help,
      // icon2: images.FAQ
    },
  ];
  return (
    <>
      <SNavigation>
        <div>
          <h2>
            Hello <br /> <span>{userName}</span>
          </h2>
        </div>
        <div>
          <ul>
            {navLinks.map((data, index) => {
              return (
                <div key={`nav-${index}`}>
                  <h3>{data.title}</h3>
                  <li>
                    <Link
                      to={`/account/${
                        index === 1
                          ? data.title.toLowerCase()
                          : data.label1.toLowerCase()
                      }`}
                    >
                      <div>
                        <img src={data.icon1} alt="icon" />
                        <h4>{data.label1.replace(/[-]+/g, " ")}</h4>
                      </div>
                    </Link>
                    {data.label2 && (
                      <Link to={`/account/${data.label2.toLowerCase()}`}>
                        <div>
                          <img src={data.icon2} alt="icon" />
                          <h4>{data.label2}</h4>
                        </div>
                      </Link>
                    )}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </SNavigation>
    </>
  );
};

export default Navigation;
