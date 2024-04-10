import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CountdownTimerProps {
  duration: number;
}

function CountdownTimer({ duration }: CountdownTimerProps) {
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
}

export default CountdownTimer;
