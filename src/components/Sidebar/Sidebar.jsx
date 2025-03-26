import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import {
  MdHomeFilled,
  MdOutlineSportsVolleyball,
  MdOutlineLightbulb,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2, TbHanger } from "react-icons/tb";
import { BiMoviePlay } from "react-icons/bi";
import { FaRegNewspaper } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const isSidebarOpen = useSelector((store) => store.sidebar.isSidebarOpen);

  if (!isSidebarOpen) {
    return null;
  }
  const menuLinks = [
    { icon: <MdHomeFilled className="icon" />, name: "Home", path: "/" },
    { icon: <TbMusic className="icon" />, name: "Music", path: `/?tag=Music` },
    {
      icon: <MdOutlineSportsVolleyball className="icon" />,
      name: "Sport",
      path: `/?tag=Sports`,
    },
    { icon: <TbDeviceGamepad2 className="icon" />, name: "Gaming", path: `/?tag=Gaming` },
    { icon: <BiMoviePlay className="icon" />, name: "Movies", path: `/?tag=Movies` },
    { icon: <FaRegNewspaper className="icon" />, name: "News", path: `/?tag=News` },
    { icon: <TbHanger className="icon" />, name: "Fashion", path: `/?tag=Fashion` },
    {
      icon: <MdOutlineLightbulb className="icon" />,
      name: "Course",
      path: `/?tag=Course`,
    },
  ];

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        {menuLinks.map(({ icon, name, path }) => (
          <li
            key={name}
            className="sidebar-item"
            onClick={() => navigate(path)}
          >
            {icon}
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
