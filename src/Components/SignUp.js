import React, {useState, useContext} from 'react';
import {UserContext} from '../Context/user';
import {Link, useNavigate} from 'react-router-dom';


export default function SignUp() {
  const [signUpData, setSignUpData] =useState({
    company_name: '',
    address: '',
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
        setSignUpData({
          company_name: '',
          address: '',
          email: '',
          password_digest: ''
        })
      }
      else if (r === 401)
      {
        alert('Company already exists. Please login or try again')
      }
    }

    fetch("http://127.0.0.1:9393/general_contractors", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(signUpData)
    })
    .then(r=>r.json())
    .then(r=> handleResponse(r));
  }
  

  const handleChange = (e) => {
    let value = e.target.value
    let key = e.target.name
    setSignUpData({
      ...signUpData,
      [key]: value
    })
  }
  console.log(signUpData)

  const nav = () => {
    if (isLoggedIn === true) {
      navigate(`/${(generalContractor.company_name).split(' ').join('')}/portfolio`)
  }}
  nav()
  return (
    <div>
      <h1>Construction Project Tracker</h1>
      <form onSubmit={handleSubmit}>
      <div>
          <label>Company Name</label>
          <input onChange={handleChange} type="text" name="company_name" value={signUpData.company_name} required />
        </div>
        <div>
          <label>Address</label>
          <input onChange={handleChange} type="text" name="address" value={signUpData.address} required />
        </div>
        <div>
          <label>Email</label>
          <input onChange={handleChange} type="text" name="email" value={signUpData.email} required />
        </div>
        <div>
          <label>Password</label>
          <input onChange={handleChange} type="text" name="password_digest" value={signUpData.password_digest} required />
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
