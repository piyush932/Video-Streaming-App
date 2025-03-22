import React, { useContext } from "react";
import "../CSS/Header.css";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/SidebarSlice";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div className="header-container">
      <div className="flex">
        <img
          src="images/hamburger-menu.png"
          alt="hamburger-menu"
          className="hamburger-menu"
          onClick={toggleSidebarHandler}
        />
        <div className="flex youtube-container">
          <a href="/">
            <img
              src="images/youtube.png"
              alt="youtube-logo"
              className="youtube-logo"
            />
          </a>
          <h2>Youtube</h2>
        </div>
      </div>
      <div className="search-container">
        <div className="search-input-container">
          <input type="text" className="search-input" />
          <button className="search-button">🔍</button>
        </div>
        <img
          src="images/voice-icon.jpg"
          alt="voice-icon"
          className="voice-icon"
        />
      </div>
      <div className="flex">
        <div className="dark-mode-toggle">
          <button onClick={toggleTheme}>
            <img
              src={
                theme === "light"
                  ? "images/moon-icon.png"
                  : "images/sun-icon.png"
              }
              alt="theme-icon"
              className="theme-icon"
            />
          </button>
        </div>
        <div>
          <button className="create-button">➕ Create</button>
        </div>
        <img
          src="images/notification-icon.png"
          alt="notification-icon"
          className="notification-icon"
        />
        <img src="images/user-icon.jpg" alt="user-icon" className="user-icon" />
      </div>
    </div>
  );
}

export default Header;
