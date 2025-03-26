import React from "react";
import "./SearchresultCard.css";
import {timeAgo,truncateText} from '../../utils/functions';

const SearchVideoCard = ({ info }) => {
  const { snippet } = info;
  const { title, thumbnails, channelTitle, description, publishedAt } = snippet;

  return (
    <div className="search-video-card">
      <div className="thumbnail-container">
        <img src={thumbnails.medium.url} alt={title} className="video-thumbnail" />
      </div>
      <div className="video-info">
        <h4 className="video-title">{truncateText(title, 60)}</h4>
        <p className="video-channel">{channelTitle}</p>
        <p className="video-description">{truncateText(description)}</p>
        <p className="video-time">{timeAgo(publishedAt)}</p>
      </div>
    </div>
  );
};

export default SearchVideoCard;
