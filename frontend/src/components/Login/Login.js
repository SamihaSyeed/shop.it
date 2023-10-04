import {useState, useEffect, React} from 'react';


import './Login.css'
import Signup from '../Signup/Signup';
const Login = () => {
  const [loginDisplay, setLoginDisplay] = useState("flex")
  const [displayVar, setDisplay] = useState("none")
  function handleClick(){
    displayVar=="none" ? setDisplay("flex") : setDisplay("none")
    loginDisplay== "none" ? setLoginDisplay("flex") : setLoginDisplay("none")

  }
  return (
    <div style={{display:"grid"}}>
        <div className='login-comp' style={{display:loginDisplay}}>
          <div style={{fontSize:"30px", marginTop:"-25px", marginBottom:"25px"}}>Login</div>
            <div style={{textAlign:"left", display:"flex",flexDirection:"column"}}>
            <label className="input-label">Email Id</label>
            <input type='email' placeholder='Enter your email' className="input-field" />
            <label className="input-label">Password</label>
            <input type='password' placeholder='Enter your Password'  className="input-field" />
            </div>
            <button className='primary-btn'>Continue</button>
            <div style={{fontSize:"15px", marginTop:"10px"}}>Don't have an account? <button onClick={handleClick} style={{all:"unset", cursor:"pointer"}}><b>Sign Up</b></button></div>
        </div>
        <div className='login-comp' style={{display:displayVar, justifySelf:"right", textAlign:"center"}}>
          <Signup />
          <div style={{fontSize:"15px", marginTop:"10px"}}>Already have an account? <button onClick={handleClick} style={{all:"unset", cursor:"pointer"}}><b>Log in</b></button></div>
        </div>
    </div>
  )
}

export default Login