import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../assets/MainMenu.css';

const Menu = () => {
  const location = useLocation()
  // console.log(location.state)
  const url = "https://actions.google.com/sounds/v1/water/waves_crashing_on_rock_beach.ogg";
  const audio = new Audio(url);
  audio.play()
  // audio.loop = true

  return (
    <div>
      <h1>Yeet</h1>
      <h1>{location.state}</h1>
      <Link to={'/play'} state={'Quick Play'}>Quick Play</Link>
      <Link to={'/play'} state={'Competitive'}>Competitive</Link>
      <Link to={'/rank'} state={'rank'}>Rank</Link>
      <Link to={'/profile'} state={'Profile'}>Profile</Link>
      <Link to={'/auth'} state={'Logout'}>Logout</Link>
    </div>
  );
}
export default Menu;