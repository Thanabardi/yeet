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

    // const uniq = [...new Map(rank.map(item => [JSON.stringify(item).substring(0, 22), item])).values()];
    })
  }, []);

  function removeDuplicate(arr, prop) {
    var new_arr = [];
    var lookup = {};
    for (var i in arr) {
        lookup[arr[i][prop]] = arr[i];
    }
    for (i in lookup) {
        new_arr.push(lookup[i]);
    }
    return new_arr
    }
    var newArray = removeDuplicate(rank, 'username');
    console.log("Result ", newArray);

  return (
    <div className='rankbg'>
      {/* <h1>Rank</h1>
      {location.state.type} */}
      <div className='ranktable'>
      <table>
        <thead>
        <tr>
          <td>User</td>
          <td>Score</td>
          <td>Time</td>
        </tr>
        </thead>
        <tbody>
          {rank.filter(user => user.username.includes('s')).map((user, index) => {
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
      </div>
      <Link to={'/yeet'} state={'anonymous'}><img src={back} className='backbutton_rank'/></Link>
      
      <MusicPlayer audioType={"rank"} />
    </div>
  );
}

export default Rank