import React from "react";
import "../CSS/Sidebar.css";
import { useSelector } from "react-redux";

function Sidebar() {
  const isSidebarOpen = useSelector((store) => store.sidebar.isSidebarOpen);

  if(!isSidebarOpen){
    return null;
  }
  return (
    <div className="sidebar">
      <div className="sidebar-component">
        <h6>
            Home
        </h6>
        <h6>
            Shorts
        </h6>
        <h6>
            Video
        </h6>
        <h6>
            Live
        </h6>
      </div>

      <div className="sidebar-component">
        <h6>Subscriptions</h6>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>

      <div className="sidebar-component">
        <h6>Watch Later</h6>
        <ul>
          <li>Video 1</li>
          <li>Video 2</li>
          <li>Video 3</li>
          <li>Video 4</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
