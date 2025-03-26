import React, { useState, useEffect } from "react";
import SnakeGame from "./SnakeGame";
import "./SnakeModal.css";

// const countdownSound = new Audio("/sounds/beep.mp3");

const SnakeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [mobileDirection, setMobileDirection] = useState(null);

  const toggleModal = () => {
    const opening = !isOpen;
    setIsOpen(opening);
    document.body.classList.toggle("game-mode-active", opening);
    if (!opening) {
      setCountdown(null);
      setGameStarted(false);
      setGameOver(false);
      setMobileDirection(null);
    }
  };

  const handleStartGame = () => {
    setCountdown(3);
    setGameStarted(false);
    setGameOver(false);
    setMobileDirection(null);
  };

  const handleGameOver = () => {
    setGameOver(true);
  };

  useEffect(() => {
    let timer;
    if (isOpen && countdown > 0) {
      // countdownSound.play();
      timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
    } else if (isOpen && countdown === 0) {
      setGameStarted(true);
      setCountdown(null);
    }
    return () => clearTimeout(timer);
  }, [isOpen, countdown]);

  const renderTouchControls = () => (
    <div className="touch-controls">
      <button
        className="touch-btn"
        onClick={() => setMobileDirection("ArrowUp")}
      >
        ⬆️
      </button>
      <div className="horizontal-buttons">
        <button
          className="touch-btn"
          onClick={() => setMobileDirection("ArrowLeft")}
        >
          ⬅️
        </button>
        <div className="touch-btn-placeholder"></div>
        <button
          className="touch-btn"
          onClick={() => setMobileDirection("ArrowRight")}
        >
          ➡️
        </button>
      </div>
      <button
        className="touch-btn"
        onClick={() => setMobileDirection("ArrowDown")}
      >
        ⬇️
      </button>
    </div>
  );

  return (
    <div className="snake-modal-wrapper">
      <div className="toggle-label-container">
        <label className="toggle-switch">
          <input type="checkbox" checked={isOpen} onChange={toggleModal} />
          <span className="slider"></span>
        </label>
        <span className="toggle-text">Game Mode</span>
      </div>

      {isOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-center" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-inner centered">
                {countdown !== null ? (
                  <div className="countdown">
                    <span className="countdown-number">{countdown}</span>
                  </div>
                ) : gameStarted && !gameOver ? (
                  <>
                    <SnakeGame
                      onGameOver={handleGameOver}
                      touchDirection={mobileDirection}
                    />
                    {renderTouchControls()}
                  </>
                ) : (
                  <div className="game-over-container">
                    {gameOver && <p className="game-over-message">Game Over</p>}
                    <button
                      className="start-game-btn"
                      onClick={handleStartGame}
                    >
                      {gameOver ? "Restart" : "Start Game"}
                    </button>
                  </div>
                )}
                <button className="quit-game-btn" onClick={toggleModal}>
                  Quit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SnakeModal;
