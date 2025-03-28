import React from "react";
import Videocomponent from "../components/Videos-Container/VideoComponent";
import TagsList from "../components/Tags-Container/TagsList";
import "../CSS/Container.css";

function Container() {
  return (
    <div className="main-container">
      <TagsList />
      <Videocomponent />
    </div>
  );
}

export default Container;
