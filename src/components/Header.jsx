import React, { useContext, useEffect, useState } from "react";
import "../CSS/Header.css";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/SidebarSlice";
import { ThemeContext } from "../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(()=>{
  //   const timer = setTimeout(()=>getSearchSuggestions(),300);
    
  //   return ()=>{
  //     clearTimeout(timer);
  //   }
  // },[searchQuery]);

  // const getSearchSuggestions = async () => {
  //   try {
  //     const response = await fetch(
  //       `${import.meta.env.VITE_YOUTUBE_SEARCH_API}?part=snippet&q=${searchQuery}&key=${import.meta.env.VITE_GOOGLE_API}&type=video`
  //     );
  
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error("Error fetching suggestions:", error);
  //   }
  // };

  const handleSearch = ()=>{
    if (searchQuery.trim() !== "") {
      navigate(`/search/${searchQuery}`);
    }
  }
  

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
          <Link href="/">
            <img
              src="images/youtube.png"
              alt="youtube-logo"
              className="youtube-logo"
            />
          </Link>
          <h2>Youtube</h2>
        </div>
      </div>
      <div className="search-container">
        <div className="search-input-container">
          <input
            type="text"
            className="search-input"
            value={searchQuery}
            placeholder="Search"
            onChange={(e)=>setSearchQuery(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>🔍</button>
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
