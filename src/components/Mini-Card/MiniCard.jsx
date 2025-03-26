import React from "react";
import { Link } from "react-router-dom";
import "./MiniCard.css";
import { formatViews, truncateTitle,formatVideoDuration } from "../../utils/functions";

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
          {/* <div className="minicard-video-duration">{formatVideoDuration(duration)}</div> */}
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
