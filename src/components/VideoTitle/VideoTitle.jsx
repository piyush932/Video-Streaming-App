import React, { useEffect, useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { FaShare, FaYoutube } from "react-icons/fa";
import "./VideoTitle.css";
import { getVideoDetails } from "../../utils/api";

function WatchvideoTitle({ details }) {
  const [showDescription, setShowDescription] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userReaction, setUserReaction] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchVideoData(details);
    loadLikesFromStorage(details);
  }, [details]);

  const fetchVideoData = async (videoId) => {
    const url = `${import.meta.env.VITE_BASE_URL}/videos?key=${
      import.meta.env.VITE_GOOGLE_API
    }&part=snippet,contentDetails,statistics&id=${videoId}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setVideoData(data.items[0]);
    } catch (error) {
      console.error("Error fetching video details:", error);
      throw error;
    }
  };

  const loadLikesFromStorage = (videoId) => {
    const storedData = JSON.parse(localStorage.getItem(`video-${videoId}`));
    if (storedData) {
      setLikes(storedData.likes);
      setDislikes(storedData.dislikes);
      setUserReaction(storedData.reaction);
    }
  };

  const handleReaction = (reaction) => {
    if (reaction === "like") {
      if (userReaction === "like") {
        setLikes(likes - 1);
        setUserReaction(null);
      } else {
        setLikes(likes + 1);
        if (userReaction === "dislike") {
          setDislikes(dislikes - 1);
        }
        setUserReaction("like");
      }
    } else if (reaction === "dislike") {
      if (userReaction === "dislike") {
        setDislikes(dislikes - 1);
        setUserReaction(null);
      } else {
        setDislikes(dislikes + 1);
        if (userReaction === "like") {
          setLikes(likes - 1);
        }
        setUserReaction("dislike");
      }
    }
    saveToLocalStorage(reaction);
  };

  const saveToLocalStorage = (reaction) => {
    const updatedData = {
      likes:
        reaction === "like"
          ? likes + (userReaction === "like" ? -1 : 1)
          : likes,
      dislikes:
        reaction === "dislike"
          ? dislikes + (userReaction === "dislike" ? -1 : 1)
          : dislikes,
      reaction: reaction === userReaction ? null : reaction,
    };
    localStorage.setItem(`video-${details}`, JSON.stringify(updatedData));
  };

  return (
    <div className="watchvideo-container ">
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h1 className="video-title">{videoData?.snippet?.title}</h1>
      <p>{videoData?.statistics?.viewCount} views</p>
      <p>{new Date(videoData?.snippet?.publishedAt).toDateString()}</p>
      <div className="video-info">
        <div className="channel-info">
          <h2 className="channel-name">{videoData?.snippet?.channelTitle}</h2>
        </div>
        <div className="actions">
          <div className="like-section" onClick={() => handleReaction("like")}>
            <BiLike color={userReaction === "like" ? "blue" : "black"} />
            <span className="likes">{likes}</span>
          </div>
          <div
            className="like-section"
            onClick={() => handleReaction("dislike")}
          >
            <BiDislike color={userReaction === "dislike" ? "red" : "black"} />
            <span className="dislikes">{dislikes}</span>
          </div>
          <div className="share-section">
            <FaShare />
            <span>Share</span>
          </div>
          <div className="youtube-section">
            <FaYoutube color="red" size={36} />
            <span>Subscribe</span>
          </div>
        </div>
      </div>
      <div className="description">
        <p className={`description-text ${showDescription ? "" : "truncate"}`}>
          {videoData?.snippet?.description}
        </p>
        <button
          className="toggle-btn"
          onClick={() => setShowDescription(!showDescription)}
        >
          {showDescription ? "...less" : "...more"}
        </button>
      </div>
    </div>
  );
}

export default WatchvideoTitle;
