import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios'

const Rank = () => {
  const [rank, setRank] = useState()
  const location = useLocation()
  // console.log(location.state)

  async function getRank() {
    const res = await axios.get(
      `https://ecourse.cpe.ku.ac.th/exceed03/api/room-status`
    )
    return res.data
  }

  useEffect(() => {
    getRank().then((data) => {
    setRank(Object.entries(data))
    })
  }, []);

  return (
    <div>
      <h1>Rank</h1>
      {location.state}
      {rank}
      <Link to={'/yeet'} state={'anonymous'}>Done</Link>
    </div>
  );
}

export default Rank