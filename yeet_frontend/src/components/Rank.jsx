import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

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

  return (
    <div>
      <h1>Rank</h1>
      {location.state}
      <table>
        <thead>
        <tr>
          <td>User</td>
          <td>Score</td>
          <td>Time</td>
        </tr>
        </thead>
        <tbody>
          {rank.filter(user => user.username.includes('p')).map((user, index) => {
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
      <MusicPlayer audioType={"rank"} />
    </div>
  );
}

export default Rank