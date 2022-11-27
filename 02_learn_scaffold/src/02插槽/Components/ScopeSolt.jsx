import React, { Component } from "react";
import "./style.css";

class ScopeSolt extends Component {
  constructor() {
    super();
    this.state = {
      message: ["星际航信", "人间失格", "万里长城"],
    };
  }
  render() {
    const { message } = this.state;
    const { leftSlot, CenterSlot, RightSlot } = this.props;
    return (
      <div className="navContainer">
        <div className="left">{leftSlot(message[0])}</div>
        <div className="center">{CenterSlot}</div>
        <div className="right">{RightSlot}</div>
      </div>
    );
  }
}

export default ScopeSolt;
