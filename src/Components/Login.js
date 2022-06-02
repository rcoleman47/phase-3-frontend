import React, {useState, useFetch} from 'react'
import {Link} from 'react-router-dom'

export default function Login () {
  return (
    <div>
      <h1>Construction Project Tracker</h1>
      <form>
        <div>
          <label>EMAIL</label>
          <input type="text" name="email" required />
        </div>
        <div>
          <label>PASSWORD</label>
          <input type="text" name="password" required />
        </div>
        <div>
          <input type="Submit" name="Submit"/>
        </div>
        <div>
          <Link to="/signup">New GC Sign Up</Link>
          </div>
      </form>
    </div>
  ) 
}
