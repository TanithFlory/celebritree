import React from "react";
import styled from "styled-components";
import images from "../../constants/images";
import { Link } from "react-router-dom";
const NavigationPanel = styled.div`
  display: grid;
  grid-template-rows: 10% 1fr;
  gap: 1rem;

  & > div:nth-child(2),
  & > div:nth-child(1) {
    background-color: var(--white-color);
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 6px;
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
        img {
          width: 45px;
          aspect-ratio: 1/1;
        }
        h4 {
          font-size: var(--fs-m);
          margin: 0;
        }
      }
    }
  }
`;

const Navigation = () => {
  const navLinks = [
    {
      title: "Account Management",
      label1: "Account Settings",
      label2: "Account Security",
      link1: "settings",
      link2: "security",
    },
    {
      title: "Contributions",
      label1: "My Contributions",
      link1: "contributions",
    },
    {
      title: "Help",
      label1: "Help Centre",
      link1: "help-centre",
      label2: "FAQ",
      link2: "FAQ",
    },
  ];
  return (
    <>
      <NavigationPanel>
        <div>
          <h2>Hello _______</h2>
        </div>
        <div>
          <ul>
            {navLinks.map((data, index) => {
              return (
                <div key={`nav-${index}`}>
                  <h3>{data.title}</h3>
                  <li>
                    <Link to={`/account/${data.link1}`}>
                      <div>
                        <img src={images.SettingsMob} />
                        <h4>{data.label1}</h4>
                      </div>
                    </Link>
                    {data.label2 && (
                      <Link to={`/account/${data.link2}`}>
                        <div>
                          <img src={images.SettingsMob} />
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
