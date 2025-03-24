import axios from "axios";

const API_KEY = import.meta.env.VITE_GOOGLE_API;
const BASE_URL = "https://www.googleapis.com/youtube";

export const getHomeVideos = async () => {
  const url = `${BASE_URL}/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular
&maxResults=50&regionCode=IN&
key=${API_KEY}`;

  const response = await axios.get(url);
  return response.data;
};

export const getVideoDetails = async (videoId) => {
  const url = `${BASE_URL}/v3/videos?key=${API_KEY}&part=snippet,contentDetails,statistics&id=${videoId}`;
  const response = await axios.get(url);
  return response.data.items;
};

export const getVideoComments = async (videoId, pageToken) => {
  const url = `${BASE_URL}/v3/commentThreads?key=${API_KEY}&part=snippet,replies&videoId=${videoId}${
    pageToken ? `&pageToken=${pageToken}` : ""
  }`;

  const response = await axios.get(url);
  return response.data;
};

export const getCommentReplies = async (commentId) => {
  const url = `${BASE_URL}/v3/comments?key=${API_KEY}&part=snippet&parentId=${commentId}`;
  try {
    const response = await axios.get(url);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching comment replies:", error);
    return [];
  }
};
