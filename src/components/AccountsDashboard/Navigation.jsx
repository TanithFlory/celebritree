import React from "react";
import styled from "styled-components";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NavigationPanel = styled.div`
  display: grid;
  grid-template-rows: 10% 1fr;
  gap: 1rem;

  & > div {
    background-color: var(--white-color);
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 6px;
    h2 {
      text-align: center;
      margin: 0;
      padding: 10px;
      span {
        text-align: center;
        color: var(--white-color);
        text-shadow: 0 0 3px var(--blue-color), 0 0 3px var(--blue-color),
          0 0 3px var(--blue-color), 0 0 3px var(--blue-color);
      }
    }
  }
  ul {
    padding: 1rem;
    div:not(:last-child) {
      border-bottom: 1px solid var(--gray-color);
    }
    h3 {
      text-align: center;
    }
  }
  li {
    list-style: none;
    & > a {
      text-decoration: none;
      cursor: pointer;
      div {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        border: 1px solid var(--green-color);
        border-radius: 6px;
        padding: 3px 12px;
        img {
          width: 45px;
          aspect-ratio: 1/1;
        }
        h4 {
          font-size: var(--fs-s);
          margin: 0;
          flex: 1;
          text-align: center;
          color: var(--black-color);
        }
      }
    }
  }
`;

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
      <NavigationPanel>
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
      </NavigationPanel>
    </>
  );
};

export default Navigation;
