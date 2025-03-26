import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Videocard from "./Videocard";
import "./VideoComponent.css";
import ShimmerUI from "../Shimmer-UI/ShimmerUI";
import { fetchVideosWithChannels } from "../../utils/videoDetailsHelper";

// Importing all JSON response lists
import PopularVideosResponse from "../../data/MostPopularVideos2.json";
import MusicResponseList from "../../data/MusicListResponse.json";
import CourseResponseList from "../../data/CourseResponse.json";
import FashionResponseList from "../../data/FashionResponse.json";
import GamingResponseList from "../../data/GamingResponse.json";
import MoviesResponseList from "../../data/MoviesResponse.json";
import NewsResponseList from "../../data/NewsResponse.json";
import SportsResponseList from "../../data/SportResponse.json";
// import PopularVideosResponse from '../../data/MostPopular.json'

function Videocomponent() {
  const [searchParams] = useSearchParams();
  const currentTag = searchParams.get("tag") || "popular";
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let selectedVideos = [];

    switch (currentTag.toLowerCase()) {
      case "music":
        selectedVideos = MusicResponseList.items;
        break;
      case "course":
        selectedVideos = CourseResponseList.items;
        break;
      case "fashion":
        selectedVideos = FashionResponseList.items;
        break;
      case "gaming":
        selectedVideos = GamingResponseList.items;
        break;
      case "movies":
        selectedVideos = MoviesResponseList.items;
        break;
      case "news":
        selectedVideos = NewsResponseList.items;
        break;
      case "sports":
        selectedVideos = SportsResponseList.items;
        break;
      case "popular":
      default:
        selectedVideos = PopularVideosResponse.items;
        break;
    }

    setLoading(true);
    const timer = setTimeout(async () => {
      // setVideos(selectedVideos);
      const data = await fetchVideosWithChannels(selectedVideos);
      setVideos(data);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentTag]);

  return loading ? (
    <ShimmerUI />
  ) : (
    <div className="video-component">
      <div className="video-list">
        {videos.map((item) => (
          <Link to={`/watch?v=${item.videoId}`} key={item.videoId}>
            <Videocard info={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Videocomponent;

//In case of using API
// useEffect(() => {
//     getVideos();
// }, []);

// const getVideos = () => {
// try {
//   const response = await fetch(import.meta.env.VITE_YOUTUBE_API);

//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }

//   const data = await response.json();
//   console.log(data);
// } catch (error) {
//   console.error("Failed to fetch videos:", error);
// }
//   setVideos(PopularVideosResponse.items);
// };
