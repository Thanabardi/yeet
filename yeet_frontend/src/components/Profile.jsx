import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import profiletitle from '../photo/profile.PNG';
import back from '../photo/back.PNG';

import axios from 'axios'

import MusicPlayer from './MusicPlayer'

const Profile = () => {
  const location = useLocation()
  // console.log(location.state)
  const userData = JSON.parse(sessionStorage.getItem('userData'))
  let [rank, setRank] = useState([])
  
  let [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  async function handleLogin(event) {
    event.preventDefault();
    console.log(inputs.username, inputs.password)
    return window.location.reload();
  }

  async function getRank() {
    const res = await axios.get(
      `https://ecourse.cpe.ku.ac.th/exceed03/api/play/score/${userData.user.id}/`)
      // console.log(res.data)
    return res.data
  }

  useEffect(() => {
    getRank().then((data) => {
    setRank(data.score)
    console.log("this", data.score)
    })
  }, []);

  return (
    <div className='profile'>
      <img src={profiletitle}  alt='pro'className='profiletitle'/>
      <div className='yeetname'>
      <div className='name'><h1>Yeet Name</h1></div>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          name="username" 
          placeholder="Yeet Name"
          value={inputs.username || ""} 
          onChange={handleChange}
          className='changename'
        />
      <div>

        <button className='changebutton'>Change</button>
      </div>
      </form>
      </div>


      <div className='name'><h1>Yeet History</h1></div>
      <table className='history'>
        <thead>
        <tr>
          <td>User</td>
          <td>Score</td>
          <td>Time</td>
        </tr>
        </thead>
        <tbody>
          {rank.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.score}</td>
                <td>{user.start}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to={'/yeet'} state={'anonymous'}><img src={back} alt='back' className='backbutton'/></Link>
      
      <MusicPlayer audioType={"profile"} />
    </div>
  );
}
export default Profile;