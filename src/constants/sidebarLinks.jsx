import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaFire, FaGamepad, FaMusic } from "react-icons/fa";

const sidebarData = [
  { id: 1, icon: <FaHome className="social-icon" />, title: "Home", url: "/" },
  {
    id: 2,
    icon: <FaFire className="social-icon" />,
    title: "Trending",
    url: "/",
  },
  {
    id: 3,
    icon: <FaGamepad className="social-icon" />,
    title: "Game",
    url: "/",
  },
  {
    id: 4,
    icon: <FaMusic className="social-icon" />,
    title: "Music",
    url: "/",
  },
];

const SidebarLinks = () => {
  return (
    <ul className="sidebar">
      {sidebarData.map((data) => {
        return (
          <li className="sidebar__link" key={data.id}>
            <Link className="sidebar__icon" to={data.url}>
              {data.icon}
            </Link>
            <span className="sidebar__span">{data.title}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarLinks;
