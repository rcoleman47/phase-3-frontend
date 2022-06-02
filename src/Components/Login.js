import React, {useState, useContext, useEffect} from 'react'
import {UserContext} from "../Context/user"
import {Link, useNavigate} from 'react-router-dom'

export default function Login () {
  const [formData, setFormData] =useState({
    email: '',
    password_digest: ''
  });

  const navigate = useNavigate()

  const {isLoggedIn, setIsLoggedIn, generalContractor, setGeneralContractor} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault();

    const handleResponse = (r) => {
      console.log(r)
      if (typeof r === "object") {
        setGeneralContractor(r)
        setIsLoggedIn(true)
        setFormData({
          email: '',
          password_digest: ''
        })
      }
      else if (r === 401)
      {
        alert('Incorrect email or password. Please try again')
      }
    }

    fetch("http://127.0.0.1:9393/sessions", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r=>r.json())
    .then(r=> handleResponse(r));
  }
  
  const nav = () => {
    if (isLoggedIn === true) {
      navigate(`/${(generalContractor.company_name).split(' ').join('')}/portfolio`)
  }}

  const handleChange = (e) => {
    let value = e.target.value
    let key = e.target.name
    setFormData({
      ...formData,
      [key]: value
    })
    console.log(generalContractor)
  }
  console.log(formData)
  nav()

  return (
    <div>
      <h1>Construction Project Tracker</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>EMAIL</label>
          <input onChange={handleChange} type="text" name="email" placeholder="Enter email..." value={formData.email} required />
        </div>
        <div>
          <label>PASSWORD</label>
          <input onChange={handleChange} type="text" name="password_digest" placeholder="Enter password..." value={formData.password_digest} required />
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
