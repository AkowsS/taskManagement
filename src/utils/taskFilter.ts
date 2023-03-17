import { Note } from "config/types";

export function taskFilter (id:number, tasks:Note[] ){
  switch(id){
    case 0:
      return tasks;
    case 1:
      return tasks.filter( task => {
        const taskData = new Date(task.startDate).getTime()
        const todayDate = new Date(getDate()).getTime()
        if(taskData === todayDate) return task;
      });
    case 2:
      return tasks.filter( task => {
        const taskData = new Date(task.startDate).getTime()
        const todayDate = new Date(getDate()).getTime()
        const weekDate = new Date(getWeekendDate()).getTime()
        if(taskData >= todayDate && taskData <= weekDate) return task;
      });
    default:
      return tasks.filter( task => task.projectID === id);
  }
};

const whenIsSaturday = () => {
  const today = new Date();
  return today.getDate() + (6 - today.getDay());
};

export const getWeekendDate = () => {
  const weekendDay = whenIsSaturday()?.toString();
  const date = getDate();
  const result = date.split("-");
  result[2] = weekendDay.length < 2 ? "0" + weekendDay : weekendDay;
  return result.join("-");
};

export const getDate = (date: Date|string = new Date()) => {
  date = new Date(date)
  return date.toISOString().slice(0, 10);
};