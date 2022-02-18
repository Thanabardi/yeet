import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../assets/style.css';
import MusicPlayer from './MusicPlayer'

const Menu = () => {
  // const location = useLocation()
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
    <div className='main-menu'>
      <h1>Yeet</h1>
      {userData && <h1>{userData.user.username}</h1>}
      {/* <img src="logo.PNG" alt="Yeet Logo"></img> */}

      <Link to={'/play'} state={'Quick Play'}>Quick Play</Link>
      {userData ? <Link to={'/play'} state={{'type': 'Competitive', 'userData': userData}}>Competitive</Link> : <p>Competitive</p>}
      <Link to={'/rank'} state={{'type': 'Rank', 'userData': userData}}>Rank</Link>
      {userData ? <Link to={'/profile'} state={'Profile'}>Profile</Link> : <p>Profile</p>}
      {/* <Link to={'/auth'} state={'Logout'}>Logout</Link> */}
      <button onClick={logout}>{userData ? 'Logout' : 'Sign Up'}</button>

      <MusicPlayer audioType={"menu"} />
    </div>
  );
}
export default Menu;