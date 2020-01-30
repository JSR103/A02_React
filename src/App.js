import React, { Component } from "react";
import "./styles.css";
import Clock from "./Clock.js";
import Stats from "./Stats.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.tick();
    this.timerID = setInterval(() => this.tick(), 10000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    const url =
      "https://www.random.org/integers/?num=10&min=1&max=100&col=1&base=10&format=plain&rnd=new";
    fetch(url)
      .then(response => response.text())
      .then(response =>
        response
          .split("\n")
          .filter(item => item.length > 0)
          .map(Number)
      )
      .then(response => {
        this.setState({ data: response });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Assignment 2 - Components</h1>
        <Clock date={new Date()} />
        {Stats(this.state.data)}
      </div>
    );
  }
}
