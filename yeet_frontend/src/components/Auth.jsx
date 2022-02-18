import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import MusicPlayer from './MusicPlayer'

const Auth = () => {
  const [inputs, setInputs] = useState({});
  const [isLogin, setIsLogin] = useState(true)

  const toggle = () => setIsLogin(!isLogin)
  
  // async function register(event){
  //   event.preventDefault();
  //   await axios.post(`/api/v2/register`, this.dataRegisterForm)
  //           .then(response => {
  //           this.login(response.data);
  //           })
  //           .catch(error => {
  //           console.log(error)
  //       })
  // }

  // async function login(data){
  //   let token = data.token
  //   this.$store.commit('setToken', token)
  //   axios.defaults.headers.common["Authorization"] = "Token " + token
  //   localStorage.setItem("token", token)
  //   this.slug = data.calendar.slug
  //   this.$router.push({ path: `/yeet/${this.slug}`})
  // }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  async function handleSignUp(event) {
    event.preventDefault();
    const data = JSON.stringify({username : inputs.username, password : inputs.password, email : inputs.email})
    console.log(data)
    // await axios.post(`https://ecourse.cpe.ku.ac.th/exceed03/api/login/`, data)
    //   .then(response => {
    //     login(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
  }

  async function login(data) {
    sessionStorage.setItem('userData', JSON.stringify(data))
    // console.log(JSON.parse(sessionStorage.getItem('userData')))
    return window.location = "/yeet" 
  }

  async function handleRegister(event) {
    event.preventDefault();
    const data = {"username" : inputs.username, "password" : inputs.password}
    await axios.post(`https://ecourse.cpe.ku.ac.th/exceed03/api/login/`, data)
      .then(response => {
        // console.log(response.data)
        login(response.data);
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
      {isLogin ? 
      <div>
        <h1>ID Please</h1>
        <form onSubmit={handleRegister}>
          <input 
            type="text" 
            name="username" 
            placeholder="Yeet Name"
            value={inputs.username || ""} 
            onChange={handleChange}
          />
          <input 
            type="password" 
            name="password" 
            placeholder="password"
            value={inputs.password || ""} 
            onChange={handleChange}
          />
          <button>LOG IN</button>
        </form>
        New to Yeet?<button onClick={toggle}>SIGN UP</button>
      </div>
      :
      <div>
        <h1>Create your Yeet ID</h1>
        <form onSubmit={handleSignUp}>
          <input 
            type="text" 
            name="username" 
            placeholder="Yeet Name"
            value={inputs.username || ""} 
            onChange={handleChange}
          />
          <input 
            type="password" 
            name="password" 
            placeholder="password"
            value={inputs.password || ""} 
            onChange={handleChange}
          />
          <input 
            type="email" 
            name="email" 
            placeholder="email"
            value={inputs.email || ""} 
            onChange={handleChange}
          />
          <button>SIGN UP</button>
        </form>
        Already have one?<button onClick={toggle}>LOG IN</button>
      </div>
      }
      <Link to={'/yeet'} state={'anonymous'}>Yeet anonymously?</Link>

      <MusicPlayer audioType={"auth"} />
    </div>
  );
}
export default Auth;