import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../assets/style.css';
import MusicPlayer from './MusicPlayer'
import '../assets/Menutemp.css'
import yeet from '../photo/Yeet.PNG'
import icon from "../photo/icon.png"

const Menu = () => {
  const location = useLocation()
  let [userData, setUserData] = useState(null)


  function logout() {
    if (userData) {
      sessionStorage.removeItem('userData')
    }
    return window.location = "/auth" 
  }
  // console.log(userData)
  // console.log(location.state)
  // const audio = new Audio("/METATRON _SHIKI.mp3")

  // const start = () => {
  //   audio.play()
  // }

  useEffect(() => {
    setUserData(JSON.parse(sessionStorage.getItem('userData')))
  }, []);

  return (
    // <div className='main-menu'>
    //   <h1>Yeet</h1>
    //   {userData && <h1>{userData.user.username}</h1>}
    //   {/* <img src="logo.PNG" alt="Yeet Logo"></img> */}

    //   <Link to={'/play'} state={'Quick Play'}>Quick Play</Link>
    //   {userData ? <Link to={'/play'} state={{'type': 'Competitive', 'userData': userData}}>Competitive</Link> : <p>Competitive</p>}
    //   <Link to={'/rank'} state={{'type': 'Rank', 'userData': userData}}>Rank</Link>
    //   {userData ? <Link to={'/profile'} state={'Profile'}>Profile</Link> : <p>Profile</p>}
    //   {/* <Link to={'/auth'} state={'Logout'}>Logout</Link> */}
    //   <button onClick={logout}>{userData ? 'Logout' : 'Sign Up'}</button>

    //   <MusicPlayer audioType={"menu"} />
      
    <div className='main'>
      
      <div className="box">
        <div className='main-link-quckplay'> 
        <Link to={'/play'} state={'Quick Play'} className="main-quickplay">QUICK PLAY</Link>
        </div>
        <div className='main-link-profile'> 
          {userData && <Link to={'/profile'} state={'Profile'}>PROFILE</Link> }
        </div>
      </div>
      <div className='fade'>
        <img src={yeet} alt="cat" className='logo' width="972px"  height="393px"  /> 
        </div>
      <div className="box2">
        <div className="main-link-com">
          <div className='main-com'>
               {userData && <Link to={'/play'} state={{'type': 'Competitive', 'userData': userData}}>COMPETITIVE</Link> }
          </div>
        </div>
      </div>
      <div className="box3">
        <div className="main-link-rank">
          <Link to={'/rank'} state={{'type': 'Rank', 'userData': userData}}>RANK</Link>
        </div>
        <div className="main-link-logout">
          <button onClick={logout} className='logout-button-menu'>{userData ? 'LOGOUT' : 'SIGN UP'}</button>
        </div>
      </div>
      {/* <div className='fade'>
        <img src={yeet} alt="cat" className='logo' width="972px"  height="393px"  /> 
        </div> */}
      <div className="box4"></div>

   

      <div className="username">
          <h1 className='menu-name'>{location.state}</h1>
          {location.state==="anonymous"&&<img src={icon} alt="anonymous"  className='icon'/>}
      </div>

      {/* <div className="Pause">
          <AudioPlayer audioPath={"/METATRON _SHIKI.mp3"} className="Pause-but"/>
      </div> */}
        <MusicPlayer audioType={"menu"} />
    </div>
    
  );
}
export default Menu;