import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../CSS/Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="flex">
        <img
          src="../../public/images/hamburger-menu.png"
          alt="hamburger-menu"
          className="hamburger-menu"
        />
        <div className="flex youtube-container">
          <img
            src="../../public/images/youtube.png"
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
          src="../../public/images/voice-icon.jpg"
          alt="voice-icon"
          className="voice-icon"
        />
      </div>
      <div className="flex">
        <div>
          <button className="create-button">➕ Create</button>
        </div>
        <img
          src="../../public/images/notification-icon.png"
          alt="notification-icon"
          className="notification-icon"
        />
        <img
          src="../../public/images/user-icon.jpg"
          alt="user-icon"
          className="user-icon"
        />
      </div>
    </div>
  );
}

export default Header;
