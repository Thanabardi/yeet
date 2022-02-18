import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import MusicPlayer from './MusicPlayer'

const Play = () => {
  const playerScore = 999
  const ready = false
  const location = useLocation()
  const [score, setScore] = useState()
  let [timeDelay, setTimeDelay] = useState(21)
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

  // useEffect(() => {
  //   if (playerScore != null) {
  //     const timer = setTimeout(() => {
  //       return window.location = "/yeet"
  //     }, 10000);
  //     return () => clearTimeout(timer);
  //   }
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeDelay(timeDelay-=1)
      return () => clearInterval(interval);
    }, 1240);
  }, []);

  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <div>
      <h1>Play</h1>
      <h1>{location.state}</h1>
      {timeDelay > 10 && <h1>Ready?</h1>}
      {timeDelay > 0 && timeDelay <= 10 && <h2>{timeDelay}</h2>}
      {timeDelay <= 0 && <h1>GO!</h1>}

      {/* score display */}
      {(playerScore !== null && timeDelay < -1) && <h1>{ score }</h1>}
      {playerScore !== null && <h1>{ playerScore }</h1>}

      {/* redirect to rank page */}
      {(playerScore !== null && location.state === "Competitive" && timeDelay < -8) && <Navigate to={'/rank'} state={'rank'} />}
      {/* redirect to main menu */}
      {(playerScore !== null && location.state === "Quick Play" && timeDelay < -8) && <Navigate to={'/yeet'} />}

      {/* check error */}
      {(playerScore === null && !ready  && timeDelay < -8) && <h1>Error, Please Yeet Again</h1>}
      {(playerScore === null && !ready  && timeDelay < -10) && <Navigate to={'/yeet'} state={'James'} />}
      
      <MusicPlayer audioType={"play"} />
    </div>
  );
}
export default Play;