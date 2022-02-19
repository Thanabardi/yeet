import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import '../assets/play_style.css';
import quickplay from "../photo/quickplay.PNG"
import competitive from "../photo/competitive.PNG"

import axios from 'axios';

import MusicPlayer from './MusicPlayer'

const Play = () => {
  const matchineCode = "test"

  const location = useLocation()

  let [playerScore, setplayerScore] = useState(null)
  let [randomScore, setRandomScore] = useState()
  let [timeDelay, setTimeDelay] = useState(21)
  // console.log(location.state)


  async function getSession(matchineCode, id) {
    const res = await axios.get(
      `https://ecourse.cpe.ku.ac.th/exceed03/api/play/get-session/${matchineCode}/frontend/${id}/`)
      // console.log("session", res.data)
    return res.data
  }

  async function sendReady() {
    let data = {"token" : null, "machine_code" : matchineCode}
    if (location.state.userData && location.state.type === "Competitive") {
      data = {"token" : location.state.userData.token, "machine_code" : matchineCode}
    }
    // console.log(data)
    await axios.post(`https://ecourse.cpe.ku.ac.th/exceed03/api/play/start-session/`, data)
      .then(response => {
        // console.log("sent ready", response.data.session.machine_code, response.data.session.id)
        getScore(response.data.session.machine_code, response.data.session.id)        
      })
      .catch(error => {
        console.log(error)
      })
  }
  

  useEffect(() => {
    sendReady()
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setTimeDelay(timeDelay-=1)
      if (timeDelay < -10) {
        clearInterval(interval);
      }
    }, 1240);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setRandomScore(randomNum(1000, 9999))
      if (playerScore !== null) {
        clearInterval(interval)
      }
    }, 100);
  }, []);


  function getScore(matchineCode, ID) {
    const interval = setInterval(() => {
      getSession(matchineCode, ID).then((data) => {
      if (timeDelay < 0) {
        setplayerScore(data.session.score)
        console.log("score", data.session.score)
      }
      if (data.session.score !== null || timeDelay < -10) {
        clearInterval(interval)
      }
      })
    }, 1000)
  }

  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <div className='play'>
      <h1>PLAY</h1>

      {location.state.type === "Quick Play" && <img src={quickplay} className='quickplayimg'/>}
      {location.state.type === "Competitive" && <img src={competitive} className='competitiveimg'/>}

      {timeDelay > 10 && <h1>Ready?</h1>}
      {timeDelay > 0 && timeDelay <= 10 && <h2>{timeDelay}</h2>}
      {timeDelay <= 0 && <h1>GO!</h1>}

      {/* score display */}
      {(playerScore !== null && timeDelay < 0 && timeDelay >= -4) && <h1>{ randomScore }</h1>}
      {(playerScore !== null && timeDelay < -4) && <h1>{ playerScore }</h1>}

  
      {/* redirect to rank page */}
      {(playerScore !== null && location.state.type === "Competitive" && timeDelay < -8) && <Navigate to={'/rank'} state={{'type': 'Rank', 'userData': location.state.userData}} />}
      {/* redirect to main menu */}
      {(playerScore !== null && location.state.type === "Quick Play" && timeDelay < -8) && <Navigate to={'/yeet'} />}

      {/* check error */}
      {(playerScore === null && timeDelay < -8) && <h1>Error, Please Yeet Again</h1>}
      {(playerScore === null && timeDelay < -10) && <Navigate to={'/yeet'} />}
      
      <MusicPlayer audioType={"play"} />
    </div>
  );
}
export default Play;