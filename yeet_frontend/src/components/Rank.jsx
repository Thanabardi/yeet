import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../assets/rank.css';
import back from '../photo/back.PNG'

import axios from 'axios'

import MusicPlayer from './MusicPlayer'

const Rank = () => {
  const location = useLocation()

  let [rank, setRank] = useState([])
  // console.log(location.state)

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

  function dateFormat() {
    for (let i=0;i<rank.length;i++){
      console.log(rank[i].start)
      let tmp = new Date(rank[i].start);
      // console.log(tmp)
      let timeUTC = tmp.toUTCString()
      // let timeFormat = timeUTC.toString()
      // timeFormat = timeFormat.substring(0,15)
      timeUTC = timeUTC.toString()
      // timeUTC = timeUTC.substring(0,22)
      console.log(timeUTC)
      rank[i].start = timeUTC
    
    }
    return rank
  }

  return (
    <div className='rankbg'>
      <h1>Rank</h1>
      {location.state.type}
      <table className='ranktb'>
        <thead>
        <tr>
          <td>User</td>
          <td>Score</td>
          <td>Time</td>
        </tr>
        </thead>
        <tbody>
          {dateFormat().filter(user => user.username.includes('s')).map((user, index) => {
            // let date = user.start;
            // let UTCdate = date.toUTCString();
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
      <Link to={'/yeet'} state={'anonymous'}><img src={back} className='backbutton_rank'/></Link>
      
      <MusicPlayer audioType={"rank"} />
    </div>
  );
}

export default Rank