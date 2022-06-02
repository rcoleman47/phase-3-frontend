import React from 'react'
import {NavLink, Outlet} from 'react-router-dom';



export default function GCUser() {
  return (
    <div>
      <h1>GC Name</h1>
      <button>Log Out</button>
      <div>
        <NavLink to="Portfolio">Portfolio</NavLink>
        <NavLink to="projects">Projects</NavLink>
        <NavLink to="projects/new">Start New Project</NavLink>
      </div>
      <Outlet />

    </div>
  )
}
