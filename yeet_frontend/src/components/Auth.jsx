import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "../assets/auth.css"
import Longinimg from "../photo/login2.PNG"
import Create from "../photo/Register.png"
import Create2 from "../photo/Register2.PNG"
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
    <div className='auth'>
      {isLogin ? 
      <div>
        <img src={Longinimg} alt='Login \' className='img'/>
        {/* <h1>ID Please</h1> */}
        <form onSubmit={handleRegister}>
          <div className='username-login'>
          <input 
            type="text" 
            name="username" 
            placeholder="Yeet Name"
            value={inputs.username || ""} 
            onChange={handleChange}
            className= "login-input"
            />
            </div>
          <input 
            type="password" 
            name="password" 
            placeholder="Password"
            value={inputs.password || ""} 
            onChange={handleChange}
            className = "login-input"
          />
          <div >
          <button className='login-button'>LOG IN</button>
          </div>
        </form>
        <div className='login-sign'>
        New to Yeet?<button onClick={toggle}>SIGN UP</button>
          </div>
      </div>
      :
      <div>
        {/* <h1>Create your Yeet ID</h1> */}
        {/* <img src={Create} alt='Create' className='img'/> */}
        <img src={Create2} alt='Create2' className='img'/>
        <form onSubmit={handleSignUp}>
          <div className='user-login2'>

          <input 
            type="text" 
            name="username" 
            placeholder="Yeet Name"
            value={inputs.username || ""} 
            onChange={handleChange}
            className= "login-input"
            />
            </div>
          <input 
            type="password" 
            name="password" 
            placeholder="password"
            value={inputs.password || ""} 
            onChange={handleChange}
            className = "login-input"
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
        <div className='login-sign'>
        Already have one?<button onClick={toggle}>LOG IN</button>
        </div>
      </div>
      }
      <Link to={'/yeet'} state={'anonymous'} className='yeet'>Yeet anonymously?</Link>
      
      <MusicPlayer audioType={"auth"} />
    </div>
  );
}
export default Auth;