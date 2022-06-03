import {useContext} from 'react';
import {UserContext} from '../Context/user';
import {useNavigate} from 'react-router-dom';


export default function EditProjectForm({editProjectForm, setEditProjectForm, editProject}) {
  const {generalContractor} = useContext(UserContext);

  const {title, location, description, sector, phase, size, duration, start_date, id} = editProjectForm;

  const navigate = useNavigate();

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setEditProjectForm({
      ...editProjectForm,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://127.0.0.1:9393/projects/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(editProjectForm)
    })
    .then(r=>r.json())
    .then(project=> editProject(project));
    
    setTimeout(navigate(`/${(generalContractor.company_name).split(' ').join('')}/portfolio`),0);
    
    setEditProjectForm({
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
          <input 
          onChange={handleChange} 
          name="title" type="text" placeholder="Enter project title..." value={title} required/>
        </div>
        <div>
          <label>Sector</label>
          <input 
          onChange={handleChange} 
          name="sector" 
          type="text" 
          placeholder="Enter sector..." 
          value={sector} 
          required/>
        </div>
        <div>
          <label>Description</label>
          <input 
          onChange={handleChange} 
          name="description" 
          type="text" 
          placeholder="Enter description..." 
          value={description} 
          required/>
        </div>
        <div>
          <label>Location</label>
          <input 
          onChange={handleChange} 
          name="location" 
          type="text" 
          placeholder="Enter Location..." 
          value={location} 
          required/>
        </div>
        <div>
          <label>Start Date</label>
          <input 
          onChange={handleChange} 
          name="start_date" 
          type="date" 
          placeholder="YYYY-DD-MM" 
          value={start_date} 
          required/>
        </div>
        <div>
          <label>Duration</label>
          <input 
          onChange={handleChange} 
          name="duration" type="number" 
          placeholder="Enter Duration in weeks.." 
          value={Number(duration)} 
          required/>
        </div>
        <div>
          <label>Phase</label>
          <input 
          onChange={handleChange} 
          name="phase" type="text" 
          placeholder="Enter phase..." 
          value={phase} 
          required/>
        </div>
        <div>
          <label>Size</label>
          <input 
          onChange={handleChange} 
          name="size" type="number" 
          placeholder="Enter size in sf.." 
          value={Number(size)} 
          required/>
        </div>
        <div>
          <input type="Submit" name="Submit"/>
        </div>
      </form>
    </div>
  )
}
