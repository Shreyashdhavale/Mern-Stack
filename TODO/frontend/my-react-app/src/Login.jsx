import React from 'react'
import Registration from './Registration'
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div>
      <h1>LOGIN</h1>
      <input type="email" placeholder='Enter the valid email..' />
      <input type="password" placeholder='Enter the valid password..' />
      <p>Do not have an Account?? <Link to='/register'>Register Here</Link> </p>
    </div>
  )
}
