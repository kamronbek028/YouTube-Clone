import React from "react";
import { Link } from "react-router-dom";
import {
  FaYoutube,
  FaHome,
  FaHistory,
  FaBroadcastTower,
  FaVideo,
  FaBell,
  FaUser,
} from "react-icons/fa";

const leftData = [
  { id: 1, icon: <FaYoutube className="social-icon" />, url: "/" },
  { id: 2, icon: <FaHome className="social-icon" />, url: "/" },
  { id: 3, icon: <FaHistory className="social-icon" />, url: "/" },
  { id: 4, icon: <FaBroadcastTower className="social-icon" />, url: "/" },
];

const rightData = [
  { id: 1, icon: <FaVideo className="social-icon" />, url: "/" },
  { id: 2, icon: <FaBell className="social-icon" />, url: "/" },
  { id: 3, icon: <FaUser className="social-icon" />, url: "/" },
];

export const LeftLinks = () => {
  return (
    <ul className="icons icons-left">
      {leftData.map((data) => {
        return (
          <li key={data.id}>
            <Link className="nav__icon" to={data.url}>
              {data.icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export const RightLinks = () => {
  return (
    <ul className="icons icons-right">
      {rightData.map((data) => {
        return (
          <li key={data.id}>
            <Link className="nav__icon" to={data.url}>
              {data.icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
