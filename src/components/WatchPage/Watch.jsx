import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../../utils/SidebarSlice";
import { useSearchParams } from "react-router-dom";
import "../../CSS/Watch.css";
import WatchvideoTitle from "./WatchvideoTitle";

const Watch = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [videoData, setVideoData] = useState(null);

  // useEffect(() => {
  //   dispatch(closeSidebar());
  //   fetchVideoDetails();
  // }, []);

  // const fetchVideoDetails = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=YOUR_GOOGLE_API_KEY`
  //     );
  //     const data = await response.json();
  //     setVideoData(data?.items[0]);
  //   } catch (error) {
  //     console.error("Error fetching video details:", error);
  //   }
  // };

  return (
    <div className="main-watch-container">
    <div className="watch-container">
      <div className="video-section">
        <iframe
          className="video-frame"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {/* {videoData && <h2 className="video-title">{videoData?.snippet?.title}</h2>} */}
        <WatchvideoTitle/>
      </div>
    </div>
    {/* <SuggestedVideos/> */}
    </div>
  );
};

export default Watch;
