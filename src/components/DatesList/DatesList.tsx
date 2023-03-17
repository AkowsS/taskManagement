import React from 'react';
import { Container, ButtonAddTask, DivForm, AddOrCancelTask} from './DatesList.styles';
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../store/projectSlicer"
import { RootState } from 'store';
import {TasksList} from "../TasksList";
import { taskFilter } from '../../utils/taskFilter';
import { taskSort } from '../../utils/taskSort';
import closeTask from "../../assets/icons/close.png";

export const DatesList : React.FC = () => {
    const projectID = useSelector((state:RootState) => state.project.activeProject);
    const dispatch = useDispatch();
    const [inputTitle, setInputTitle] = React.useState("");
    const [inputDescription, setInputDescription] = React.useState<string>("");
    const [inputInitialDate, setInputInitialDate] = React.useState("");
    const [inputFinalDate, setInputFinalDate] = React.useState<string>("");
    const [open, setOpen] = React.useState(false);
    const task = useSelector((state:RootState) => {
      return [...taskFilter(projectID,state.project.tasks)]?.sort(taskSort);

    });
    const newTask = (event:React.FormEvent) => {
      event.preventDefault();
      dispatch(addTask({
        projectID,
        title: inputTitle,
        description: inputDescription,
        startDate: inputInitialDate,
        dueDate: inputFinalDate,
      }));
      setInputTitle("");
      setInputDescription("");
      setInputInitialDate("");
      setInputFinalDate("");
    };
    const onAddTaskButton = () =>{
      if(open === true) {
        setOpen(false)
      }else if(open === false) {
        setOpen(true)
      }
    };
    const onInputTitleChange=(evt: React.ChangeEvent<HTMLInputElement>) => {
      setInputTitle(evt.target.value);
    };
    const onInputDescriptionChange=(evt: React.ChangeEvent<HTMLInputElement>) => {
      setInputDescription(evt.target.value);
    };
    const onChangeInitialDate = (evt: React.ChangeEvent<HTMLInputElement>) =>{
      setInputInitialDate(evt.target.value);
    };
    const onChangeFinalDate = (evt: React.ChangeEvent<HTMLInputElement>) =>{
      setInputFinalDate(evt.target.value);
    };

  return (
    <Container>
      {
        task.map(tasks => 
          <TasksList
            key={tasks.id}
            projectId={tasks.projectID}
            id={tasks.id}
            title={tasks.title}
            description={tasks.description}
            fDate={tasks.dueDate}
            iDate={tasks.startDate}
          />
        )
      }
      <DivForm >
        <form onSubmit={newTask} style={open === true?{display: "flex"}:{display:"none"}}>
          <input type="text" name="title" onChange={onInputTitleChange} placeholder={"Titulo"} value={inputTitle}/>
          <input name="description" id="campotexto" onChange={onInputDescriptionChange} placeholder={"Descrição"} value={inputDescription}/>
          <div>
            <input type="date" aria-label='data inicial' placeholder={"data "} onChange={onChangeInitialDate} value={inputInitialDate}/>
            <input type="date" aria-label='data final' onChange={onChangeFinalDate} value={inputFinalDate}/>
          </div>
          <button type='submit' onClick={onAddTaskButton}>Adicionar tarefa</button>
        </form>
      </DivForm>
      <ButtonAddTask onClick={onAddTaskButton} style={projectID === 0 || projectID === 1 || projectID == 2?{display:"none"}:{display:"block"}}><AddOrCancelTask src={closeTask} style={open?{}:{rotate:"45deg"}}/></ButtonAddTask>
    </Container>
  )
};