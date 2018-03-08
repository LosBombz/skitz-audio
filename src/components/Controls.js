import React, { Component } from "react";
import * as helpers from "../helpers";

class Controls extends Component {
  render() {
    const { loading, progress, duration, playing } = this.props;

    return (
      <div className="controls">
        <a href="#/" className="logo">
          🎧
        </a>
        <a className="play-btn">{playing ? `"` : `!`}</a>
        <div className="title-container">
          <h2 className="title">Title</h2>
          <span className="duration">
            {`${duration}` || `-- : -- / -- : --`}
          </span>
          <div className="tracking-container">
            <div
              className="loading-bar"
              style={{ width: `${loading}%` || `60%` }}
            />
            <div
              className="progress-bar"
              style={{ width: `${progress}%` || `40%` }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Controls;
