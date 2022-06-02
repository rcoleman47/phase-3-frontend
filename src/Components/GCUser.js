import React, {useContext} from 'react'
import {NavLink, Outlet} from 'react-router-dom';
import {UserContext} from '../Context/user';
import {Link, useNavigate} from 'react-router-dom';


export default function GCUser() {
  const {isLoggedIn, setIsLoggedIn, generalContractor, setGeneralContractor} = useContext(UserContext);

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/");
    setIsLoggedIn(false);
    setGeneralContractor({
      id: '',
      company_name: '',
      address: '',
      email: '',
      password_digest: ''
    });
  }

  return (
    <div>
      <h1>GC Name</h1>
      <button onClick={handleClick} >Log Out</button>
      <div>
        <NavLink to="Portfolio">Portfolio</NavLink>
        <NavLink to="projects">Projects</NavLink>
        <NavLink to="projects/new">Start New Project</NavLink>
      </div>
      <Outlet />

    </div>
  )
}
