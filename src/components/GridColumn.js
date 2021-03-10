import React from "react";
import "./grid.css";

export default function GridColumn(props) {
  const row = props.rowIndex;
  const col = props.colIndex;
  const grid = props.grid;
  const isBomb = props.isBomb;
  const color=(isBomb && grid[row][col]===1) && "#f7051d"
  return (
    <div
      className="mydiv"
      onClick={(event) => props.clickHandler(event, isBomb, row, col)}
      style={{backgroundColor:color}}
    ></div>
  );
}
