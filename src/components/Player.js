import React, { Component } from "react";
import Controls from "./Controls";

class Player extends Component {
  render() {
    return (
      <Controls loading="10" progress="5" duration="1000" playing={true} />
    );
  }
}

export default Player;
