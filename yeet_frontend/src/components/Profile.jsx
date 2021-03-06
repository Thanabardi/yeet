import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import profiletitle from '../photo/profile.PNG';
import back from '../photo/back.PNG';

import axios from 'axios'
import '../assets/play_style.css'
import '../assets/test.css'
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

  async function handleNameChange(event) {
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

  function dateFormat() {
    for (let i=0;i<rank.length;i++){
      let tmp = new Date(rank[i].start);
      let timeUTC = tmp.toString()
      timeUTC = timeUTC.substring(0,21)
      rank[i].start = timeUTC
    
    }
    return rank
  }

  return (
    <div className='profiles'>
      <img src={profiletitle}  alt='pro'className='profiletitle'/>
      <div ><h1 className='name'>Yeet History</h1></div>

      <div className='scroll1'>
      <div text-align='center' className='scroll'>

      <table text-align='center' className='history'>
        <thead>
        <tr>
          <td className='first'>Score</td>
          <td>Time</td>
        </tr>
        </thead>
        <tbody>
          {dateFormat().map((user, index) => {
            return (
              <tr key={index}>
                <td className='first'>{user.score}</td>
                <td>{user.start}</td>
              </tr>

);
})}
          
          
        </tbody>
      </table>
</div>
</div>
      <Link to={'/yeet'} state={'anonymous'}><img src={back} alt='back' className='backbutton'/></Link>
      
      <MusicPlayer audioType={"profile"} />
    </div>
  );
}
export default Profile;