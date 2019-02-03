import React from "react";
import PropTypes from "prop-types";
import { getWidthAsPercentOfTotalWidth } from "../../utils/percentUtils";

class ProgressBar extends React.Component {
  static propTypes = {
    /** Percent of progress completed */
    percent: PropTypes.number.isRequired,
    /** Bar width */
    width: PropTypes.number.isRequired,
    /** Bar height */
    height: PropTypes.number
  };

  static defaultProps = {
    height: 5
  };

  getColor = () => {
    const { percent } = this.props;
    if (percent === 100) return "green";
    return percent > 50 ? "lightgreen" : "red";
  };

  getWidthAsPercentOfTotalWidth = () => {
    const { width, percent } = this.props;
    return getWidthAsPercentOfTotalWidth(percent, width);
  };

  render() {
    const { width, height } = this.props;
    return (
      <div style={{ border: "solid 1px lightgray", width }}>
        <div
          style={{
            width: this.getWidthAsPercentOfTotalWidth(),
            height,
            backgroundColor: this.getColor()
          }}
        />
      </div>
    );
  }
}

export default ProgressBar;
