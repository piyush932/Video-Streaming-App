import React from "react";
import "../../CSS/SearchresultCard.css";

function timeAgo(isoString) {
  const time = new Date(isoString);
  const now = new Date();
  const diff = Math.floor((now - time) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(diff / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
    }
  }
  return "just now";
}

function truncateText(text, maxLength = 80) {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}

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
