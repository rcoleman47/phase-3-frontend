import React, {useState, useFetch} from 'react';
import {Link} from 'react-router-dom';


export default function SignUp() {
  return (
    <div>
      <h1>Construction Project Tracker</h1>
      <form>
      <div>
          <label>Company Name</label>
          <input type="text" name="Company Name" required />
        </div>
        <div>
          <label>Address</label>
          <input type="text" name="password" required />
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="email" required />
        </div>
        <div>
          <label>Password</label>
          <input type="text" name="password" required />
        </div>
        <div>
          <input type="Submit" name="Submit"/>
        </div>
        <div>
          <Link to="/">Have an account? Login Here</Link>
          </div>
      </form>
    </div>
  )
}
