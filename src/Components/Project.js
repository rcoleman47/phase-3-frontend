import {useContext} from 'react';
import {UserContext} from '../Context/user';
import {useNavigate} from 'react-router-dom';
import Moment from 'moment'

export default function Project({project, deleteProject}) {
  const {generalContractor} = useContext(UserContext);

  const {id, budget_items, description, duration, location, phase, sector, size, start_date, title, total_cost} = project;
  
  const navigate = useNavigate();

  const projectStart = Moment(start_date).format("MM-DD-YYYY");
  
  const renderBudget = () => {
    
    return (
      budget_items
      .sort((a,b)=>{return a.description.localeCompare(b.description)})
      .map(item => {
      const {number, unit, cost_per_unit, description, subcontracted, total, id } = item
      return(
        <tr key={id}>
          <td>{number}</td>
          <td>{unit}</td>
          <td>{cost_per_unit}</td>
          <td>{description}</td>
          <td>{total}</td>
        </tr>
        );
      })
    );
  };

  const handleClick = (e) => {
    fetch(`http://127.0.0.1:9393/projects/${id}`, {
      method: "DELETE",
    })
    .then((r) =>r.json())
    .then(()=>deleteProject(project))
   
    setTimeout(navigate(`/${(generalContractor.company_name).split(' ').join('')}/portfolio`),1000);
  }


  return (
    <div>
      <h2>{title}</h2>
      <h3>{description} - {sector} - {size} sf</h3>
      <h4>Address: {location}</h4>
      <p>Duration: {duration} weeks - Start Date: {projectStart} - Phase: {phase}</p>

      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Unit</th>
            <th>Cost Per Unit</th>
            <th>Description</th>
            <th>Total ($)</th>
          </tr>
        </thead>
        <tbody>
        {renderBudget()}
        </tbody>
      </table>
      <br/>
      <table>
        <thead>
          <tr>
            <th>Project Total:</th>
            <th>{total_cost}</th>
          </tr>
          <tr>
            <button onClick={handleClick}>Delete Project</button>
          </tr>        
        </thead>
      </table>
    </div>
  );
};
