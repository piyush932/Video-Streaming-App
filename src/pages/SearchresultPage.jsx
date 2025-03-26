import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../CSS/SearchresultPage.css";
import SearchresultCard from "../components/SearchResultCard/SearchresultCard";
import Loading from "../components/Loading/Loading";

const SearchResultsPage = () => {
  const { query } = useParams();
  const [videos, setVideos] = useState([]);
  const API_KEY = import.meta.env.VITE_GOOGLE_API;
  const YOUTUBE_SEARCH_API = `${
    import.meta.env.VITE_YOUTUBE_SEARCH_API
  }=${query}&maxResults=10&key=${API_KEY}&regionCode=IN`;

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(YOUTUBE_SEARCH_API);
        if (!response.ok) {
          throw new Error("Failed to fetch search results");
        }
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="search-results-container">
      <h2>
        Search results for: <span>{query}</span>
      </h2>
      <div className="search-video-list">
        {videos.length > 0 ? (
          videos.map((video, id) => (
            <Link to={`/watch/?v=${video.id.videoId}`} key={id}>
              <SearchresultCard info={video} />
            </Link>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
