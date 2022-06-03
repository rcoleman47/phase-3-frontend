import {useState, useEffect, useContext} from 'react';
import {UserContext} from '../Context/user';
import Project from './Project';

export default function Projects({projects, setProjects,deleteProject}) {
  const [project, setProject] =useState(projects[0]);

  const {generalContractor} = useContext(UserContext)

  useEffect(()=> {
    fetch("http://127.0.0.1:9393/projects", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({id: generalContractor.id})
    })
    .then(r=>r.json())
    .then(r=> setProjects(r));
  },[])

  const renderSelecions = projects
  .sort((a,b)=>{return a.title.localeCompare(b.title)})
  .map(p => {
    return(
    <option 
    key={p.id} 
    value={p.title}>
      {p.title}
      </option>
  )});
  
  const handleChange = (e) => {
   let  a = projects.filter(p=>{
      return p.title === e.target.value
    })
    setProject(a[0])
  };

  return (
    <div>
      <select onChange={handleChange}>
        {renderSelecions}
      </select>
      <Project project={project} deleteProject={deleteProject} />
    </div>
  )
}

