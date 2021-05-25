import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

export default function Comment({ name, email, body }) {
  return (
    <>
      <div>
        <ul>
          <h4 className="Name">Name: {name}</h4>
          <p className="Email">Email: {email}</p>
          <p className="Comment">Comment: {body}</p>
        </ul>
      </div>
    </>
  );
}

Comment.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  body: PropTypes.string
};
