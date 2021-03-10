import React from "react";
import GridColumn from "./GridColumn";
import './grid.css'

export default function GridRow(props) {
  return (
    <div className="divcontainer">
      {props.row.map((value, index) => (
        <GridColumn
          key={index}
          rowIndex={props.rowIndex}
          colIndex={index}
          grid={props.grid}
          clickHandler={props.clickHandler}
          isBomb={props.isBomb}
        />
      ))}
    </div>
  );
}
