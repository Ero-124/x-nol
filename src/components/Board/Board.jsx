import React from "react";
import Square from "../Square/Square";
import "./Board.css";
const Board = ({ squares, click }) => {
  return (
    <div className="board">
      {squares.map((square, index) => (
        <Square value={square} onClick={() => click(index)} key={index} />
      ))}
    </div>
  );
};

export default Board;
