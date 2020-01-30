import React from "react";
import "./styles.css";

export default function Stats(props) {
  let arrMin = Math.min(...props);
  let arrMax = Math.max(...props);
  let arrAvg = props.reduce((a, b) => a + b, 0) / props.length;

  if (props.length !== 0 && props !== 0) {
    return (
      <div class="propsData">
        <h3>{props.join(", ")}</h3>
        <h3>Min: {arrMin}</h3>
        <h3>Max: {arrMax}</h3>
        <h3>Avg: {arrAvg}</h3>
      </div>
    );
  } else {
    return <h3>No Data</h3>;
  }
}
