import {useContext, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import {UserContext} from '../Context/user';

export default function Portfolio({projects, setProjects, setEditProjectForm}) {
  const {generalContractor} = useContext(UserContext);

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

  const navigate = useNavigate();

  const renderPortfolio = () => projects
  .sort((a,b)=>{return a.title.localeCompare(b.title)})
  .map(p =>{
    const {title, location, description, sector, total_cost, id} = p;

    const handleClick = () => {
      setEditProjectForm(p)
      navigate(`/${(generalContractor.company_name).split(' ').join('')}/project/edit`)
    }
    
    return (
      <tr key={id}>
        <td>{title}</td>
        <td>{location}</td>
        <td>{description}</td>
        <td>{sector}</td>
        <td>{total_cost}</td>
        <td>
        <button onClick={handleClick}>Edit</button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h1>Project Portfolio</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Location</th>
            <th>Description</th>
            <th>Sector</th>
            <th>Total Cost</th>
          </tr>
        </thead>
        <tbody>
        {renderPortfolio()}
        </tbody>
      </table>
    </div>
  );
};
