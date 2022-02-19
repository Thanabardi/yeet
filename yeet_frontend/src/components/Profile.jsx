import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import profiletitle from '../photo/profile.PNG';
import back from '../photo/back.PNG';

const Profile = () => {
  const location = useLocation()
  // console.log(location.state)
  
  const [inputs, setInputs] = useState({});

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
          <td>Time</td>
          <td>Score</td>
        </thead>
        <tbody>
          {/* {this.state.data.map(( listValue, index ) => {
            return (
              <tr key={index}>
                <td>{listValue.id}</td>
                <td>{listValue.title}</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
      <Link to={'/yeet'} state={'anonymous'}><img src={back} alt='back' className='backbutton'/></Link>
    </div>
  );
}
export default Profile;