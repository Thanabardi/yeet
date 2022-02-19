import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import '../assets/play_style.css';
import quickplay from "../photo/quickplay.PNG"
import competitive from "../photo/competitive.PNG"

const Play = () => {
  const playerScore = null
  const ready = false
  const location = useLocation()
  const [score, setScore] = useState()
  let [timeDelay, setTimeDelay] = useState(5)
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

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeDelay(timeDelay-=1)
      return () => clearInterval(interval);
    }, 1000);
  }, []);

  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <div className='play'>
      <h1>PLAY</h1>

      {location.state === "Quick Play" && <img src={quickplay} className='quickplayimg'/>}
      {location.state === "Competitive" && <img src={competitive} className='competitiveimg'/>}
    
      {timeDelay > 0 ? <h2>{timeDelay}</h2> : <h1>GO!</h1>}

      {/* score display */}
      {(playerScore === null && ready && timeDelay < -1) && <h1>{ score }</h1>}
      {playerScore !== null && <div><h1>{ playerScore }</h1></div>}

  
      {/* redirect to rank page */}
      {(playerScore !== null && location.state === "Competitive" && timeDelay < -8) && <Navigate to={'/rank'} state={'rank'} />}
      {/* redirect to main menu */}
      {(playerScore !== null && location.state !== "Quick Play" && timeDelay < -8) && <Navigate to={'/yeet'} />}

      {/* check error */}
      {(playerScore === null && !ready  && timeDelay < -8) && <h1>Error, Please Yeet Again</h1>}
      {(playerScore === null && !ready  && timeDelay < -10) && <Navigate to={'/yeet'} state={'James'} />}
    </div>
  );
}
export default Play;