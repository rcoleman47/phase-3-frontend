export default function Portfolio({projects}) {

  console.log(projects)


  const renderPortfolio = () => projects.map(p =>{
    const {title, location, description, sector, total_cost, id} = p;
    
    return (
      <tr key={id}>
        <td>{title}</td>
        <td>{location}</td>
        <td>{description}</td>
        <td>{sector}</td>
        <td>{total_cost}</td>
      </tr>
    )
  })

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
  )
}
