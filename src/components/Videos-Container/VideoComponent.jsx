import React, { useState } from "react";
import Videocard from "./Videocard";
import "./VideoComponent.css";
import { Link } from "react-router-dom";
import ShimmerUI from "../Shimmer-UI/ShimmerUI";
import PopularVideosResponse from "../../data/MostPopularVideos2.json";
// import PopularVideosResponse from '../../data/MostPopular.json'

function Videocomponent() {
  const [videos, setVideos] = useState(PopularVideosResponse.items);
  return videos.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="video-component">
      <div className="video-list">
        {videos.map((item) => (
          <Link to={"/watch?v=" + item.id} key={item.id}>
            <Videocard key={item.id} info={item} />
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
