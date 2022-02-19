import React,{ useEffect, useState } from 'react'
import "../assets/title.css"
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import logoth from '../photo/logoth.PNG'


const Title = () => {
  
    let [timeDelay, setTimeDelay] = useState(5);
    useEffect(() => {
        const interval = setInterval(() => {
          setTimeDelay(timeDelay-=1)
          return () => clearInterval(interval);
        }, 1000);
      }, []);

      console.log(timeDelay)
  return (

    // fade2 

    <div className='back'>

        <div className='fade2'>
            <img src={logoth} alt='title-logo' />
        </div>
        { timeDelay < -3 && <Navigate to={'/yeet'} state={'James'} /> }
    </div>
  )
  
}

export default Title