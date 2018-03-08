import React, { Component } from "react";
import Player from "./components/Player";
import Filters from "./components/Filters";
import TrackList from "./components/TrackList";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="details-hook">
          <div className="controls-container">
            <Player />
          </div>
        </div>
        <div className="nav-hook">
          <Filters />
        </div>
        <div className="wrap-all">
          <div className="music-container">
            <TrackList />
          </div>
        </div>
        <div className="footer-hook">
          <div className="footer-wrap" />
        </div>
      </div>
    );
  }
}

export default App;
