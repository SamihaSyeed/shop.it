import React from 'react'
import '../Login/Login.css'
const Signup = () => {
  return (
    <div>
          <div style={{fontSize:"30px", marginTop:"-25px", marginBottom:"25px"}}>Sign Up</div>
            <div style={{textAlign:"left", display:"flex",flexDirection:"column"}}>
            <label className="input-label">Name</label>
            <input type='text' placeholder='Enter your name' className="input-field" />
            <label className="input-label">Email Id</label>
            <input type='email' placeholder='Enter your email' className="input-field" />
            <label className="input-label">Password</label>
            <input type='password' placeholder='Enter your Password'  className="input-field" />
            <label  className="input-label">Role</label>

            <select name="Role" className="input-field">
            <option value="0">User Role</option>
            <option value="Shopper">Shopper</option>
            <option value="Seller">Seller</option>
            </select>
            </div>
            <button className='primary-btn'>LOGIN</button>
    </div>
  )
}

export default Signup