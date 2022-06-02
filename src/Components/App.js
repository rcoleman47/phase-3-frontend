import { Routes, Route } from 'react-router-dom';
import { UserProvider } from '../Context/user';
// import "bootstrap/dist/css/bootstrap.min.css";
import Login from './Login'
import SignUp from './SignUp';
import GCUser from './GCUser';
import Portfolio from './Portfolio';
import Project from './Project';
import Projects from './Projects';
import NewProjectForm from './NewProjectForm';
import Estimate from './Estimate';
import NewEstimateForm from './NewEstimateForm';




function App() {
  
  
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<SignUp />}/>
        <Route path=":companyName" element={<GCUser />}>
          <Route path="portfolio" element={<Portfolio />}/>
          <Route path="projects" element={<Projects />}>
            <Route path=":id" element={<Project />}/>
          </Route>
          <Route path="projects/new" element={<NewProjectForm />}/>
          <Route path=":id/estimate" element={<Estimate />}/>
          <Route path=":id/estimate/new" element={<NewEstimateForm />}/>
        </Route>
      </Routes>
    </UserProvider>
  )
  
}

export default App;
