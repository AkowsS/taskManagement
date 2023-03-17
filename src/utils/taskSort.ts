import { Note } from "../config/types";
import { getDate } from "./taskFilter";

export const taskSort = (a: Note, b: Note) => {
  const dateA = new Date(getDate(a.startDate)).getTime();
  const dateB = new Date(getDate(b.startDate)).getTime();
  if (dateA < dateB) return -1;
  else if (dateA > dateB) return 1;
  else return 0;
};