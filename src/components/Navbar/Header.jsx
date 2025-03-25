import React, { useContext, useState } from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../Redux/Reducers/SidebarSlice";
import { ThemeContext } from "../../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";

// React Icons
import { FiMenu } from "react-icons/fi";
import {
  FaYoutube,
  FaSearch,
  FaMicrophone,
  FaMoon,
  FaSun,
  FaPlus,
  FaBell,
  FaUser,
} from "react-icons/fa";

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
  // 
  // 


  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/search/${searchQuery}`);
    }
  };

  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="header-container">
      {/* Left Section: Sidebar Toggle & Logo */}
      <div className="flex">
        <FiMenu
          className="hamburger-menu icon"
          size={30}
          onClick={toggleSidebarHandler}
        />
        <div className="flex">
          <Link to="/">
            <FaYoutube className="youtube-logo" color="red" size={36} />
          </Link>
          <h3>Youtube</h3>
        </div>
      </div>

      {/* Middle Section: Search Bar */}
      <div className="search-container">
        <div className="search-input-container">
          <input
            name="search-input"
            type="text"
            className="search-input"
            value={searchQuery}
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            <FaSearch className="search-icon" size={18} />
          </button>
        </div>
        <FaMicrophone className="voice-icon icon" size={24} />
      </div>

      {/* Right Section: Theme Toggle, Create, Notifications, and User */}
      <div className="flex">
        <button className="dark-mode-toggle" onClick={toggleTheme}>
          {theme === "light" ? (
            <FaMoon className="theme-icon" size={28} />
          ) : (
            <FaSun className="theme-icon" size={28} />
          )}
        </button>

        <button className="create-button">
          <FaPlus /> Create
        </button>

        <FaBell className="notification-icon icon" size={30} />

        <button className="user-button" onClick={() => navigate("/signin")}>
          <FaUser className="user-icon icon" size={30} />
        </button>
      </div>
    </div>
  );
}

export default Header;
