import PropTypes from "prop-types";
import Comments from "../Comments/index";
import React, { useState } from "react";
import { CommentsProvider } from "../../contexts/CommentsContext";

export default function PostView({ id, title, body }) {
  const [showComments, setShowComments] = useState(false);

  return (
    <div style={{ textAlign: "left" }}>
      <h4>Title: {title}</h4>
      <p>Content: {body}</p>
      <button
        onClick={() => {
          setShowComments(!showComments);
        }}
      >
        Toggle comments
      </button>
      <CommentsProvider>
        <Comments showComments={showComments} postId={id} />
      </CommentsProvider>
    </div>
  );
}

PostView.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
};
