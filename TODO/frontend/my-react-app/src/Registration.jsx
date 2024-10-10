import React from 'react'
import Login from './Login'

export default function Registration() {
  return (
    <div>
      <h1>Registration</h1>
      <input type="text" placeholder='Enter the Username...'/>
      <input type="email" placeholder='Enter the valid email..' />
      <input type="password" placeholder='Enter the valid password..' />
      <p>Already have an Account?? <Link to='/Login'>Register Here</Link> </p>
    </div>
  )
}
