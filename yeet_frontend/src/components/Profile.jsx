import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
      `https://ecourse.cpe.ku.ac.th/exceed03/api/play/list-score/`)
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
    <div>
      <h1>Profile</h1>
      <h1>{location.state}</h1>
      <h1>Yeet Name</h1>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          name="username" 
          placeholder="Yeet Name"
          value={inputs.username || ""} 
          onChange={handleChange}
        />
        <button>Change</button>
      </form>
      <h1>Yeet History</h1>
      <table>
        <thead>
        <tr>
          <td>User</td>
          <td>Score</td>
          <td>Time</td>
        </tr>
        </thead>
        <tbody>
          {rank.filter(user => user.username.includes(userData.user.username)).map((user, index) => {
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
      <Link to={'/yeet'} state={'anonymous'}>Done</Link>

      <MusicPlayer audioType={"profile"} />
    </div>
  );
}
export default Profile;