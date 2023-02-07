import React, { useState } from "react";
import { calcucalteWinner } from "../../helper";
import Board from "../Board/Board";
import Confetti from "../Confetti/Confetti";
import "./Game.css";
import { motion } from "framer-motion";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calcucalteWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  const startNewGame = () => {
    return (
      <button className="start__btn" onClick={handleReset}>
        Играть заново
      </button>
    );
  };

  return (
    <div className="wrapper">
      {startNewGame()}
      {winner ? (
        <>
          <Confetti />
        </>
      ) : (
        <motion.div
          className="box"
          animate={{
            scale: [0, 1, 1, 1, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 1, 1, 1, 1],
            repeat: false,
          }}
        >
          <Board squares={board} click={handleClick} />
        </motion.div>
      )}
      <p className="game__info">
        {winner ? (
          "Победитель " + winner
        ) : board.every((square) => square !== null) ? (
          <div className="endGame">Игра закончена ничью</div>
        ) : (
          "Сейчас ходит " + (xIsNext ? "X" : "O")
        )}
      </p>
    </div>
  );
};

export default Game;
