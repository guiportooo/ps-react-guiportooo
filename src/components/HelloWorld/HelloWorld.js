import React from "react";
import Proptypes from "prop-types";

/** A super lame component that says Hello with a custom message. */
const HelloWorld = ({ message }) => <div>Hello {message}</div>;

HelloWorld.propTypes = {
  /** Message to display */
  message: Proptypes.string
};

HelloWorld.defaultProps = {
  message: "World"
};
export default HelloWorld;
