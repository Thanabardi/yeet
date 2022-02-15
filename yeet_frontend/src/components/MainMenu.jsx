import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../assets/style.css';
import AudioPlayer from './AudioPlayer'

const Menu = () => {
  const location = useLocation()
  // console.log(location.state)
  // const audio = new Audio("/METATRON _SHIKI.mp3")

  // const start = () => {
  //   audio.play()
  // }

  return (
    <div className='main-menu'>
      <h1>Yeet</h1>
      <h1>{location.state}</h1>
      {/* <img src="logo.PNG" alt="Yeet Logo"></img> */}

      <Link to={'/play'} state={'Quick Play'}>Quick Play</Link>
      <Link to={'/play'} state={'Competitive'}>Competitive</Link>
      <Link to={'/rank'} state={'rank'}>Rank</Link>
      <Link to={'/profile'} state={'Profile'}>Profile</Link>
      <Link to={'/auth'} state={'Logout'}>Logout</Link>
      {/* <button onClick={start}>Play</button> */}
      <AudioPlayer audioPath={"/METATRON _SHIKI.mp3"}/>
      {/* <AudioPlayer audioPath={"https://actions.google.com/sounds/v1/water/waves_crashing_on_rock_beach.ogg"}/> */}
    </div>
  );
}
export default Menu;