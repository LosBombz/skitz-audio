import React, { Component } from "react";

class TrackList extends Component {
  render() {
    return (
      <ul className="music-list">
        <li className="track">
          <a className="track-link" />
          <h2>Tommy doyles live set - 4/27/2012</h2>
        </li>
        <li className="track">
          <a className="track-link" />
          <h2>After Hours</h2>
        </li>
      </ul>
    );
  }
}

export default TrackList;
