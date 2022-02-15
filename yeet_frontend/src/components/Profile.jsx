import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
      <Link to={'/yeet'} state={'anonymous'}>Done</Link>
    </div>
  );
}
export default Profile;