import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.scss';

interface GridProps {
  onStartGame: () => void;
}

interface CountdownTimerProps {
  duration: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ duration }) => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState<number>(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTimeLeft => {
        if (prevTimeLeft <= 0) {
          clearInterval(interval);
          navigate('/leaderboard');
          return 0;
        }
        return prevTimeLeft - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return <div>{formatTime(timeLeft)}</div>;
};

const GameGrid: React.FC<GridProps> = ({ onStartGame }) => {
  const numRows = 9;
  const numCols = 10;
  const [targetCell, setTargetCell] = useState<{ row: number; col: number }>({ row: 0, col: 0 });

  const handleCellClick = (row: number, col: number) => {
    if (targetCell.row === row && targetCell.col === col) {
      const newTargetCell = getRandomCell();
      setTargetCell(newTargetCell);
      onStartGame();
    }
  };

  const getRandomCell = () => {
    const randomRow = Math.floor(Math.random() * numRows);
    const randomCol = Math.floor(Math.random() * numCols);
    return { row: randomRow, col: randomCol };
  };

  const gridCells = [];

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const isTarget = targetCell && targetCell.row === row && targetCell.col === col;
      const cellColor = isTarget ? '#000' : '#fff';
      gridCells.push(
        <div
          key={`${row}-${col}`}
          className="grid-cell"
          style={{ backgroundColor: cellColor }}
          onClick={() => handleCellClick(row, col)}
        ></div>,
      );
    }
  }

  return (
    <>
      <div className="app">
        <h1>Aim Trainer</h1>
        <CountdownTimer duration={60000} />
      </div>
      <div className="grid-container">{gridCells}</div>
    </>
  );
};

export default GameGrid;
