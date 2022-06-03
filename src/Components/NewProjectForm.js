import {useState, useContext} from 'react';
import {UserContext} from '../Context/user';
import {useNavigate} from 'react-router-dom';

export default function NewProjectForm({addNewProject}) {
  const {generalContractor} = useContext(UserContext);
  const [newProjectForm, setNewProjectForm] = useState({
    title: '',
    location: '',
    description: '',
    sector: '',
    phase: 'Pre-Construction',
    size: '',
    duration: 0,
    start_date: '',
    general_contractor_id: generalContractor.id
  });


  const {title, location, description, sector, phase, size, duration, start_date} = newProjectForm;

  const navigate = useNavigate();

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setNewProjectForm({
      ...newProjectForm,
      [key]: value,
    });
  };
  console.log(newProjectForm)

  const handleSubmit = (e) => {
    e.preventDefault();

    const handleResponse = (project) => {
      setTimeout(() => addNewProject(project))
    }

    fetch("http://127.0.0.1:9393/project", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newProjectForm)
    })
    .then(r=>r.json())
    .then(project=> handleResponse(project));
    
    //navigate(`/${(generalContractor.company_name).split(' ').join('')}/estimate/new`);
    
    setNewProjectForm({
      title: '',
      location: '',
      description: '',
      sector: '',
      phase: 'Pre-Construction',
      size: '',
      duration: '',
      start_date: '',
      general_contractor_id: generalContractor.id
    });
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div>
          <label>Project Title</label>
          <input onChange={handleChange} name="title" type="text" placeholder="Enter project title..." value={title} required/>
        </div>
        <div>
          <label>Sector</label>
          <input onChange={handleChange} name="sector" type="text" placeholder="Enter sector..." value={sector} required/>
        </div>
        <div>
          <label>Description</label>
          <input onChange={handleChange} name="description" type="text" placeholder="Enter description..." value={description} required/>
        </div>
        <div>
          <label>Location</label>
          <input onChange={handleChange} name="location" type="text" placeholder="Enter Location..." value={location} required/>
        </div>
        <div>
          <label>Start Date</label>
          <input onChange={handleChange} name="start_date" type="date" placeholder="YYYY-DD-MM" value={start_date} required/>
        </div>
        <div>
          <label>Duration</label>
          <input onChange={handleChange} name="duration" type="number" placeholder="Enter Duration in weeks.." value={Number(duration)} required/>
        </div>
        <div>
          <label>Phase</label>
          <input onChange={handleChange} name="phase" type="text" placeholder="Enter phase..." value={phase} required/>
        </div>
        <div>
          <label>Size</label>
          <input onChange={handleChange} name="size" type="number" placeholder="Enter size in sf.." value={Number(size)} required/>
        </div>
        <div>
          <input type="Submit" name="Submit"/>
        </div>
      </form>
    </div>
  )
}
