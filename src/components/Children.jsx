import React from "react";
import PropTypes from "prop-types";
import "../App.css";

function Children({ text1 }) {
  return (
    <div className="children-banner">
      <p className="children-text">{text1}</p>
    </div>
  );
}

Children.propTypes = {
  text1: PropTypes.string.isRequired,
};

export default Children;

