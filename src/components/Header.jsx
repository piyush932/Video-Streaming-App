import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../CSS/Header.css";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/SidebarSlice";

function Header() {
  const dispatch = useDispatch();
  const toggleSidebarHandler = ()=>{
    dispatch(toggleSidebar());
  }
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
          <img
            src="images/youtube.png"
            alt="youtube-logo"
            className="youtube-logo"
          />
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
        <div>
          <button className="create-button">➕ Create</button>
        </div>
        <img
          src="images/notification-icon.png"
          alt="notification-icon"
          className="notification-icon"
        />
        <img
          src="images/user-icon.jpg"
          alt="user-icon"
          className="user-icon"
        />
      </div>
    </div>
  );
}

export default Header;
