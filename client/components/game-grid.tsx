import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.scss';

interface GridProps {
  onStartGame: () => void;
}

const GameGrid: React.FC<GridProps> = ({ onStartGame }) => {
  const numRows = 9;
  const numCols = 10;
  const [targetCell, setTargetCell] = useState<{ row: number; col: number }>({ row: 0, col: 0 });
  const [timerStarted, setTimerStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(60000);
  const navigate = useNavigate();

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (timerStarted) {
      interval = setInterval(() => {  
        setTimeLeft(prevTimeLeft => {
          if (prevTimeLeft <= 0) {
            clearInterval(interval as NodeJS.Timeout);
            navigate('/leaderboard');
            return 0;
          }
          return prevTimeLeft - 1000;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerStarted, navigate]);

  const handleCellClick = (row: number, col: number) => {
    if (!timerStarted) {
      setTimerStarted(true);
    }
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

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <>
      <div className="app">
        <h1>Aim Trainer</h1>
        <div>{formatTime(timeLeft)}</div>
      </div>
      <div className="grid-container">{gridCells}</div>
    </>
  );
};

export default GameGrid;
