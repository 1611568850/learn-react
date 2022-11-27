import React, { Component } from "react";
import "./style.css";
export class NavBar extends Component {
  render() {
    return (
      <div className="navContainer">
        <div className="navContainer">
          <div className="left">{}</div>
          <div className="center">{}</div>
          <div className="right">{}</div>
        </div>
      </div>
    );
  }
}

export default NavBar;
