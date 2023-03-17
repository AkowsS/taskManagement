import React from "react";
import { Container, Menu, DivInput, AddButton, CancelButton } from "./Main.styles";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { DatesList } from "../DatesList";
import { RootState } from "store";
import { MenuItems } from "../MenuItems";
import { addProject } from "../../store/projectSlicer";
import {changeProject} from "../../store/projectSlicer";

export const Main : React.FC = () => {
  
  const[newProject, setNewProject] = React.useState(false);
  const[addProjectName, setAddProjectName] = React.useState("");
  const [inbox, today, week, ...projects] = useSelector((state:RootState) => state.project.projects);
  const dispatch = useDispatch();

  const onChangeInputProject = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setAddProjectName(evt.target.value);
  };
  const onCancelNewProject = () =>{
    setNewProject(false);
    setAddProjectName("");
  };
  const onProjectInputChange = ()=>{
    if(addProjectName === ""){
      alert("insira o nome do projeto");
      return
    };
    dispatch(addProject(addProjectName));
    onCancelNewProject();
  };
  return (
    <Container>
      <Menu>
        <ul>
          <MenuItems
            key={inbox.id}
            id={inbox.id}
            title={inbox.title}
            delet={inbox.delet}
            // quantity={inbox.tasks.length}
          />
          <MenuItems
            key={today.id}
            id={today.id}
            title={today.title}
            delet={today.delet}
            // quantity={today.tasks.length}
          />
          <MenuItems
            key={week.id}
            id={week.id}
            title={week.title}
            delet={week.delet}
            // quantity={week.tasks.length}
          />
          {
      projects.map(project =>
          <MenuItems 
            key={project.id}
            id={project.id}
            title={project.title}
            delet={project.delet}
          />
            )}
        </ul>
        <h1>
          Projects
        </h1>
        <button onClick={()=>(setNewProject(true))} style={newProject == true?{display:"none"}:{display:"block"}}><p><AddIcon/> Add Project</p></button>
        <DivInput style={newProject == true?{display:"block"}:{display:"none"}}>
          <input type="text" name="projectinputname" id="newproject" value={addProjectName} onChange={onChangeInputProject}/>
          <div>
            <AddButton onClick={()=>onProjectInputChange()}>Add</AddButton>
            <CancelButton onClick={()=>onCancelNewProject()}>Cancel</CancelButton>
          </div>
        </DivInput>
      </Menu>
        <DatesList/>
    </Container>
  );
};