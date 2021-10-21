import React from 'react';
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
  const [squares, setSquares] = useState(Array(9).fill(null));

  const renderSquare = function(i) {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
}
 
const handleClick = (i) => {
  const squares_copy = squares.slice();
  squares_copy[i] = "X";
  setSquares(squares_copy);
}

const status = 'Next player: X';

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