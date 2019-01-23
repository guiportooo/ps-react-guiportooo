import React from "react";
import Proptypes from "prop-types";

const HelloWorld = ({ message }) => <div>Hello {message}</div>;

HelloWorld.propTypes = {
  message: Proptypes.string
};

export default HelloWorld;
