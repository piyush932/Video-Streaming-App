import { useState, useEffect } from "react";
import CommentBody from "./CommentBody";
import { getCommentReplies } from "../../utils/api";
import { parseReplies } from "../../utils/parseData";
import "../../CSS/CommentCard.css"; 
import repliesResponse from '../../data/CommentListResponse.json';

const repliesData = parseReplies(repliesResponse.items);

function Commentcard({ comment }) {
  const [replies, setReplies] = useState(repliesData);

  // useEffect(() => {
  //   fetchReplies();
  // }, [comment]);

  // const fetchReplies = async () => {
  //   try {
  //     if (comment.commentRepliesCount) {
  //       const repliesResponse = await getCommentReplies(comment.commentId);
  //       const repliesData = parseReplies(repliesResponse);
  //       setReplies(repliesData);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching the comment replies");
  //   }
  // };

  return (
    <div className="comment-card">
      <CommentBody item={comment} />
      <div className="replies-container">
        {replies.map((item, index) => (
          <div key={index} className="reply-item">
            <CommentBody item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Commentcard;
