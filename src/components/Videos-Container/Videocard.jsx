import React from "react";
import "../../CSS/Videocard.css";

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

function formatViews(viewCount) {
  if (viewCount >= 1e9) {
    return (viewCount / 1e9).toFixed(1).replace(/\.0$/, "") + "B views";
  }
  if (viewCount >= 1e6) {
    return (viewCount / 1e6).toFixed(1).replace(/\.0$/, "") + "M views";
  }
  if (viewCount >= 1e3) {
    return (viewCount / 1e3).toFixed(1).replace(/\.0$/, "") + "K views";
  }
  return viewCount + " views";
}

function truncateTitle(title, maxLength = 30) {
  if (title.length > maxLength) {
    return title.substring(0, maxLength) + "...";
  }
  return title;
}

function Videocard({ info }) {
  const { statistics, snippet } = info;
  const { title, thumbnails, channelTitle, publishedAt } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="video-container">
      <img alt="thumbnail" src={thumbnails.medium.url} className="thumbnail" />
      <div className="main-title">
        <img
          alt="channel-logo"
          src={thumbnails.high.url}
          className="channel-logo"
        />
        <div className="title-card">
          <h6>{truncateTitle(title)}</h6>

          <div className="flex video-details">
            <span>{channelTitle}</span>
            <div className="video-card-details">
              <p>{formatViews(viewCount)}</p>
              <p>{timeAgo(publishedAt)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videocard;
