import React from "react";
import { BiLike } from "react-icons/bi";
import "./CommentBody.css"; 

function CommentBody({ item }) {
  return (
    <div className="comment-container">
      <img
        src={item.authorProfile}
        className="author-profile"
        alt="Author Profile"
      />
      <div className="comment-content">
        <h5 className="author-name">{item.authorName}</h5>
        <h6 className="comment-text">{item.commentText}</h6>
        <div className="comment-actions">
          <BiLike className="like-icon" />
          <span>{item.commentLikes}</span>
        </div>
      </div>
    </div>
  );
}

export default CommentBody;
