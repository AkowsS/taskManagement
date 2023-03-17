import { createSlice } from '@reduxjs/toolkit';
import { Note } from 'config/types';
import { uniqueID } from '../utils/generationId';

const initialState = {
  nextId: 3,
  activeProject: 0,
  projects:[
    {id: 0, title: 'Caixa de entrada',  delet: false},
    {id: 1, title: 'Hoje', delet: false},
    {id: 2, title: 'Essa semana', delet: false},
  ],
  tasks: [] as Note[]
}

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    
    changeProject: (state, { payload }) => {
      state.activeProject = payload;
    },
    addProject: ( state, { payload } ) => {
      const newProject = { 
        id: state.nextId,
        title: payload,
        tasks: [],
        delet: true,
      };
      state.nextId += 1;
      state.projects.push(newProject);
    },
    updateProject: ( state, { payload } ) => {
      state.projects = state.projects.map( project => {
        if(project.id === payload.id){
          project.title = payload.title;
        }
        return project;
      });
    },
    removeProject: ( state, { payload } ) => {
      state.projects = state.projects.filter( project => project.id !== payload )
    },
    addTask: ( state, {payload} ) => {
      const newTask: Note = {
        id: uniqueID(),
        ...payload,
        state: "novo",
        priority: "normal",
      }
        console.log(newTask);
        state.tasks.push(newTask);
    },
    upDateTask: ( state, { payload } ) => {
      state.tasks = state.tasks.map(task => {
        if(task.id === payload.taskID){
          const newTask = {
            ...task,
            ...payload.task,
          }
          task = newTask;
        }
        return task;
      })
    },
    removeTask: ( state, { payload } ) => {
      state.tasks = state.tasks.filter(task => task.id !== payload);
    },
  },
});

export const {
  changeProject,
  addProject,
  updateProject,
  removeProject,
  addTask,
  upDateTask,
  removeTask,
} = projectSlice.actions;

export default projectSlice.reducer;