import React, { useEffect } from "react";

import PropTypes from "prop-types";
import Comment from "../Comment/index";
import { useComments } from "../../contexts/CommentsContext";

export default function Comments({ postId, showComments }) {
  const { comments, setComments, fetchComments } = useComments();

  useEffect(() => {
    if (showComments) {
      fetchComments(postId);
    } else {
      setComments([]);
    }
  }, [postId, showComments]);

  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
}

Comments.propTypes = {
  id: PropTypes.number,
  showComments: PropTypes.bool,
};
