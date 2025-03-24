import React from "react";
import { Link } from "react-router-dom";
import "../CSS/MiniCard.css";

// Function to format video duration from ISO8601 to "MM:SS"
const formatDuration = (isoDuration) => {
  const match = isoDuration.match(/PT(\d+M)?(\d+S)?/);
  const minutes = match[1] ? parseInt(match[1]) : 0;
  const seconds = match[2] ? parseInt(match[2]) : 0;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

// Function to format view count
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
  // Destructuring the necessary data from item
  const {
    id,
    snippet: { title, channelTitle, thumbnails },
    statistics: { viewCount },
    contentDetails: { duration }, // Assuming duration is inside contentDetails
  } = item;

  return (
    <Link to={`/watch/?v=${id}`} className="mini-card">
      <div className="mini-card-container">
        {/* Thumbnail Section */}
        <div className="thumbnail-container">
          <span className="video-duration">{formatDuration(duration)}</span>
          <img src={thumbnails.medium.url} className="video-thumbnail" alt={title} />
        </div>

        {/* Video Details */}
        <div className="video-info">
          <h5 className="video-title">{truncateTitle(title)}</h5>
          <div className="channel-details">
            <h5 className="channel-name">{channelTitle}</h5>
            <div className="video-stats">
              <h5>{formatViews(viewCount)}</h5>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MiniCard;
