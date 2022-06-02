import React, {useState, useEffect, useContext} from 'react'
import {UserContext} from "../Context/user"
import {Link} from 'react-router-dom'

export default function Login () {
  const [formData, setFormData] =useState({
    email: '',
    password: ''
  });

  const {isLoggedIn, setIsLoggedIn, generalContractor, setGeneralContractor} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:9393/sessions", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r=>r.json())
    .then(r=> console.log(r));
    // setIsLoggedIn(true);
  }
  

  const handleChange = (e) => {
    let value = e.target.value
    let key = e.target.name
    setFormData({
      ...formData,
      [key]: value
    })
  }
  console.log(formData)

  return (
    <div>
      <h1>Construction Project Tracker</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>EMAIL</label>
          <input onChange={handleChange} type="text" name="email" placeholder="Enter email..." required />
        </div>
        <div>
          <label>PASSWORD</label>
          <input onChange={handleChange} type="text" name="password" placeholder="Enter password..." required />
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
