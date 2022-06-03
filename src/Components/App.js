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
import EditProjectForm from './EditProjectForm';

function App() {
  const [projects, setProjects] = useState({});
  const [editProjectForm, setEditProjectForm] = useState({});

  const addNewProject = (project) => {
    const updatedProjects = [...projects, project];
    
    setProjects(updatedProjects);
  };

  const editProject = (updatedProject) =>{
    const updatedProjectList = [...projects].map(project => {
      if(project.id === updatedProject.id){
        return updatedProject
      } else {return project}
    })
    setProjects(updatedProjectList);
  };

  const deleteProject = (deletedProject) => {
    const updatedProjectList = [...projects].map(project => project !== deletedProject);
    setProjects(updatedProjectList);
  }
  
  return (
    <UserProvider>
      <div id="appBody">
      <Routes>
        <Route path="/" element={<Login setProjects={setProjects} />} />
        <Route path="signup" element={<SignUp />}/>
        <Route path=":companyName" element={<GCUser />}>
          <Route path="portfolio" element={<Portfolio 
            projects={projects}
            setProjects={setProjects} 
            setEditProjectForm={setEditProjectForm} 
            />}/>
          <Route path="projects" element={<Projects 
            projects={projects} 
            setProjects={setProjects}
            deleteProject={deleteProject}
            />}/>
          <Route path="projects/new" element={<NewProjectForm 
            addNewProject={addNewProject} />}/>
          <Route path="project/edit" element={<EditProjectForm
          setEditProjectForm={setEditProjectForm} 
          editProjectForm={editProjectForm} 
          editProject={editProject}
          />}/>
        </Route>
      </Routes>
      </div>
    </UserProvider>
  )
  
}

export default App;
