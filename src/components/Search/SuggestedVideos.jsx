import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../../CSS/SuggestedVideos.css";
import { data } from "../data/Api_data";

const SuggestedVideos = () => {
  const [videos, setVideos] = useState(data.items);
  const [searchParams] = useSearchParams();
  const currentVideoId = searchParams.get("v");

//   useEffect(() => {
//     fetchSuggestedVideos();
//   }, [currentVideoId]);

//   const fetchSuggestedVideos = async () => {
//     try {
//       const response = await fetch(
//         `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${currentVideoId}&type=video&key=${import.meta.env.GOOGLE_API_KEY}&maxResults=10`
//       );
//       const data = await response.json();
//       setVideos(data.items);
//     } catch (error) {
//       console.error("Error fetching suggested videos:", error);
//     }
//   };

  return (
    <div className="suggested-container">
      <h2 className="suggested-header">Suggested Videos</h2>
      <div className="suggested-list">
        {videos.map((video) => (
          <div key={video.id.videoId} className="suggested-video">
            <a href={`/watch?v=${video.id.videoId}`} className="video-link">
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="video-thumbnail"
              />
              <div className="video-info">
                <h3 className="video-title">{video.snippet.title}</h3>
                <p className="video-channel">{video.snippet.channelTitle}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedVideos;
