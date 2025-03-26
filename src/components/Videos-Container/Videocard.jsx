import React from "react";
import "./Videocard.css";
import { truncateTitle, formatViews, timeAgo } from "../../utils/functions";
import { Link } from "react-router-dom";

function Videocard({ info }) {
  const {
    channelInfo,
    videoAge,
    videoDescription,
    videoDuration,
    videoId,
    videoLikes,
    videoThumbnail,
    videoTitle,
    videoViews,
  } = info;
  // const {id,image,name,subCount} = channelInfo;

  return (
    <div className="video-container">
      <img alt="thumbnail" src={videoThumbnail} className="thumbnail" />
      <div className="main-title">
        <img
          alt="channel-logo"
          src={channelInfo.image}
          className="channel-logo"
        />
        <div className="title-card">
          <h6>{truncateTitle(videoTitle)}</h6>
          <div className="flex video-details">
            <span>{channelInfo.name}</span>
            <div className="video-card-details">
              <span>{formatViews(videoViews)}</span>
              <span>{timeAgo(videoAge)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videocard;
