import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="details-hook">
          <div className="controls-container">
            <div className="controls">
              <a href="#/" class="logo">
                s
              </a>
              <a id="playBtn" class="play-btn" href="#">
                !
              </a>
              <div class="title-container">
                <h2 class="title">Title</h2>
                <span id="duration">-- : -- / -- : --</span>
                <div class="tracking-container">
                  <div id="loadingBar" class="loading-bar">
                    ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
                  </div>
                  <div id="progressBar" class="progress-bar">
                    ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-hook">
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
        </div>
        <div className="wrap-all">
          <div class="music-container">
            <ul className="music-list">
              <li className="track">
                <a className="track-link" href="">
                  <img height="250" width="250" src="/images/mixes/td.jpg" />
                </a>
                <h2>Tommy doyles live set - 4/27/2012</h2>
              </li>
              <li className="track">
                <a className="track-link" href="">
                  <img height="250" width="250" src="/images/mixes/ah.png" />
                </a>
                <h2>After Hours</h2>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-hook">
          <div className="footer-wrap" />
        </div>
      </div>
    );
  }
}

export default App;
