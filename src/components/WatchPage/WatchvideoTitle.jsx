import React from "react";
import "../../CSS/WatchvideoTitle.css";

function WatchvideoTitle() {
  return (
    <div>
      <span>channelTitle</span>
      <div className="watchvideo-container">
        <div>
          <div className="video-card-details">
            <p>formatViews(viewCount)</p>
            <p>timeAgo(publishedAt)</p>
          </div>
        </div>
        <div className="likes-container">
        <img
          src="images/like-icon.png"
          alt="like-icon"
          className="like-icon"
        />
        <img
          src="images/dislike-icon.png"
          alt="dislike-icon"
          className="like-icon"
        />
        </div>
      </div>
    </div>
  );
}

export default WatchvideoTitle;
