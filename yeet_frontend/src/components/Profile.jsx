import React from 'react';
import { useLocation } from 'react-router-dom';

const Profile = () => {
  const location = useLocation()
  // console.log(location.state)
  return (
    <div>
      <h1>Profile</h1>
      <h1>{location.state}</h1>
    </div>
  );
}
export default Profile;