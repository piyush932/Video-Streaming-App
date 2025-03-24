import { useState, useEffect } from "react";
import Commentcard from "./Commentcard";
import { parseComments } from "../../utils/parseData";
import "../../CSS/Comments.css";
import commentsResponse from '../../data/CommentsThreadList.json';
// import { getVideoComments } from "../utils/api";

const items = commentsResponse.items;
const commentsData = parseComments(items);

function Comments({ videoId }) {
  const [commentList, setCommentList] = useState({ comments: commentsData, nextPageToken: null });

//   useEffect(() => {
//     const fetchComments = async () => {
//       try {
        // Reset comments when videoId changes
//         setCommentList({ comments: [], nextPageToken: null });

//         const commentsResponse = await getVideoComments(videoId, null); // Fetch fresh comments
//         const items = commentsResponse.items;
//         const commentsData = parseComments(items);

//         setCommentList({
//           comments: commentsData,
//           nextPageToken: commentsResponse.nextPageToken,
//         });
//       } catch (error) {
//         console.error("Error fetching the comments");
//       }
//     };

//     if (videoId) {
//       fetchComments();
//     }
//   }, [videoId]);

  return (
    <div className="comments-container">
      <h5 className="comments-heading">Comments</h5>
      {commentList.comments.map((comment, index) => (
        <Commentcard key={index} comment={comment} />
      ))}
      <button className="load-more-btn">
        Show more...
      </button>
    </div>
  );
}

export default Comments;
