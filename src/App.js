import "./App.css";
import GridRow from "./components/GridRow";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      grid: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
      isBomb: false,
      status: "",
    };
  }
  handleClick = (event, isBomb, row, col) => {
    const copyGrid = this.state.grid;
    if (copyGrid[row][col] === 1) {
      this.setState({
        isBomb: true,
      });
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (copyGrid[i][j] !== 1) copyGrid[i][j] = 2;
        }
      }
      this.setState({
        status: "Game Over",
      });
      event.target.style.backgroundColor = "#f7051d";
    } else if (copyGrid[row][col] === 0) {
      this.setState({
        score: this.state.score + 1,
      });
      event.target.style.backgroundColor = "#09f705";
      copyGrid[row][col] = 2;
      if (this.state.score >= 70) {
        this.setState({ status: "You Have Won" });
        for (let i = 0; i < 9; i++) {
          for (let j = 0; j < 9; j++) {
            copyGrid[i][j] = 2;
          }
        }
      }
    }
    this.setState({
      grid: copyGrid,
    });
  };

  componentDidMount() {
    var limit = 10;
    let lower_bound = 0;
    let upper_bound = 80;
    let bomb = [];
    while (bomb.length < limit) {
      var random_number = Math.floor(
        Math.random() * (upper_bound - lower_bound) + lower_bound
      );
      if (bomb.indexOf(random_number) === -1) {
        bomb.push(random_number);
      }
    }
    const copyGrid = this.state.grid;

    for (let i = 0; i < bomb.length; i++) {
      copyGrid[parseInt(bomb[i] / 9)][bomb[i] % 9] = 1;
    }
    this.setState({
      grid: copyGrid,
    });
  }
  playAgain(){
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <h1>Score : {this.state.score}</h1>
        {this.state.grid.map((value, index) => (
          <GridRow
            key={index}
            row={value}
            rowIndex={index}
            grid={this.state.grid}
            clickHandler={this.handleClick}
            isBomb={this.state.isBomb}
          />
        ))}
        <button className="mybtn" onClick={this.playAgain}>Play again</button>
        {this.state.status.length !== 0 && <h1>{this.state.status}</h1>}
      </div>
    );
  }
}

export default App;
