import { Container, DivTask, DivForm, DeletButton, TitleTask } from "./TasksList.styles";
import React, { Fragment } from "react"
import { uniqueID } from "utils/generationId";
import { Typography } from "@mui/material";
import { changeProject, removeTask, upDateTask } from "../../store/projectSlicer";
import { useDispatch } from "react-redux";
import taskDelet from "../../assets/icons/taskDelet.png"

interface TasksListProps{
  projectId: number;
  id:number;
  title:string;
  iDate?:string;
  fDate?:string;
  description?:string;
}

export const TasksList : React.FC<TasksListProps>=({
  projectId,
  title,
  id,
  iDate,
  fDate,
  description,
}) => {
  const [inputTitle, setInputTitle] = React.useState(title);
  const [inputDescription, setInputDescription] = React.useState(description);
  const [inputInitialDate, setInputInitialDate] = React.useState(iDate);
  const [inputFinalDate, setInputFinalDate] = React.useState(fDate);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const deletButtonTask = () => { 
    if (confirm("Tem certeza que deseja apagar sua task?"))
      dispatch(removeTask(id));
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
  const newTask = (event:React.FormEvent) => {
    event.preventDefault();
    dispatch(upDateTask({
        taskID: id,
        task:{
          title: inputTitle,
          description: inputDescription,
          startDate: inputInitialDate,
          dueDate: inputFinalDate,
        },
    }));
    setOpen(false);
  };
  const editTaskButton = () =>{
    if(open === true) {
      setOpen(false)
    }else if(open === false) {
      setOpen(true)
    }
  };
  return(
    <Container >
      {
        !open?
        <div>
          <DivTask >
            <div onClick={editTaskButton}>
              <TitleTask> {title && title?.length>10?`${title?.slice(0,10)}...`:title}</TitleTask>
              <Typography> descrição: {description && description?.length>5?`${description?.slice(0,5)}...`:description}</Typography>
              <Typography> Data inicial: {iDate}</Typography>
              <Typography> Data final: {fDate} </Typography>
            </div>
            <DeletButton onClick={deletButtonTask} src={taskDelet}/>
          </DivTask>
        
        </div>
        :
        <DivForm>
          <form onSubmit={newTask}>
            <input type="text" name="title" placeholder={"Titulo"} onChange={onInputTitleChange} value={inputTitle}/>
            <input name="description" id="campotexto" placeholder={"Descrição"}onChange={onInputDescriptionChange} value={inputDescription}/>
            <div>
              <input type="date" aria-label='data inicial'onChange={onChangeInitialDate} value={inputInitialDate}/>
              <input type="date" aria-label='data final' onChange={onChangeFinalDate} value={inputFinalDate}/>
            </div>
            <button type='submit' className="editButton">Editar</button>
            <button onClick={editTaskButton}>Fechar</button>
          </form>
        </DivForm>
      }
    </Container>
  );
};