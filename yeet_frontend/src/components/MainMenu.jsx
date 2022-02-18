import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../assets/style.css';
import MusicPlayer from './MusicPlayer'

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
      
      <MusicPlayer audioType={"menu"} />
    </div>
  );
}
export default Menu;