import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AudioPlayer from './AudioPlayer'
import '../assets/Menutemp.css'
import yeet from '../photo/Yeet.PNG'
import icon from "../photo/icon.png"

const Menu = () => {
  const location = useLocation()
  // console.log(location.state)
  // const audio = new Audio("/METATRON _SHIKI.mp3")

  // const start = () => {
  //   audio.play()
  // }

  return (
    <div className='main'>
      
      <div className="box">
        <div className='main-link-quckplay'> 
        <Link to={'/play'} state={'Quick Play'} className="main-quickplay">QUICK PLAY</Link>
        </div>
        <div className='main-link-profile'> 
        <Link to={'/profile'} state={'Profile'} className ='main-profile'>PROFILE</Link>
        </div>
      </div>
      <div className='fade'>
        <img src={yeet} alt="cat" className='logo' width="972px"  height="393px"  /> 
        </div>
      <div className="box2">
        <div className="main-link-com">
           <Link to={'/play'} state={'Competitive'}>COMPETITIVE</Link>
        </div>
      </div>
      <div className="box3">
        <div className="main-link-rank">
            <Link to={'/rank'} state={'rank'}>RANK</Link>
        </div>
        <div className="main-link-logout">
           <Link to={'/auth'} state={'Logout'}>LOGOUT</Link>
        </div>
      </div>
      <div className="box4"></div>

   

      <div className="username">
          <h1 className='name'>{location.state}</h1>
          {location.state==="anonymous"&&<img src={icon} alt="anonymous"  className='icon'/>}
      </div>

      <div className="Pause">
          <AudioPlayer audioPath={"/METATRON _SHIKI.mp3"} className="Pause-but"/>
      </div>
    </div>
    
  );
}
export default Menu;