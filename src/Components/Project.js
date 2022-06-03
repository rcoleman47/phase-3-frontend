import React from 'react'
import Moment from 'moment'

export default function Project({project}) {
  const {budget_items, description, duration, location, phase, sector, size, start_date, title, total_cost} = project;
  
  const projectStart = Moment(start_date).format("MM-DD-YYYY");
  
  const renderBudget = () => {
    
    return (budget_items.map(item => {
      const {number, unit, cost_per_unit, description, subcontracted, total, id } = item
      return(
        <tr key={id}>
          <td>{number}</td>
          <td>{unit}</td>
          <td>{cost_per_unit}</td>
          <td>{description}</td>
          <td>{subcontracted}</td>
          <td>{total}</td>
        </tr>
        );
      })
    );
  };
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
            <th>Total</th>
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
        </thead>
      </table>
    </div>
  );
};
