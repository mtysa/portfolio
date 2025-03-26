import React, { useState, useEffect, useRef } from "react";
import "./snakegame.css";

const SnakeGame = ({ onGameOver, touchDirection }) => {
  const [snake, setSnake] = useState([[0, 0]]);
  const [food, setFood] = useState([5, 5]);
  const [direction, setDirection] = useState("ArrowRight");
  const [running, setRunning] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (touchDirection) setDirection(touchDirection);
  }, [touchDirection]);

  useEffect(() => {
    intervalRef.current = setInterval(moveSnake, 200);
    return () => clearInterval(intervalRef.current);
  }, [snake, direction]);

  const moveSnake = () => {
    if (!running) return;
    const head = snake[snake.length - 1];
    const newHead = [...head];

    if (direction === "ArrowUp") newHead[1] -= 1;
    if (direction === "ArrowDown") newHead[1] += 1;
    if (direction === "ArrowLeft") newHead[0] -= 1;
    if (direction === "ArrowRight") newHead[0] += 1;

    // Check wall collision
    if (
      newHead[0] < 0 ||
      newHead[1] < 0 ||
      newHead[0] >= 10 ||
      newHead[1] >= 10 ||
      snake.some(([x, y]) => x === newHead[0] && y === newHead[1])
    ) {
      setRunning(false);
      onGameOver();
      return;
    }

    const newSnake = [...snake, newHead];
    if (newHead[0] === food[0] && newHead[1] === food[1]) {
      setFood([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]);
    } else {
      newSnake.shift();
    }

    setSnake(newSnake);
  };

  return (
    <div className="snake-game">
      <div className="grid">
        {[...Array(100)].map((_, idx) => {
          const x = idx % 10;
          const y = Math.floor(idx / 10);
          const isSnake = snake.some(([sx, sy]) => sx === x && sy === y);
          const isFood = food[0] === x && food[1] === y;
          return (
            <div
              key={idx}
              className={`cell ${isSnake ? "snake" : ""} ${
                isFood ? "food" : ""
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default SnakeGame;
