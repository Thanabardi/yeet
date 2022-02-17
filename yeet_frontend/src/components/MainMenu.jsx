import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../assets/MainMeun.css'
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
    <div className='test'>
      <h1 className='username'>{location.state}</h1>
    <div className='main-menu'>
      {/* <img src="logo.PNG" alt="Yeet Logo"></img> */}
      <div className='Quick-Play'>
      <Link to={'/play'} state={'Quick Play'}>QUICK PLAY</Link>
      </div>
      <div className='rank'>
      <Link to={'/rank'} state={'rank'}>RANK</Link>
      </div>
      {/* <button onClick={start}>Play</button> */}
      {/* <AudioPlayer audioPath={"https://actions.google.com/sounds/v1/water/waves_crashing_on_rock_beach.ogg"}/> */}
    </div>
    <div className='main-menu2'>
    <div className='competitive'>
      <Link to={'/play'} state={'Competitive'}>COMPETITIVE</Link>
      </div>
      </div>
      <div className='main-menu'>
      <div className='profile-menu'>
      <Link to={'/profile'} state={'Profile'}>PROFILE</Link>
     </div>
      <div className='menu-logout'>
      <Link to={'/auth'} state={'Logout'}>LOGOUT</Link>
      </div>
      <AudioPlayer audioPath={"/METATRON _SHIKI.mp3"}/>
      
    </div>
    </div>
  );
}
export default Menu;