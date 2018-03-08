import React, { Component } from "react";

class Filters extends Component {
  render() {
    return (
      <ul className="nav-list">
        <li>
          <a href="#">Featured</a>
        </li>
        <li>
          <a href="#/music">Live Sets</a>
        </li>
        <li>
          <a href="#/music">Mix Tapes</a>
        </li>
      </ul>
    );
  }
}

export default Filters;
