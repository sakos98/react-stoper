import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import styles from '../Timer/Timer.module.scss';

function Timer() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 3);
      }, 1); // Increase by 10 milliseconds
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = timeInMs => {
    const hours = Math.floor((timeInMs / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeInMs / (1000 * 60)) % 60);
    const seconds = Math.floor((timeInMs / 1000) % 60);
    const milliseconds = Math.floor(timeInMs % 1000);
  
    return `${hours.toString().padStart(2, '0')}:
            ${minutes.toString().padStart(2, '0')}:
            ${seconds.toString().padStart(2, '0')}.
            ${milliseconds.toString().padStart(3, '0')}`;
  };

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div className={styles.wrapperStopper}>
      <h1>STOPER</h1>
      <p>{formatTime(time)}</p>
      <div>
        <Button onClick={handleStart}>Start</Button>
        <Button onClick={handleStop}>Stop</Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </div>
  );
}

export default Timer;