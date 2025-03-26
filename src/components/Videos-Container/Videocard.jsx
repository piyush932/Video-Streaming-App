import React from "react";
import "./Videocard.css";
import { truncateTitle, formatViews, timeAgo } from "../../utils/functions";
import { Link } from "react-router-dom";

function Videocard({ info }) {
  const { statistics = {}, snippet } = info;
  const { title, thumbnails, channelTitle, publishedAt, channelId } = snippet;
  const { viewCount } =
    statistics || Math.floor(Math.random() * (1000000 - 1000) + 1000);

  return (
    <div className="video-container">
      <img alt="thumbnail" src={thumbnails.medium.url} className="thumbnail" />
      <div className="main-title">
        <Link to={`channel/${channelId}`}>
          <img
            alt="channel-logo"
            src={thumbnails.high.url}
            className="channel-logo"
          />
        </Link>
        <div className="title-card">
          <h6>{truncateTitle(title)}</h6>
          <div className="flex video-details">
            <span>{channelTitle}</span>
            <div className="video-card-details">
              <span>{formatViews(viewCount)}</span>
              <span>{timeAgo(publishedAt)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videocard;
