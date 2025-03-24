import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../Redux/Reducers/SidebarSlice";
import { useSearchParams } from "react-router-dom";
import "../CSS/Watch.css";
import WatchvideoTitle from "../components/WatchvideoTitle";
import MiniCard from "../components/MiniCard";
import PopularVideosResponse from '../data/MostPopular.json'
import Comments from "../components/Comments-Container/Comments";

const Watch = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const currentVideoId = searchParams.get("v");
  const [videoData, setVideoData] = useState(PopularVideosResponse.items);

  // useEffect(() => {
  //   dispatch(closeSidebar());
    // fetchVideoDetails();
  // }, [videoId]);

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
            src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <WatchvideoTitle details={currentVideoId}/>
          {/* {details && <VideoDetails details={details} />} */}
          <Comments videoId={currentVideoId} />
        </div>
        <div className="suggested-videos">
          {videoData.map((item,id) => (
            <MiniCard key={id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watch;
