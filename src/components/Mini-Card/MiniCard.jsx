import React from "react";
import { Link } from "react-router-dom";
import "./MiniCard.css";

const formatViews = (viewCount) => {
  if (viewCount >= 1e6) return (viewCount / 1e6).toFixed(1) + "M views";
  if (viewCount >= 1e3) return (viewCount / 1e3).toFixed(1) + "K views";
  return `${viewCount} views`;
};

function truncateTitle(title, maxLength = 30) {
  if (title.length > maxLength) {
    return title.substring(0, maxLength) + "...";
  }
  return title;
}

const MiniCard = ({ item }) => {
  const {
    id,
    snippet: { title, channelTitle, thumbnails },
    statistics: { viewCount },
    contentDetails: { duration },
  } = item;

  return (
    <Link to={`/watch/?v=${id}`} className="mini-card">
      <div className="mini-card-container">
        <div className="thumbnail-container">
          <img
            src={thumbnails.medium.url}
            className="video-thumbnail"
            alt={title}
          />
        </div>

        <div className="video-info">
          <h6>{truncateTitle(title)}</h6>
          <div className="channel-details">
            <p>{channelTitle}</p>
            <p>{formatViews(viewCount)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MiniCard;
