import {useState} from 'react'
import Project from './Project'

export default function Projects({projects}) {
  const [project, setProject] =useState(projects[0]);

  console.log(projects)

  const renderSelecions = projects.sort((a,b)=>{return a.title.localeCompare(b.title)})
  .map(p => {
    return(
    <option 
    key={p.id} 
    value={p.title}>
      {p.title}</option>
  )});
  
  const handleChange = (e) => {
   let  a = projects.filter(p=>{
      return p.title === e.target.value
    })
    setProject(a[0])
  };
  
  console.log(project)

  return (
    <div>
      <select onChange={handleChange}>
        {renderSelecions}
      </select>
      <Project project={project} />
    </div>
  )
}

