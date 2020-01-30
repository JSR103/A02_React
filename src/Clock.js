import React, { Component } from "react";
import "./styles.css";

export default class Clock extends Component {
  render() {
    return (
      <div>
        <h2>
          {this.props.date.toLocaleTimeString("en-US", { hour12: false })}
        </h2>
      </div>
    );
  }
}
