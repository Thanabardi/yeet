import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Play = () => {
  const playerScore = null
  const location = useLocation()
  const [score, setScore] = useState()
  // console.log(location.state)

  useEffect(() => {
    if (playerScore === null) {
      const interval = setInterval(() => {
      setScore(randomNum(1000, 9999))
      }, 100);
      return () => clearInterval(interval);
    } else {
      setScore(playerScore)
    }
  }, []);

  useEffect(() => {
    if (playerScore != null) {
      const timer = setTimeout(() => {
        return window.location = "/yeet"
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <div>
      <h1>Play</h1>
      <h1>{location.state}</h1>
      { playerScore === null ? <h1>{ score }</h1> : <h1>{ playerScore }</h1> }
    </div>
  );
}
export default Play;