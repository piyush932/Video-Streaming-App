import React from "react";
import "../CSS/Sidebar.css";
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
    { icon: <TbMusic className="icon" />, name: "Music", path: `/` },
    {
      icon: <MdOutlineSportsVolleyball className="icon" />,
      name: "Sport",
      path: `/`,
    },
    { icon: <TbDeviceGamepad2 className="icon" />, name: "Gaming", path: `/` },
    { icon: <BiMoviePlay className="icon" />, name: "Movies", path: `/` },
    { icon: <FaRegNewspaper className="icon" />, name: "News", path: `/` },
    { icon: <TbHanger className="icon" />, name: "Fashion", path: `/` },
    {
      icon: <MdOutlineLightbulb className="icon" />,
      name: "Course",
      path: `/`,
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
