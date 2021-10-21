import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
const [value, setValue] = useState(props.value);

  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

function Board() {
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5], // ["o", "x", "o"]
      [6, 7, 8], // ["x", "o", "x"]
      [0, 3, 6], // ["x", "x", "x"]
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]; // "x"
      }
    }
    return null;
  };
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsPlaying, setXIsPlaying] = useState(true);
  const winner = calculateWinner(squares);

  const renderSquare = function(i) {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  }
 
  const handleClick = (i) => {
    const squares_copy = squares.slice();
    squares_copy[i] = xIsPlaying ? "X" : "O";
    setSquares(squares_copy);
    setXIsPlaying(!xIsPlaying);
  }

  let status = 'Next player: ' + (xIsPlaying ? "X" : "0");
  if (winner) {
    status = "Winner is " + winner;
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

// ========================================

ReactDOM.render(
<Game />,
document.getElementById('root')
);
