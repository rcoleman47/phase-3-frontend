import {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from '../Context/user';
// import "bootstrap/dist/css/bootstrap.min.css";
import Login from './Login'
import SignUp from './SignUp';
import GCUser from './GCUser';
import Portfolio from './Portfolio';
import Projects from './Projects';
import NewProjectForm from './NewProjectForm';
import Estimate from './Estimate';
import NewEstimateForm from './NewEstimateForm';




function App() {
  const [projects, setProjects] = useState({});

  const addNewProject = (project) => {
    const updatedProjects = [...projects, project];
    setTimeout(setProjects(updatedProjects),0);
  }
  
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Login setProjects={setProjects} />} />
        <Route path="signup" element={<SignUp />}/>
        <Route path=":companyName" element={<GCUser />}>
          <Route path="portfolio" element={<Portfolio 
            projects={projects} />}/>

          <Route path="projects" element={<Projects 
            projects={projects} />}>

          </Route>
          <Route path="projects/new" element={<NewProjectForm addNewProject={addNewProject} />}/>
          <Route path="estimate/new" element={<NewEstimateForm />}/>
        </Route>
      </Routes>
    </UserProvider>
  )
  
}

export default App;
